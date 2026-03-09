/**
 * 单片机总线助手 - 入口文件
 *
 * 功能：
 * - 快速创建标准总线网络标签
 * - 扫描已有总线网络
 * - 总线统计和管理
 *
 * 支持总线类型：I²C, SPI, UART, CAN, SDIO, SMBus, PMBus
 *
 * 如需了解更多开发细节，请阅读：
 * https://prodocs.lceda.cn/cn/api/guide/
 */

// 导出前缀黑名单相关工具
export { PREFIX_BLACKLIST, isPrefixBlacklisted, getBlacklistMessage } from './core/bus-config';

/**
 * 插件激活函数
 */
export function activate(status?: 'onStartupFinished', arg?: string): void {
	console.log('[总线助手] 插件激活，status:', status, 'arg:', arg);
}

// 总线配置
const BUS_CONFIGS = [
	{ type: 'IIC', name: 'I²C', prefix: 'IIC', signals: ['SDA', 'SCL'], color: '#3b82f6' },
	{ type: 'SPI', name: 'SPI', prefix: 'SPI', signals: ['MOSI', 'MISO', 'SCK', 'CS'], color: '#10b981' },
	{ type: 'UART', name: 'UART', prefix: 'UART', signals: ['TX', 'RX'], color: '#f59e0b' },
	{ type: 'CAN', name: 'CAN', prefix: 'CAN', signals: ['H', 'L'], color: '#ef4444' },
	{ type: 'SDIO', name: 'SDIO', prefix: 'SDIO', signals: ['CLK', 'CMD', 'D0', 'D1', 'D2', 'D3'], color: '#8b5cf6' },
	{ type: 'SMBUS', name: 'SMBus', prefix: 'SMBUS', signals: ['SDA', 'SCL'], color: '#06b6d4' },
	{ type: 'PMBUS', name: 'PMBus', prefix: 'PMBUS', signals: ['SDA', 'SCL'], color: '#ec4899' }
];

/**
 * 打开总线助手面板
 */
export function openBusHelper(): void {
	eda.sys_IFrame.openIFrame(
		'/iframe/index.html',
		400,   // 宽度
		650,   // 高度
		'mcu-bus-helper-panel',
		{
			maximizeButton: true,
			minimizeButton: true,
			grayscaleMask: false,
		},
	);
}

/**
 * 打开配置设置面板
 */
export function openSettings(): void {
	eda.sys_IFrame.openIFrame(
		'/iframe/settings.html',
		450,   // 宽度
		550,   // 高度
		'mcu-bus-settings-panel',
		{
			maximizeButton: false,
			minimizeButton: false,
			grayscaleMask: true,
		},
	);
}
