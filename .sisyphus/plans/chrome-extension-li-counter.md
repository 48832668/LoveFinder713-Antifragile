# Chrome扩展 - Li元素计数器 开发计划

## TL;DR

> **快速摘要**: 开发一个Chrome扩展，监控配置的URL页面上`.ant-spin-container`容器中li元素数量，在页面右下角悬浮显示，支持实时更新、桌面通知和Popup配置。
>
> **交付物**:
> - 完整的Chrome扩展项目（Manifest V3）
> - Popup配置界面（URL管理）
> - Content Script（悬浮UI + DOM监听）
> - Background Service Worker
> - 详细中文注释的学习项目
>
> **预估工作量**: Medium
> **并行执行**: YES - 5 waves
> **关键路径**: manifest.json → content-script.js → popup → 集成测试

---

## Context

### 原始需求
用户想开发一个Chrome扩展来监控特定URL页面上`.ant-spin-container`容器中li元素的数量，并在页面右下角显示悬浮界面。用户是前端新手，需要通过这个项目学习Chrome扩展开发机制，代码需要详细注释。

### 访谈摘要
**关键决策**:
- **URL匹配**: 通配符匹配（如`https://example.com/*`），支持多URL配置
- **UI更新**: MutationObserver实时监听DOM变化
- **配置方式**: Popup弹窗界面，支持URL的增删改和启用/禁用
- **界面功能**: 简约风格，显示li数量 + 刷新按钮
- **DOM结构**: `.ant-spin-container > ul > li`（直接子元素关系）
- **容器数量**: 页面中只有一个`.ant-spin-container`
- **项目定位**: 学习项目（代码注释详尽，结构清晰）
- **额外功能**: 桌面通知（li数量任何变化时提醒）

**测试策略**: 手动测试（在Chrome中加载扩展验证）

### 技术选型
- **Manifest版本**: V3（Chrome最新标准）
- **存储**: chrome.storage.local（存储URL配置）
- **DOM监听**: MutationObserver（实时监听）
- **通知**: chrome.notifications API
- **通信**: chrome.runtime.sendMessage

---

## Work Objectives

### 核心目标
创建一个功能完整、代码清晰、注释详尽的Chrome扩展，帮助用户学习扩展开发的核心概念：manifest配置、content scripts、background service worker、popup界面、存储API、消息通信。

### 具体交付物
- `manifest.json` - 扩展配置文件
- `content-script.js` - 页面注入脚本（DOM监听 + 悬浮UI）
- `popup.html/js/css` - 配置界面
- `background.js` - Service Worker
- `icons/` - 扩展图标
- `README.md` - 使用说明

### 完成标准
- [ ] Chrome可以成功加载扩展（无报错）
- [ ] Popup界面可以添加/删除/启用/禁用URL
- [ ] 访问配置的URL时，悬浮界面正确显示
- [ ] li数量变化时，悬浮界面实时更新
- [ ] li数量变化时，桌面通知弹出
- [ ] 所有代码包含详细中文注释

### 必须包含
- 完整的Manifest V3配置
- 详细的中文注释（解释每一步的作用）
- 清晰的代码结构和命名
- 错误处理（容器不存在、DOM未加载等）

### 禁止包含（防护栏）
- ❌ 不要过度工程化（保持简单，便于学习）
- ❌ 不要使用构建工具（webpack/vite等，保持原生JS）
- ❌ 不要添加框架（React/Vue等，使用原生DOM API）
- ❌ 不要压缩/混淆代码（保持可读性）
- ❌ 不要添加不需要的功能（专注核心需求）

---

## Verification Strategy (MANDATORY)

> **零人工干预** — 所有验证由agent执行。无例外。
> 需要用户手动测试/确认的验收标准是被禁止的。

### 测试决策
- **基础设施存在**: NO
- **自动化测试**: None（手动测试）
- **框架**: 无
- **测试方式**: 在Chrome中加载扩展，访问测试页面验证功能

### QA策略
每个任务必须包含agent执行的QA场景（见下方TODO模板）。
证据保存到 `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`。

- **扩展加载**: 使用Bash验证manifest.json语法正确
- **功能测试**: 创建测试HTML页面，用Playwright打开并验证
- **DOM操作**: 使用Bash创建测试页面，验证计数正确
- **通知验证**: 创建测试脚本模拟通知触发

---

## Execution Strategy

### 并行执行波次

