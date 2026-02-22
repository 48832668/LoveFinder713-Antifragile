# Draft: Chrome悬浮按钮插件

## 用户需求 (初步理解)
- 创建Chrome网页插件，在右下角悬浮显示
- 只包含一个按钮和一个文本元素
- 点击按钮时检查页面中类为"ant-spin-container"的div
- 如果找到，显示其内ul元素中li元素的个数
- 支持域名白名单配置，便于维护

## 技术调研发现
### Chrome插件基础结构
- manifest.json (必需) - 插件配置文件
- content script - 注入到网页的JavaScript，用于DOM操作
- popup.html - 点击扩展图标时显示的界面
- background.js - 后台脚本（可选）

### 关键技术点
1. **域名触发机制**: 通过manifest.json的content_scripts的matches配置
2. **悬浮窗口**: 使用CSS fixed定位在右下角
3. **DOM查询**: document.querySelector('.ant-spin-container ul li')
4. **Manifest V3**: 最新标准，使用service worker

## 用户决策确认

### 1. 悬浮窗口类型 ✓ 已选择
- **方案A: 始终显示的悬浮按钮** - 在网页右下角始终显示一个小按钮，点击后显示数量文本

### 2. 域名配置方式 ✓ 已选择  
- **方案A: 配置文件方式** - 在插件目录中创建config.json文件，便于修改域名白名单

### 3. UI设计细节 ✓ 已选择
- **方案A: 简约风格** - 简单的按钮+文本，现代简约设计

## 技术调研完成

### 已确认的技术方案
1. **悬浮按钮实现** - 使用 `position: fixed !important` 确保始终显示在右下角，避免页面CSS冲突
2. **DOM操作安全策略** - Content script直接操作DOM，使用唯一CSS类名避免冲突
3. **配置文件读取** - 在content script中读取config.json，支持域名白名单配置
4. **跨域名兼容性** - 通过matches配置和动态域名检查实现

### 具体技术方案
- **文件结构**: 
  ```
  ├── manifest.json
  ├── content.js (核心功能)
  ├── config.json (域名配置)
  ├── styles.css (悬浮按钮样式)
  └── icon.png (可选图标)
  ```
- **核心功能**: 
  - 检查当前域名是否在白名单中
  - 创建固定位置的悬浮按钮
  - 点击按钮时查询 `.ant-spin-container ul li` 并显示数量
- **样式隔离**: 使用唯一前缀的类名，避免与页面CSS冲突

## 测试策略确认

### 基础设施评估
- **测试基础设施**: 项目为空，需要搭建测试环境
- **推荐框架**: Jest + Playwright 组合
  - Jest: 单元测试 (DOM操作逻辑、配置读取)
  - Playwright: E2E测试 (实际页面环境中的插件行为)

### 测试策略选择
- **单元测试**: 核心DOM操作函数的测试
- **E2E测试**: 使用Playwright模拟真实浏览器环境测试插件功能
- **手动测试**: 在不同网站上的实际验证

## 最终确认

### 所有需求已明确
- ✅ 功能需求: 悬浮按钮 + DOM计数
- ✅ 技术方案: Content script + fixed positioning + config.json
- ✅ UI设计: 简约风格，始终显示
- ✅ 配置方式: config.json文件，便于维护
- ✅ 测试策略: Jest单元测试 + Playwright E2E测试

### 工作范围
**INCLUDE:**
- manifest.json配置
- 悬浮按钮UI和样式
- DOM查询和计数逻辑
- 域名配置系统
- 基础单元测试
- E2E测试框架

**EXCLUDE:**
- 复杂的用户界面配置
- 数据存储功能
- 后台同步功能
- 扩展商店发布准备

准备开始制定详细的工作计划。

## 后续行动
1. 明确用户的具体技术偏好
2. 设计插件架构
3. 制定分步实现计划