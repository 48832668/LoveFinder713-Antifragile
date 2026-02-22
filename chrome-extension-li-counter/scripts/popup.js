/**
 * Popup JavaScript - Li元素计数器配置界面
 * 
 * 功能说明：
 * 1. 从storage加载已配置的URL列表
 * 2. 支持添加、删除、启用/禁用URL
 * 3. 保存配置到storage
 * 4. 与background通信
 */

'use strict';

// ============================================================
// DOM元素引用
// ============================================================

// 输入区域
const urlInput = document.getElementById('url-input');
const addBtn = document.getElementById('add-btn');

// URL列表区域
const urlList = document.getElementById('url-list');
const urlCount = document.getElementById('url-count');
const emptyState = document.getElementById('empty-state');

// 操作按钮
const clearAllBtn = document.getElementById('clear-all-btn');
const saveBtn = document.getElementById('save-btn');

// Toast提示
const toast = document.getElementById('toast');

// ============================================================
// 全局状态
// ============================================================

// 当前配置的URL列表
let config = [];

// ============================================================
// 工具函数
// ============================================================

/**
 * 显示Toast提示
 * 
 * @param {string} message - 提示信息
 * @param {string} type - 类型：'success' | 'error' | ''
 */
function showToast(message, type = '') {
  toast.textContent = message;
  toast.className = 'toast show ' + type;
  
  setTimeout(() => {
    toast.className = 'toast';
  }, 2000);
}

/**
 * 生成唯一ID
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * 验证URL格式
 * 
 * @param {string} url - 要验证的URL
 * @returns {boolean} 是否有效
 */
function isValidUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }
  
  // 基本格式检查
  const trimmed = url.trim();
  if (trimmed.length === 0) {
    return false;
  }
  
  // 支持通配符的URL验证
  // 将*替换为占位符进行验证
  const testUrl = trimmed.replace(/\*/g, 'test');
  
  try {
    new URL(testUrl);
    return true;
  } catch {
    return false;
  }
}

/**
 * 从URL生成匹配模式
 * 
 * @param {string} url - 用户输入的URL
 * @returns {string} 匹配模式
 */
function generatePattern(url) {
  const trimmed = url.trim();
  
  // 如果已经包含通配符，直接返回
  if (trimmed.includes('*')) {
    return trimmed;
  }
  
  // 否则添加 /* 以匹配所有路径
  try {
    const urlObj = new URL(trimmed);
    return urlObj.origin + '/*';
  } catch {
    return trimmed + '*';
  }
}

// ============================================================
// 配置管理
// ============================================================

/**
 * 从storage加载配置
 */
async function loadConfig() {
  try {
    const response = await chrome.runtime.sendMessage({ type: 'get_config' });
    
    if (response && Array.isArray(response.config)) {
      config = response.config;
    } else {
      config = [];
    }
    
    renderUrlList();
    console.log('[Popup] 配置已加载:', config);
  } catch (err) {
    console.error('[Popup] 加载配置失败:', err);
    showToast('加载配置失败', 'error');
  }
}

/**
 * 保存配置到storage
 */
async function saveConfig() {
  try {
    const response = await chrome.runtime.sendMessage({ 
      type: 'update_config',
      config: config 
    });
    
    if (response && response.status === 'updated') {
      showToast('配置已保存', 'success');
      console.log('[Popup] 配置已保存:', config);
    } else {
      throw new Error('保存失败');
    }
  } catch (err) {
    console.error('[Popup] 保存配置失败:', err);
    showToast('保存失败', 'error');
  }
}

// ============================================================
// URL操作
// ============================================================

/**
 * 添加URL
 */
function addUrl() {
  const url = urlInput.value.trim();
  
  if (!url) {
    showToast('请输入URL', 'error');
    return;
  }
  
  if (!isValidUrl(url)) {
    showToast('URL格式无效', 'error');
    return;
  }
  
  // 检查是否已存在
  const exists = config.some(item => item.url === url || item.pattern === url);
  if (exists) {
    showToast('该URL已存在', 'error');
    return;
  }
  
  // 生成匹配模式
  const pattern = generatePattern(url);
  
  // 添加到配置
  const newEntry = {
    id: generateId(),
    url: url,
    pattern: pattern,
    enabled: true
  };
  
  config.push(newEntry);
  
  // 清空输入
  urlInput.value = '';
  
  // 更新显示
  renderUrlList();
  
  showToast('URL已添加', 'success');
  console.log('[Popup] 添加URL:', newEntry);
}

/**
 * 删除URL
 * 
 * @param {string} id - URL条目ID
 */
function removeUrl(id) {
  const index = config.findIndex(item => item.id === id);
  
  if (index !== -1) {
    const removed = config.splice(index, 1)[0];
    renderUrlList();
    showToast('URL已删除', 'success');
    console.log('[Popup] 删除URL:', removed);
  }
}

/**
 * 切换URL启用状态
 * 
 * @param {string} id - URL条目ID
 */
function toggleUrl(id) {
  const item = config.find(item => item.id === id);
  
  if (item) {
    item.enabled = !item.enabled;
    renderUrlList();
    console.log('[Popup] 切换URL状态:', item);
  }
}

/**
 * 清空所有URL
 */
function clearAllUrls() {
  if (config.length === 0) {
    showToast('列表已为空', '');
    return;
  }
  
  if (confirm('确定要清空所有URL吗？')) {
    config = [];
    renderUrlList();
    showToast('已清空所有URL', 'success');
    console.log('[Popup] 清空所有URL');
  }
}

// ============================================================
// UI渲染
// ============================================================

/**
 * 渲染URL列表
 */
function renderUrlList() {
  // 更新计数
  urlCount.textContent = config.length + ' 个';
  
  // 显示/隐藏空状态
  if (config.length === 0) {
    emptyState.style.display = 'block';
    urlList.style.display = 'none';
    return;
  }
  
  emptyState.style.display = 'none';
  urlList.style.display = 'block';
  
  // 清空列表
  urlList.innerHTML = '';
  
  // 渲染每个URL条目
  config.forEach(item => {
    const li = document.createElement('li');
    li.className = 'url-item' + (item.enabled ? '' : ' disabled');
    li.dataset.id = item.id;
    
    li.innerHTML = `
      <label class="toggle-switch">
        <input type="checkbox" ${item.enabled ? 'checked' : ''}>
        <span class="toggle-slider"></span>
      </label>
      <span class="url-text" title="${item.url}">${item.url}</span>
      <button type="button" class="delete-btn" title="删除">删除</button>
    `;
    
    // 绑定事件
    const toggle = li.querySelector('input[type="checkbox"]');
    toggle.addEventListener('change', () => toggleUrl(item.id));
    
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => removeUrl(item.id));
    
    urlList.appendChild(li);
  });
}

// ============================================================
// 事件绑定
// ============================================================

/**
 * 初始化事件监听
 */
function initEventListeners() {
  // 添加按钮点击
  addBtn.addEventListener('click', addUrl);
  
  // 输入框回车
  urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addUrl();
    }
  });
  
  // 清空按钮
  clearAllBtn.addEventListener('click', clearAllUrls);
  
  // 保存按钮
  saveBtn.addEventListener('click', async () => {
    await saveConfig();
  });
}

// ============================================================
// 初始化
// ============================================================

/**
 * 初始化Popup
 */
async function init() {
  console.log('[Popup] 初始化...');
  
  // 初始化事件监听
  initEventListeners();
  
  // 加载配置
  await loadConfig();
  
  console.log('[Popup] 初始化完成');
}

// 启动
document.addEventListener('DOMContentLoaded', init);