> 通过将独立任务分组到并行波次来最大化吞吐量。
> 每个波次完成后开始下一个。
> 目标: 每波5-8个任务。少于3个（除最终波）= 分割不足。

```
Wave 1 (立即开始 — 项目基础 + 核心配置):
├── Task 1: 项目目录结构 + manifest.json [quick]
├── Task 2: 扩展图标资源 [quick]
├── Task 3: Background Service Worker [quick]
├── Task 4: Storage工具模块 [quick]
└── Task 5: 测试HTML页面 [quick]

Wave 2 (Wave 1之后 — Content Script核心):
├── Task 6: Content Script - 悬浮UI创建 [visual-engineering]
├── Task 7: Content Script - DOM查询逻辑 [quick]
├── Task 8: Content Script - MutationObserver监听 [quick]
└── Task 9: Content Script - 消息通信 [quick]

Wave 3 (Wave 2之后 — Popup界面):
├── Task 10: Popup HTML结构 [quick]
├── Task 11: Popup样式设计 [visual-engineering]
├── Task 12: Popup URL管理逻辑 [quick]
└── Task 13: Popup - 与Background通信 [quick]

Wave 4 (Wave 3之后 — 集成 + 通知):
├── Task 14: 通知功能集成 [quick]
├── Task 15: URL匹配逻辑完善 [quick]
├── Task 16: 错误处理完善 [quick]
└── Task 17: 代码注释完善 [writing]

Wave FINAL (所有任务之后 — 验证，4并行):
├── Task F1: 计划合规审计 (oracle)
├── Task F2: 代码质量审查 (unspecified-high)
├── Task F3: 功能测试验证 (unspecified-high)
└── Task F4: 范围一致性检查 (deep)

关键路径: Task 1 → Task 6-9 → Task 10-13 → Task 14-17 → F1-F4
并行加速: 比顺序执行快约60%
最大并发: 5 (Wave 1)
```

### 依赖矩阵

- **1**: — — 6-9
- **2**: — — 所有
- **3**: — — 9, 13
- **4**: — — 9, 13
- **5**: — — F3
- **6**: 1 — 7, 8
- **7**: 1, 6 — 8
- **8**: 1, 6, 7 — 9
- **9**: 1, 3, 4 — 13, 14
- **10**: 1 — 11, 12
- **11**: 10 — 12
- **12**: 4, 10, 11 — 13
- **13**: 3, 9, 12 — 14
- **14**: 3, 9, 13 — 16
- **15**: 9 — F3
- **16**: 6-9, 14 — F2
- **17**: 6-16 — F2

---

## TODOs

> 实现 + 测试 = 一个任务。永不分离。
> 每个任务必须有: 推荐的Agent Profile + 并行信息 + QA场景。
> **没有QA场景的任务是不完整的。无例外。**

- [ ] 1. 创建项目目录结构和manifest.json

  **What to do**:
  - 创建扩展项目目录结构：`chrome-extension-li-counter/`
  - 创建子目录：`icons/`, `scripts/`, `styles/`
  - 创建`manifest.json`配置文件（Manifest V3格式）
  - 配置必要的权限：storage, notifications, activeTab
  - 配置content_scripts匹配规则
  - 配置action（popup）和background service worker

  **Must NOT do**:
  - ❌ 不要使用Manifest V2（已弃用）
  - ❌ 不要申请不必要的权限
  - ❌ 不要使用复杂的匹配规则（保持简单）

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 标准配置文件创建，结构明确
  - **Skills**: []
    - 无特殊技能需求

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3, 4, 5)
  - **Blocks**: Tasks 6-17 (需要manifest.json作为基础)
  - **Blocked By**: None

  **References**:

  **官方文档参考**:
  - Chrome Extension Manifest V3: https://developer.chrome.com/docs/extensions/mv3/intro/
  - manifest.json格式: https://developer.chrome.com/docs/extensions/mv3/manifest/

  **为什么每个参考重要**:
  - Manifest V3官方文档确保使用最新API
  - manifest.json格式文档说明必填字段和权限配置

  **Acceptance Criteria**:
  - [ ] 目录结构创建完成
  - [ ] manifest.json文件存在且语法正确
  - [ ] 包含必要权限配置
  - [ ] 包含content_scripts配置
  - [ ] 包含action和background配置

  **QA Scenarios (MANDATORY)**:

  ```
  Scenario: manifest.json语法验证
    Tool: Bash (node)
    Preconditions: manifest.json文件已创建
    Steps:
      1. 运行: node -e "console.log(JSON.parse(require('fs').readFileSync('chrome-extension-li-counter/manifest.json', 'utf8')).manifest_version)"
    Expected Result: 输出 "3"（Manifest V3）
    Failure Indicators: 输出undefined或抛出异常
    Evidence: .sisyphus/evidence/task-01-manifest-valid.txt

  Scenario: 目录结构验证
    Tool: Bash
    Preconditions: 项目目录已创建
    Steps:
      1. 运行: ls chrome-extension-li-counter/
      2. 检查输出包含: icons, scripts, styles, manifest.json
    Expected Result: 所有目录和文件存在
    Failure Indicators: 缺少任何目录或文件
    Evidence: .sisyphus/evidence/task-01-directory-structure.txt
  ```

  **Evidence to Capture**:
  - [ ] manifest-valid.txt: manifest.json验证输出
  - [ ] directory-structure.txt: 目录结构列表

  **Commit**: YES
  - Message: `feat: init chrome extension project structure`
  - Files: `chrome-extension-li-counter/`
  - Pre-commit: None

