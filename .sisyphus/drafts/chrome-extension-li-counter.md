# Draft: Chrome扩展 - Li元素计数器

## 用户背景
- 前端技能：略懂HTML+JS
- 学习目标：通过开发Chrome扩展学习扩展开发机制
- 需要详细注释帮助理解

## 核心需求 (已确认)
- [x] 监控特定URL页面（用户可配置）
- [x] 读取`.ant-spin-container` div容器中ul列表的li元素数量
- [x] 在网页右下角显示悬浮界面
- [x] 界面上实时显示li元素数量
- [x] 代码需要详细注释

## 已确认决策
- [x] URL匹配模式：通配符匹配（例如 `https://example.com/*`）
- [x] UI更新频率：实时监听（MutationObserver）
- [x] 用户配置方式：Popup弹窗界面
- [x] 界面功能：显示li数量 + 刷新按钮（便于学习）
- [x] DOM结构：`.ant-spin-container > ul > li`（直接子元素关系）
- [x] 容器数量：页面中只有一个`.ant-spin-container`
- [x] 项目定位：学习项目（代码注释详尽，结构清晰）
- [x] 额外功能：桌面通知（li数量变化时提醒）
- [x] URL配置：支持多个URL
- [x] 界面样式：简约风格
- [x] 通知触发：任何数量变化时

## 技术决策（基于最佳实践）
- Manifest版本：V3（Chrome最新标准）
- 存储：chrome.storage.local（存储URL配置）
- DOM监听：MutationObserver（实时监听DOM变化）
- 通知：chrome.notifications API（桌面通知）
- 通信：chrome.runtime.sendMessage（content script与popup通信）

## 功能清单
### 核心功能
1. URL匹配 - 支持通配符，多URL配置
2. li元素计数 - 读取`.ant-spin-container > ul > li`数量
3. 悬浮界面 - 右下角显示，简约风格
4. 实时更新 - MutationObserver监听DOM变化
5. 刷新按钮 - 手动刷新计数

### 配置功能
1. Popup界面 - 配置监控URL列表
2. URL管理 - 添加/删除/启用/禁用URL

### 通知功能
1. 桌面通知 - li数量变化时提醒

## 待澄清问题
- [x] 测试策略：手动测试（在Chrome中加载扩展验证）

## 清除检查 ✅
- [x] 核心目标明确
- [x] 范围边界已建立
- [x] 没有关键的歧义
- [x] 技术方法已决定
- [x] 测试策略已确认
- [x] 没有阻塞问题

**状态：所有需求已明确，可以自动过渡到计划生成**

## 技术决策 (待定)
- Manifest版本：V3（推荐）
- 存储：chrome.storage.local
- DOM监听：MutationObserver
- 消息通信：待定

## 研究进行中
- [x] Chrome扩展开发模式研究 (bg_d80467ca)
- [x] 生产级扩展示例搜索 (bg_5419a186)
