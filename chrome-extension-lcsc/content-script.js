/**
 * Content Script - 入口脚本
 * LCSC元器件详情读取器
 * 
 * 职责：
 * 1. 协调三个Layer模块
 * 2. 监听页面变化，触发解析
 * 3. 与background脚本通信
 * 4. 管理UI面板
 */

(function() {
  'use strict';
  
  // ==================== 立即执行：确认脚本加载 ====================
  console.log('%c========================================', 'color: green;');
  console.log('%c[LCSC读取器] 脚本已加载 v1.0.0', 'color: green; font-weight: bold; font-size: 16px;');
  console.log('%c当前页面: ' + window.location.href, 'color: blue;');
  console.log('%c========================================', 'color: green;');
  
  // ==================== 配置 ====================
  
  /** URL匹配模式 - 匹配立创商城详情页 */
  const URL_PATTERN = /https?:\/\/item\.szlcsc\.com\/.+\.html/;
  
  /** 防抖延迟(ms) */
  const DEBOUNCE_DELAY = 500;
  
  // ==================== 模块引用 ====================
  
  // Layer2: 业务逻辑（DOM解析）
  let Layer2 = null;
  // Layer3: UI界面
  let Layer3 = null;
  
  // ==================== 状态 ====================
  
  /** 当前解析的元器件数据 */
  let currentComponentData = null;
  /** 是否已初始化 */
  let isInitialized = false;
  /** 是否已解析过（防止重复解析） */
  let hasParsed = false;
  
  // ==================== 初始化 ====================
  
  /**
   * 初始化扩展
   */
  async function init() {
    console.log('[LCSC读取器] 正在初始化...');
    
    // 检查URL是否匹配
    if (!URL_PATTERN.test(window.location.href)) {
      console.log('[LCSC读取器] URL不匹配详情页模式，跳过');
      console.log('[LCSC读取器] 当前URL: ' + window.location.href);
      console.log('[LCSC读取器] 期望模式: ' + URL_PATTERN.toString());
      return;
    }
    
    console.log('[LCSC读取器] URL匹配成功!');
    
    // 加载Layer模块
    await loadLayers();
    
    // 初始化UI
    initUI();
    
    // 等待页面渲染完成后解析一次
    waitForPageReady();
    
    isInitialized = true;
    console.log('[LCSC读取器] 初始化完成');
  }
  
  /**
   * 等待页面数据加载完成后解析一次
   * 简单时序：页面加载 -> 等待数据 -> 解析 -> 完成
   */
  function waitForPageReady() {
    // 方案1: 等待一小段时间让页面渲染（简单可靠）
    setTimeout(() => {
      console.log('[LCSC读取器] 开始解析页面...');
      parseCurrentPage();
      console.log('[LCSC读取器] 解析完成');
    }, 1500);
  }
  
  /**
   * 加载Layer模块
   */
  async function loadLayers() {
    console.log('[LCSC读取器] 加载Layer模块...');
    
    // Layer2: DOM解析逻辑
    if (typeof window.Layer2_funcHandle !== 'undefined') {
      Layer2 = window.Layer2_funcHandle;
      console.log('[LCSC读取器] Layer2已加载');
    } else {
      // 尝试从全局获取
      try {
        Layer2 = {
          parseComponentData: window.parseComponentData || function() { return null; },
          URL_MATCH_PATTERN: window.URL_MATCH_PATTERN || []
        };
        console.log('[LCSC读取器] Layer2已创建(备选)');
      } catch (e) {
        console.warn('[LCSC读取器] Layer2加载失败:', e);
      }
    }
    
    // Layer3: UI界面
    if (typeof window.Layer3_UI !== 'undefined') {
      Layer3 = window.Layer3_UI;
      console.log('[LCSC读取器] Layer3已加载');
    } else {
      console.warn('[LCSC读取器] Layer3未加载 - 脚本执行顺序问题');
    }
  }
  
  /**
   * 初始化UI面板
   */
  function initUI() {
    if (!Layer3) {
      console.warn('[LCSC读取器] Layer3未就绪，跳过UI初始化');
      return;
    }
    
    try {
      // 创建面板
      Layer3.createPanel();
      console.log('[LCSC读取器] UI面板已创建');
    } catch (e) {
      console.error('[LCSC读取器] UI初始化失败:', e);
    }
  }
  
  // ==================== DOM监听（已移除）====================
  
  /**
   * 已移除：不再使用MutationObserver持续监听
   * 原因：导致反复解析和日志输出
   * 现在逻辑：页面加载完成后只解析一次
   */
  function setupObserver() {
    // 已废弃 - 不再需要
    console.log('[LCSC读取器] DOM监听已禁用（单次解析模式）');
  }
  
  // ==================== 解析逻辑 ====================
  
  /**
   * 解析当前页面
   */
  function parseCurrentPage() {
    try {
      const data = extractComponentData();
      
      if (data) {
        currentComponentData = data;
        
        // 打印JSON到console
        console.log('%c===== LCSC元器件数据 =====', 'color: purple; font-weight: bold;');
        console.log(JSON.stringify(data, null, 2));
        console.log('%c============================', 'color: purple;');
        
        // 更新UI
        updatePanel(data);
      } else {
        console.log('[LCSC读取器] 未提取到有效数据');
      }
    } catch (e) {
      console.error('[LCSC读取器] 解析失败:', e);
    }
  }
  
  /**
   * 从页面提取元器件数据
   * 策略：优先从页面嵌入的JSON中提取，备选使用DOM选择器
   * @returns {Object} 元器件数据
   */
  function extractComponentData() {
    console.log('[LCSC读取器] 开始提取数据...');
    
    const data = {
      // 元件名称
      name: null,
      // 制造商
      manufacturer: null,
      // 描述
      description: null,
      // 立创编号
      lcsc_number: null,
      // 封装
      package: null,
      // 价格(第一个梯度)
      price: null,
      // 图片URL
      image_url: null,
      // 商品参数
      params: {},
      // 完整原始数据(用于调试)
      _raw: null
    };
    
    // ==================== 方法1: 从嵌入JSON中提取 ====================
    const embeddedData = extractFromEmbeddedJson();
    
    if (embeddedData) {
      console.log('[LCSC读取器] 从嵌入JSON提取成功:', embeddedData);
      
      // 映射JSON字段到数据结构
      data.name = embeddedData.productName || embeddedData.productModel || null;
      data.lcsc_number = embeddedData.productNumber || embeddedData.productNo || null;
      data.manufacturer = embeddedData.brandName || embeddedData.mfrName || null;
      data.package = embeddedData.encapsulationModel || embeddedData.encapsulation || null;
      data.description = embeddedData.remark || embeddedData.description || null;
      data.price = embeddedData.lowestPrice || embeddedData.price || null;
      data._raw = embeddedData;
      
      // 提取图片URL (可能是数组)
      if (embeddedData.luceneBreviaryImageUrls) {
        const imgUrls = embeddedData.luceneBreviaryImageUrls.split('< $>');
        if (imgUrls.length > 0) {
          data.image_url = imgUrls[0];
        }
      }
      
      // 提取参数
      if (embeddedData.productParameterList) {
        embeddedData.productParameterList.forEach(param => {
          if (param.parameterName && param.parameterValue) {
            data.params[param.parameterName] = param.parameterValue;
          }
        });
      }
      
      // 提取价格梯度
      if (embeddedData.priceStepList) {
        data.price_step = embeddedData.priceStepList;
      }
    }
    
    // ==================== 方法2: DOM选择器备选 ====================
    // 如果JSON提取失败，使用DOM选择器
    if (!data.name && !data.lcsc_number) {
      console.log('[LCSC读取器] JSON提取失败，尝试DOM选择器...');
      extractFromDOM(data);
    }
    
    // ==================== 尝试从页面文本中补充立创编号 ====================
    if (!data.lcsc_number) {
      const allText = document.body?.innerText || '';
      const lcscMatch = allText.match(/C\d{6,}/);
      if (lcscMatch) {
        console.log('[LCSC读取器] 从页面文本中找到立创编号:', lcscMatch[0]);
        data.lcsc_number = lcscMatch[0];
      }
    }
    
    // 检查是否有有效数据
    if (!data.name && !data.lcsc_number) {
      console.log('[LCSC读取器] 无法提取有效数据');
      return null;
    }
    
    console.log('[LCSC读取器] 提取完成:', data);
    return data;
  }
  
  /**
   * 从页面嵌入的JSON中提取数据
   * 立创商城页面在script标签中嵌入 productRecord 等数据
   * @returns {Object|null} 提取的数据或null
   */
  function extractFromEmbeddedJson() {
    try {
      // 方法1: 从页面的__NEXT_DATA__或props中提取
      // 页面中有类似: {"props":{"pageProps":{"webData":{"productRecord":{...}}}}}
      
      // 搜索包含productRecord的script标签
      const scripts = document.querySelectorAll('script');
      for (const script of scripts) {
        const text = script.textContent || '';
        
        // 查找包含productRecord的JSON
        if (text.includes('"productRecord"') || text.includes('productRecord')) {
          try {
            // 尝试提取JSON对象
            const jsonMatch = text.match(/\{[\s\S]*"props"[\s\S]*\}\s*\}[\s\S]*\}[\s\S]*\}[\s\S]*\}[\s\S]*\}[\s\S]*\}/);
            if (jsonMatch) {
              const json = JSON.parse(jsonMatch[0]);
              
              // 导航到productRecord
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
      
      // 方法2: 从页面innerText中提取JSON片段
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
  
  /**
   * 从DOM选择器提取数据(备选方案)
   * @param {Object} data - 数据对象
   */
  function extractFromDOM(data) {
    // 获取页面所有文本
    const allText = document.body?.innerText || '';
    console.log('[LCSC读取器] DOM提取: 分析页面文本...');
    
    // 1. 提取元件名称 (从h1标题)
    const titleEl = document.querySelector('h1');
    if (titleEl) {
      data.name = titleEl.textContent.trim();
      console.log('[LCSC读取器] DOM提取: 找到名称 =', data.name);
    }
    
    // 2. 提取立创编号 - 页面格式: 商品编号C720477 或 C720477
    // 使用多个模式匹配
    const lcscPatterns = [
      /商品编号\s*C(\d+)/,           // 商品编号C720477
      /C(\d{6,})/,                   // C720477
      /立创编号[：:]?\s*C?(\d+)/      // 立创编号: C720477
    ];
    for (const pattern of lcscPatterns) {
      const match = allText.match(pattern);
      if (match) {
        data.lcsc_number = match[1] || match[0];
        console.log('[LCSC读取器] DOM提取: 找到编号 =', data.lcsc_number);
        break;
      }
    }
    
    // 3. 提取制造商 - 页面格式: 品牌名称XUNPU(讯普)
    const brandPatterns = [
      /品牌名称\s*([^\n\r]+?)(?=商品|$)/,  // 品牌名称XUNPU(讯普)商品型号
      /制造商[：:]\s*([^\n\r]+)/,
      /品牌[：:]\s*([^\n\r]+)/
    ];
    for (const pattern of brandPatterns) {
      const match = allText.match(pattern);
      if (match) {
        data.manufacturer = match[1].trim().substring(0, 50);  // 限制长度
        console.log('[LCSC读取器] DOM提取: 找到制造商 =', data.manufacturer);
        break;
      }
    }
    
    // 4. 提取封装 - 页面格式: 商品封装SMD,4x3mm
    const pkgPatterns = [
      /商品封装\s*([^\n\r]+?)(?=商品|$)/,  // 商品封装SMD,4x3mm商品
      /封装[：:]\s*([^\n\r]+)/
    ];
    for (const pattern of pkgPatterns) {
      const match = allText.match(pattern);
      if (match) {
        data.package = match[1].trim();
        console.log('[LCSC读取器] DOM提取: 找到封装 =', data.package);
        break;
      }
    }
    
    // 5. 提取价格 - 页面格式: 10+￥0.28557 或 梯度折扣价原价
    const pricePatterns = [
      /(\d+)\+.*?￥([\d.]+)/,  // 10+￥0.28557
      /原价.*?￥([\d.]+)/,
      /价格[：:]\s*￥?([\d.]+)/
    ];
    for (const pattern of pricePatterns) {
      const match = allText.match(pattern);
      if (match) {
        data.price = parseFloat(match[1]);
        console.log('[LCSC读取器] DOM提取: 找到价格 =', data.price);
        break;
      }
    }
    
    // 6. 提取图片
    const mainImg = document.querySelector('.goods-img img, .product-img img, img[alt*="产品"]');
    if (mainImg && mainImg.src) {
      data.image_url = mainImg.src;
      console.log('[LCSC读取器] DOM提取: 找到图片 =', data.image_url);
    }
    
    // 7. 提取参数表格
    const paramTables = document.querySelectorAll('[class*="parameter"], [class*="spec"], table');
    let paramCount = 0;
    paramTables.forEach(table => {
      const rows = table.querySelectorAll('tr');
      rows.forEach(row => {
        const cells = row.querySelectorAll('td, th');
        if (cells.length >= 2) {
          const key = cells[0].textContent.trim();
          const value = cells[1].textContent.trim();
          if (key && value && key.length < 50) {
            data.params[key] = value;
            paramCount++;
          }
        }
      });
    });
    if (paramCount > 0) {
      console.log('[LCSC读取器] DOM提取: 找到', paramCount, '个参数');
    }
  }
  
  // ==================== UI更新 ====================
  
  /**
   * 更新面板显示
   * @param {Object} data - 元器件数据
   */
  function updatePanel(data) {
    if (!Layer3 || !Layer3.togglePanel) {
      console.warn('[LCSC读取器] Layer3未就绪，无法更新面板');
      return;
    }
    
    try {
      const panel = document.getElementById('layer3-ui-panel');
      if (!panel) {
        Layer3.createPanel();
      }
      
      // 构建面板内容
      const content = buildPanelContent(data);
      
      // 更新面板HTML
      const panelEl = document.getElementById('layer3-ui-panel');
      if (panelEl) {
        panelEl.innerHTML = content;
        
        // 绑定按钮事件
        bindButtonEvents(data);
        
        // 显示面板
        Layer3.togglePanel(true);
        console.log('[LCSC读取器] 面板已显示');
      }
    } catch (e) {
      console.error('[LCSC读取器] 更新面板失败:', e);
    }
  }
  
  /**
   * 构建面板HTML内容
   * @param {Object} data - 元器件数据
   * @returns {string} HTML内容
   */
  function buildPanelContent(data) {
    const jsonStr = JSON.stringify(data, null, 2);
    
    return `
      <div class="lcsc-panel">
        <div class="panel-header">
          <h3>LCSC元器件详情</h3>
          <button class="panel-toggle" onclick="Layer3 && Layer3.togglePanel && Layer3.togglePanel()">收起</button>
        </div>
        <div class="panel-content">
          <div class="data-field">
            <label>名称:</label>
            <span>${escapeHtml(data.name || '-')}</span>
          </div>
          <div class="data-field">
            <label>编号:</label>
            <span>${escapeHtml(data.lcsc_number || '-')}</span>
          </div>
          <div class="data-field">
            <label>制造商:</label>
            <span>${escapeHtml(data.manufacturer || '-')}</span>
          </div>
          <div class="data-field">
            <label>封装:</label>
            <span>${escapeHtml(data.package || '-')}</span>
          </div>
          <div class="data-field">
            <label>价格:</label>
            <span>${data.price ? '¥' + data.price : '-'}</span>
          </div>
          ${data.image_url ? `<div class="data-field"><img src="${escapeHtml(data.image_url)}" style="max-width:100px;max-height:100px;"/></div>` : ''}
        </div>
        <div class="panel-actions">
          <button class="btn-copy" onclick="window.copyComponentJson(${encodeURIComponent(jsonStr)})">复制JSON</button>
          <button class="btn-add" onclick="window.addComponentToSystem()">添加到系统</button>
        </div>
      </div>
    `;
  }
  
  /**
   * 绑定按钮事件
   * @param {Object} data - 元器件数据
   */
  function bindButtonEvents(data) {
    // 复制JSON
    window.copyComponentJson = function(jsonStr) {
      const json = typeof jsonStr === 'string' ? decodeURIComponent(jsonStr) : JSON.stringify(jsonStr);
      navigator.clipboard.writeText(json).then(() => {
        alert('JSON已复制到剪贴板');
      }).catch(err => {
        console.error('复制失败:', err);
        alert('复制失败');
      });
    };
    
    // 添加到系统
    window.addComponentToSystem = function() {
      addComponent(data);
    };
  }
  
  /**
   * 添加元器件到系统
   * @param {Object} data - 元器件数据
   */
  async function addComponent(data) {
    try {
      // 通过background脚本发送请求
      const response = await chrome.runtime.sendMessage({
        type: 'addComponent',
        data: data
      });
      
      if (response && response.success) {
        alert('添加成功！');
      } else {
        alert('添加失败: ' + (response?.error || '未知错误'));
      }
    } catch (e) {
      console.error('添加失败:', e);
      alert('添加失败: ' + e.message);
    }
  }
  
  /**
   * HTML转义
   * @param {string} str - 原始字符串
   * @returns {string} 转义后的字符串
   */
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
  
  // ==================== 启动 ====================
  
  console.log('[LCSC读取器] 等待页面加载...');
  
  // DOM加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM已加载，等待一小段时间确保页面完全渲染
    setTimeout(init, 1500);
  }
  
})();