---

- [ ] 2. 创建扩展图标资源

  **What to do**:
  - 创建扩展图标（16x16, 32x32, 48x48, 128x128）
  - 可以使用简单的SVG或PNG图标
  - 图标设计简洁明了（数字"Li"或列表图标）
  - 放置在`icons/`目录

  **Must NOT do**:
  - ❌ 不要使用过大或过小的图标
  - ❌ 不要使用复杂的图标设计（保持简洁）

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 简单的资源创建任务
  - **Skills**: []
    - 无特殊技能需求

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3, 4, 5)
  - **Blocks**: None
  - **Blocked By**: Task 1（需要目录结构）

  **References**:

  **图标规范参考**:
  - Chrome Extension Icon Guidelines: https://developer.chrome.com/docs/extensions/mv3/user_interface/#icons

  **为什么重要**:
  - 确保图标符合Chrome扩展规范

  **Acceptance Criteria**:
  - [ ] icons目录包含4个尺寸的图标文件
  - [ ] 图标格式正确（PNG或SVG）
  - [ ] 图标简洁清晰

  **QA Scenarios**:

  ```
  Scenario: 图标文件存在性验证
    Tool: Bash
    Preconditions: icons目录已创建
    Steps:
      1. 运行: ls chrome-extension-li-counter/icons/
      2. 检查包含: icon16.png, icon32.png, icon48.png, icon128.png
    Expected Result: 所有图标文件存在
    Failure Indicators: 缺少任何图标文件
    Evidence: .sisyphus/evidence/task-02-icons-exist.txt
  ```

  **Commit**: YES (groups with Task 1)
  - Message: `feat: add extension icons`
  - Files: `chrome-extension-li-counter/icons/`
  - Pre-commit: None

---

- [ ] 3. 创建Background Service Worker

  **What to do**:
  - 创建`background.js`文件
  - 监听扩展安装事件（chrome.runtime.onInstalled）
  - 初始化默认配置（空URL列表）
  - 监听来自content script和popup的消息
  - 处理通知请求（chrome.notifications.create）
  - 添加详细中文注释

  **Must NOT do**:
  - ❌ 不要在background中执行DOM操作（不可能）
  - ❌ 不要使用chrome API的同步版本（Manifest V3不推荐）

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 标准的background脚本模式
  - **Skills**: []
    - 无特殊技能需求

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 4, 5)
  - **Blocks**: Tasks 9, 13, 14
  - **Blocked By**: Task 1

  **References**:

  **官方文档参考**:
  - Service Workers: https://developer.chrome.com/docs/extensions/mv3/service_workers/
  - chrome.runtime: https://developer.chrome.com/docs/extensions/reference/runtime/
  - chrome.notifications: https://developer.chrome.com/docs/extensions/reference/notifications/

  **为什么重要**:
  - Service Worker是Manifest V3的核心概念
  - 消息通信是扩展组件协作的关键

  **Acceptance Criteria**:
  - [ ] background.js文件存在
  - [ ] 监听onInstalled事件
  - [ ] 监听onMessage事件
  - [ ] 包含通知创建逻辑
  - [ ] 包含详细中文注释

  **QA Scenarios**:

  ```
  Scenario: background.js基本结构验证
    Tool: Bash
    Preconditions: background.js文件已创建
    Steps:
      1. 运行: grep -c "chrome.runtime.onInstalled" chrome-extension-li-counter/scripts/background.js
      2. 运行: grep -c "chrome.runtime.onMessage" chrome-extension-li-counter/scripts/background.js
      3. 运行: grep -c "chrome.notifications" chrome-extension-li-counter/scripts/background.js
    Expected Result: 所有grep返回 >= 1
    Failure Indicators: 任何grep返回 0
    Evidence: .sisyphus/evidence/task-03-background-structure.txt
  ```

  **Commit**: YES (groups with Task 1)
  - Message: `feat: add background service worker`
  - Files: `chrome-extension-li-counter/scripts/background.js`
  - Pre-commit: None

