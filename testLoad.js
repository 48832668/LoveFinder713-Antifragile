(function() {
    'use strict';

    /**
     * 从立创商城商品页面提取完整信息
     * 包含：基础信息（名称、型号、编号、封装、描述）+ 详细参数表格中的键值对
     * 使用方法：在商品页面（如 https://item.szlcsc.com/*.html）的控制台中粘贴并运行
     * @returns {Object} 包含元器件信息的JSON对象
     */
    function extractSzlcscItemInfo() {
        // 定义基础信息字段配置 (键名已按新要求修改)
        const baseFieldConfig = [
            { key: 'manuModel', label: '元件型号' },          // 原 manufacturerModel
            { key: 'name', label: '元件名称' },               // 保持不变
            { key: 'lcsc_no', label: '商品编号' },            // 原 lcscPartNumber
            { key: 'package', label: '元件封装' },
            { key: 'description', label: '描述' }
        ];

        let result = {};

        // --- 1. 获取元件名称 (存储为name) ---
        const nameSelectors = [
            'h1.product-title',
            '.main-info h1',
            'h1',
            '.product-name',
            '.item-title'
        ];
        for (let selector of nameSelectors) {
            const element = document.querySelector(selector);
            if (element && element.innerText) {
                result.name = element.innerText.replace(/\s+/g, ' ').trim();
                break;
            }
        }
        // 备选：从标题提取
        if (!result.name) {
            const titleMatch = document.title.match(/^(.*?)[-_|]/);
            result.name = titleMatch ? titleMatch[1].trim() : document.title.split('-')[0].trim();
        }

        // --- 2. 获取描述 (关键修复：优先从 <main> 内寻找紧挨着“描述”标签的值) ---
        // 方法1 (最可靠)：查找包含“描述”文本的 dt 或 div 标签，获取其紧邻的兄弟元素或父级的下一个兄弟
        const descriptionLabels = Array.from(document.querySelectorAll('main dt, main div.description-label, main span, main th')).filter(el => 
            el.innerText && el.innerText.trim() === '描述' && el.children.length === 0
        );
        
        let descriptionFound = false;
        for (let label of descriptionLabels) {
            // 尝试1: label 的下一个兄弟元素
            let next = label.nextElementSibling;
            if (next && next.innerText && next.innerText.trim()) {
                result.description = next.innerText.trim();
                descriptionFound = true;
                break;
            }
            // 尝试2: label 的父元素的下一个兄弟元素
            let parent = label.parentElement;
            if (parent) {
                let parentNext = parent.nextElementSibling;
                if (parentNext && parentNext.innerText && parentNext.innerText.trim()) {
                    result.description = parentNext.innerText.trim();
                    descriptionFound = true;
                    break;
                }
            }
        }

        // 方法2: 专门针对 <dt> 和 <dd> 结构
        if (!descriptionFound) {
            const dtElements = document.querySelectorAll('main dt');
            for (let dt of dtElements) {
                if (dt.innerText.trim() === '描述') {
                    const dd = dt.nextElementSibling;
                    if (dd && dd.tagName === 'DD' && dd.innerText.trim()) {
                        result.description = dd.innerText.trim();
                        descriptionFound = true;
                        break;
                    }
                }
            }
        }

        // 方法3: 如果上面都没找到，直接查找包含典型描述文本的元素 (如 "4*3*2mm 立贴 轻触开关")
        if (!descriptionFound) {
            // 常见的描述文本模式：包含尺寸、安装方式和类型
            const possibleDescSelectors = [
                '.product-description', 
                '.description-content',
                'main div:contains("立贴")', // 注意：:contains 不是标准，这里仅示意，下面用遍历实现
            ];
            // 遍历所有 div，寻找可能包含典型描述文本的元素
            const allDivs = document.querySelectorAll('main div, main p, main span');
            for (let el of allDivs) {
                const text = el.innerText.trim();
                // 判断条件：包含 "立贴" 且 包含 "轻触开关" 或 包含 "mm" 的尺寸描述
                if (text && text.length < 100 && 
                    (text.includes('立贴') || text.includes('轻触开关')) && 
                    (text.includes('mm') || text.includes('*'))) {
                    result.description = text;
                    descriptionFound = true;
                    break;
                }
            }
        }

        // --- 3. 从 <dd>/<dt> 标签中获取其他基础信息 (manuModel, lcsc_no, package) ---
        const ddElements = document.querySelectorAll('dd');
        ddElements.forEach(dd => {
            const dt = dd.previousElementSibling;
            if (dt && dt.tagName === 'DT') {
                const labelText = dt.innerText.trim();
                const valueText = dd.innerText.trim();
                for (let config of baseFieldConfig) {
                    // 跳过已特殊处理的 name 和 description
                    if (config.key === 'name' || config.key === 'description') continue;
                    if (labelText.includes(config.label)) {
                        result[config.key] = valueText;
                        break;
                    }
                }
            }
        });

        // 补充基础信息 (如果上面没找到)
        if (!result.manuModel || !result.lcsc_no || !result.package) {
            const allCells = document.querySelectorAll('td, th, .param-key, .param-value, main div.flex div');
            allCells.forEach(cell => {
                const text = cell.innerText.trim();
                for (let config of baseFieldConfig) {
                    if (config.key === 'name' || config.key === 'description') continue;
                    // 如果单元格文本包含标签名且对应值还未找到
                    if (text.includes(config.label) && !result[config.key]) {
                        // 尝试取下一个兄弟元素的值
                        let valueElement = cell.nextElementSibling;
                        if (valueElement && valueElement.innerText) {
                            result[config.key] = valueElement.innerText.trim();
                        } 
                        // 尝试拆分当前单元格 (例如 "商品编号: C720477")
                        else if (text.includes('：')) {
                            const parts = text.split('：');
                            if (parts.length > 1) {
                                result[config.key] = parts[1].trim();
                            }
                        }
                    }
                }
            });
        }

        // --- 4. 从 id="productParamsTabItem" 的 section 中提取所有参数表格 ---
        const paramSection = document.getElementById('productParamsTabItem');
        if (paramSection) {
            const tables = paramSection.querySelectorAll('table');
            tables.forEach(table => {
                const rows = table.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells.length >= 3) {
                        // 标准三列: 复选框、属性名、属性值
                        const attributeElement = cells[1];
                        const valueElement = cells[2];
                        if (attributeElement && valueElement) {
                            let attributeName = attributeElement.innerText.trim();
                            let attributeValue = valueElement.innerText.trim();
                            
                            if (attributeName && attributeValue) {
                                // 特殊处理：元件类型 -> type
                                if (attributeName === '元件类型') {
                                    result.type = attributeValue;
                                } else {
                                    // 避免键名冲突
                                    const baseKeys = ['manuModel', 'name', 'lcsc_no', 'package', 'description', 'type'];
                                    let key = attributeName;
                                    if (baseKeys.includes(attributeName) || result.hasOwnProperty(attributeName)) {
                                        key = attributeName + '_param';
                                    }
                                    result[key] = attributeValue;
                                }
                            }
                        }
                    } else {
                        // 非标准表格，尝试用分隔符拆分
                        const rowText = row.innerText.trim();
                        const separators = ['：', ':', '\t', ' '];
                        for (let sep of separators) {
                            if (rowText.includes(sep)) {
                                const parts = rowText.split(sep);
                                if (parts.length >= 2) {
                                    const attributeName = parts[0].trim();
                                    const attributeValue = parts.slice(1).join(sep).trim();
                                    if (attributeName && attributeValue) {
                                        if (attributeName === '元件类型') {
                                            result.type = attributeValue;
                                        } else {
                                            let key = attributeName;
                                            const baseKeys = ['manuModel', 'name', 'lcsc_no', 'package', 'description', 'type'];
                                            if (baseKeys.includes(attributeName) || result.hasOwnProperty(attributeName)) {
                                                key = attributeName + '_param';
                                            }
                                            result[key] = attributeValue;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                });
            });
        } else {
            console.warn('未找到id为"productParamsTabItem"的section元素，无法提取详细参数。');
        }

        // --- 5. 确保所有基础字段都有值，如果没有则设为null ---
        const allBaseKeys = ['manuModel', 'name', 'lcsc_no', 'package', 'description'];
        allBaseKeys.forEach(key => {
            if (!result[key]) {
                result[key] = null;
            }
        });

        // 清理文本中的多余空白和换行
        for (let key in result) {
            if (result[key] && typeof result[key] === 'string') {
                result[key] = result[key].replace(/\s+/g, ' ').trim();
            }
        }

        return result;
    }

    // 执行函数并输出JSON
    const info = extractSzlcscItemInfo();
    console.log(JSON.stringify(info, null, 2));
    return info;
})();