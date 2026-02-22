/**
 * Content Script - Li元素计数器
 * 
 * 功能说明：
 * 1. 在页面右下角创建悬浮UI，显示li元素数量
 * 2. 使用MutationObserver实时监听DOM变化
 * 3. 当li数量变化时更新UI并发送通知
 * 4. 使用Shadow DOM隔离样式，避免与页面冲突
 * 
 * 目标DOM结构：.ant-spin-container > ul > li
 */

'use strict';

// ============================================================
// 全局变量
// ============================================================

// 悬浮UI容器ID
const FLOATING_UI_ID = 'li-counter-floating-ui';

// 上一次的li数量，用于检测变化
let lastLiCount = null;

// 悬浮UI元素引用
let floatingUI = null;

// 数量显示元素引用
let countDisplay = null;

// 刷新按钮元素引用
let refreshButton = null;

// MutationObserver实例
let observer = null;

// ============================================================
// 1) 创建悬浮UI（使用Shadow DOM隔离样式）
// ============================================================

/**
 * 创建悬浮UI容器
 * 使用Shadow DOM确保样式不会与页面冲突
 */
function createFloatingUI() {
  // 如果已存在，直接返回
  if (document.getElementById(FLOATING_UI_ID)) {
    return document.getElementById(FLOATING_UI_ID);
  }

  // 创建容器元素
  const container = document.createElement('div');
  container.id = FLOATING_UI_ID;
  
  // 附加Shadow DOM以隔离样式
  const shadow = container.attachShadow({ mode: 'open' });
  
  // 注入样式
  const style = document.createElement('style');
  style.textContent = `
    /* 悬浮容器样式 */
    :host {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    /* 主容器 */
    .li-counter-container {
      background: #ffffff;
      border: 1px solid #e8e8e8;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      padding: 12px 16px;
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 120px;
    }
    
    /* 数量显示区域 */
    .count-display {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .count-label {
      font-size: 12px;
      color: #8c8c8c;
      margin-bottom: 2px;
    }
    
    .count-value {
      font-size: 24px;
      font-weight: 600;
      color: #1890ff;
    }
    
    .count-value.error {
      color: #ff4d4f;
    }
    
    /* 刷新按钮 */
    .refresh-btn {
      background: #1890ff;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      padding: 6px 12px;
      font-size: 12px;
      cursor: pointer;
      transition: background 0.3s;
    }
    
    .refresh-btn:hover {
      background: #40a9ff;
    }
    
    .refresh-btn:active {
      background: #096dd9;
    }
  `;
  
  // 创建HTML结构
  const html = document.createElement('div');
  html.className = 'li-counter-container';
  html.innerHTML = `
    <div class="count-display">
      <span class="count-label">Li数量</span>
      <span class="count-value" id="count-value">--</span>
    </div>
    <button class="refresh-btn" id="refresh-btn" title="重新计数">刷新</button>
  `;
  
  // 将样式和HTML添加到Shadow DOM
  shadow.appendChild(style);
  shadow.appendChild(html);
  
  // 添加到页面
  document.body.appendChild(container);
  
  // 保存元素引用
  floatingUI = container;
  countDisplay = shadow.getElementById('count-value');
  refreshButton = shadow.getElementById('refresh-btn');
  
  // 绑定刷新按钮点击事件
  refreshButton.addEventListener('click', handleRefreshClick);
  
  console.log('[Li计数器] 悬浮UI已创建');
  return container;
}

// ============================================================
// 2) DOM查询逻辑
// ============================================================

/**
 * 查询并计数li元素
 * 目标结构：.ant-spin-container > ul > li
 * 
 * @returns {object} 包含count和error属性的对象
 */
function countLiElements() {
  try {
    // 查找.ant-spin-container容器
    const container = document.querySelector('.ant-spin-container');
    
    if (!container) {
      return {
        count: null,
        error: '容器不存在',
        message: '未找到 .ant-spin-container 容器'
      };
    }
    
    // 查找容器内的ul元素（直接子元素）
    const ul = container.querySelector(':scope > ul');
    
    if (!ul) {
      return {
        count: null,
        error: '列表不存在',
        message: '容器内未找到 ul 元素'
      };
    }
    
    // 查找ul内的li元素（直接子元素）
    const liElements = ul.querySelectorAll(':scope > li');
    const count = liElements.length;
    
    return {
      count: count,
      error: null,
      message: `找到 ${count} 个 li 元素`
    };
  } catch (err) {
    console.error('[Li计数器] 计数时出错：', err);
    return {
      count: null,
      error: '查询错误',
      message: err.message
    };
  }
}

/**
 * 更新UI显示
 * 
 * @param {object} result - countLiElements的返回结果
 */
function updateDisplay(result) {
  if (!countDisplay) return;
  
  if (result.error) {
    countDisplay.textContent = 'N/A';
    countDisplay.classList.add('error');
    countDisplay.title = result.message;
  } else {
    countDisplay.textContent = result.count;
    countDisplay.classList.remove('error');
    countDisplay.title = result.message;
  }
}

// ============================================================
// 3) MutationObserver监听
// ============================================================

/**
 * 创建MutationObserver监听DOM变化
 */