---

- [ ] 4. 创建Storage工具模块

  **What to do**:
  - 创建`utils/storage.js`文件
  - 封装chrome.storage.local API
  - 实现URL配置的CRUD操作
  - 提供默认配置初始化
  - 添加详细中文注释

  **Must NOT do**:
  - ❌ 不要使用chrome.storage.sync（local更可靠）
  - ❌ 不要存储敏感信息

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 简单的工具模块
  - **Skills**: []
    - 无特殊技能需求

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3, 5)
  - **Blocks**: Tasks 9, 12
  - **Blocked By**: Task 1

  **References**:

  **官方文档参考**:
  - chrome.storage: https://developer.chrome.com/docs/extensions/reference/storage/

  **为什么重要**:
  - Storage API是持久化配置的核心

  **Acceptance Criteria**:
  - [ ] storage.js文件存在
  - [ ] 实现getUrlConfig()函数
  - [ ] 实现saveUrlConfig()函数
  - [ ] 实现addUrl()、removeUrl()函数
  - [ ] 包含详细中文注释

  **QA Scenarios**:

  ```
  Scenario: storage.js函数定义验证
    Tool: Bash
    Preconditions: storage.js文件已创建
    Steps:
      1. 运行: grep -c "function getUrlConfig" chrome-extension-li-counter/utils/storage.js
      2. 运行: grep -c "function saveUrlConfig" chrome-extension-li-counter/utils/storage.js
      3. 运行: grep -c "function addUrl" chrome-extension-li-counter/utils/storage.js
    Expected Result: 所有grep返回 >= 1
    Failure Indicators: 任何grep返回 0
    Evidence: .sisyphus/evidence/task-04-storage-functions.txt
  ```

  **Commit**: YES (groups with Task 1)
  - Message: `feat: add storage utility module`
  - Files: `chrome-extension-li-counter/utils/storage.js`
  - Pre-commit: None

---

- [ ] 5. 创建测试HTML页面

  **What to do**:
  - 创建`test/test-page.html`文件
  - 包含`.ant-spin-container`容器
  - 包含`ul > li`列表结构
  - 提供动态添加/删除li的按钮（模拟数据变化）
  - 用于测试扩展功能

  **Must NOT do**:
  - ❌ 不要添加复杂的交互（保持简单）

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 简单的测试页面创建
  - **Skills**: []
    - 无特殊技能需求

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3, 4)
  - **Blocks**: Task F3
  - **Blocked By**: Task 1

  **References**:

  **Ant Design参考**:
  - ant-spin-container是Ant Design框架的加载容器类名

  **为什么重要**:
  - 提供可验证的测试环境

  **Acceptance Criteria**:
  - [ ] test-page.html文件存在
  - [ ] 包含.ant-spin-container容器
  - [ ] 包含ul > li结构
  - [ ] 包含添加/删除li的按钮

  **QA Scenarios**:

  ```
  Scenario: 测试页面结构验证
    Tool: Bash
    Preconditions: test-page.html文件已创建
    Steps:
      1. 运行: grep -c "ant-spin-container" chrome-extension-li-counter/test/test-page.html
      2. 运行: grep -c "<ul>" chrome-extension-li-counter/test/test-page.html
      3. 运行: grep -c "<li>" chrome-extension-li-counter/test/test-page.html
    Expected Result: 所有grep返回 >= 1
    Failure Indicators: 任何grep返回 0
    Evidence: .sisyphus/evidence/task-05-test-page-structure.txt
  ```

  **Commit**: YES (groups with Task 1)
  - Message: `feat: add test page for extension testing`
  - Files: `chrome-extension-li-counter/test/test-page.html`
  - Pre-commit: None

---

