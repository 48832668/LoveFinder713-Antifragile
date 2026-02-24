// popup.js - 处理悬浮工具栏URL和字段配置

const STORAGE_KEY = 'lcsc_url_configs';

/**
 * URL配置结构:
 * {
 *   id: string,          // 唯一ID
 *   urlPattern: string,  // URL匹配模式，如 *://item.szlcsc.com/*.html*
 *   fields: {             // 字段配置
 *     字段名: {
 *       xpath: string    // XPath表达式
 *     }
 *   }
 * }
 */

// 初始化
document.addEventListener('DOMContentLoaded', async () => {
  await loadCurrentUrl();
  await loadUrlConfigs();
  setupEventListeners();
});

// 加载当前活动标签页URL
async function loadCurrentUrl() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.url) {
      document.getElementById('currentUrl').value = tab.url;
    }
  } catch (error) {
    console.error('获取当前URL失败:', error);
    document.getElementById('currentUrl').value = '无法获取URL';
  }
}

// 测试当前页面的内容脚本是否在运行
async function testContentScriptPresence() {
  const statusEl = document.getElementById('extensionStatus');
  if (!statusEl) return;
  
  // 提示测试中
  statusEl.textContent = '测试中...';
  statusEl.className = 'fw-bold text-info';
  
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) {
      throw new Error('无法获取当前标签页ID');
    }
    
    console.log('[Popup] 发送测试消息到标签页:', tab.id, tab.url);
    
    const response = await chrome.tabs.sendMessage(tab.id, { type: 'lcsc_ping_test' });
    console.log('[Popup] 收到响应:', response);
    
    if (response && response.status === 'ok') {
      let statusText = '内容脚本在当前页面运行';
      if (response.configStatus === 'no_match') {
        statusText = '内容脚本运行但无匹配配置';
      }
      statusEl.textContent = statusText;
      statusEl.className = 'fw-bold text-success';
      console.log('[Popup] 测试成功');
    } else {
      statusEl.textContent = '内容脚本未响应';
      statusEl.className = 'fw-bold text-warning';
      console.log('[Popup] 测试失败: 响应状态异常');
      statusEl.className = 'fw-bold text-warning';
      console.log('[Popup] 测试失败: 响应状态异常');
    }
  } catch (e) {
    console.error('[Popup] 测试失败:', e);
    
    if (e.message.includes('Could not establish connection')) {
      statusEl.textContent = '内容脚本未加载或当前页面未匹配';
    } else if (e.message.includes('无法获取当前标签页ID')) {
      statusEl.textContent = '无法获取页面信息';
    } else {
      statusEl.textContent = '测试失败: ' + e.message;
    }
    
    statusEl.className = 'fw-bold text-danger';
  }
}

// 从存储加载URL配置列表
async function loadUrlConfigs() {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEY);
    const configs = result[STORAGE_KEY] || getDefaultConfigs();
    renderUrlConfigs(configs);
    updateStatusBar(configs);
  } catch (error) {
    console.error('加载配置失败:', error);
    renderUrlConfigs(getDefaultConfigs());
    updateStatusBar(getDefaultConfigs());
  }
}

// 更新状态栏
function updateStatusBar(configs) {
  // 更新配置数量
  document.getElementById('configCount').textContent = configs.length;
  
  // 检查当前URL匹配哪个配置
  const currentUrl = document.getElementById('currentUrl').value;
  const matchedEl = document.getElementById('matchedConfig');
  const statusEl = document.getElementById('extensionStatus');
  
  if (!currentUrl || currentUrl === '无法获取URL') {
    matchedEl.textContent = '未匹配';
    matchedEl.className = 'fw-bold text-muted';
    statusEl.textContent = '无法检测';
    statusEl.className = 'fw-bold text-muted';
    return;
  }
  
  // 查找匹配的配置
  let matchedConfig = null;
  for (const config of configs) {
    const pattern = config.urlPattern;
    if (!pattern) continue;
    
    const regex = patternToRegex(pattern);
    if (regex.test(currentUrl)) {
      matchedConfig = config;
      break;
    }
  }
  
  if (matchedConfig) {
    // 提取域名作为显示
    let displayTitle = matchedConfig.urlPattern;
    try {
      const urlMatch = matchedConfig.urlPattern.match(/\*?:\/\/([^\/]+)/);
      if (urlMatch) {
        displayTitle = urlMatch[1];
      }
    } catch (e) {}
    matchedEl.textContent = displayTitle;
    matchedEl.className = 'fw-bold text-success';
    statusEl.textContent = '已激活';
    statusEl.className = 'fw-bold text-success';
  } else {
    matchedEl.textContent = '未匹配';
    matchedEl.className = 'fw-bold text-danger';
    statusEl.textContent = '未激活';
    statusEl.className = 'fw-bold text-danger';
  }
}

