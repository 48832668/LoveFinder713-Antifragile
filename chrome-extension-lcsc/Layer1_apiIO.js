// Layer1_apiIO.js
// Chrome扩展-lcsc的Layer1 API IO交互骨架框架。
// 本文件提供：
// - API_BASE_URL 配置（带默认值）
// - addComp() 函数骨架及详细文档注释
// - 无已实现的业务逻辑；仅作为未来扩展的占位符

// API基础URL（默认值）
// 注意：在浏览器/Chrome扩展环境中，可以通过在导入本模块前
// 为 window.LAYER1_API_BASE_URL 赋值来全局覆盖此值。
export let API_BASE_URL = 'http://localhost:11451';

// 如果存在全局变量则允许运行时覆盖（在非浏览器环境中安全无效）
try {
  // eslint-disable-next-line no-undef
  if (typeof window !== 'undefined' && window.LAYER1_API_BASE_URL) {
    API_BASE_URL = window.LAYER1_API_BASE_URL;
  }
} catch (e) {
  // 忽略：环境可能不是浏览器
}

/**
 * addComp - 向Layer1 API IO管道添加组件的骨架函数。
 * 这是一个框架存根。尚未实现实际逻辑。
 *
 * 预期行为（将在未来迭代中实现）：
 * 1) 验证输入：
 *    - comp 必须是一个对象
 *    - comp.name 必须是一个非空字符串
 *    - comp.config（可选）如果提供则必须是一个对象
 * 2) 规范化并合并默认配置到 comp.config
 * 3) 准备使用 API_BASE_URL 的必要HTTP连接
 * 4) 在内部注册表中注册组件以进行生命周期管理
 * 5) 返回一个 Promise，在骨架被成功调用时 resolve
 * 6) 为无效输入或配置错误提供清晰的错误消息
 *
 * @param {Object} comp - 要添加的组件描述符
 * @param {string} comp.name - 可读的组件名称（必需）
 * @param {Object} [comp.config] - 可选配置对象
 * @returns {Promise<void>} 骨架完成后 resolve 的 Promise
 */
export function addComp(comp) {
  // 注意：此函数有意作为一个无操作的存根。
  // 它记录预期步骤并为未来实现提供钩子。
  // 1) 验证输入（如上述JSDoc中所详述）
  // 2) 规范化配置并准备连接（此处为无操作占位符）
  // 3) 在内部注册表中注册（未实现）
  // 4) 返回一个已解决的 Promise 以保持下游代码中的异步契约
  // 请勿在此存根中尝试网络调用或副作用。

  // 基本保护以反映意图而不执行实际工作
  if (comp == null || typeof comp !== 'object') {
    // 在实际实现中，将抛出带有类型信息的错误。
    return Promise.reject(new Error('addComp: "comp" 必须是一个非空对象。'));
  }
  if (typeof comp.name !== 'string' || comp.name.trim().length === 0) {
    return Promise.reject(new Error('addComp: "comp.name" 必须是一个非空字符串。'));
  }
  // 可选配置结构检查（此存根中不做深度验证）
  if (comp.config != null && typeof comp.config !== 'object') {
    return Promise.reject(new Error('addComp: "comp.config" 如果提供则必须是一个对象。'));
  }

  // 存根完成，无副作用。
  return Promise.resolve();
}
