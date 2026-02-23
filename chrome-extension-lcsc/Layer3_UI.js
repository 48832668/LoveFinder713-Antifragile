/**
 * Layer3_UI.js
 * 悬浮面板UI层 - 三层架构Layer3
 * 
 * 配置常量：
 * - DEFAULT_POSITION: 面板默认位置 ('bottom-right')
 * - DEFAULT_WIDTH: 默认宽度 (400px)
 * - DEFAULT_HEIGHT: 默认高度 (300px)
 * 
 * 函数骨架：
 * - createPanel(): 创建悬浮面板DOM元素
 * - togglePanel(show): 切换显示/隐藏
 * - updatePosition(position, width, height): 更新位置和尺寸
 */

(function(global) {
  // ==================== 配置常量 ====================
  
  /** 默认面板位置 - 右下角 */
  const DEFAULT_POSITION = 'bottom-right';
  /** 默认面板宽度 (像素) */
  const DEFAULT_WIDTH = 400;
  /** 默认面板高度 (像素) */
  const DEFAULT_HEIGHT = 300;
  
  // ==================== 内部辅助函数 ====================
  
  /**
   * 将面板定位应用到指定元素
   * 支持四个象限位置: top-left, top-right, bottom-left, bottom-right
   * @param {HTMLElement} panel - 面板DOM元素
   * @param {string} position - 位置字符串
   */
  function _applyPosition(panel, position) {
    if (!panel) return;
    
    // 基本定位与尺寸
    panel.style.boxSizing = 'border-box';
    panel.style.display = panel.style.display || 'block';
    panel.style.position = 'fixed';
    panel.style.width = (panel._customWidth || DEFAULT_WIDTH) + 'px';
    
    // 清空上一次的位置设定
    panel.style.top = '';
    panel.style.bottom = '';
    panel.style.left = '';
    panel.style.right = '';
    
    // 根据 position 设置锚点
    switch (position) {
      case 'top-left':
        panel.style.top = '0';
        panel.style.left = '0';
        break;
      case 'top-right':
        panel.style.top = '0';
        panel.style.right = '0';
        break;
      case 'bottom-left':
        panel.style.bottom = '0';
        panel.style.left = '0';
        break;
      case 'bottom-right':
      default:
        panel.style.bottom = '0';
        panel.style.right = '0';
        break;
    }
  }
  
  // ==================== 公开函数 ====================
  
  /**
   * 创建Layer3悬浮面板DOM骨架
   * - 仅创建结构，不填充具体内容，便于后续自定义
   * - 默认隐藏，调用togglePanel()显示
   * @returns {HTMLElement} 创建的DOM节点
   */
  function createPanel() {
    const panel = document.createElement('div');
    panel.id = 'layer3-ui-panel';
    
    // 基本样式
    panel.style.border = '1px solid #ccc';
    panel.style.background = '#fff';
    panel.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    panel.style.overflow = 'auto';
    panel.style.padding = '8px';
    panel.style.zIndex = '10000';
    
    // 应用默认位置和尺寸
    panel._customWidth = DEFAULT_WIDTH;
    _applyPosition(panel, DEFAULT_POSITION);
    
    // 默认隐藏
    panel.style.display = 'none';
    document.body.appendChild(panel);
    return panel;
  }
  
  /**
   * 切换Layer3悬浮面板显示状态
   * - 如果面板不存在，自动创建
   * @param {boolean} [show] - 指定是否显示，不传则取反当前状态
   * @returns {string} 当前display状态 ('none' 或 'block')
   */
  function togglePanel(show) {
    let panel = document.getElementById('layer3-ui-panel');
    if (!panel) {
      panel = createPanel();
    }
    const shouldShow = typeof show === 'boolean' ? show : panel.style.display === 'none';
    panel.style.display = shouldShow ? 'block' : 'none';
    return panel.style.display;
  }
  
  /**
   * 更新Layer3悬浮面板的定位、宽度与高度
   * @param {string} [position] - 新的锚点位置
   * @param {number} [width] - 新的宽度（像素）
   * @param {number} [height] - 新的高度（像素）
   */
  function updatePosition(position = DEFAULT_POSITION, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
    let panel = document.getElementById('layer3-ui-panel');
    if (!panel) {
      panel = createPanel();
    }
    
    // 设置尺寸
    panel.style.width = width + 'px';
    panel.style.height = height + 'px';
    panel._customWidth = width;
    
    // 应用定位
    _applyPosition(panel, position);
  }
  
  // ==================== 导出全局对象 ====================
  
  global.Layer3_UI = {
    createPanel,
    togglePanel,
    updatePosition,
    // 暴露常量
    DEFAULT_POSITION,
    DEFAULT_WIDTH,
    DEFAULT_HEIGHT
  };
  
})(typeof window !== 'undefined' ? window : this);