// URL模式转正则（与Layer3_UI.js保持一致）
function patternToRegex(pattern) {
  let regexStr = pattern
    .replace(/[.+^\${}()|[\\]]/g, '\\$&')
    .replace(/\*/g, '.*')
    .replace(/\?/g, '.');
  return new RegExp('^' + regexStr + '$');
}

// 获取默认配置
function getDefaultConfigs() {
  return [
    {
      id: generateId(),
      urlPattern: '*://item.szlcsc.com/*.html*',
      fields: {
        name: { xpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/p' },
        description: { xpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[1]/dd' },
        manuName: { xpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[2]/dd/a' },
        manuModel: { xpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[3]/dd' },
        lcsc_no: { xpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[4]/dd' },
        package: { xpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[5]/dd' },
        packing: { xpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[6]/dd' },
        type: { xpath: '/html/body/div[1]/div/main/div/div/div/section[2]/div[2]/div[1]/table/tbody/tr[1]/td[3]' }
      }
    }
  ];
}

// 生成唯一ID
function generateId() {
  return 'config_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// 预定义的字段列表
const PREDEFINED_FIELDS = [
  { key: 'name', label: '元件名称', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/p' },
  { key: 'manuModel', label: '元件型号', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[3]/dd' },
  { key: 'lcsc_no', label: '立创编号', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[4]/dd' },
  { key: 'manuName', label: '制造商', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[2]/dd/a' },
  { key: 'package', label: '元件封装', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[5]/dd' },
  { key: 'type', label: '元件类型', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[2]/div[2]/div[1]/table/tbody/tr[1]/td[3]' },
  { key: 'description', label: '描述', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[1]/dd' },
  { key: 'packing', label: '包装方式', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[6]/dd' }
];

// 渲染URL配置列表 - 使用Bootstrap5 Accordion
function renderUrlConfigs(configs) {
  const container = document.getElementById('configAccordion');
  container.innerHTML = '';
  
  configs.forEach((config, index) => {
    const collapseId = 'collapse_' + config.id;
    const headingId = 'heading_' + config.id;
    
    // 提取URL域名作为显示标题
    let displayTitle = config.urlPattern || '新配置';
    try {
      const urlMatch = config.urlPattern.match(/\*?:\/\/([^\/]+)/);
      if (urlMatch) {
        displayTitle = urlMatch[1];
      }
    } catch (e) {}
    
    // 生成字段配置的HTML
    let fieldsHtml = '';
    PREDEFINED_FIELDS.forEach(field => {
      const fieldConfig = config.fields?.[field.key];
      const xpathValue = (fieldConfig?.xpath) ? fieldConfig.xpath : field.defaultXpath;
      fieldsHtml += `
        <div class="field-config field-predefined">
          <div class="row g-1 align-items-center">
            <div class="col-3">
              <span class="small text-muted">${field.label}</span>
            </div>
            <div class="col-9">
              <input type="text" class="form-control form-control-sm field-xpath" 
                     data-field="${field.key}"
                     value="${escapeHtml(xpathValue || '')}"
                     placeholder="XPath表达式">
            </div>
          </div>
        </div>
      `;
    });
    
    // 生成自定义字段配置的HTML
    let customFieldsHtml = '';
    const customFields = config.customFields || [];
    customFields.forEach((cf, cfIndex) => {
      customFieldsHtml += `
        <div class="field-config field-custom">
          <div class="row g-1 align-items-center">
            <div class="col-4">
              <input type="text" class="form-control form-control-sm field-key" 
                     data-index="${cfIndex}"
                     value="${escapeHtml(cf.key || '')}"
                     placeholder="键名">
            </div>
            <div class="col-7">
              <input type="text" class="form-control form-control-sm field-xpath" 
                     data-index="${cfIndex}"
                     value="${escapeHtml(cf.xpath || '')}"
                     placeholder="XPath表达式">
            </div>
            <div class="col-1">
              <button class="btn btn-outline-danger btn-sm btn-remove-custom-field" data-index="${cfIndex}">
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });
    
    // 默认收起（除第一个外）
    const isExpanded = index === 0 ? 'true' : 'false';
    const showClass = index === 0 ? 'show' : '';
    const collapsedClass = index === 0 ? '' : 'collapsed';
    
    const accordionItem = `
      <div class="accordion-item" data-id="${config.id}" data-saved="true">
        <h2 class="accordion-header" id="${headingId}">
          <button class="accordion-button ${collapsedClass}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isExpanded}" aria-controls="${collapseId}">
            <span class="me-auto text-truncate">${escapeHtml(displayTitle)}</span>
          </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse ${showClass}" data-bs-parent="#configAccordion">
          <div class="accordion-body p-0">
            <div class="p-2">
              <div class="mb-2">
                <label class="form-label small text-muted">URL匹配模式</label>
                <div class="input-group input-group-sm">
                  <input type="text" class="form-control url-pattern" 
                         placeholder="例如: *://item.szlcsc.com/*.html*"
                         value="${escapeHtml(config.urlPattern)}">
                  <button class="btn btn-primary btn-save-config" data-id="${config.id}">
                    <i class="bi bi-check-lg"></i> 保存
                  </button>
                </div>
              </div>
              <div class="mb-2">
                <label class="form-label small text-muted">预定义字段配置</label>
                ${fieldsHtml}
              </div>
              <div class="mb-2">
                <label class="form-label small text-muted">自定义字段配置</label>
                ${customFieldsHtml}
                <button class="btn btn-outline-secondary btn-sm mt-1 btn-add-custom-field" data-id="${config.id}">
                  <i class="bi bi-plus-lg"></i> 添加新字段
                </button>
              </div>
              <div class="d-flex justify-content-end">
                <button class="btn btn-danger btn-sm delete-config" data-id="${config.id}">
                  <i class="bi bi-trash"></i> 删除配置
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    container.insertAdjacentHTML('beforeend', accordionItem);
  });
}

// 保存单个配置
function saveSingleConfig(id) {
  const item = document.querySelector(`.accordion-item[data-id="${id}"]`);
  if (!item) {
    console.error('[Popup] 未找到配置项');
    return;
  }
  
  const urlPattern = item.querySelector('.url-pattern').value.trim();
  if (!urlPattern) {
    showStatus('请输入URL匹配模式', 'warning');
    return;
  }
  
  // 收集预定义字段配置
  const fields = {};
  PREDEFINED_FIELDS.forEach(field => {
    const xpathInput = item.querySelector(`.field-predefined .field-xpath[data-field="${field.key}"]`);
    if (xpathInput) {
      fields[field.key] = {
        xpath: xpathInput.value.trim()
      };
    }
  });
  
  // 收集自定义字段配置
  const customFields = [];
  const customFieldEls = item.querySelectorAll('.field-custom');
  customFieldEls.forEach(cfEl => {
    const keyInput = cfEl.querySelector('.field-key');
    const xpathInput = cfEl.querySelector('.field-xpath');
    if (keyInput && xpathInput && keyInput.value.trim()) {
      customFields.push({
        key: keyInput.value.trim(),
        xpath: xpathInput.value.trim()
      });
    }
  });
  
  // 更新标记为已保存
  item.dataset.saved = 'true';
  
  // 更新标题显示URL域名
  let displayTitle = urlPattern;
  try {
    const urlMatch = urlPattern.match(/\*?:\/\/([^\/]+)/);
    if (urlMatch) {
      displayTitle = urlMatch[1];
    }
  } catch (e) {}
  
  const headerButton = item.querySelector('.accordion-button');
  headerButton.querySelector('span').textContent = displayTitle;
  
  // 保存到存储（包含自定义字段）
  saveAllConfigs(customFields);
  showStatus('配置已保存，请刷新页面生效', 'success');
}

// 添加自定义字段
function addCustomField(id) {
  const item = document.querySelector(`.accordion-item[data-id="${id}"]`);
  if (!item) return;
  
  const container = item.querySelector('.custom-fields-container');
  if (!container) {
    console.error('[Popup] 未找到自定义字段容器');
    return;
  }
  
  // 获取当前自定义字段数量
  const fieldCount = container.querySelectorAll('.field-custom').length;
  
  const fieldHtml = `
    <div class="field-config field-custom">
      <div class="row g-1 align-items-center">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm field-key" 
                 data-index="${fieldCount}"
                 value=""
                 placeholder="键名">
        </div>
        <div class="col-7">
          <input type="text" class="form-control form-control-sm field-xpath" 
                 data-index="${fieldCount}"
                 value=""
                 placeholder="XPath表达式">
        </div>
        <div class="col-1">
          <button class="btn btn-outline-danger btn-sm btn-remove-custom-field">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', fieldHtml);
}

// 删除配置
function deleteConfig(id) {
  console.log('[Popup] 删除配置, id:', id);
  const item = document.querySelector(`.accordion-item[data-id="${id}"]`);
  console.log('[Popup] 找到元素:', item);
  if (item) {
    item.remove();
    console.log('[Popup] 元素已删除');
    saveAllConfigs();
  } else {
    console.error('[Popup] 未找到要删除的元素');
  }
}

// 全局函数
window.deleteConfig = deleteConfig;

// 设置事件监听
function setupEventListeners() {
  // 复制按钮
  document.getElementById('copyUrl').addEventListener('click', copyCurrentUrl);
  
  // 添加配置按钮
  document.getElementById('addUrlConfig').addEventListener('click', addUrlConfig);
  
  // 删除配置按钮（事件委托）
  document.getElementById('configAccordion').addEventListener('click', function(e) {
    const deleteBtn = e.target.closest('.delete-config');
    if (deleteBtn) {
      const id = deleteBtn.dataset.id;
      console.log('[Popup] 点击删除按钮, id:', id);
      deleteConfig(id);
    }
  });
  // 新增：检测内容脚本是否在当前页面运行
  const testBtn = document.getElementById('testContentScript');
  if (testBtn) {
    testBtn.addEventListener('click', testContentScriptPresence);
  }
  
  // 保存单个配置按钮
  document.getElementById('configAccordion').addEventListener('click', function(e) {
    const saveBtn = e.target.closest('.btn-save-config');
    if (saveBtn) {
      const id = saveBtn.dataset.id;
      console.log('[Popup] 点击保存按钮, id:', id);
      saveSingleConfig(id);
    }
  });
  
  // 添加自定义字段按钮
  document.getElementById('configAccordion').addEventListener('click', function(e) {
    const addBtn = e.target.closest('.btn-add-custom-field');
    if (addBtn) {
      const id = addBtn.dataset.id;
      console.log('[Popup] 点击添加字段按钮, id:', id);
      addCustomField(id);
    }
  });
  
  // 删除自定义字段按钮
  document.getElementById('configAccordion').addEventListener('click', function(e) {
    const removeBtn = e.target.closest('.btn-remove-custom-field');
    if (removeBtn) {
      const fieldEl = removeBtn.closest('.field-custom');
      if (fieldEl) {
        fieldEl.remove();
        saveAllConfigs();
      }
    }
  });
}

// 添加新的URL配置
function addUrlConfig() {
  const container = document.getElementById('configAccordion');
  const newId = generateId();
  const collapseId = 'collapse_' + newId;
  const headingId = 'heading_' + newId;
  
  // 生成字段配置的HTML
  let fieldsHtml = '';
  PREDEFINED_FIELDS.forEach(field => {
    fieldsHtml += `
      <div class="field-config field-predefined">
        <div class="row g-1 align-items-center">
          <div class="col-3">
            <span class="small text-muted">${field.label}</span>
          </div>
          <div class="col-9">
            <input type="text" class="form-control form-control-sm field-xpath" 
                   data-field="${field.key}"
                   value="${escapeHtml(field.defaultXpath || '')}"
                   placeholder="XPath表达式">
          </div>
        </div>
      </div>
    `;
  });
  
  // 新添加的配置默认展开（未保存状态）
  const accordionItem = `
    <div class="accordion-item" data-id="${newId}" data-saved="false">
      <h2 class="accordion-header" id="${headingId}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="true" aria-controls="${collapseId}">
          <span class="me-auto text-truncate">新配置</span>
        </button>
      </h2>
      <div id="${collapseId}" class="accordion-collapse collapse show" data-bs-parent="#configAccordion">
        <div class="accordion-body p-0">
          <div class="p-2">
            <div class="mb-2">
              <label class="form-label small text-muted">URL匹配模式</label>
              <div class="input-group input-group-sm">
                <input type="text" class="form-control url-pattern" 
                       placeholder="例如: *://item.szlcsc.com/*.html*">
                <button class="btn btn-primary btn-save-config" data-id="${newId}">
                  <i class="bi bi-check-lg"></i> 保存
                </button>
              </div>
            </div>
            <div class="mb-2">
              <label class="form-label small text-muted">预定义字段配置</label>
              ${fieldsHtml}
            </div>
            <div class="mb-2">
              <label class="form-label small text-muted">自定义字段配置</label>
              <div class="custom-fields-container" data-id="${newId}"></div>
              <button class="btn btn-outline-secondary btn-sm mt-1 btn-add-custom-field" data-id="${newId}">
                <i class="bi bi-plus-lg"></i> 添加新字段
              </button>
            </div>
            <div class="d-flex justify-content-end">
              <button class="btn btn-danger btn-sm delete-config" data-id="${newId}">
                <i class="bi bi-trash"></i> 删除配置
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', accordionItem);
}

// 保存所有配置
async function saveAllConfigs() {
  console.log('[Popup] 开始保存配置');
  const container = document.getElementById('configAccordion');
  const items = container.querySelectorAll('.accordion-item');
  console.log('[Popup] 找到配置项数量:', items.length);
  
  const configs = [];
  items.forEach(item => {
    const urlPattern = item.querySelector('.url-pattern').value.trim();
    
    if (!urlPattern) return;
    
    // 收集预定义字段配置
    const fields = {};
    PREDEFINED_FIELDS.forEach(field => {
      const xpathInput = item.querySelector(`.field-predefined .field-xpath[data-field="${field.key}"]`);
      
      if (xpathInput) {
        fields[field.key] = {
          xpath: xpathInput.value.trim()
        };
      }
    });
    
    // 收集自定义字段配置
    const customFields = [];
    const customFieldEls = item.querySelectorAll('.field-custom');
    customFieldEls.forEach(cfEl => {
      const keyInput = cfEl.querySelector('.field-key');
      const xpathInput = cfEl.querySelector('.field-xpath');
      if (keyInput && xpathInput && keyInput.value.trim()) {
        customFields.push({
          key: keyInput.value.trim(),
          xpath: xpathInput.value.trim()
        });
      }
    });
    
    configs.push({
      id: item.dataset.id,
      urlPattern,
      fields,
      customFields
    });
  });
  
  console.log('[Popup] 保存配置:', configs);
  
  if (configs.length === 0) {
    showStatus('请至少保留一个URL配置', 'warning');
    return;
  }
  
  try {
    await chrome.storage.local.set({ [STORAGE_KEY]: configs });
    showStatus('配置已保存，请刷新页面生效', 'success');
    notifyTabsToUpdate();
    updateStatusBar(configs);
  } catch (error) {
    console.error('保存失败:', error);
    showStatus('保存失败: ' + error.message, 'danger');
  }
}

// 复制当前URL
async function copyCurrentUrl() {
  const urlInput = document.getElementById('currentUrl');
  const url = urlInput.value;
  
  if (!url || url === '无法获取URL') {
    showStatus('无可复制的URL', 'warning');
    return;
  }

  try {
    await navigator.clipboard.writeText(url);
    showStatus('已复制到剪贴板！', 'success');
  } catch (error) {
    console.error('复制失败:', error);
    urlInput.select();
    document.execCommand('copy');
    showStatus('已复制到剪贴板！', 'success');
  }
}

// 显示状态消息
function showStatus(message, type = 'success') {
  const statusEl = document.getElementById('statusMessage');
  statusEl.className = `alert alert-${type} py-1 small`;
  statusEl.textContent = message;
  statusEl.classList.remove('d-none');
  
  setTimeout(() => {
    statusEl.classList.add('d-none');
  }, 3000);
}

// HTML转义
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// 通知标签页更新配置
async function notifyTabsToUpdate() {
  try {
    const tabs = await chrome.tabs.query({});
    tabs.forEach(tab => {
      chrome.tabs.sendMessage(tab.id, { type: 'configUpdated' }).catch(() => {
        // 忽略非扩展管理页面的错误
      });
    });
  } catch (error) {
    console.error('通知标签页失败:', error);
  }
}
