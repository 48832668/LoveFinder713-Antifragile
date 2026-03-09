/**
 * 总线助手 - 类型定义
 * 
 * 定义总线相关的 TypeScript 接口和类型
 */

/**
 * 前缀黑名单 - 禁止使用的前缀
 * 这些前缀保留用于特殊用途（如电源网络）
 */
export const PREFIX_BLACKLIST = ['PW'] as const;

/**
 * 总线信号配置
 */
export interface BusSignalConfig {
	/** 信号名称 (SDA, SCL, TX, RX...) */
	name: string;
	/** 信号描述 */
	description: string;
	/** 信号方向，用于网络端口 */
	direction?: 'IN' | 'OUT' | 'BI';
	/** 是否可选信号 */
	optional?: boolean;
}

/**
 * 总线类型配置
 */
export interface BusTypeConfig {
	/** 总线类型标识 (IIC, SPI, UART...) - 内部使用 */
	type: string;
	/** 显示名称 (I²C, SPI, UART...) - UI 显示 */
	displayName: string;
	/** 总线预设名称 - 在创建总线下拉列表中显示的名称，用于用户识别 */
	presetName: string;
	/** 总线网络标签标识名 - 用于生成网络标签的标识符 */
	labelId: string;
	/** 网络前缀 */
	prefix: string;
	/** 信号列表 */
	signals: BusSignalConfig[];
	/** 最大实例数 */
	maxInstances?: number;
	/** 图标（可选，用于 UI） */
	icon?: string;
}

/**
 * 总线实例
 */
export interface BusInstance {
	/** 总线类型 */
	busType: string;
	/** 实例序号 */
	index: number;
	/** 网络名称列表 */
	nets: string[];
	/** 所属图页 */
	schematicPageUuid?: string;
}

/**
 * 总线统计
 */
export interface BusStatistics {
	/** 各类型总线数量统计 */
	[type: string]: number;
}

/**
 * 创建总线选项
 */
export interface CreateBusOptions {
	/** 总线类型 */
	busType: string;
	/** 实例序号 */
	index: number;
	/** X 坐标 */
	x: number;
	/** Y 坐标 */
	y: number;
	/** 创建类型：netlabel(网络标签) 或 netport(网络端口) */
	createType?: 'netlabel' | 'netport';
	/** 旋转角度 */
	rotation?: number;
	/** 间距（垂直方向） */
	spacing?: number;
}

/**
 * 扫描结果
 */
export interface ScanResult {
	/** 扫描到的总线实例 */
	buses: BusInstance[];
	/** 无法识别的网络 */
	unknownNets: string[];
	/** 总线统计 */
	statistics: BusStatistics;
}
