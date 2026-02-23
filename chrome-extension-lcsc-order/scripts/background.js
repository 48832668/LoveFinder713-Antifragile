/**
 * Background Service Worker
 * LCSC订单信息解析器
 */

'use strict';

// 扩展安装时初始化
chrome.runtime.onInstalled.addListener((details) => {
  console.log('[LCSC解析器] 扩展已安装');
});

// 监听消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || typeof message.type !== 'string') {
    sendResponse({ error: 'Invalid message format' });
    return true;
  }
  
  switch (message.type) {
    case 'ping':
      sendResponse({ status: 'ok' });
      break;
    case 'addComponent':
      // 通过后台脚本转发请求，绕过 CORS
      handleAddComponent(message.data).then(result => {
        sendResponse(result);
      }).catch(error => {
        sendResponse({ error: error.message });
      });
      return true; // 异步响应
    default:
      sendResponse({ error: 'Unknown message type' });
  }
  
  return true;
});

// 处理添加元件到系统
async function handleAddComponent(componentData) {
  const API_URL = 'http://localhost:11451/addComp';
  
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
    return { success: true, data: result };
  } catch (error) {
    console.error('[LCSC解析器] API请求失败:', error);
    throw error;
  }
}
