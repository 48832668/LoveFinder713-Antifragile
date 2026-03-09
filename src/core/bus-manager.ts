/**
 * 总线助手 - 总线管理器
 *
 * 提供总线的创建、扫描、统计等核心功能
 */

import type { BusInstance, BusStatistics, ScanResult, CreateBusOptions } from './types';
import { BUS_CONFIGS, getBusConfig, getBusPrefix, generateNetName, getBusMaxInstances, isPrefixBlacklisted, getBlacklistMessage, getBusLabelId } from './bus-config';

/**
 * 总线管理器类
 */
export class BusManager {
	/** 缓存的总线实例 */
	private busCache: Map<string, BusInstance> = new Map();

	/** 缓存时间 */
	private cacheTime: number = 0;

	/** 缓存有效期（毫秒） */
	private cacheTTL: number = 5000;

	/**
	 * 扫描原理图中已有的总线网络
	 *
	 * 通过解析网络标签名称来识别总线实例
	 * 支持格式：{前缀}_{标识名}{序号}_{信号名}
	 */
	async scanExistingBuses(): Promise<ScanResult> {
		const buses: BusInstance[] = [];
		const unknownNets: string[] = [];
		const statistics: BusStatistics = {};

		try {
			// 获取所有网络标签
			// NET_LABEL 类型对应网络标签图元
			const netLabels = await eda.sch_PrimitiveComponent.getAll(
				ESCH_PrimitiveComponentType.NET_LABEL,
				true, // 所有图页
			);

			if (!netLabels || netLabels.length === 0) {
				return { buses, unknownNets, statistics };
			}

			// 用于临时存储识别到的总线
			const busMap = new Map<string, BusInstance>();

			// 遍历所有网络标签
			for (const label of netLabels) {
				const netName = label.name || '';

				// 尝试解析网络名称
				const parsed = this.parseNetName(netName);

				if (parsed) {
					// 成功解析，添加到对应总线实例
					const key = `${parsed.busType}_${parsed.index}`;

					if (!busMap.has(key)) {
						busMap.set(key, {
							busType: parsed.busType,
							index: parsed.index,
							nets: [],
							schematicPageUuid: label.schematicPageUuid,
						});
					}

					const busInstance = busMap.get(key)!;
					if (!busInstance.nets.includes(netName)) {
						busInstance.nets.push(netName);
					}
				} else if (netName.startsWith('SYS_')) {
					// 以 SYS_开头但无法识别的网络
					unknownNets.push(netName);
				}
			}

			// 转换为数组并计算统计
			busMap.forEach((bus) => {
				buses.push(bus);
				statistics[bus.busType] = (statistics[bus.busType] || 0) + 1;
			});

			// 按类型和序号排序
			buses.sort((a, b) => {
				if (a.busType !== b.busType) {
					return a.busType.localeCompare(b.busType);
				}
				return a.index - b.index;
			});

			// 更新缓存
			this.busCache.clear();
			buses.forEach((bus) => {
				this.busCache.set(`${bus.busType}_${bus.index}`, bus);
			});
			this.cacheTime = Date.now();

		} catch (err) {
			console.error('[总线助手] 扫描总线失败:', err);
		}

		return { buses, unknownNets, statistics };
	}

	/**
	 * 解析网络名称
	 *
	 * 格式：{前缀}_{标识名}{序号}_{信号名}
	 * 例如：SYS_IIC1_SDA -> { busType: 'IIC', index: 1, signal: 'SDA' }
	 */
	private parseNetName(netName: string): { busType: string; index: number; signal: string } | null {
		// 匹配格式：XXX_YYYN_SIGNAL
		const match = netName.match(/^([A-Z]+)_([A-Z]+)(\d+)_([A-Z0-9]+)$/);

		if (!match) {
			return null;
		}

		const prefix = match[1];
		const labelId = match[2];
		const index = parseInt(match[3], 10);
		const signal = match[4];

		// 查找对应的总线配置（通过 labelId 匹配）
		const busConfig = BUS_CONFIGS.find((config) => config.labelId === labelId);

		if (!busConfig) {
			return null;
		}

		// 验证信号是否属于该总线
		const signalConfig = busConfig.signals.find((s) => s.name === signal);
		if (!signalConfig) {
			return null;
		}

		return {
			busType: busConfig.type,
			index,
			signal,
		};
	}

