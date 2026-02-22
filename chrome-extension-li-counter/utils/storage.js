// Storage util for URL configuration in Chrome extension
// 使用 chrome.storage.local 来持久化 URL 配置数据
// 结构: [{ id: string, url: string, enabled: boolean, pattern: string }]
// Storage key: 'urlConfig'
//
// 详细实现：所有函数均为异步并返回 Promise，包含错误处理
const STORAGE_KEY = 'urlConfig';

// 将数据从 chrome.storage.local 获取指定 key 的值
function storageGet(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(key, (items) => {
        const err = chrome?.runtime?.lastError;
        if (err) {
          reject(err);
          return;
        }
        resolve(items?.[key]);
      });
    } catch (e) {
      reject(e);
    }
  });
}

// 将数据写入 chrome.storage.local 的指定 key
function storageSet(key, value) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.local.set({ [key]: value }, () => {
        const err = chrome?.runtime?.lastError;
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });
}

// 获取所有 URL 配置
export async function getUrlConfig() {
  try {
    const data = await storageGet(STORAGE_KEY);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('[storage.js] getUrlConfig 错误:', err);
    return [];
  }
}

// 保存 URL 配置到 storage
export async function saveUrlConfig(config) {
  try {
    const payload = Array.isArray(config) ? config : [];
    await storageSet(STORAGE_KEY, payload);
    return payload;
  } catch (err) {
    console.error('[storage.js] saveUrlConfig 错误:', err);
    throw err;
  }
}

// 向配置中添加一个新的 URL 条目
export async function addUrl(url) {
  try {
    const cfg = await getUrlConfig();
    if (cfg.find(item => item.url === url)) {
      return cfg;
    }
    const id = (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function')
      ? crypto.randomUUID()
      : `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    let origin = '';
    try {
      origin = new URL(url).origin;
    } catch {
      origin = '';
    }
    const pattern = origin ? origin + '/*' : (url || '/*');
    const newEntry = { id, url, enabled: true, pattern };
    const newConfig = [...cfg, newEntry];
    await saveUrlConfig(newConfig);
    return newEntry;
  } catch (err) {
    console.error('[storage.js] addUrl 错误:', err);
    throw err;
  }
}

// 根据 url 删除配置项
export async function removeUrl(url) {
  try {
    const cfg = await getUrlConfig();
    const newConfig = cfg.filter(item => item.url !== url);
    await saveUrlConfig(newConfig);
    return newConfig;
  } catch (err) {
    console.error('[storage.js] removeUrl 错误:', err);
    throw err;
  }
}

// 切换 URL 的启用状态
export async function toggleUrl(url) {
  try {
    const cfg = await getUrlConfig();
    const hasMatch = cfg.some(item => item.url === url);
    if (!hasMatch) return cfg;
    const newConfig = cfg.map(item => {
      if (item.url === url) {
        return { ...item, enabled: !item.enabled };
      }
      return item;
    });
    await saveUrlConfig(newConfig);
    return newConfig;
  } catch (err) {
    console.error('[storage.js] toggleUrl 错误:', err);
    throw err;
  }
}

// 获取默认空配置
export async function getDefaultConfig() {
  try {
    return [];
  } catch (err) {
    console.error('[storage.js] getDefaultConfig 错误:', err);
    throw err;
  }
}
