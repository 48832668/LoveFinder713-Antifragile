"use strict";

// Layer2_funcHandle.js
// Chrome扩展-lcsc项目中Layer2组件处理的轻量级框架/文件骨架。
// 本文件作为未来连接和解析逻辑的起点，提供：
//  - URL_MATCH_PATTERN：用于匹配相关URL的配置
//  - parseComponentData()：一个骨架函数，概述了预期的输入
//    形状和解析输出的结构，并带有大量注释。
// 所有元素都有详细文档，以避免未来扩展时的歧义。

/**
 * URL_MATCH_PATTERN
 * URL匹配模式数组（RegExp或字符串），用于决定哪些URL需要
 * 使用Layer2_funcHandle处理。随着新域名或URL形状
 * 的出现，请扩展此列表。
 *
 * 使用说明：
 *  - 条目可以是RegExp对象或简单子字符串（字符串），用于在
 *    URL中搜索。
 *  - 模式应该足够具体以最小化误报。
 */

/**
 * URL_MATCH_PATTERN
 * 一个模式数组（RegExp或字符串），用于识别应该被
 * Layer2_funcHandle逻辑处理的URL。随着遇到新域名或URL
 * 形状时，请扩展此列表。
 *
 * 说明：
 *  - 模式应该保守以避免误报。
 *  - RegExp条目将对URL字符串进行评估。
 */
const URL_MATCH_PATTERN = [
  // RegExp示例：匹配包含常见LCSC/LC类似 skyscraper 域名的URL
  /https?:\/\/[^\s]+lcsc[^\s]*/i,
  // 简单字符串模式：作为轻量级第二道防护
  'lcsc'
];

/**
 * @typedef {Object} ComponentData
 * @property {string|null} componentName - 可选的组件名称。
 * @property {Object<string, any>} props - 组件的属性。
 * @property {Object<string, any>} state - 内部状态快照。
 * @property {Object<string, any>} metadata - 解析过程中收集的附加元数据。
 */

/**
 * parseComponentData
 * Layer 2组件数据的骨架解析器。
 * 此函数有意保持最小化并带有大量注释，以指导
 * 未来实现。它接受通用输入并尝试生成一个
 * 具有明确定义字段的结构化ComponentData对象。
 *
 * 该函数设计为对不同输入格式（字符串、
 * 对象、JSON）具有弹性。真正的解析逻辑应随着任务演进而实现。
 *
 * @param {any} input - 表示组件数据的原始输入。可以是：
 *   - JSON字符串（例如，'{"name":"MyComp","props":{}}'）
 *   - 描述组件的普通对象
 *   - 包含HTML或其他文本数据的字符串（我们可能从中推断数据）
 * @returns {ComponentData|null} 组件数据的解析表示，如果
 * 解析无法进行则返回null（例如，输入为null/undefined）。
 *
 * @example
 * // JSON输入
 * parseComponentData('{"name":"MyComp","props":{}}');
 * // => { componentName: 'MyComp', props: {}, state: {}, metadata: {} }
 */
function parseComponentData(input) {
  // 防御性保护：没有需要解析的内容
  if (input == null) {
    return null;
  }

  // 带有安全默认值的骨架返回结构
  const result = {
    componentName: null,
    props: {},
    state: {},
    metadata: {}
  };

  try {
    // 如果输入是字符串，先尝试JSON解析
    if (typeof input === 'string') {
      const s = input.trim();

      // 如果字符串看起来像JSON（以{或[开头，以}或]结尾），尝试解析JSON
      if ((s.startsWith('{') && s.endsWith('}')) || (s.startsWith('[') && s.endsWith(']'))) {
        const parsed = JSON.parse(s);
        if (typeof parsed === 'object' && parsed !== null) {
          // 常见形状
          if ('name' in parsed) result.componentName = parsed.name;
          if ('componentName' in parsed) result.componentName = parsed.componentName;
          if ('props' in parsed && typeof parsed.props === 'object') result.props = parsed.props;
          if ('state' in parsed && typeof parsed.state === 'object') result.state = parsed.state;
          if ('metadata' in parsed && typeof parsed.metadata === 'object') result.metadata = parsed.metadata;
          return result;
        }
      }

      // 回退：从纯文本中提取最小布局
      const lines = s.split(/\r?\n/).filter((ln) => ln.trim().length > 0);
      if (lines.length > 0) {
        result.componentName = lines[0].trim();
      }
      if (lines.length > 1) {
        result.metadata.rawText = lines.slice(1).join('\n');
      }
      return result;
    }

    // 如果输入是一个对象，将已知键复制到骨架中
    if (typeof input === 'object') {
      if (input.componentName || input.name) result.componentName = input.componentName || input.name;
      if (input.props && typeof input.props === 'object') result.props = input.props;
      if (input.state && typeof input.state === 'object') result.state = input.state;
      if (input.metadata && typeof input.metadata === 'object') result.metadata = input.metadata;
      return result;
    }
  } catch (err) {
    // 在骨架模式下我们吞下错误并返回部分数据
  }

  // 最后一招：从字符串化进行轻量级推断
  try {
    const asString = String(input).trim();
    if (asString.length > 0) {
      result.componentName = asString.split(/\s+/)[0] || null;
    }
  } catch (e) {
    // 忽略
  }

  return result;
}

// 公开API导出
module.exports = {
  URL_MATCH_PATTERN,
  parseComponentData
};
