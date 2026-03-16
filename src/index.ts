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

/**
 * 打开总线助手面板
 */
export function openBusHelper(): void {
	eda.sys_IFrame.openIFrame(
		'/iframe/index.html',
		400, // 宽度
		650, // 高度
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
		450, // 宽度
		550, // 高度
		'mcu-bus-settings-panel',
		{
			maximizeButton: false,
			minimizeButton: false,
			grayscaleMask: true,
		},
	);
}
