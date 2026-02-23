# Chrome扩展 - LCSC订单信息解析器 开发计划

## TL;DR

> **快速摘要**: 开发一个新的Chrome扩展，解析LCSC页面上的订单li元素，在悬浮窗中以Bootstrap5框架展示订单列表和元器件详情。
>
> **交付物**:
> - 完整的Chrome扩展项目（Manifest V3）
> - Popup配置界面（可选）
> - Content Script（悬浮UI + DOM解析）
> - Background Service Worker
> - Bootstrap5样式的悬浮面板
>
> **预估工作量**: Medium
> **并行执行**: YES - 4 waves
> **关键路径**: manifest.json → DOM解析 → 悬浮面板UI → 数据展示

---

## Context

### 原始需求
用户需要一个新的Chrome扩展，用于解析LCSC（立创商城）页面上的订单li元素。每个li包含一个订单，订单中有多个元器件。悬浮窗需要：
- 左侧：订单列表（以订单号命名）
- 右侧第一板块：订单信息总览（元器件种类数、元器件总数量）
- 右侧第二板块：元器件表格（名称、类型、编号、数量、价格）

### 技术选型
- **Manifest版本**: V3（Chrome最新标准）
- **UI框架**: Bootstrap 5（通过CDN引入）
- **存储**: chrome.storage.local
- **DOM解析**: 原生JavaScript + querySelector
- **通信**: chrome.runtime.sendMessage
- **样式隔离**: Shadow DOM

### 目标网站
- LCSC订单列表页面
- 目标DOM结构：`.ant-spin-container > ul > li` (订单项)

---

## Work Objectives

### 核心目标
创建一个功能完整的Chrome扩展，用于解析LCSC订单页面，提取每个订单的详细信息，并以直观的悬浮面板展示。

### 具体交付物
- `manifest.json` - 扩展配置文件
- `content-script.js` - 页面注入脚本（DOM解析 + 悬浮UI）
- `popup.html/js/css` - 配置界面（可选）
- `background.js` - Service Worker
- `icons/` - 扩展图标
- `test/test-page.html` - 测试页面

### 完成标准
- [ ] Chrome可以成功加载扩展（无报错）
- [ ] 悬浮面板正确显示在页面右下角
- [ ] 左侧显示订单列表（订单号）
- [ ] 右侧显示订单信息总览
- [ ] 右侧显示元器件表格
- [ ] 点击左侧订单切换右侧详情
- [ ] 支持实时更新（MutationObserver监听li变化）

### 必须包含
- 完整的Manifest V3配置
- Bootstrap 5通过CDN引入
- 详细的DOM解析逻辑
- 悬浮面板左右分栏布局
- 错误处理（无订单、无元器件等情况）

### 禁止包含（防护栏）
- ❌ 不要过度工程化（保持简单）
- ❌ 不要使用构建工具
- ❌ 不要添加不需要的功能

---

## Verification Strategy

### 测试决策
- **基础设施存在**: NO
- **自动化测试**: None（手动测试）
- **框架**: 无
- **测试方式**: 在Chrome中加载扩展，访问LCSC订单页面验证功能

### QA策略
- 扩展加载验证
- 功能测试
- DOM操作验证

---

## Execution Strategy

### 并行执行波次

```
Wave 1 (立即开始 — 项目基础):
├── Task 1: 项目目录结构 + manifest.json [quick]
├── Task 2: 扩展图标资源 [quick]
├── Task 3: Background Service Worker [quick]
└── Task 4: 测试HTML页面（含模拟订单数据）[quick]

Wave 2 (Wave 1之后 — 核心解析):
├── Task 5: Content Script - DOM解析逻辑 [deep]
├── Task 6: Content Script - 数据结构定义 [quick]
└── Task 7: Content Script - MutationObserver监听 [quick]

Wave 3 (Wave 2之后 — 悬浮面板UI):
├── Task 8: 悬浮面板容器创建（Bootstrap5 + Shadow DOM）[visual-engineering]
├── Task 9: 左侧订单列表组件 [visual-engineering]
├── Task 10: 右侧订单信息总览组件 [visual-engineering]
└── Task 11: 右侧元器件表格组件 [visual-engineering]

Wave 4 (Wave 3之后 — 交互 + 测试):
├── Task 12: 订单切换交互 [quick]
├── Task 13: 实时更新集成 [quick]
└── Task 14: 整体测试验证 [quick]

Wave FINAL (验证):
├── Task F1: 计划合规审计 [oracle]
└── Task F2: 代码质量审查 [unspecified-high]
```

---

## TODOs

- [ ] 1. 创建项目目录结构和manifest.json

  **What to do**:
  - 创建扩展项目目录结构：`chrome-extension-lcsc-order/`
  - 创建子目录：`icons/`, `scripts/`, `styles/`, `test/`
  - 创建`manifest.json`配置文件（Manifest V3格式）
  - 配置权限：storage, notifications, activeTab, script
  - 配置content_scripts匹配规则（LCSC订单页面URL）

  **Acceptance Criteria**:
  - [ ] 目录结构创建完成
  - [ ] manifest.json文件存在且语法正确
  - [ ] 包含必要权限配置

- [ ] 2. 创建扩展图标资源

  **What to do**:
  - 创建扩展图标（16x16, 32x32, 48x48, 128x128）
  - 使用简单的PNG图标

  **Acceptance Criteria**:
  - [ ] icons目录包含4个尺寸的图标文件

