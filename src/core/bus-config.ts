/**
 * 总线助手 - 总线配置定义
 *
 * 定义所有支持的总线类型及其信号配置
 * 每种总线都有严格的信号定义，确保创建的网络符合规范
 */
import type { BusTypeConfig } from './types';
import { PREFIX_BLACKLIST } from './types';

/**
 * 前缀黑名单（从 types 导入）
 * 禁止使用这些前缀作为全局前缀或总线自定义前缀
 */
export { PREFIX_BLACKLIST };

/**
 * 检查前缀是否在黑名单中
 */
export function isPrefixBlacklisted(prefix: string): boolean {
	const normalized = prefix.toUpperCase().trim();
	return PREFIX_BLACKLIST.includes(normalized as (typeof PREFIX_BLACKLIST)[number]);
}

/**
 * 获取前缀黑名单的提示消息
 */
export function getBlacklistMessage(): string {
	return `禁止使用的前缀：${PREFIX_BLACKLIST.join('、')}（保留用于特殊用途）`;
}

/**
 * 总线配置列表
 *
 * 添加新总线类型时，只需在此数组中添加配置即可
 *
 * 字段说明：
 * - type: 内部类型标识
 * - displayName: UI 显示的名称
 * - presetName: 总线预设名称（在下拉列表中显示，用于用户识别）
 * - labelId: 总线网络标签标识名（用于生成网络标签）
 * - prefix: 自定义前缀（留空用全局前缀）
 * - signals: 信号列表
 */
export const BUS_CONFIGS: BusTypeConfig[] = [
	// ==================== I²C (I2C) ====================
	{
		type: 'IIC',
		displayName: 'I²C (I2C)',
		presetName: 'IIC',
		labelId: 'IIC',
		prefix: 'IIC',
		signals: [
			{ name: 'SDA', description: '数据线', direction: 'BI' },
			{ name: 'SCL', description: '时钟线', direction: 'OUT' },
		],
		maxInstances: 4,
		icon: 'bi-cpu',
	},

	// ==================== SPI ====================
	{
		type: 'SPI',
		displayName: 'SPI',
		presetName: 'SPI',
		labelId: 'SPI',
		prefix: 'SPI',
		signals: [
			{ name: 'MOSI', description: '主出从入', direction: 'OUT' },
			{ name: 'MISO', description: '主入从出', direction: 'IN' },
			{ name: 'SCK', description: '时钟', direction: 'OUT' },
			{ name: 'CS', description: '片选', direction: 'OUT' },
		],
		maxInstances: 4,
		icon: 'bi-arrow-left-right',
	},

	// ==================== UART / USART ====================
	{
		type: 'UART',
		displayName: 'UART/USART',
		presetName: 'UART',
		labelId: 'UART',
		prefix: 'UART',
		signals: [
			{ name: 'TX', description: '发送', direction: 'OUT' },
			{ name: 'RX', description: '接收', direction: 'IN' },
		],
		maxInstances: 8,
		icon: 'bi-uart',
	},

	// ==================== CAN ====================
	{
		type: 'CAN',
		displayName: 'CAN',
		presetName: 'CAN',
		labelId: 'CAN',
		prefix: 'CAN',
		signals: [
			{ name: 'CANH', description: 'CAN 高', direction: 'BI' },
			{ name: 'CANL', description: 'CAN 低', direction: 'BI' },
		],
		maxInstances: 2,
		icon: 'bi-diagram-3',
	},

	// ==================== SDIO ====================
	{
		type: 'SDIO',
		displayName: 'SDIO',
		presetName: 'SDIO',
		labelId: 'SDIO',
		prefix: 'SDIO',
		signals: [
			{ name: 'CLK', description: '时钟', direction: 'OUT' },
			{ name: 'CMD', description: '命令', direction: 'BI' },
			{ name: 'D0', description: '数据 0', direction: 'BI' },
			{ name: 'D1', description: '数据 1', direction: 'BI', optional: true },
			{ name: 'D2', description: '数据 2', direction: 'BI', optional: true },
			{ name: 'D3', description: '数据 3', direction: 'BI', optional: true },
		],
		maxInstances: 2,
		icon: 'bi-sd-card',
	},

	// ==================== SMBus ====================
	{
		type: 'SMBUS',
		displayName: 'SMBus',
		presetName: 'SMBUS',
		labelId: 'SMBUS',
		prefix: 'SMBUS',
		signals: [
			{ name: 'SDA', description: '数据线', direction: 'BI' },
			{ name: 'SCL', description: '时钟线', direction: 'OUT' },
		],
		maxInstances: 2,
		icon: 'bi-thermometer-half',
	},

	// ==================== PMBus ====================
	{
		type: 'PMBUS',
		displayName: 'PMBus',
		presetName: 'PMBUS',
		labelId: 'PMBUS',
		prefix: 'PMBUS',
		signals: [
			{ name: 'SDA', description: '数据线', direction: 'BI' },
			{ name: 'SCL', description: '时钟线', direction: 'OUT' },
			{ name: 'ALERT', description: '警报', direction: 'IN', optional: true },
		],
		maxInstances: 2,
		icon: 'bi-lightning-charge',
	},
];

/**
 * 根据类型获取总线配置
 */
export function getBusConfig(busType: string): BusTypeConfig | undefined {
	return BUS_CONFIGS.find((config) => config.type === busType);
}

/**
 * 获取所有总线类型列表（返回 presetName 用于 UI 显示）
 */
export function getAllBusTypes(): string[] {
	return BUS_CONFIGS.map((config) => config.presetName);
}

/**
 * 根据 presetName 获取总线配置
 */
export function getBusConfigByPresetName(presetName: string): BusTypeConfig | undefined {
	return BUS_CONFIGS.find((config) => config.presetName === presetName);
}

/**
 * 获取总线显示名称
 */
export function getBusDisplayName(busType: string): string {
	const config = getBusConfig(busType);
	return config ? config.displayName : busType;
}

/**
 * 获取总线预设名称
 */
export function getBusPresetName(busType: string): string {
	const config = getBusConfig(busType);
	return config ? config.presetName : busType;
}

/**
 * 获取总线网络标签标识名
 */
export function getBusLabelId(busType: string): string {
	const config = getBusConfig(busType);
	return config ? config.labelId : busType;
}

/**
 * 获取总线前缀
 */
export function getBusPrefix(busType: string): string {
	const config = getBusConfig(busType);
	return config ? config.prefix : busType;
}

/**
 * 获取总线最大实例数
 */
export function getBusMaxInstances(busType: string): number {
	const config = getBusConfig(busType);
	return config?.maxInstances || 8;
}

/**
 * 生成网络名称
 * 格式：\{全局前缀\}_\{标识名\}\{序号\}_\{信号名\}
 * 例如：SYS_IIC1_SDA, SYS_SPI2_MOSI
 */
export function generateNetName(busType: string, index: number, signalName: string, globalPrefix = 'SYS'): string {
	const config = getBusConfig(busType);
	const labelId = config ? config.labelId : busType;
	return `${globalPrefix}_${labelId}${index}_${signalName}`;
}

/**
 * 生成总线所有信号的网络名称
 */
export function generateAllNetNames(busType: string, index: number, globalPrefix = 'SYS'): string[] {
	const config = getBusConfig(busType);
	if (!config) return [];

	return config.signals.map((signal) => generateNetName(busType, index, signal.name, globalPrefix));
}
