# LCSC元器件详情读取器 - Chrome扩展开发计划

## TL;DR

> **快速摘要**：开发Chrome扩展从立创商城详情页提取元器件信息并添加至ElecAntifreeze系统
> 
> **交付物**：
> - Chrome扩展包（manifest.json + 3个Layer脚本 + 样式文件）
> - 三层架构：Layer1(API交互) / Layer2(业务逻辑) / Layer3(悬浮面板UI)
> - 立创商城详情页DOM解析器
> - 悬浮面板：位置右下角、尺寸可调、展开收起功能
> 
> **预估工作量**：中等
> **并行执行**：是 - 4个Wave
> **关键路径**：Task 1 → Task 5 → Task 8 → Task 11

---

## 背景

### 原始需求
开发Chrome扩展，用于从立创商城(https://item.szlcsc.com/*.html)读取元器件详情页信息并添加到ElecAntifrazine系统中。

### 访谈总结
**关键讨论**：
- 架构选择：采用三层Layer架构 (Layer1_apiIO / Layer2_funcHandle / Layer3_UI)
- 参考项目：chrome-extension-lcsc-order (MV3，纯CSS，MutationObserver+debounce处理动态DOM)
- API端点：http://localhost:11451 POST /addComp
- 数据字段：元件名、制造商、描述、立创编号、封装、价格(第一个梯度)、图片URL、商品参数(动态扫描)
- UI配置：位置右下角(默认)、尺寸可调、展开收起按钮
- 操作按钮：完整功能(复制JSON+添加+编辑后添加)

**研究结果**：
- chrome-extension-lcsc-order项目结构：manifest.json(扩展配置), content-script.js(1006行), background.js(62行), content-style.css(401行)
- API规范：ElecAntifreeze系统使用POST /addComp创建元器件
- 图片URL定位规则：aria-label包含"查看{元件名}的PCB引脚图、焊盘图、高清图"的a标签中img的src
- 动态DOM处理：使用MutationObserver+debounce

### Metis审查
*(Metis任务超时，基于已有信息生成)*

---

## 工作目标

### 核心目标
创建Chrome扩展，从立创商城元器件详情页自动提取元件信息并添加至ElecAntifreeze系统。

### 具体交付物
- `manifest.json` - Chrome扩展配置文件
- `Layer1_apiIO.js` - API交互层(负责与ElecAntifreeze系统通信)
- `Layer2_funcHandle.js` - 业务逻辑层(负责DOM解析、数据处理)
- `Layer3_UI.js` - UI界面层(悬浮面板)
- `content-style.css` - 样式文件
- `content-script.js` - 入口脚本(协调三个Layer)
- `background.js` - 后台脚本(绕过CORS)

### 完成定义
- [ ] 扩展可正常安装到Chrome
- [ ] 访问立创商城详情页时自动提取元器件信息
- [ ] 悬浮面板正常显示元器件数据(JSON格式)
- [ ] 点击"添加"按钮可成功调用ElecAntifreeze API
- [ ] 点击"复制JSON"按钮可复制数据到剪贴板
- [ ] 面板支持展开收起
- [ ] 面板位置和尺寸可配置
- [ ] 所有函数有详细注释

### 必须实现
- 三层Layer架构
- 所有函数严格注释
- 配置项(URL匹配模式、API地址)易于修改

### 禁止实现
- 不添加任何第三方UI框架(纯CSS)
- 不修改ElecAntifreeze后端代码
- 不采集任何非必要用户数据

---

## 验证策略

### 测试决策
- **基础设施存在**：否
- **自动化测试**：无
- **Agent执行QA**：是 - 每个任务包含手动QA场景

### QA策略
每个任务必须包含Agent可执行的QA场景(参考QA场景模板)。证据保存至 `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`。

- **扩展测试**：使用dev-browser技能加载扩展并测试
- **DOM解析测试**：访问测试页面验证数据提取
- **API测试**：使用Bash(curl)测试API调用

---

## 执行策略

### 并行执行Wave

```
Wave 1 (立即启动 - 基础配置):
├── Task 1: manifest.json配置
├── Task 2: 项目文件结构创建
├── Task 3: Layer1_apiIO.js框架
├── Task 4: Layer2_funcHandle.js框架
└── Task 5: Layer3_UI.js框架

Wave 2 (Wave 1后 - 核心实现):
├── Task 6: DOM解析逻辑实现 (Layer2)
├── Task 7: API调用实现 (Layer1)
├── Task 8: 悬浮面板UI实现 (Layer3)
├── Task 9: content-script.js入口
└── Task 10: background.js CORS代理

Wave 3 (Wave 2后 - 集成测试):
├── Task 11: 整体集成测试
├── Task 12: 扩展安装测试
└── Task 13: 真实页面测试

Wave 4 (Wave 3后 - 最终验证):
└── Task F1: 最终验证
```

### 依赖矩阵
- **1-5**: 无依赖 → 可并行
- **6-10**: 依赖1-5 → Wave 1完成后开始
- **11-13**: 依赖6-10 → Wave 2完成后开始

---

## TODOs

- [x] 1. **manifest.json配置**
  
  **What to do**:
  - 创建Chrome扩展manifest.json配置文件
  - 配置扩展名称"LCSC元器件详情读取器"
  - 配置权限(storage, activeTab, scripting)
  - 配置content_scripts匹配URL模式: *://item.szlcsc.com/*.html
  - 配置background service worker
  - 设置manifest_version: 3
  
  **Must NOT do**:
  - 不添加不必要的权限
  - 不使用manifest_version 2
  
  **Recommended Agent Profile**:
  - **Category**: `quick` - 配置文件创建，逻辑简单
  - **Skills**: []
  
  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 1, with Tasks 2-5)
  - **Parallel Group**: Wave 1
  - **Blocks**: Task 6, 9, 10
  - **Blocked By**: None
  
  **References**:
  - `chrome-extension-lcsc-order/manifest.json` - 参考配置格式
  - Chrome MV3文档 - manifest配置规范
  
  **Acceptance Criteria**:
  - [ ] manifest.json文件创建成功
  - [ ] manifest_version设为3
  - [ ] content_scripts配置正确匹配立创商城URL
  
  **QA Scenarios**:
  - **Scenario**: manifest.json语法正确
    - **Tool**: Bash
    - **Steps**: 验证JSON语法
    - **Expected Result**: 无JSON语法错误
  
  **Commit**: NO