- [ ] 3. 创建Background Service Worker

  **What to do**:
  - 创建`background.js`文件
  - 监听扩展安装事件
  - 监听消息通信

  **Acceptance Criteria**:
  - [ ] background.js文件存在
  - [ ] 包含基本消息处理

- [ ] 4. 创建测试HTML页面

  **What to do**:
  - 创建模拟LCSC订单页面的HTML
  - 包含多个订单li元素
  - 包含完整的元器件信息

  **Acceptance Criteria**:
  - [ ] test-page.html文件存在
  - [ ] 包含模拟订单数据

- [ ] 5. Content Script - DOM解析逻辑

  **What to do**:
  - 创建`content-script.js`
  - 实现订单li元素解析函数
  - 提取订单号、日期、元器件信息等
  - 实现元器件信息解析（名称、类型、编号、数量、价格）
  - 添加详细中文注释

  **Acceptance Criteria**:
  - [ ] 订单号解析正确
  - [ ] 元器件列表解析正确
  - [ ] 包含详细中文注释

- [ ] 6. Content Script - 数据结构定义

  **What to do**:
  - 定义订单数据结构
  - 定义元器件数据结构
  - 定义UI数据结构

  **Acceptance Criteria**:
  - [ ] 数据结构定义完整

- [ ] 7. Content Script - MutationObserver监听

  **What to do**:
  - 实现MutationObserver监听DOM变化
  - 检测li元素的增删改
  - 触发数据重新解析

  **Acceptance Criteria**:
  - [ ] 能检测到li元素变化

- [ ] 8. 悬浮面板容器创建

  **What to do**:
  - 创建悬浮面板HTML结构
  - 引入Bootstrap 5（通过CDN）
  - 使用Shadow DOM隔离样式
  - 左右分栏布局

  **Acceptance Criteria**:
  - [ ] Bootstrap 5正确引入
  - [ ] 左右分栏布局正确

- [ ] 9. 左侧订单列表组件

  **What to do**:
  - 实现订单列表显示
  - 订单号作为列表项
  - 点击切换选中状态

  **Acceptance Criteria**:
  - [ ] 订单列表正确显示
  - [ ] 点击可选中

- [ ] 10. 右侧订单信息总览组件

  **What to do**:
  - 显示元器件种类数量
  - 显示元器件总数量

  **Acceptance Criteria**:
  - [ ] 统计信息正确

- [ ] 11. 右侧元器件表格组件

  **What to do**:
  - Bootstrap表格样式
  - 列：元器件名称、类型、编号、数量、价格

  **Acceptance Criteria**:
  - [ ] 表格正确显示
  - [ ] 数据列完整

- [ ] 12. 订单切换交互

  **What to do**:
  - 点击左侧订单切换右侧详情
  - 更新订单信息总览
  - 更新元器件表格

  **Acceptance Criteria**:
  - [ ] 切换功能正常

- [ ] 13. 实时更新集成

  **What to do**:
  - DOM变化时自动更新数据
  - 自动更新UI

  **Acceptance Criteria**:
  - [ ] 自动更新功能正常

- [ ] 14. 整体测试验证

  **What to do**:
  - 在测试页面验证所有功能

  **Acceptance Criteria**:
  - [ ] 所有功能正常工作

---

## 订单数据结构

```javascript
// 订单对象
{
  orderId: "SO2602160171",           // 订单编号
  orderDate: "2026-02-16 00:19:54", // 订单日期
  components: [                       // 元器件列表
    {
      name: "TYPE-C 16P QTWT",       // 元器件名称
      type: "SMD",                   // 元器件类型
      number: "C5187472",            // 元器件编号
      quantity: 5,                   // 数量（个）
      unitPrice: 0.45809,            // 单价
      totalPrice: 2.29               // 总价
    },
    // ... 更多元器件
  ],
  totalComponentTypes: 3,            // 元器件种类数
  totalQuantity: 65,                  // 元器件总数量
  orderTotal: 95.93                  // 订单总价
}
```

---

## 悬浮面板UI布局

```
+------------------------------------------------------------------+
|  LCSC订单解析器                                              [_][X] |
+------------------------------------------------------------------+
| +------------------+ +-------------------------------------------+ |
| | 订单列表         | | 订单信息总览                               | |
| |------------------| |-------------------------------------------| |
| | ● SO2602160171  | | 元器件种类：3个                            | |
| |   2026-02-16    | | 元器件总数量：65个                         | |
| |                  | |                                           | |
| | ○ SO2602150234  | | +---------------------------------------+ | |
| |   2026-02-15    | | | 元器件名称 | 类型 | 编号 | 数量 | 价格 | | |
| |                  | | |-------------|------|------|------|------| | |
| | ○ SO2602140189  | | | TYPE-C...   | SMD  | C5187| 5    | 0.46 | | |
| |   2026-02-14    | | | TF-115YY... | SMD  | C5374| 10   | 0.23 | | |
| |                  | | | K16         | SOD- | C5189| 50   | 0.03 | | |
| |                  | | +---------------------------------------+ | |
| +------------------+ +-------------------------------------------+ |
+------------------------------------------------------------------+
```

---

## Commit Strategy

- 初始提交: `feat: init chrome extension project`
- 功能提交: `feat: add DOM parsing logic`
- UI提交: `feat: add floating panel UI`
- 测试提交: `fix: resolve parsing issues`

---

## Success Criteria

### 验证命令
```bash
# 验证manifest语法
node -e "console.log(JSON.parse(require('fs').readFileSync('manifest.json')).manifest_version)"
```

### 最终检查
- [ ] 所有任务完成
- [ ] 代码质量良好
- [ ] 功能测试通过
