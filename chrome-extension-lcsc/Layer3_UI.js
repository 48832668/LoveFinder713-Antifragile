/**
 * Layer3_UI.js - 悬浮面板UI层
 * 
 * 职责：
 * 1. 从Layer1（chrome.storage）读取URL配置和JSON表达式
 * 2. 根据当前URL匹配配置
 * 3. 使用JSON表达式解析页面数据
 * 4. 管理UI面板显示
 */

(function() {
  'use strict';
  
  // ==================== 立即执行：确认脚本加载 ====================
  console.log('%c========================================', 'color: green;');
  console.log('%c[LCSC读取器] 脚本已加载 v1.0.0', 'color: green; font-weight: bold; font-size: 16px;');
  console.log('%c当前页面: ' + window.location.href, 'color: blue;');
  console.log('%c扩展正在运行中...', 'color: orange;');
  console.log('%c========================================', 'color: green;');
  
  // ==================== 配置 ====================
  
  const STORAGE_KEY = 'lcsc_url_configs';
  
  /** 默认面板位置 */
  const DEFAULT_POSITION = 'bottom-right';
  const DEFAULT_WIDTH = 400;
  const DEFAULT_HEIGHT = 350;
  
  // ==================== 状态 ====================
  
  let currentConfig = null;  // 当前匹配的URL配置
  let urlConfigs = [];       // 所有URL配置
  
  // ==================== Layer3 UI 模块 ====================
  
  function _applyPosition(panel, position) {
    if (!panel) return;
    
    panel.style.top = '';
    panel.style.bottom = '';
    panel.style.left = '';
    panel.style.right = '';
    
    switch (position) {
      case 'top-left':
        panel.style.top = '20px';
        panel.style.left = '20px';
        break;
      case 'top-right':
        panel.style.top = '20px';
        panel.style.right = '20px';
        break;
      case 'bottom-left':
        panel.style.bottom = '20px';
        panel.style.left = '20px';
        break;
      case 'bottom-right':
      default:
        panel.style.bottom = '20px';
        panel.style.right = '20px';
        break;
    }
  }
  
  function createPanel() {
    const panel = document.createElement('div');
    panel.id = 'layer3-ui-panel';
    
    panel.className = 'lcsc-panel card shadow-lg';
    panel.style.width = DEFAULT_WIDTH + 'px';
    panel.style.maxWidth = '90vw';
    panel.style.zIndex = '2147483647';
    panel.style.position = 'fixed';
    
    _applyPosition(panel, DEFAULT_POSITION);
    
    panel.style.display = 'none';
    document.body.appendChild(panel);
    return panel;
  }
  
  function togglePanel(show) {
    let panel = document.getElementById('layer3-ui-panel');
    if (!panel) {
      panel = createPanel();
    }
    const shouldShow = typeof show === 'boolean' ? show : panel.style.display === 'none';
    panel.style.display = shouldShow ? 'block' : 'none';
    return panel.style.display;
  }
  
  function updatePosition(position = DEFAULT_POSITION, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
    let panel = document.getElementById('layer3-ui-panel');
    if (!panel) {
      panel = createPanel();
    }
    
    panel.style.width = width + 'px';
    if (height) {
      panel.style.height = height + 'px';
    }
    
    _applyPosition(panel, position);
  }
  
  // 导出 Layer3 到全局
  window.Layer3_UI = {
    createPanel,
    togglePanel,
    updatePosition,
    DEFAULT_POSITION,
    DEFAULT_WIDTH,
    DEFAULT_HEIGHT
  };
  
  // ==================== 配置加载 ====================
  
  /**
   * 从存储加载URL配置
   */
  async function loadConfigs() {
    try {
      const result = await chrome.storage.local.get(STORAGE_KEY);
      urlConfigs = result[STORAGE_KEY] || [];
      console.log('[LCSC读取器] 已加载配置:', urlConfigs.length, '条');
      
      // 匹配当前URL的配置
      currentConfig = findMatchingConfig(window.location.href);
      
      if (currentConfig) {
        console.log('[LCSC读取器] 匹配到配置:', currentConfig.urlPattern);
      } else {
        console.log('[LCSC读取器] 未匹配到任何URL配置');
      }
      
      return currentConfig;
    } catch (error) {
      console.error('[LCSC读取器] 加载配置失败:', error);
      return null;
    }
  }
  
  /**
   * 查找匹配当前URL的配置
   */
  function findMatchingConfig(url) {
    for (const config of urlConfigs) {
      const pattern = config.urlPattern;
      if (!pattern) continue;
      
      // 将通配符模式转换为正则表达式
      const regex = patternToRegex(pattern);
      if (regex.test(url)) {
        return config;
      }
    }
    return null;
  }
  
  /**
   * 将通配符模式转换为正则表达式
   * 例如: *://item.szlcsc.com/*.html* -> ^https?://item\.szlcsc\.com/.*\.html.*$
   */
  function patternToRegex(pattern) {
    // 转义正则特殊字符（但保留 * 和 ?）
    let regexStr = pattern
      .replace(/[.+^${}()|[\]\\]/g, '\\$&')  // 转义正则特殊字符
      .replace(/\*/g, '.*')                   // * 转换为 .*
      .replace(/\?/g, '.');                   // ? 转换为 .
    
    return new RegExp('^' + regexStr + '$');
  }
  
  /**
   * 解析JSON表达式
   * @param {Object} sourceData - 原始页面数据
   * @param {string} jsonExpr - JSON表达式配置
   * @returns {Object} 解析后的数据
   */
  function parseWithJsonExpr(sourceData, jsonExpr) {
    try {
      const exprConfig = JSON.parse(jsonExpr);
      const result = {};
      
      for (const [key, path] of Object.entries(exprConfig)) {
        // 处理路径，如 "productRecord.productName" 或数组索引 "list.0.name"
        result[key] = getValueByPath(sourceData, path);
      }
      
      return result;
    } catch (error) {
      console.error('[LCSC读取器] JSON表达式解析失败:', error);
      return {};
    }
  }
  
  /**
   * 根据路径获取值
   * @param {Object} obj - 源对象
   * @param {string} path - 路径，如 "productName" 或 "list.0.name"
   * @returns {*} 取得的值
   */
  function getValueByPath(obj, path) {
    if (!obj || !path) return null;
    
    const parts = path.split('.');
    let current = obj;
    
    for (const part of parts) {
      if (current === null || current === undefined) return null;
      current = current[part];
    }
    
    return current;
  }
  
  /**
   * 自定义JSON格式化输出，确保所有键都有双引号并且格式对齐
   */
  function formatJsonOutput(obj) {
    return JSON.stringify(obj, null, 2);
  }
  
  /**
   * 获取对象的键列表，按优先级排序
   */
  function getObjectKeysSorted(obj) {
    const primaryKeys = ['name', 'manuModel', 'lcsc_no', 'package', 'description', 'type', 'price', 'manuName', 'packing', 'image_url'];
    const otherKeys = Object.keys(obj).filter(key => !primaryKeys.includes(key));
    return [...primaryKeys, ...otherKeys];
  }
  
  // ==================== 初始化 ====================
  
  async function init() {
    console.log('[LCSC读取器] 正在初始化...');
    console.log('[LCSC读取器] 当前URL: ' + window.location.href);
    
    // 加载配置
    await loadConfigs();
    
    // 检查是否有匹配的URL配置
    if (!currentConfig) {
      console.log('[LCSC读取器] 当前URL无匹配的URL配置，扩展未激活');
      console.log('[LCSC读取器] 可用配置数量: ' + urlConfigs.length);
      if (urlConfigs.length > 0) {
        console.log('[LCSC读取器] 配置列表:');
        urlConfigs.forEach((config, index) => {
          console.log(`  ${index + 1}. ${config.urlPattern}`);
        });
      }
      return;
    }
    
    console.log('[LCSC读取器] URL匹配成功!');
    console.log('[LCSC读取器] 匹配的配置: ' + currentConfig.urlPattern);
    
  // 初始化UI
    initUI();
    
    // 等待页面渲染完成后解析一次
    waitForPageReady();
    
    console.log('[LCSC读取器] 初始化完成');
  }
  
  function waitForPageReady() {
    setTimeout(() => {
      console.log('[LCSC读取器] 开始解析页面...');
      parseCurrentPage();
      console.log('[LCSC读取器] 解析完成');
    }, 1500);
  }
  
  function initUI() {
    try {
      createPanel();
      console.log('[LCSC读取器] UI面板已创建');
    } catch (e) {
      console.error('[LCSC读取器] UI初始化失败:', e);
    }
  }
  
  // ==================== 解析逻辑 ====================
  
  function parseCurrentPage() {
    try {
      const data = extractComponentData();
      
      if (data) {
        console.log('%c===== LCSC元器件数据 =====', 'color: purple; font-weight: bold;');
        console.log(formatJsonOutput(data));
        console.log('%c============================', 'color: purple;');
        
        updatePanel(data);
      } else {
        console.log('[LCSC读取器] 未提取到有效数据');
      }
    } catch (e) {
      console.error('[LCSC读取器] 解析失败:', e);
    }
  }
  
  /**
   * 从页面提取元器件数据 - 使用XPath精确提取
   */
  function extractComponentData() {
    console.log('[LCSC读取器] 开始提取数据...');
    
    const data = {
      name: null,           // 元件名称
      manuModel: null,      // 元件型号
      lcsc_no: null,        // 商品编号
      package: null,        // 元件封装
      description: null,    // 描述
      type: null,           // 元件类型/元件类型
      price: null,          // 价格
      manuName: null,       // 制造商
      packing: null,        // 包装方式
      image_url: null       // 图片链接
      // 其他参数将从表格中直接添加到此对象
    };
    
    // --- XPath提取辅助函数 ---
    function getXPathText(xpath) {
      try {
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (result && result.singleNodeValue) {
          return result.singleNodeValue.textContent?.replace(/\s+/g, ' ').trim() || null;
        }
        return null;
      } catch (e) {
        console.warn('[LCSC读取器] XPath提取失败:', xpath, e);
        return null;
      }
    }
    
    // --- 1. 元件名称 ---
    data.name = getXPathText('/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/p');
    
    // --- 2. 描述 ---
    data.description = getXPathText('/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[1]/dd');
    
    // --- 3. 制造商 (a标签) ---
    data.manuName = getXPathText('/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[2]/dd/a');
    
    // --- 4. 元件型号 ---
    data.manuModel = getXPathText('/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[3]/dd');
    
    // --- 5. 商品编号 ---
    data.lcsc_no = getXPathText('/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[4]/dd');
    
    // --- 6. 元件封装 ---
    data.package = getXPathText('/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[5]/dd');
    
    // --- 7. 包装方式 ---
    data.packing = getXPathText('/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[6]/dd');
    
    // --- 8. 从参数表格提取所有参数（除type外） ---
    // 表格XPath: /html/body/div[1]/div/main/div/div/div/section[2]/div[2]/div[1]/table/tbody/tr
    const tableXPath = '/html/body/div[1]/div/main/div/div/div/section[2]/div[2]/div[1]/table/tbody/tr';
    try {
      const tableResult = document.evaluate(tableXPath, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
      let row;
      while ((row = tableResult.iterateNext())) {
        // 获取该行所有td
        const cells = row.querySelectorAll('td');
        if (cells.length >= 3) {
          // td[2] 是属性名, td[3] 是属性值
          const attrName = cells[2]?.textContent?.trim();
          const attrValue = cells[3]?.textContent?.trim();
          
          if (attrName && attrValue && attrName !== '元件类型') {
            // 其他参数直接添加到根级别（排除元件类型，因为它已通过专用XPath提取）
            data[attrName] = attrValue;
          }
        }
      }
    } catch (e) {
      console.warn('[LCSC读取器] 参数表格提取失败:', e);
    }
    
    // --- 8.5 元件类型 (type) - 使用专用XPath ---
    data.type = getXPathText('/html/body/div[1]/div/main/div/div/div/section[2]/div[2]/div[1]/table/tbody/tr[1]/td[3]');
    
    // --- 9. 清理数据 ---
    for (let key in data) {
      if (data[key] && typeof data[key] === 'string') {
        data[key] = data[key].replace(/\s+/g, ' ').trim();
      }
    }
    
    // --- 10. 检查有效数据 ---
    if (!data.name && !data.lcsc_no) {
      console.log('[LCSC读取器] 无法提取有效数据');
      return null;
    }
    
    console.log('[LCSC读取器] 解析完成:', data);
    return data;
  }
  
  /**
   * 使用CSS选择器提取元素文本
   */
  function extractBySelector(selector) {
    try {
      const el = document.querySelector(selector);
      if (el) {
        return el.textContent?.trim() || null;
      }
      return null;
    } catch (e) {
      console.error('[LCSC读取器] CSS选择器解析错误:', selector, e);
      return null;
    }
  }
  
  /**
   * 从DL中根据DT文本查找对应的DD值
   * 结构: <dl><div><dt>文本</dt><dd>值</dd></div></dl>
   */
  function extractByDlKey(dtText) {
    try {
      // 查找所有dl元素
      const dls = document.querySelectorAll('dl');
      
      for (const dl of dls) {
        // 查找所有div子元素
        const divs = dl.querySelectorAll(':scope > div');
        
        for (const div of divs) {
          const dt = div.querySelector('dt');
          const dd = div.querySelector('dd');
          
          if (dt && dt.textContent?.trim() === dtText) {
            // 找到匹配的DT，获取DD的值
            if (dd) {
              // 如果DD内有a元素，取a的文本
              const a = dd.querySelector('a');
              if (a) {
                return a.textContent?.trim() || null;
              }
              // 否则取DD的文本
              return dd.textContent?.trim() || null;
            }
            return null;
          }
        }
      }
      
      return null;
    } catch (e) {
      console.error('[LCSC读取器] DL键值解析错误:', dtText, e);
      return null;
    }
  }
  
  // 保留旧的嵌入JSON提取方法（备用）
  function extractFromEmbeddedJson() {
    try {
      const scripts = document.querySelectorAll('script');
      for (const script of scripts) {
        const text = script.textContent || '';
        
        if (text.includes('"productRecord"') || text.includes('productRecord')) {
          try {
            const jsonMatch = text.match(/\{[\s\S]*"props"[\s\S]*\}\s*\}[\s\S]*\}[\s\S]*\}[\s\S]*\}[\s\S]*\}[\s\S]*\}/);
            if (jsonMatch) {
              const json = JSON.parse(jsonMatch[0]);
              
              const productRecord = json?.props?.pageProps?.webData?.productRecord || 
                                   json?.props?.pageProps?.productRecord ||
                                   json?.productRecord;
              
              if (productRecord) {
                console.log('[LCSC读取器] 从嵌入JSON找到productRecord');
                return productRecord;
              }
            }
          } catch (e) {
            // JSON解析失败，继续尝试下一个
          }
        }
      }
      
      const bodyText = document.body?.innerText || '';
      const jsonPattern = /\{[\s\S]*"productModel"[\s\S]*\}/;
      const match = bodyText.match(jsonPattern);
      
      if (match) {
        try {
          const json = JSON.parse(match[0]);
          if (json.productModel) {
            console.log('[LCSC读取器] 从innerText找到JSON数据');
            return json;
          }
        } catch (e) {
          // 解析失败
        }
      }
      
      console.log('[LCSC读取器] 未找到嵌入JSON数据');
      return null;
    } catch (e) {
      console.error('[LCSC读取器] 提取嵌入JSON失败:', e);
      return null;
    }
  }
  
  // ==================== UI更新 ====================
  
  function updatePanel(data) {
    try {
      const panel = document.getElementById('layer3-ui-panel');
      if (!panel) {
        createPanel();
      }
      
      const content = buildPanelContent(data);
      
      const panelEl = document.getElementById('layer3-ui-panel');
      if (panelEl) {
        panelEl.innerHTML = content;
        bindButtonEvents(data);
        togglePanel(true);
        console.log('[LCSC读取器] 面板已显示');
      }
    } catch (e) {
      console.error('[LCSC读取器] 更新面板失败:', e);
    }
  }
  
  function buildPanelContent(data) {
    const jsonStr = JSON.stringify(data, null, 2);
    
    return `
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h5 class="card-title mb-0">
            <i class="bi bi-cpu"></i> LCSC元器件详情
          </h5>
          <button class="btn btn-sm btn-outline-secondary" onclick="togglePanel()">
            <i class="bi bi-dash-lg"></i> 收起
          </button>
        </div>
        
        <div class="row mb-2">
          <div class="col-4 text-muted small">元件名称</div>
          <div class="col-8">${escapeHtml(data.name || '-')}</div>
        </div>
        
        <div class="row mb-2">
          <div class="col-4 text-muted small">元件型号</div>
          <div class="col-8">${escapeHtml(data.manuModel || '-')}</div>
        </div>
        
        <div class="row mb-2">
          <div class="col-4 text-muted small">立创编号</div>
          <div class="col-8">${escapeHtml(data.lcsc_no || '-')}</div>
        </div>
        
        <div class="row mb-2">
          <div class="col-4 text-muted small">元件封装</div>
          <div class="col-8">${escapeHtml(data.package || '-')}</div>
        </div>
        
        <div class="row mb-2">
          <div class="col-4 text-muted small">元件类型</div>
          <div class="col-8">${escapeHtml(data.type || '-')}</div>
        </div>
        
        <div class="row mb-2">
          <div class="col-4 text-muted small">制造商</div>
          <div class="col-8">${escapeHtml(data.manuName || '-')}</div>
        </div>
        
        <div class="row mb-2">
          <div class="col-4 text-muted small">商品单价</div>
          <div class="col-8">${data.price ? '<span class="text-success">¥' + data.price + '</span>' : '-'}</div>
        </div>
        
        ${data.image_url ? `
        <div class="mt-2 mb-2">
          <img src="${escapeHtml(data.image_url)}" class="img-thumbnail" style="max-width: 80px; max-height: 80px;"/>
        </div>
        ` : ''}
        
        <hr class="my-2">
        
        <div class="d-grid gap-2">
          <button class="btn btn-outline-primary btn-sm" onclick="window.copyComponentJson('${encodeURIComponent(jsonStr)}')">
            <i class="bi bi-clipboard"></i> 复制JSON
          </button>
          <button class="btn btn-success btn-sm" onclick="window.addComponentToSystem()">
            <i class="bi bi-plus-circle"></i> 添加到系统
          </button>
        </div>
      </div>
    `;
  }
  
  function bindButtonEvents(data) {
    window.copyComponentJson = function(jsonStr) {
      const json = typeof jsonStr === 'string' ? decodeURIComponent(jsonStr) : JSON.stringify(data, null, 2);
      navigator.clipboard.writeText(json).then(() => {
        showToast('JSON已复制到剪贴板', 'success');
      }).catch(err => {
        console.error('复制失败:', err);
        showToast('复制失败', 'danger');
      });
    };
    
    window.addComponentToSystem = function() {
      addComponent(data);
    };
  }
  
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `lcsc-toast toast align-items-center text-white bg-${type} border-0 position-fixed`;
    toast.style.top = '20px';
    toast.style.right = '20px';
    toast.style.zIndex = '2147483647';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    
    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button>
      </div>
    `;
    
    document.body.appendChild(toast);
    toast.style.display = 'block';
    toast.style.opacity = '1';
    
    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
  
  async function addComponent(data) {
    try {
      const response = await chrome.runtime.sendMessage({
        type: 'addComponent',
        data: data
      });
      
      if (response && response.success) {
        showToast('添加成功！', 'success');
      } else {
        showToast('添加失败: ' + (response?.error || '未知错误'), 'danger');
      }
    } catch (e) {
      console.error('添加失败:', e);
      showToast('添加失败: ' + e.message, 'danger');
    }
  }
  
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
  
  // ==================== 监听配置更新 ====================
  
  // 监听来自popup的配置更新消息
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'configUpdated') {
      console.log('[LCSC读取器] 收到配置更新通知');
      loadConfigs().then(() => {
        // 可以选择重新解析
        parseCurrentPage();
      });
    } else if (message.type === 'lcsc_ping_test') {
      console.log('[LCSC读取器] 收到Ping测试请求，当前URL:', window.location.href);
      console.log('[LCSC读取器] 当前配置状态:', currentConfig ? '有匹配配置' : '无匹配配置');
      sendResponse({ status: 'ok', url: window.location.href, configStatus: currentConfig ? 'matched' : 'no_match' });
    }
    return true; // 保持消息通道开放
  });
  
  // ==================== 启动 ====================
  
  console.log('[LCSC读取器] 等待页面加载...');
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 1500);
  }
  
})();
  // Content script ping listener: respond to test ping from popup
  try {
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message && message.type === 'lcsc_ping_test') {
          sendResponse({ status: 'ok' });
          return true;
        }
      });
    }
  } catch (e) {
    // 忽略监听失败
  }