function createObserver() {
  // 如果已存在观察者，先断开
  if (observer) {
    observer.disconnect();
  }
  
  // 创建MutationObserver
  observer = new MutationObserver((mutations) => {
    // 检查变化是否影响li元素
    let shouldUpdate = false;
    
    for (const mutation of mutations) {
      // 检查是否是子元素变化
      if (mutation.type === 'childList') {
        shouldUpdate = true;
        break;
      }
    }
    
    if (shouldUpdate) {
      // 重新计数并检查变化
      const result = countLiElements();
      const newCount = result.count;
      
      // 检查数量是否变化
      if (newCount !== lastLiCount) {
        const oldCount = lastLiCount;
        lastLiCount = newCount;
        
        // 更新UI显示
        updateDisplay(result);
        
        // 发送通知消息到background
        if (newCount !== null) {
          sendCountChangedMessage(newCount, oldCount);
        }
        
        console.log(`[Li计数器] 数量变化: ${oldCount} -> ${newCount}`);
      }
    }
  });
  
  // 查找目标容器
  const container = document.querySelector('.ant-spin-container');
  
  if (container) {
    // 配置观察选项
    const config = {
      childList: true,      // 观察子元素的添加/删除
      subtree: true,        // 观察所有后代元素
      attributes: false,    // 不观察属性变化
      characterData: false  // 不观察文本变化
    };
    
    // 开始观察
    observer.observe(container, config);
    console.log('[Li计数器] MutationObserver已启动');
  } else {
    console.warn('[Li计数器] 未找到目标容器，无法启动观察');
  }
}

// ============================================================
// 4) 消息通信
// ============================================================

/**
 * 发送li数量变化消息到background
 * 
 * @param {number} newCount - 新的数量
 * @param {number|null} oldCount - 旧的数量
 */
function sendCountChangedMessage(newCount, oldCount) {
  try {
    chrome.runtime.sendMessage({
      type: 'li_count_changed',
      count: newCount,
      oldCount: oldCount,
      url: window.location.href,
      timestamp: Date.now()
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.warn('[Li计数器] 发送消息失败:', chrome.runtime.lastError);
      } else {
        console.log('[Li计数器] 消息已发送，响应:', response);
      }
    });
  } catch (err) {
    console.error('[Li计数器] 发送消息时出错:', err);
  }
}

/**
 * 处理刷新按钮点击
 */
function handleRefreshClick() {
  console.log('[Li计数器] 手动刷新');
  
  // 重新计数
  const result = countLiElements();
  lastLiCount = result.count;
  
  // 更新显示
  updateDisplay(result);
  
  // 添加按钮点击动画效果
  if (refreshButton) {
    refreshButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
      refreshButton.style.transform = 'scale(1)';
    }, 100);
  }
}

/**
 * 监听来自background/popup的消息
 */
function setupMessageListener() {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('[Li计数器] 收到消息:', message);
    
    if (!message || typeof message.type !== 'string') {
      sendResponse({ error: 'Invalid message format' });
      return true;
    }
    
    switch (message.type) {
      case 'get_count': {
        // 返回当前计数
        const result = countLiElements();
        sendResponse({
          count: result.count,
          error: result.error,
          url: window.location.href
        });
        break;
      }
        
      case 'refresh': {
        // 手动刷新计数
        handleRefreshClick();
        sendResponse({ status: 'refreshed' });
        break;
      }
        
      case 'config_updated': {
        // 配置更新通知（可用于重新检查URL匹配）
        console.log('[Li计数器] 配置已更新');
        sendResponse({ status: 'acknowledged' });
        break;
      }
        
      default:
        sendResponse({ error: 'Unknown message type' });
    }
    
    return true;
  });
}

// ============================================================
// 5) URL匹配检查
// ============================================================

/**
 * 检查当前URL是否匹配配置的URL模式
 * 
 * @param {Array} config - URL配置数组
 * @returns {boolean} 是否匹配
 */
function checkUrlMatch(config) {
  if (!Array.isArray(config) || config.length === 0) {
    return false;
  }
  
  const currentUrl = window.location.href;
  
  for (const item of config) {
    if (!item.enabled) continue;
    
    // 将通配符模式转换为正则表达式
    const pattern = item.pattern || item.url;
    const regexPattern = pattern
      .replace(/[.+^${}()|[\]\\]/g, '\\$&')  // 转义特殊字符
      .replace(/\*/g, '.*');                   // 将*转换为.*
    
    const regex = new RegExp(`^${regexPattern}$`, 'i');
    
    if (regex.test(currentUrl)) {
      console.log(`[Li计数器] URL匹配成功: ${pattern}`);
      return true;
    }
  }
  
  return false;
}

/**
 * 从background获取配置并检查URL匹配
 */
async function checkConfigAndInit() {
  try {
    // 获取配置
    chrome.runtime.sendMessage({ type: 'get_config' }, (response) => {
      if (chrome.runtime.lastError) {
        console.warn('[Li计数器] 获取配置失败:', chrome.runtime.lastError);
        // 配置获取失败时也初始化（允许手动使用）
        initialize();
        return;
      }
      
      const config = response?.config || [];
      
      // 检查URL是否匹配
      // 如果配置为空，默认初始化（方便用户测试）
      if (config.length === 0 || checkUrlMatch(config)) {
        console.log('[Li计数器] 初始化计数器');
        initialize();
      } else {
        console.log('[Li计数器] URL不匹配，跳过初始化');
      }
    });
  } catch (err) {
    console.error('[Li计数器] 检查配置时出错:', err);
    // 出错时也初始化
    initialize();
  }
}

// ============================================================
// 6) 初始化
// ============================================================

/**
 * 初始化计数器
 */
function initialize() {
  // 创建悬浮UI
  createFloatingUI();
  
  // 设置消息监听
  setupMessageListener();
  
  // 初始计数
  const result = countLiElements();
  lastLiCount = result.count;
  updateDisplay(result);
  
  // 启动MutationObserver
  createObserver();
  
  console.log('[Li计数器] 初始化完成');
}

// ============================================================
// 入口：DOM加载完成后初始化
// ============================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkConfigAndInit);
} else {
  checkConfigAndInit();
}

// 页面卸载时清理
window.addEventListener('unload', () => {
  if (observer) {
    observer.disconnect();
  }
});
