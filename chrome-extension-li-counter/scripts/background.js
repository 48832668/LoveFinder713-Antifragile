// Background service worker for MV3 Chrome extension: chrome-extension-li-counter
// 目标：在扩展安装时初始化配置，监听来自内容脚本和弹窗的消息，基于消息创建通知
// 注释使用中文，便于维护者快速理解实现意图
"use strict";

// 存储键名：URL 配置列表，结构示例
// [{ url: "https://example.com", enabled: true }, ...]
const URL_CONFIG_KEY = 'urlConfig';

// ============================================================
// 1) 监听扩展安装事件，完成默认配置初始化
// ============================================================
chrome.runtime.onInstalled.addListener((details) => {
  try {
    // 仅在首次安装或清空存储时初始化默认配置
    chrome.storage.local.get([URL_CONFIG_KEY], (result) => {
      if (!result.hasOwnProperty(URL_CONFIG_KEY)) {
        const initial = [];
        chrome.storage.local.set({ [URL_CONFIG_KEY]: initial }, () => {
          // 初始化完成的简要日志，便于调试
          console.log('[背景脚本] 已初始化 urlConfig 为 []');
        });
      } else {
        // 已存在配置，跳过初始化
        console.log('[背景脚本] urlConfig 已存在，跳过初始化');
      }
    });
  } catch (err) {
    // 捕获并日志错误，避免拦截后续功能
    console.error('[背景脚本] onInstalled 捕获到错误：', err);
  }
});

// ============================================================
// 2) 通用工具：创建通知
// ============================================================
function createNotification(title, message) {
  try {
    // MV3 通知需要一个图标 URL；使用扩展内置图标，避免外部依赖
    const iconUrl = chrome.runtime.getURL('icons/icon128.png');
    const notifId = 'li_counter_' + Date.now();
    chrome.notifications.create(notifId, {
      type: 'basic',
      iconUrl: iconUrl,
      title: title,
      message: message
    }, (id) => {
      // 回调可用于后续处理，这里仅做兼容性的占位
      // console.log('[背景脚本] 通知创建完成: ', id);
    });
  } catch (err) {
    console.error('[背景脚本] 创建通知时出错：', err);
  }
}

// ============================================================
// 3) 监听来自内容脚本/弹窗的消息
//    支持三类消息类型：'li_count_changed', 'get_config', 'update_config'
// ============================================================
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  try {
    if (!message || typeof message.type !== 'string') {
      sendResponse({ error: 'Invalid message format' });
      return true;
    }
    const type = message.type;

    // 3.1 当 li 数量变化时，来自内容脚本
    if (type === 'li_count_changed') {
      const { count = 0, url } = message;
      // 使用通知提醒用户 Li 数量已变
      const notifTitle = 'Li 数量已变化';
      const notifMessage = `数量: ${count}${url ? ' | 来源: ' + url : ''}`;
      createNotification(notifTitle, notifMessage);
      // 直接返回状态，异步无需阻塞
      sendResponse({ status: 'notified', count, url });
      return true;
    }

    // 3.2 请求当前配置（供弹窗显示/编辑）
    if (type === 'get_config') {
      chrome.storage.local.get([URL_CONFIG_KEY], (result) => {
        const config = result[URL_CONFIG_KEY] || [];
        sendResponse({ config });
      });
      // 因为结果异步返回，必须返回 true 以保持消息通道开启
      return true;
    }

    // 3.3 更新配置（来自弹窗，刷新本地存储）
    if (type === 'update_config') {
      const { config } = message;
      if (!Array.isArray(config)) {
        sendResponse({ error: 'update_config requires an array "config"' });
        return true;
      }
      chrome.storage.local.set({ [URL_CONFIG_KEY]: config }, () => {
        sendResponse({ status: 'updated', config });
      });
      return true;
    }

    // 其他类型：返回未识别的错误
    sendResponse({ error: 'Unknown message type' });
    return true;
  } catch (err) {
    console.error('[背景脚本] 处理消息时出错：', err);
    try {
      sendResponse({ error: err && err.message ? err.message : 'Unknown error' });
    } catch (e) {
      // 防御性编程：如果 sendResponse 本身出错，避免再次抛错
    }
    return true;
  }
});