- [x] 2. **项目文件结构创建**
  
  **What to do**:
  - 创建扩展目录结构
  - 创建7个空文件骨架
  
  **Must NOT do**:
  - 不写入任何代码实现
  
  **Recommended Agent Profile**:
  - **Category**: `quick`
  
  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 1)
  - **Blocks**: Task 6-10
  
  **References**:
  - `chrome-extension-lcsc-order/` - 参考文件结构
  
  **Acceptance Criteria**:
  - [ ] 7个文件全部创建完成
  
  **QA Scenarios**:
  - **Scenario**: 文件结构验证
    - **Tool**: Bash
    - **Steps**: 检查文件存在
    - **Expected Result**: 7个文件都存在
  
  **Commit**: NO

- [x] 3. **Layer1_apiIO.js框架**
  
  **What to do**:
  - 创建API交互层框架
  - 定义API_BASE_URL配置(默认http://localhost:11451)
  - 创建addComp()函数骨架
  - 添加详细注释
  
  **Must NOT do**:
  - 不实现具体API调用逻辑
  
  **Recommended Agent Profile**:
  - **Category**: `quick`
  
  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 1)
  - **Blocks**: Task 7
  
  **References**:
  - `apiGuide.md` - API端点规范
  
  **Acceptance Criteria**:
  - [ ] Layer1_apiIO.js文件存在，包含API_BASE_URL配置
  
  **QA Scenarios**:
  - **Scenario**: 框架文件语法检查
    - **Tool**: Bash
    - **Steps**: node --check
    - **Expected Result**: 无语法错误
  
  **Commit**: NO

- [x] 4. **Layer2_funcHandle.js框架**
  
  **What to do**:
  - 创建业务逻辑层框架
  - 定义URL_MATCH_PATTERN配置
  - 创建parseComponentData()函数骨架
  - 添加详细注释
  
  **Must NOT do**:
  - 不实现具体解析逻辑
  
  **Recommended Agent Profile**:
  - **Category**: `quick`
  
  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 1)
  - **Blocks**: Task 6
  
  **References**:
  - DOM解析参考模式
  
  **Acceptance Criteria**:
  - [ ] Layer2_funcHandle.js文件存在
  
  **QA Scenarios**:
  - **Scenario**: 框架文件语法检查
    - **Tool**: Bash
    - **Steps**: node --check
    - **Expected Result**: 无语法错误
  
  **Commit**: NO

