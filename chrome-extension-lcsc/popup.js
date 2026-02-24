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

// 从存储加载URL配置列表
async function loadUrlConfigs() {
  try {
    const result = await chrome.storage.local.get(STORAGE_KEY);
    const configs = result[STORAGE_KEY] || getDefaultConfigs();
    renderUrlConfigs(configs);
  } catch (error) {
    console.error('加载配置失败:', error);
    renderUrlConfigs(getDefaultConfigs());
  }
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
  { key: 'manuModel', label: '商品型号', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[3]/dd' },
  { key: 'lcsc_no', label: '立创编号', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[4]/dd' },
  { key: 'manuName', label: '制造商', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[2]/dd/a' },
  { key: 'package', label: '商品封装', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[5]/dd' },
  { key: 'type', label: '商品目录', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[2]/div[2]/div[1]/table/tbody/tr[1]/td[3]' },
  { key: 'description', label: '描述', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[1]/dd' },
  { key: 'packing', label: '包装方式', defaultXpath: '/html/body/div[1]/div/main/div/div/div/section[1]/div[2]/div[3]/dl/div[6]/dd' }
];

// 渲染URL配置列表
function renderUrlConfigs(configs) {
  const container = document.getElementById('urlConfigList');
  container.innerHTML = '';
  
  configs.forEach((config, index) => {
    const item = document.createElement('div');
    item.className = 'url-config-item';
    item.dataset.id = config.id;
    
    // 生成字段配置的HTML
    let fieldsHtml = '';
    PREDEFINED_FIELDS.forEach(field => {
      // 如果配置中没有该字段或其xpath为空，则使用默认值
      const fieldConfig = config.fields?.[field.key];
      const xpathValue = (fieldConfig?.xpath) ? fieldConfig.xpath : field.defaultXpath;
      fieldsHtml += `
        <div class="field-config">
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
    
    item.innerHTML = `
      <div class="mb-2">
        <label class="form-label small text-muted">URL匹配模式</label>
        <input type="text" class="form-control form-control-sm url-pattern" 
               placeholder="例如: *://item.szlcsc.com/*.html*"
               value="${escapeHtml(config.urlPattern)}">
      </div>
      <div class="mb-2">
        <label class="form-label small text-muted">字段配置</label>
        ${fieldsHtml}
      </div>
      <div class="d-flex justify-content-between">
        <button class="btn btn-danger btn-sm delete-config">
          <i class="bi bi-trash"></i> 删除
        </button>
      </div>
    `;
    
    container.appendChild(item);
  });
}

// 设置事件监听
function setupEventListeners() {
  // 复制按钮
  document.getElementById('copyUrl').addEventListener('click', copyCurrentUrl);
  
  // 添加配置按钮
  document.getElementById('addUrlConfig').addEventListener('click', addUrlConfig);
  
  // 动态绑定删除按钮
  document.getElementById('urlConfigList').addEventListener('click', async (e) => {
    if (e.target.closest('.delete-config')) {
      const item = e.target.closest('.url-config-item');
      item.remove();
      await saveAllConfigs();
    }
  });
  
  // 自动保存（输入后失去焦点时）
  document.getElementById('urlConfigList').addEventListener('change', async (e) => {
    if (e.target.classList.contains('url-pattern') || 
        e.target.classList.contains('field-xpath')) {
      await saveAllConfigs();
    }
  });
  
  // Ctrl+Enter 保存
  document.getElementById('urlConfigList').addEventListener('keydown', async (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      await saveAllConfigs();
      showStatus('配置已保存', 'success');
    }
  });
}

// 添加新的URL配置
function addUrlConfig() {
  const container = document.getElementById('urlConfigList');
  const newConfig = {
    id: generateId(),
    urlPattern: '',
    fields: {}
  };
  
  // 使用默认值填充字段
  PREDEFINED_FIELDS.forEach(field => {
    newConfig.fields[field.key] = {
      xpath: field.defaultXpath
    };
  });
  
  const item = document.createElement('div');
  item.className = 'url-config-item';
  item.dataset.id = newConfig.id;
  
  // 生成字段配置的HTML
  let fieldsHtml = '';
  PREDEFINED_FIELDS.forEach(field => {
    const fieldConfig = newConfig.fields[field.key];
    fieldsHtml += `
      <div class="field-config">
        <div class="row g-1 align-items-center">
          <div class="col-3">
            <span class="small text-muted">${field.label}</span>
          </div>
          <div class="col-9">
            <input type="text" class="form-control form-control-sm field-xpath" 
                   data-field="${field.key}"
                   value="${escapeHtml(fieldConfig.xpath || '')}"
                   placeholder="XPath表达式">
          </div>
        </div>
      </div>
    `;
  });
  
  item.innerHTML = `
    <div class="mb-2">
      <label class="form-label small text-muted">URL匹配模式</label>
      <input type="text" class="form-control form-control-sm url-pattern" 
             placeholder="例如: *://item.szlcsc.com/*.html*">
    </div>
    <div class="mb-2">
      <label class="form-label small text-muted">字段配置</label>
      ${fieldsHtml}
    </div>
    <div class="d-flex justify-content-between">
      <button class="btn btn-danger btn-sm delete-config">
        <i class="bi bi-trash"></i> 删除
      </button>
    </div>
  `;
  
  container.appendChild(item);
  saveAllConfigs();
}

// 保存所有配置
async function saveAllConfigs() {
  const container = document.getElementById('urlConfigList');
  const items = container.querySelectorAll('.url-config-item');
  
  const configs = [];
  items.forEach(item => {
    const urlPattern = item.querySelector('.url-pattern').value.trim();
    
    if (!urlPattern) return;
    
    // 收集字段配置
    const fields = {};
    PREDEFINED_FIELDS.forEach(field => {
      const xpathInput = item.querySelector(`.field-xpath[data-field="${field.key}"]`);
      
      if (xpathInput) {
        fields[field.key] = {
          xpath: xpathInput.value.trim()
        };
      }
    });
    
    configs.push({
      id: item.dataset.id,
      urlPattern,
      fields
    });
  });
  
  if (configs.length === 0) {
    showStatus('请至少保留一个URL配置', 'warning');
    return;
  }
  
  try {
    await chrome.storage.local.set({ [STORAGE_KEY]: configs });
    showStatus('配置已保存', 'success');
    notifyTabsToUpdate();
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
