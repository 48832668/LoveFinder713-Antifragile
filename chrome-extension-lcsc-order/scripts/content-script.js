/**
 * LCSC Order Parser - Content Script
 * Auto-expands orders, handles pagination, and displays order data
 */

(function() {
  'use strict';

  // ========== State Management ==========
  const state = {
    orders: [],
    isProcessing: false,
    currentPage: 1,
    totalPages: 1,
    hasNextPage: false,
    processedOrderIds: new Set()
  };

  // ========== Configuration ==========
  const CONFIG = {
    // Button to expand order details (contains "查看全部商品" text)
    expandButtonText: '查看全部商品',
    // Button to collapse order details (contains "收起" text)
    collapseButtonText: '收起',
    // Pagination selectors
    paginationSelector: '.ant-pagination',
    nextButtonSelector: '.ant-pagination-next',
    // Debounce settings
    debounceDelay: 800,
    expandDelay: 500,
    pageLoadDelay: 1200,
    observerTimeout: 5000,
    // Order list container
    orderListSelector: '.ant-spin-container > ul, .ant-spin-container ul',
    // Order item selector
    orderItemSelector: 'li[class*="mt-"], li[style*="margin-top"]'
  };

  // ========== Utility Functions ==========
  
  /**
   * Find element by text content within a specific root
   */
  function findElementByText(root, tagName, text) {
    const elements = root.querySelectorAll(tagName);
    for (const el of elements) {
      if (el.textContent.includes(text)) {
        return el;
      }
    }
    return null;
  }

  /**
   * Find all elements by text content within a specific root
   */
  function findAllByText(root, tagName, text) {
    const elements = root.querySelectorAll(tagName);
    return Array.from(elements).filter(el => el.textContent.includes(text));
  }

  /**
   * Clean text content
   */
  function cleanText(text) {
    if (!text) return '';
    return text.trim().replace(/\s+/g, ' ');
  }

  /**
   * Parse quantity from text (e.g., "5个" -> 5)
   */
  function parseQuantity(text) {
    if (!text) return 0;
    const match = text.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }

  /**
   * Parse price from text (e.g., "￥0.45809" -> 0.45809)
   */
  function parsePrice(text) {
    if (!text) return 0;
    const match = text.match(/[￥$]?\s*([\d.]+)/);
    return match ? parseFloat(match[1]) : 0;
  }

  /**
   * Wait for specified milliseconds
   */
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // ========== Order Parsing ==========

  /**
   * Parse a single component from the DOM
   * Expected fields: 元件类型, 元件名称, 元件编号, 元件封装, 制造商, 数量, 总价, 图片链接
   */
  function parseComponent(componentSection, debugIndex, orderNumber) {
    try {
      // 尝试查找图片 - 可能在a标签内，ul之前
      let imageUrl = '';
      const imgEl = componentSection.querySelector('img');
      if (imgEl) {
        imageUrl = imgEl.src || imgEl.getAttribute('data-src') || '';
      }

      // 获取所有ul元素
      const allUls = componentSection.querySelectorAll('ul');
      if (allUls.length < 2) {
        console.log(`[parseComponent #${debugIndex}] Not enough uls found`);
        return null;
      }
      
      // 第一个ul包含: 名称, 型号/封装, 制造商, 编号
      const basicInfoUl = allUls[0];
      const basicLiList = basicInfoUl.querySelectorAll('li');
      console.log(`[parseComponent #${debugIndex}] Basic info: ${basicLiList.length} li elements`);
      
      if (basicLiList.length < 4) {
        console.log(`[parseComponent #${debugIndex}] Not enough basic info li elements`);
        return null;
      }

      // li[0]: 元件名称/类型 (可能包含类型，如 "功率电感 / 6.8uH ±20% 编带" 或 "电阻 / 0402 10K")
      // 需要处理 &nbsp;/&nbsp; 分隔符
      const fullNameRaw = basicLiList[0]?.textContent || '';
      const fullName = cleanText(fullNameRaw).replace(/\s*\/\s*/g, '/');
      // 提取元件类型（第一个"/"之前的部分）
      const componentType = fullName.split('/')[0].trim();
      // 提取元件名称（第一个"/"之后的部分，可能包含规格）
      const componentName = fullName.includes('/') ? fullName.split('/').slice(1).join('/').trim() : fullName;

      // li[1]: 型号 / 封装 (如 "MMPC1265-6R8MT / SMD,13.5x12.5mm" 或 "TYPE-C 16P QTWT / SMD")
      const fullTypeTextRaw = basicLiList[1]?.textContent || '';
      const fullTypeText = cleanText(fullTypeTextRaw).replace(/\s*\/\s*/g, '/');
      // 提取型号（第一个"/"之前的部分）
      const model = fullTypeText.split('/')[0].trim();
      // 提取封装（第一个"/"之后的部分）
      const packageType = fullTypeText.includes('/') ? fullTypeText.split('/').slice(1).join('/').trim() : '';

      // li[2]: 制造商
      const manufacturer = cleanText(basicLiList[2]?.textContent || '');

      // li[3]: 编号 - 优先从图片链接的title获取，其次从ul li获取
      // 方法1: 从图片链接的title属性获取 (如 "6.8uH ±20% 编带(商品编号:C49308451)")
      let partNumber = '';
      const imgLink = componentSection.querySelector('a img')?.closest('a');
      if (imgLink) {
        const imgTitle = imgLink.getAttribute('title') || '';
        const partNumMatch = imgTitle.match(/商品编号[：:]([^)]+)/);
        if (partNumMatch) {
          partNumber = cleanText(partNumMatch[1]);
        }
      }
      
      // 方法2: 如果没找到，从ul li结构获取 - 需要获取"编号："后面那个span
      if (!partNumber) {
        const partNumSpan = basicInfoUl.querySelector('[class*="949FAB"]');
        if (partNumSpan) {
          // 获取下一个兄弟元素
          const nextSibling = partNumSpan.nextElementSibling;
          if (nextSibling) {
            partNumber = cleanText(nextSibling.textContent || '');
          }
        }
      }

      // 第二个ul包含: 商品单价, 购买数量, 商品金额 (可能还有 原价)
      // 通过文本内容定位正确的li元素，而不是依赖固定索引
      let priceUl = null;
      let priceLiList = [];
      
      for (const singleUl of allUls) {
        const textContent = singleUl.textContent || '';
        if (textContent.includes('商品单价')) {
          priceUl = singleUl;
          priceLiList = singleUl.querySelectorAll('li');
          break;
        }
      }

      if (!priceUl || priceLiList.length < 3) {
        console.log(`[parseComponent #${debugIndex}] No price ul found`);
        return null;
      }

      // 通过文本内容查找对应的li元素
      let priceText = '';
      let quantityText = '';
      let amountText = '';
      
      for (const li of priceLiList) {
        const liText = li.textContent || '';
        if (liText.includes('商品单价')) {
          priceText = cleanText(liText.replace('商品单价：', ''));
        } else if (liText.includes('购买数量')) {
          quantityText = cleanText(liText.replace('购买数量：', ''));
        } else if (liText.includes('商品金额')) {
          amountText = cleanText(liText.replace('商品金额：', ''));
        }
      }

      // 构建元件信息对象
      const component = {
        // 元件类型
        componentType: componentType || 'Unknown',
        // 元件名称
        componentName: componentName || fullName,
        // 元件编号
        partNumber: partNumber,
        // 元件封装
        package: packageType,
        // 制造商
        manufacturer: manufacturer,
        // 型号
        model: model,
        // 数量
        quantity: parseQuantity(quantityText),
        // 单价
        unitPrice: parsePrice(priceText),
        // 总价
        totalPrice: parsePrice(amountText),
        // 图片链接
        imageUrl: imageUrl
      };

      // 调试输出：打印每条元器件的详细信息
      console.log(`========== 元件信息 [订单: ${orderNumber}] ==========`);
      console.log(`元件类型: ${component.componentType}`);
      console.log(`元件名称: ${component.componentName}`);
      console.log(`元件编号: ${component.partNumber}`);
      console.log(`元件封装: ${component.package}`);
      console.log(`制造商: ${component.manufacturer}`);
      console.log(`型号: ${component.model}`);
      console.log(`数量: ${component.quantity}`);
      console.log(`单价: ${component.unitPrice}`);
      console.log(`总价: ${component.totalPrice}`);
      console.log(`图片链接: ${component.imageUrl || '(无)'}`);
      console.log(`来源订单编号: ${orderNumber}`);
      console.log('================================================');

      return component;
    } catch (e) {
      console.error('Error parsing component:', e);
      return null;
    }
  }

  /**
   * Parse a single order from the DOM
   */
  function parseOrder(orderLi) {
    try {
      // Get order number
      const orderNumEl = orderLi.querySelector('a[class*="0093E6"]');
      const orderNumber = cleanText(orderNumEl?.textContent || '');
      
      if (!orderNumber) return null;
      
      // Skip if already processed
      if (state.processedOrderIds.has(orderNumber)) {
        return null;
      }

      // Get order date from header section
      const headerSection = orderLi.querySelector('section:first-child, section[class*="rounded-tr"]');
      const dateEl = headerSection?.querySelector('span:first-child');
      const orderDate = cleanText(dateEl?.textContent || '');

      // Get order status - 支持常规订单和已取消订单
      // 常规订单: section with w-[22.8%]
      // 已取消订单: p 标签包含 "已取消"
      let statusSection = orderLi.querySelector('[class*="22.8"] p');
      if (!statusSection) {
        // 尝试其他选择器
        statusSection = orderLi.querySelector('.cursor-default p, .cursor-default span, [class*="w-"] p');
      }
      // 如果还没找到，尝试查找包含"已取消"的文本
      if (!statusSection || !statusSection.textContent.includes('已')) {
        const allPs = orderLi.querySelectorAll('p');
        for (const p of allPs) {
          const text = p.textContent || '';
          if (text.includes('已取消') || text.includes('已完成') || text.includes('待付款') || text.includes('已发货')) {
            statusSection = p;
            break;
          }
        }
      }
      const status = cleanText(statusSection?.textContent || '');
      console.log(`[parseOrder ${orderNumber}] Status found: "${status}"`);

      // Get receiver and total amount from the info section
      const infoSection = orderLi.querySelector('[class*="18.9"]');
      const receiverEl = infoSection?.querySelector('li:first-child span:last-child');
      const totalEl = infoSection?.querySelector('li:last-child span:last-child');
      const receiver = cleanText(receiverEl?.textContent || '');
      const totalAmount = parsePrice(totalEl?.textContent || '');

      // Get components section (58% width section)
      const componentsSection = orderLi.querySelector('[class*="58%"]');
      console.log(`[parseOrder ${orderNumber}] componentsSection found:`, !!componentsSection);
      if (!componentsSection) return null;
      
      // Get component sections - they are sections with class containing "flex" and "justify-between"
      // Each component has 2 children: a nested section (basic info) and a ul (price info)
      const allSections = componentsSection.querySelectorAll('section[class*="flex"][class*="justify-between"]');
      console.log(`[parseOrder ${orderNumber}] Found ${allSections.length} component sections`);
      
      const components = [];
      for (let i = 0; i < allSections.length; i++) {
        const compSection = allSections[i];
        // Check if this section has 2 direct children (section for basic info + ul for price)
        const directChildren = compSection.children;
        if (directChildren.length >= 2) {
          const component = parseComponent(compSection, i, orderNumber);
          if (component) {
            components.push(component);
          }
        }
      }
      console.log(`[parseOrder ${orderNumber}] Parsed ${components.length} components`);

      // Calculate totals
      const totalQuantity = components.reduce((sum, c) => sum + c.quantity, 0);

      // Get component types (unique) - using componentType field
      const typeCounts = {};
      components.forEach(c => {
        const type = c.componentType || 'Unknown';
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      });

      // Check if this order has an expand button
      const hasExpandButton = findElementByText(orderLi, 'button', CONFIG.expandButtonText) !== null;

      state.processedOrderIds.add(orderNumber);

      return {
        orderNumber,
        orderDate,
        status,
        receiver,
        totalAmount,
        totalQuantity,
        componentTypes: typeCounts,
        components,
        hasExpandButton
      };
    } catch (e) {
      console.error('Error parsing order:', e);
      return null;
    }
  }

  /**
   * Parse all orders from current page
   */
  function parseAllOrders() {
    // Try multiple selectors for order list
    let orderList = document.querySelector('.ant-spin-container > ul');
    if (!orderList) orderList = document.querySelector('.ant-spin-container ul');
    
    if (!orderList) {
      console.log('Order list not found');
      return [];
    }

    // Get all li elements that are direct children
    const orderItems = orderList.querySelectorAll(':scope > li');
    console.log('Found li items:', orderItems.length);
    
    const orders = [];

    for (const orderLi of orderItems) {
      // Try multiple selectors for order link
      const orderNumEl = orderLi.querySelector('a[style*="color"], a[class*="text"], a[href]');
      console.log('Checking li, found link:', orderNumEl ? orderNumEl.textContent?.substring(0, 20) : 'null');
      if (!orderNumEl) continue;
      
      const order = parseOrder(orderLi);
      if (order) {
        orders.push(order);
      }
    }

    console.log('Total orders parsed:', orders.length);
    return orders;
  }

  // ========== Expand Button Handling ==========

  /**
   * Find expand button within a specific order element
   */
  function findExpandButtonInOrder(orderElement) {
    return findElementByText(orderElement, 'button', CONFIG.expandButtonText);
  }

  /**
   * Click expand button for a single order and wait for it to expand
   */
  async function expandSingleOrder(orderElement) {
    const btn = findExpandButtonInOrder(orderElement);
    if (!btn) return false;
    
    // Check if button is visible
    if (btn.offsetParent === null || btn.disabled) {
      return false;
    }
    
    // Click the button
    btn.click();
    console.log('Clicked expand button for order');
    
    // Wait for expansion to complete
    await wait(CONFIG.expandDelay);
    return true;
  }

  /**
   * Expand all orders on current page that have expand buttons
   * Process each order individually
   */
  async function expandAllOrders() {
    const orderList = document.querySelector('.ant-spin-container ul');
    if (!orderList) return 0;

    const orderItems = orderList.querySelectorAll('li');
    let expandedCount = 0;

    for (const orderLi of orderItems) {
      // Skip if not an order item
      const orderNumEl = orderLi.querySelector('a[class*="0093E6"]');
      if (!orderNumEl) continue;

      // Check if this order has an expand button
      const hasExpand = findExpandButtonInOrder(orderLi);
      if (hasExpand) {
        const expanded = await expandSingleOrder(orderLi);
        if (expanded) expandedCount++;
      }
    }

    return expandedCount;
  }

  /**
   * Find collapse button within a specific order element
   */
  function findCollapseButtonInOrder(orderElement) {
    return findElementByText(orderElement, 'button', CONFIG.collapseButtonText);
  }

  /**
   * Collapse all orders on current page that have collapse buttons
   */
  async function collapseAllOrders() {
    const orderList = document.querySelector('.ant-spin-container ul');
    if (!orderList) return 0;

    const orderItems = orderList.querySelectorAll('li');
    let collapsedCount = 0;

    for (const orderLi of orderItems) {
      // Skip if not an order item
      const orderNumEl = orderLi.querySelector('a[class*="0093E6"]');
      if (!orderNumEl) continue;

      // Check if this order has a collapse button
      const collapseBtn = findCollapseButtonInOrder(orderLi);
      if (collapseBtn && collapseBtn.offsetParent !== null && !collapseBtn.disabled) {
        collapseBtn.click();
        collapsedCount++;
      }
    }

    console.log(`Collapsed ${collapsedCount} orders`);
    return collapsedCount;
  }


  // ========== DOM Stability Detection ==========

  /**
   * Wait for DOM to stabilize after mutations
   */
  function waitForDOMStable(callback) {
    return new Promise((resolve) => {
      let stableTimeout;
      let observer;
      let resolved = false;

      const doResolve = () => {
        if (resolved) return;
        resolved = true;
        observer?.disconnect();
        clearTimeout(stableTimeout);
        callback();
        resolve();
      };

      const checkStability = () => {
        clearTimeout(stableTimeout);
        stableTimeout = setTimeout(doResolve, CONFIG.debounceDelay);
      };

      observer = new MutationObserver(checkStability);
      
      // Start observing
      const container = document.querySelector('.ant-spin-container');
      if (container) {
        observer.observe(container, {
          childList: true,
          subtree: true,
          attributes: true
        });
      }

      // Fallback timeout
      setTimeout(doResolve, CONFIG.observerTimeout);
    });
  }

  // ========== Pagination ==========

  /**
   * Check if there are more pages
   */
  function checkPagination() {
    const pagination = document.querySelector(CONFIG.paginationSelector);
    if (!pagination) {
      state.hasNextPage = false;
      return false;
    }

    // Look for next button
    const nextBtn = pagination.querySelector(CONFIG.nextButtonSelector);
    if (nextBtn) {
      const isDisabled = nextBtn.getAttribute('aria-disabled') === 'true';
      state.hasNextPage = !isDisabled;
    } else {
      state.hasNextPage = false;
    }

    // Try to get total pages from pagination info
    const pageItems = pagination.querySelectorAll('.ant-pagination-item');
    if (pageItems.length > 0) {
      const lastPage = parseInt(pageItems[pageItems.length - 1].getAttribute('title') || pageItems[pageItems.length - 1].textContent, 10);
      if (!isNaN(lastPage)) {
        state.totalPages = lastPage;
      }
      
      // Get current page
      const activeItem = pagination.querySelector('.ant-pagination-item-active');
      if (activeItem) {
        state.currentPage = parseInt(activeItem.getAttribute('title') || activeItem.textContent, 10);
      }
    }

    return state.hasNextPage;
  }

  /**
   * Click next page button
   */
  async function clickNextPage() {
    if (!state.hasNextPage) {
      return false;
    }

    const nextBtn = document.querySelector(CONFIG.nextButtonSelector);
    if (nextBtn && nextBtn.offsetParent !== null) {
      nextBtn.click();
      console.log('Clicked next page button');
      // Wait for page to load
      await wait(CONFIG.pageLoadDelay);
      return true;
    }

    return false;
  }

  // ========== Main Processing Loop ==========

  /**
   * Process current page - expand + parse
   */
  async function processCurrentPage() {
    // Step 1: Expand all orders that have expand buttons
    const expanded = await expandAllOrders();
    console.log(`Expanded ${expanded} orders`);

    // Step 2: Wait for DOM to stabilize after expansions
    await waitForDOMStable(() => {});
    
    // Step 3: Parse orders
    const newOrders = parseAllOrders();
    
    // Add to state
    for (const order of newOrders) {
      const existingIndex = state.orders.findIndex(o => o.orderNumber === order.orderNumber);
      if (existingIndex >= 0) {
        state.orders[existingIndex] = order;
      } else {
        state.orders.push(order);
      }
    }

    console.log(`Parsed ${newOrders.length} orders, total: ${state.orders.length}`);
    
    // Step 4: Collapse orders after parsing (to reduce visual clutter)
    await collapseAllOrders();
    
    // Step 5: Check for next page
    const hasMore = checkPagination();
    
    return {
      newOrders,
      hasMorePages: hasMore,
      currentPage: state.currentPage,
      totalPages: state.totalPages
    };
  }

  /**
   * Process all pages
   */
  async function processAllPages() {
    if (state.isProcessing) {
      console.log('Already processing');
      return;
    }

    state.isProcessing = true;
    updateStatus('正在处理...');
    
    // Add processing indicator
    const panel = document.getElementById('lcsc-order-panel');
    if (panel) panel.classList.add('lcsc-processing');

    try {
      let pageResult;
      
      do {
        pageResult = await processCurrentPage();
        updateUI();
        
        if (pageResult.hasMorePages) {
          updateStatus(`正在翻页... 第${pageResult.currentPage + 1}/${pageResult.totalPages}页`);
          await clickNextPage();
        }
      } while (pageResult.hasMorePages);

      updateStatus(`完成! 共 ${state.orders.length} 个订单`);
    } catch (e) {
      console.error('Error processing pages:', e);
      updateStatus('处理出错');
    } finally {
      state.isProcessing = false;
      if (panel) panel.classList.remove('lcsc-processing');
    }
  }

  // ========== UI Functions ==========

  /**
   * Send component data to ElecAntifreeze API
   */
  async function addComponentToSystem(comp, btnElement) {
    const originalText = btnElement.textContent;
    btnElement.disabled = true;
    btnElement.textContent = '添加中...';

    try {
      // Build component data according to API requirements
      const componentData = {
        name: comp.componentName || comp.model || '',
        type: comp.componentType || '',
        package: comp.package || '',
        stock: comp.quantity || 0,
        totalPrice: comp.totalPrice || 0,
        // Additional fields as custom properties
        model: comp.model || '',
        partNumber: comp.partNumber || '',
        manufacturer: comp.manufacturer || '',
        unitPrice: comp.unitPrice || 0,
        imageUrl: comp.imageUrl || ''
      };

      // 调试信息：显示发送到 API 的完整 JSON 数据
      console.log('========== [LCSC扩展] 发送POST请求 ==========');
      console.log('API地址: http://localhost:11451/addComp');
      console.log('发送的JSON数据:', componentData);
      console.log('JSON字符串:', JSON.stringify(componentData, null, 2));
      console.log('===============================================');

      // 通过后台脚本发送请求，绕过 CORS
      const result = await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(
          { type: 'addComponent', data: componentData },
          (response) => {
            if (chrome.runtime.lastError) {
              reject(new Error(chrome.runtime.lastError.message));
            } else if (response && response.error) {
              reject(new Error(response.error));
            } else {
              resolve(response);
            }
          }
        );
      });
      
      if (result.success || result.data?.success) {
        btnElement.textContent = '已添加';
        btnElement.classList.add('success');
        console.log('Component added successfully:', result);
      } else {
        btnElement.textContent = '失败';
        btnElement.classList.add('error');
        console.error('Failed to add component:', result.error);
      }
    } catch (error) {
      btnElement.textContent = '错误';
      btnElement.classList.add('error');
      console.error('Error adding component:', error);
    }

    // Reset button after 2 seconds
    setTimeout(() => {
      btnElement.disabled = false;
      btnElement.textContent = originalText;
      btnElement.classList.remove('success', 'error');
    }, 2000);
  }

  /**
   * Create floating panel
   */
  function createFloatingPanel() {
    if (document.getElementById('lcsc-order-panel')) {
      return;
    }

    const panel = document.createElement('div');
    panel.id = 'lcsc-order-panel';
    panel.innerHTML = `
      <!-- 左侧收起/展开按钮 -->
      <div class="lcsc-collapse-toggle" id="lcsc-collapse-toggle" title="收起面板">
        <span id="lcsc-collapse-icon">◀</span>
        <span id="lcsc-collapse-text">收起</span>
      </div>
      <!-- 主面板内容 -->
      <div class="lcsc-panel-main">
        <div class="lcsc-panel-header lcsc-d-flex lcsc-justify-between lcsc-align-center">
          <h5 class="mb-0">LCSC 订单解析</h5>
          <div class="lcsc-header-actions">
            <button type="button" class="btn-close btn-close-white" id="lcsc-panel-close"></button>
          </div>
        </div>
      <div class="lcsc-panel-body">
        <div class="lcsc-row lcsc-g-0 lcsc-h-100">
          <!-- Left Panel: Order List -->
          <div class="lcsc-order-list-col" id="lcsc-order-list">
            <div class="list-group list-group-flush" id="order-list-container"></div>
          </div>
          <!-- Right Panel -->
          <div class="lcsc-right-panel">
            <!-- Order Summary -->
            <div class="lcsc-order-summary" id="lcsc-order-summary">
              <div class="text-muted small">选择订单查看详情</div>
            </div>
            <!-- Component Table -->
            <div class="lcsc-component-table" id="lcsc-component-table">
              <div class="table-responsive">
                <table class="table table-sm table-hover mb-0" id="component-table">
                  <thead class="table-light">
                    <tr>
                      <th>类型</th>
                      <th>名称</th>
                      <th>型号</th>
                      <th>编号</th>
                      <th>封装</th>
                      <th>制造商</th>
                      <th>数量</th>
                      <th>单价</th>
                      <th>总价</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody id="component-tbody"></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lcsc-panel-footer">
        <span id="lcsc-status" class="text-light small">点击刷新获取订单</span>
        <div class="lcsc-footer-actions">
          <button class="btn btn-sm btn-light me-2" id="lcsc-refresh-btn">刷新</button>
        </div>
      </div>
      </div>
    `;

    document.body.appendChild(panel);

    // Add event listeners
    document.getElementById('lcsc-panel-close').addEventListener('click', closePanel);
    document.getElementById('lcsc-refresh-btn').addEventListener('click', refreshOrders);
    // 左侧收起/展开按钮
    document.getElementById('lcsc-collapse-toggle').addEventListener('click', toggleCollapse);
  }

  /**
   * 关闭面板
   */
  function closePanel() {
    const panel = document.getElementById('lcsc-order-panel');
    if (panel) {
      panel.style.display = 'none';
    }
  }

  /**
   * 收起/展开面板
   */
  function toggleCollapse() {
    const panel = document.getElementById('lcsc-order-panel');
    const collapseToggle = document.getElementById('lcsc-collapse-toggle');
    const collapseIcon = document.getElementById('lcsc-collapse-icon');
    const collapseText = document.getElementById('lcsc-collapse-text');
    const mainContent = panel.querySelector('.lcsc-panel-main');
    
    if (panel && collapseToggle) {
      panel.classList.toggle('collapsed');
      
      if (panel.classList.contains('collapsed')) {
        // 收起状态
        if (mainContent) mainContent.style.display = 'none';
        collapseIcon.textContent = '▶';
        collapseText.textContent = '展开';
        collapseToggle.title = '展开面板';
      } else {
        // 展开状态
        if (mainContent) mainContent.style.display = 'flex';
        collapseIcon.textContent = '◀';
        collapseText.textContent = '收起';
        collapseToggle.title = '收起面板';
      }
    }
  }

  /**
   * Update UI with current orders
   */
  function updateUI() {
    const listContainer = document.getElementById('order-list-container');
    if (!listContainer) return;

    // Clear and rebuild order list
    listContainer.innerHTML = '';

    state.orders.forEach((order, index) => {
      const item = document.createElement('button');
      item.className = 'list-group-item list-group-item-action';
      item.type = 'button';
      item.dataset.index = index;
      item.innerHTML = `
        <div class="lcsc-d-flex lcsc-w-100 lcsc-justify-between">
          <small>${order.orderNumber}</small>
          <small class="text-muted">${order.components.length}项</small>
        </div>
        <small class="text-muted">${order.orderDate}</small>
      `;
      item.addEventListener('click', () => selectOrder(index));
      listContainer.appendChild(item);
    });
  }

  /**
   * Select an order and show details
   */
  function selectOrder(index) {
    const order = state.orders[index];
    if (!order) return;

    // Update active state in list
    document.querySelectorAll('#order-list-container .list-group-item').forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });

    // Update summary
    const summaryEl = document.getElementById('lcsc-order-summary');
    const typeSummary = Object.entries(order.componentTypes)
      .map(([type, count]) => `${type}: ${count}种`)
      .join(', ');

    summaryEl.innerHTML = `
      <div class="lcsc-d-flex lcsc-flex-column" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
        <div><small class="text-muted">订单号:</small> <strong>${order.orderNumber}</strong></div>
        <div><small class="text-muted">日期:</small> ${order.orderDate}</div>
        <div><small class="text-muted">状态:</small> ${order.status}</div>
        <div><small class="text-muted">收货人:</small> ${order.receiver}</div>
        <div style="grid-column: 1 / -1;"><small class="text-muted">元件种类:</small> ${typeSummary}</div>
        <div><small class="text-muted">总数量:</small> ${order.totalQuantity}个</div>
        <div style="grid-column: 1 / -1;"><small class="text-muted">总金额:</small> <strong class="text-danger">￥${order.totalAmount.toFixed(2)}</strong></div>
      </div>
    `;

    // Update component table
    const tbody = document.getElementById('component-tbody');
    tbody.innerHTML = '';

    order.components.forEach(comp => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${comp.componentType || '-'}</td>
        <td>${comp.componentName || '-'}</td>
        <td>${comp.model || '-'}</td>
        <td>${comp.partNumber || '-'}</td>
        <td>${comp.package || '-'}</td>
        <td>${comp.manufacturer || '-'}</td>
        <td>${comp.quantity || 0}</td>
        <td>￥${(comp.unitPrice || 0).toFixed(4)}</td>
        <td>￥${(comp.totalPrice || 0).toFixed(2)}</td>
        <td><button class="lcsc-add-btn" data-partnumber="${comp.partNumber || ''}">添加到系统</button></td>
      `;
      tbody.appendChild(row);
    });

    // Add event listeners for add buttons
    tbody.querySelectorAll('.lcsc-add-btn').forEach((btn, idx) => {
      btn.addEventListener('click', function() {
        const comp = order.components[idx];
        addComponentToSystem(comp, this);
      });
    });
  }

  /**
   * Update status text
   */
  function updateStatus(text) {
    const statusEl = document.getElementById('lcsc-status');
    if (statusEl) {
      statusEl.textContent = text;
    }
  }

  /**
   * Refresh orders - clear state and reprocess
   */
  function refreshOrders() {
    // Reset state
    state.orders = [];
    state.processedOrderIds.clear();
    state.currentPage = 1;
    state.totalPages = 1;
    state.hasNextPage = false;

    // Process all pages
    processAllPages();
  }

  // ========== Initialization ==========

  /**
   * Initialize the extension
   */
  function init() {
    // Check if we're on LCSC order page
    const isLCSCPage = window.location.href.includes('lcsc.com') || 
                       window.location.href.includes('szlcsc.com');
    const hasOrderContainer = document.querySelector('.ant-spin-container');
    
    console.log('LCSC Parser init:', { isLCSCPage, hasOrderContainer, href: window.location.href });
    
    if (!isLCSCPage && !hasOrderContainer) {
      console.log('Not on LCSC order page - container missing');
      return;
    }

    // Create floating panel
    createFloatingPanel();

    // Auto-process on load after a short delay
    setTimeout(() => {
      console.log('Starting refresh...');
      refreshOrders();
    }, 1500);

    console.log('LCSC Order Parser initialized');
  }

  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