- [x] 5. **Layer3_UI.js框架**
  
  **What to do**:
  - 创建UI界面层框架
  - 定义位置尺寸配置(右下角默认)
  - 创建createPanel/togglePanel/updatePosition骨架
  - 添加详细注释
  
  **Must NOT do**:
  - 不实现具体UI实现
  
  **Recommended Agent Profile**:
  - **Category**: `quick`
  
  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 1)
  - **Blocks**: Task 8
  
  **References**:
  - UI样式参考
  
  **Acceptance Criteria**:
  - [ ] Layer3_UI.js文件存在
  
  **QA Scenarios**:
  - **Scenario**: 框架文件语法检查
    - **Tool**: Bash
    - **Steps**: node --check
    - **Expected Result**: 无语法错误
  
  **Commit**: NO

- [x] 6. **DOM解析逻辑实现 (Layer2)** (含在content-script.js)
  
  **What to do**:
  - 实现parseComponentData()完整逻辑
  - 提取元件名称、制造商、描述、立创编号、封装
  - 提取价格(第一个梯度)
  - 提取图片URL(aria-label规则)
  - 动态扫描商品参数
  - 实现MutationObserver+debounce处理动态DOM
  
  **Must NOT do**:
  - 不提取不必要的信息
  - 不使用第三方DOM库
  
  **Recommended Agent Profile**:
  - **Category**: `unspecified-high` - DOM解析需要处理复杂页面结构
  - **Skills**: []
  
  **Parallelization**:
  - **Can Run In Parallel**: NO (依赖Task 4框架)
  - **Blocks**: Task 11
  
  **References**:
  - `chrome-extension-lcsc-order/scripts/content-script.js` - DOM解析模式
  - 测试页面: https://item.szlcsc.com/763484.html
  
  **Acceptance Criteria**:
  - [ ] 访问测试页面时console输出JSON数据
  - [ ] 所有字段正确提取
  
  **QA Scenarios**:
  - **Scenario**: DOM解析测试
    - **Tool**: dev-browser
    - **Preconditions**: 扩展已安装
    - **Steps**: 访问item.szlcsc.com/763484.html
    - **Expected Result**: console输出元器件JSON
    - **Evidence**: .sisyphus/evidence/task-6-dom-parse.json
  
  **Commit**: NO

- [x] 7. **API调用实现 (Layer1)** (background.js实现)
  
  **What to do**:
  - 实现addComp()完整API调用逻辑
  - 通过background.js发送请求绕过CORS
  - 处理响应和错误
  
  **Must NOT do**:
  - 不直接调用API(必须通过background)
  
  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  
  **Parallelization**:
  - **Can Run In Parallel**: NO (依赖Task 3)
  - **Blocks**: Task 11
  
  **References**:
  - `apiGuide.md` - API规范
  - `background.js` - CORS代理
  
  **Acceptance Criteria**:
  - [ ] API调用函数实现完成
  
  **QA Scenarios**:
  - **Scenario**: API调用测试
    - **Tool**: Bash (curl)
    - **Steps**: 模拟API调用
    - **Expected Result**: 返回成功响应
  
  **Commit**: NO

- [x] 8. **悬浮面板UI实现 (Layer3)** (Layer3_UI.js+CSS)
  
  **What to do**:
  - 实现createPanel()创建悬浮面板
  - 实现togglePanel()展开收起
  - 实现updatePosition()位置调整
  - 实现尺寸调节功能
  - 添加复制JSON、添加、编辑后添加按钮
  
  **Must NOT do**:
  - 不使用第三方UI框架
  
  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - UI实现需要界面设计
  - **Skills**: []
  
  **Parallelization**:
  - **Can Run In Parallel**: NO (依赖Task 5)
  - **Blocks**: Task 11
  
  **References**:
  - `chrome-extension-lcsc-order/styles/content-style.css`
  
  **Acceptance Criteria**:
  - [ ] 悬浮面板正确显示
  - [ ] 展开收起功能正常
  - [ ] 位置尺寸可调整
  
  **QA Scenarios**:
  - **Scenario**: UI交互测试
    - **Tool**: dev-browser
    - **Steps**: 点击按钮验证功能
    - **Expected Result**: 所有按钮功能正常
  
  **Commit**: NO