- [ ] 6. Content Script - 创建悬浮UI

  **What to do**:
  - 创建`content-script.js`文件
  - 创建右下角悬浮界面容器
  - 界面包含：li数量显示区 + 刷新按钮
  - 使用Shadow DOM隔离样式（避免与页面冲突）
  - 添加基础样式（简约风格）
  - 添加详细中文注释

  **Must NOT do**:
  - ❌ 不要使用复杂的样式框架（保持原生CSS）
  - ❌ 不要影响页面原有布局（使用fixed定位）

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: 需要创建UI界面，涉及样式设计
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: UI创建和样式设计

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 7, 8, 9)
  - **Blocks**: Tasks 7, 8
  - **Blocked By**: Task 1

  **References**:

  **官方文档参考**:
  - Content Scripts: https://developer.chrome.com/docs/extensions/mv3/content_scripts/
  - Shadow DOM: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM

  **为什么重要**:
  - Content Script是扩展与页面交互的核心
  - Shadow DOM防止样式冲突

  **Acceptance Criteria**:
  - [ ] content-script.js文件存在
  - [ ] 悬浮UI正确创建并定位到右下角
  - [ ] UI包含数量显示区和刷新按钮
  - [ ] 使用Shadow DOM隔离样式
  - [ ] 包含详细中文注释

  **QA Scenarios**:

  ```
  Scenario: 悬浮UI创建验证
    Tool: Bash (puppeteer/playwright)
    Preconditions: 测试页面和扩展已准备
    Steps:
      1. 打开测试页面：chrome-extension-li-counter/test/test-page.html
      2. 检查DOM中存在悬浮容器（查找特定ID或类名）
      3. 验证容器在右下角（position: fixed; bottom: 0; right: 0）
    Expected Result: 悬浮容器存在且位置正确
    Failure Indicators: 容器不存在或位置错误
    Evidence: .sisyphus/evidence/task-06-floating-ui.png
  ```

  **Commit**: YES
  - Message: `feat(content): create floating UI component`
  - Files: `chrome-extension-li-counter/scripts/content-script.js`
  - Pre-commit: None

---

- [ ] 7. Content Script - DOM查询逻辑

  **What to do**:
  - 实现查询`.ant-spin-container > ul > li`的逻辑
  - 实现计数函数`countLiElements()`
  - 处理容器不存在的情况（显示"N/A"）
  - 处理ul不存在的情况
  - 在UI中显示计数结果
  - 添加详细中文注释

  **Must NOT do**:
  - ❌ 不要假设DOM一定存在（必须处理异常情况）
  - ❌ 不要使用复杂的选择器（保持简单）

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 标准的DOM操作逻辑
  - **Skills**: []
    - 无特殊技能需求

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 6, 8, 9)
  - **Blocks**: Task 8
  - **Blocked By**: Tasks 1, 6

  **References**:

  **DOM API参考**:
  - querySelector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
  - querySelectorAll: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

  **为什么重要**:
  - DOM查询是计数功能的核心

  **Acceptance Criteria**:
  - [ ] countLiElements()函数存在
  - [ ] 正确处理容器不存在的情况
  - [ ] 正确处理ul不存在的情况
  - [ ] UI显示计数结果
  - [ ] 包含详细中文注释

  **QA Scenarios**:

  ```
  Scenario: li计数正确性验证（正常情况）
    Tool: Bash (puppeteer/playwright)
    Preconditions: 测试页面有3个li元素
    Steps:
      1. 打开测试页面
      2. 等待悬浮UI加载
      3. 读取UI显示的数量
    Expected Result: UI显示 "3"
    Failure Indicators: 显示其他数字或"N/A"
    Evidence: .sisyphus/evidence/task-07-count-normal.png

  Scenario: li计数验证（容器不存在）
    Tool: Bash (puppeteer/playwright)
    Preconditions: 创建一个没有.ant-spin-container的测试页面
    Steps:
      1. 打开无容器测试页面
      2. 等待悬浮UI加载
      3. 读取UI显示的内容
    Expected Result: UI显示 "N/A" 或 "容器不存在"
    Failure Indicators: 显示数字或报错
    Evidence: .sisyphus/evidence/task-07-count-no-container.png
  ```

  **Commit**: YES
  - Message: `feat(content): implement li counting logic`
  - Files: `chrome-extension-li-counter/scripts/content-script.js`
  - Pre-commit: None

---