	/**
	 * 获取总线统计信息
	 */
	async getBusStatistics(): Promise<BusStatistics> {
		// 检查缓存是否有效
		if (Date.now() - this.cacheTime < this.cacheTTL && this.busCache.size > 0) {
			const stats: BusStatistics = {};
			this.busCache.forEach((bus) => {
				stats[bus.busType] = (stats[bus.busType] || 0) + 1;
			});
			return stats;
		}

		// 重新扫描
		const result = await this.scanExistingBuses();
		return result.statistics;
	}

	/**
	 * 获取下一个可用的总线序号
	 */
	async getNextAvailableIndex(busType: string): Promise<number> {
		const stats = await this.scanExistingBuses();
		const maxInstances = getBusMaxInstances(busType);

		// 找到已使用的序号
		const usedIndices = new Set<number>();
		this.busCache.forEach((bus) => {
			if (bus.busType === busType) {
				usedIndices.add(bus.index);
			}
		});

		// 找到第一个未使用的序号
		for (let i = 1; i <= maxInstances; i++) {
			if (!usedIndices.has(i)) {
				return i;
			}
		}

		// 所有序号都已使用，返回最大值 +1
		return maxInstances + 1;
	}

	/**
	 * 检查总线实例是否已存在
	 */
	async isBusExists(busType: string, index: number): Promise<boolean> {
		await this.scanExistingBuses();
		return this.busCache.has(`${busType}_${index}`);
	}

	/**
	 * 验证前缀是否合法（不在黑名单中）
	 */
	validatePrefix(prefix: string): { valid: boolean; message: string } {
		if (isPrefixBlacklisted(prefix)) {
			return {
				valid: false,
				message: `前缀 "${prefix}" 已被禁用，${getBlacklistMessage()}`,
			};
		}
		return { valid: true, message: '' };
	}

	/**
	 * 创建总线网络标签
	 *
	 * 注意：由于 API 限制，此方法返回网络名称列表，
	 * 实际创建需要用户在界面上点击放置
	 */
	async createBusNetwork(options: CreateBusOptions & { globalPrefix?: string }): Promise<{
		success: boolean;
		netNames: string[];
		message: string;
	}> {
		const { busType, index, createType = 'netlabel', globalPrefix = 'SYS' } = options;

		// 验证总线类型
		const config = getBusConfig(busType);
		if (!config) {
			return {
				success: false,
				netNames: [],
				message: `未知的总线类型：${busType}`,
			};
		}

		// 验证总线前缀是否在黑名单中
		const prefixValidation = this.validatePrefix(config.prefix);
		if (!prefixValidation.valid) {
			return {
				success: false,
				netNames: [],
				message: prefixValidation.message,
			};
		}

		// 检查是否已存在
		const exists = await this.isBusExists(busType, index);
		if (exists) {
			return {
				success: false,
				netNames: [],
				message: `${config.displayName}${index} 已存在`,
			};
		}

		// 生成网络名称（使用 labelId）
		const netNames = config.signals
			.filter((s) => !s.optional)
			.map((signal) => generateNetName(busType, index, signal.name, globalPrefix));

		return {
			success: true,
			netNames,
			message: `准备创建 ${config.displayName}${index}`,
		};
	}

	/**
	 * 获取总线配置列表
	 */
	getBusConfigs() {
		return BUS_CONFIGS;
	}

	/**
	 * 清除缓存
	 */
	clearCache(): void {
		this.busCache.clear();
		this.cacheTime = 0;
	}
}

// 导出单例
export const busManager = new BusManager();