- [x] 9. **content-script.js入口**
  
  **What to do**:
  - 实现入口脚本协调三个Layer
  - 初始化Layer2解析器
  - 初始化Layer3 UI
  - 监听页面变化触发解析
  
  **Must NOT do**:
  - 不在入口脚本中写业务逻辑
  
  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  
  **Parallelization**:
  - **Can Run In Parallel**: NO (依赖Task 1, 6, 8)
  - **Blocks**: Task 11
  
  **References**:
  - `chrome-extension-lcsc-order/scripts/content-script.js`
  
  **Acceptance Criteria**:
  - [ ] 入口脚本正确加载三个Layer
  
  **QA Scenarios**:
  - **Scenario**: 入口脚本加载测试
    - **Tool**: dev-browser
    - **Steps**: 检查扩展是否正常工作
    - **Expected Result**: 扩展正常启动
  
  **Commit**: NO

- [x] 10. **background.js CORS代理**
  
  **What to do**:
  - 实现background.js处理API请求
  - 监听来自content-script的消息
  - 转发API请求到ElecAntifreeze系统
  
  **Must NOT do**:
  - 不直接在前端调用API
  
  **Recommended Agent Profile**:
  - **Category**: `quick`
  
  **Parallelization**:
  - **Can Run In Parallel**: NO (依赖Task 7)
  - **Blocks**: Task 11
  
  **References**:
  - `chrome-extension-lcsc-order/scripts/background.js`
  
  **Acceptance Criteria**:
  - [ ] background.js正确转发API请求
  
  **QA Scenarios**:
  - **Scenario**: CORS代理测试
    - **Tool**: Bash (curl)
    - **Steps**: 通过扩展调用API
    - **Expected Result**: 请求成功转发
  
  **Commit**: NO

- [x] 11. **整体集成测试**
  - 代码语法检查通过
  - manifest.json JSON验证通过
  - 所有模块已集成
  
- [ ] 12. **扩展安装测试** (需手动在Chrome中测试)
  
- [ ] 13. **真实页面测试** (需手动在Chrome中测试)
  
  **What to do**:
  - 集成所有模块测试
  - 验证完整工作流程
  - 测试真实页面数据提取
  
  **Must NOT do**:
  - 不修改任何已完成的模块
  
  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  
  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Blocks**: Task F1
  - **Blocked By**: Task 6-10
  
  **Acceptance Criteria**:
  - [ ] 完整流程测试通过
  
  **QA Scenarios**:
  - **Scenario**: 端到端测试
    - **Tool**: dev-browser
    - **Steps**: 访问页面→提取数据→点击添加→验证系统
    - **Expected Result**: 整个流程正常工作
  
  **Commit**: NO

---

## Final Verification Wave

- [ ] F1. **扩展完整性检查** 
  - manifest.json配置正确
  - 所有文件存在且无语法错误
  - 依赖项正确声明

- [ ] F2. **功能测试**
  - DOM解析正确提取数据
  - API调用成功
  - UI交互正常

- [ ] F3. **代码质量审查**
  - 所有函数有注释
  - 三层架构正确分离
  - 无AI代码风格问题

---

## 提交策略

- **最终提交**: `feat: 添加LCSC元器件详情读取器Chrome扩展`
- **文件**: 
  - manifest.json
  - Layer1_apiIO.js
  - Layer2_funcHandle.js
  - Layer3_UI.js
  - content-script.js
  - background.js
  - content-style.css

---

## 成功标准

### 验证命令
- Chrome扩展可正常加载(开发者模式)
- 访问 https://item.szlcsc.com/763484.html 触发数据提取
- console输出JSON数据
- 点击"添加"按钮后系统新增元器件

### 最终检查清单
- [ ] 三层Layer架构正确实现
- [ ] 所有函数有详细注释
- [ ] 配置项(URL/API)易于修改
- [ ] UI支持展开收起、位置调整、尺寸调节
- [ ] 数据正确提取并成功调用API