- [ ] 8. Content Script - MutationObserver监听

  **What to do**:
  - 实现MutationObserver监听DOM变化
  - 监听`.ant-spin-container`的子元素变化
  - 当li数量变化时，更新UI显示
  - 当li数量变化时，发送通知消息到background
  - 记录上次的li数量，用于比较变化
  - 添加详细中文注释

  **Must NOT do**:
  - ❌ 不要监听整个document（性能问题）
  - ❌ 不要在每次变化时都发送通知（只在数量变化时）

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 标准的DOM监听模式
  - **Skills**: []
    - 无特殊技能需求

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 6, 7, 9)
  - **Blocks**: Task 9
  - **Blocked By**: Tasks 1, 6, 7

  **References**:

  **MutationObserver参考**:
  - MDN MutationObserver: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
  - MutationObserver配置: childList, subtree

  **为什么重要**:
  - 实时更新是核心需求

  **Acceptance Criteria**:
  - [ ] MutationObserver正确创建和配置
  - [ ] 监听.ant-spin-container的DOM变化
  - [ ] li数量变化时更新UI
  - [ ] li数量变化时发送消息
  - [ ] 包含详细中文注释

  **QA Scenarios**:

  ```
  Scenario: 实时更新验证
    Tool: Bash (puppeteer/playwright)
    Preconditions: 测试页面和扩展已加载
    Steps:
      1. 打开测试页面（初始3个li）
      2. 等待悬浮UI显示 "3"
      3. 点击测试页面的"添加li"按钮（增加1个li）
      4. 等待500ms
      5. 读取悬浮UI显示的数量
    Expected Result: UI更新显示 "4"
    Failure Indicators: UI仍显示 "3"
    Evidence: .sisyphus/evidence/task-08-realtime-update.png

  Scenario: 通知触发验证
    Tool: Bash (chrome.notifications模拟)
    Preconditions: MutationObserver已启用
    Steps:
      1. 在测试页面添加li
      2. 检查chrome.runtime.sendMessage是否被调用
      3. 检查消息类型是否为"li_count_changed"
    Expected Result: 消息发送成功
    Failure Indicators: 未发送消息或消息类型错误
    Evidence: .sisyphus/evidence/task-08-notification-sent.txt
  ```

  **Commit**: YES
  - Message: `feat(content): add MutationObserver for realtime updates`
  - Files: `chrome-extension-li-counter/scripts/content-script.js`
  - Pre-commit: None

---

- [ ] 9. Content Script - 消息通信

  **What to do**:
  - 实现与background的消息通信
  - 监听来自background的URL配置更新
  - 实现刷新按钮点击处理
  - 实现初始化逻辑（检查当前URL是否匹配配置）
  - 添加详细中文注释

  **Must NOT do**:
  - ❌ 不要使用同步消息通信（chrome.runtime.sendMessage是异步的）
  - ❌ 不要在消息中传递大量数据

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: 标准的消息通信模式
  - **Skills**: []
    - 无特殊技能需求

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 6, 7, 8)
  - **Blocks**: Tasks 13, 14
  - **Blocked By**: Tasks 1, 3, 4

  **References**:

  **官方文档参考**:
  - Message Passing: https://developer.chrome.com/docs/extensions/mv3/messaging/
  - chrome.runtime.sendMessage: https://developer.chrome.com/docs/extensions/reference/runtime/#method-sendMessage

  **为什么重要**:
  - 消息通信是扩展组件协作的基础

  **Acceptance Criteria**:
  - [ ] 监听chrome.runtime.onMessage
  - [ ] 正确处理URL配置更新消息
  - [ ] 刷新按钮点击事件绑定
  - [ ] 初始化时检查URL匹配
  - [ ] 包含详细中文注释

  **QA Scenarios**:

  ```
  Scenario: 刷新按钮功能验证
    Tool: Bash (puppeteer/playwright)
    Preconditions: 悬浮UI已创建
    Steps:
      1. 打开测试页面
      2. 等待悬浮UI加载
      3. 点击刷新按钮
      4. 检查数量是否重新计算
    Expected Result: 数量正确显示
    Failure Indicators: 按钮无响应或数量错误
    Evidence: .sisyphus/evidence/task-09-refresh-button.png

  Scenario: URL匹配验证
    Tool: Bash
    Preconditions: 配置了测试URL
    Steps:
      1. 访问配置的URL
      2. 检查悬浮UI是否显示
      3. 访问未配置的URL
      4. 检查悬浮UI是否不显示
    Expected Result: 只在配置的URL显示
    Failure Indicators: 在未配置URL也显示
    Evidence: .sisyphus/evidence/task-09-url-match.txt
  ```

  **Commit**: YES
  - Message: `feat(content): add message communication`
  - Files: `chrome-extension-li-counter/scripts/content-script.js`
  - Pre-commit: None

