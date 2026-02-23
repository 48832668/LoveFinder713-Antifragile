/**
 * Background Service Worker
 * LCSC元器件详情读取器 - 后台脚本
 * 负责：API请求转发，绕过CORS限制
 */

'use strict';

// 扩展安装时初始化
chrome.runtime.onInstalled.addListener((details) => {
  console.log('[LCSC元器件读取器] 扩展已安装 v1.0.0');
});

// 监听来自content-script的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || typeof message.type !== 'string') {
    sendResponse({ error: 'Invalid message format' });
    return true;
  }
  
  switch (message.type) {
    case 'ping':
      // 心跳检测
      sendResponse({ status: 'ok', timestamp: Date.now() });
      break;
      
    case 'addComponent':
      // 添加元器件到系统
      handleAddComponent(message.data).then(result => {
        sendResponse(result);
      }).catch(error => {
        sendResponse({ error: error.message });
      });
      return true; // 异步响应
      
    case 'fetchImage':
      // 获取图片（绕过CORS）
      handleFetchImage(message.url).then(result => {
        sendResponse(result);
      }).catch(error => {
        sendResponse({ error: error.message });
      });
      return true;
      
    default:
      sendResponse({ error: 'Unknown message type: ' + message.type });
  }
  
  return true;
});

/**
 * 处理添加元器件到ElecAntifreeze系统
 * 通过后台脚本发送请求，绕过CORS限制
 * @param {Object} componentData - 元器件数据
 * @returns {Promise<Object>} API响应
 */
async function handleAddComponent(componentData) {
  // 可配置：API地址
  const API_URL = 'http://localhost:11451/addComp';
  
  console.log('[LCSC元器件读取器] 正在添加元器件:', componentData.name || componentData.componentName);
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(componentData)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('[LCSC元器件读取器] 添加成功:', result);
    return { success: true, data: result };
  } catch (error) {
    console.error('[LCSC元器件读取器] API请求失败:', error);
    throw error;
  }
}

/**
 * 获取图片（绕过CORS）
 * @param {string} url - 图片URL
 * @returns {Promise<Object>} 图片Base64数据
 */
async function handleFetchImage(url) {
  if (!url) {
    return { error: 'No URL provided' };
  }
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve({ 
          success: true, 
          data: reader.result,
          mimeType: blob.type 
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('[LCSC元器件读取器] 图片获取失败:', error);
    throw error;
  }
}
