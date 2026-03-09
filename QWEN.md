# 项目上下文文档 (QWEN.md)

## 项目概述

本项目是 **嘉立创 EDA (EasyEDA) 专业版扩展开发工具**，当前开发的具体扩展为 **单片机总线助手 (mcu-bus-helper)**。

### 核心功能

- 快速创建标准总线网络标签（支持 I²C、SPI、UART、CAN、SDIO、SMBus、PMBus 等 7 种总线）
- 扫描和管理已有总线网络
- 总线统计和分析

### 技术栈

| 类别 | 技术 |
|------|------|
| **语言** | TypeScript 5.7+ |
| **构建工具** | esbuild |
| **包管理** | npm / bun |
| **代码规范** | ESLint (Alloy 配置) + Prettier |
| **Git Hooks** | Husky + lint-staged |
| **目标平台** | 嘉立创 EDA 专业版 (EDA API v2.3+) |

## 项目结构

```
D:\Debug\LoveFinder713-ElecAntifragile\
├── src/                    # 源代码目录
│   ├── index.ts           # 插件入口文件
│   └── core/              # 核心模块
│       ├── bus-config.ts  # 总线配置定义
│       ├── bus-manager.ts # 总线管理逻辑
│       └── types.ts       # TypeScript 类型定义
├── iframe/                 # IFrame UI 页面
│   ├── index.html         # 主面板页面
│   ├── settings.html      # 设置面板页面
│   ├── css/               # 样式文件
│   └── js/                # 前端脚本
├── config/                 # 构建配置
│   ├── esbuild.common.ts  # 通用 esbuild 配置
│   └── esbuild.prod.ts    # 生产环境配置
├── build/                  # 打包输出
│   ├── dist/              # 编译后的扩展包
│   └── packaged.ts        # 打包脚本
├── locales/                # 国际化文件
│   ├── en.json            # 英文翻译
│   ├── zh-Hans.json       # 简体中文翻译
│   └── extensionJson/     # extension.json 翻译
├── images/                 # 扩展图标等资源
├── extension.json          # 扩展配置文件
├── package.json            # 项目配置和依赖
├── tsconfig.json           # TypeScript 配置
├── .eslintrc.js            # ESLint 配置
└── .prettierrc.js          # Prettier 配置
```

## 构建和运行

### 环境要求

- Node.js >= 20.5.0

### 安装依赖

```bash
npm install
```

### 开发命令

| 命令 | 说明 |
|------|------|
| `npm run compile` | 编译 TypeScript 到 `dist/` 目录 |
| `npm run build` | 完整构建（编译 + 打包扩展包到 `build/dist/`） |
| `npm run prettier:all` | 格式化所有代码 |
| `npm run eslint:all` | 修复所有 ESLint 问题 |
| `npm run fix` | 格式化 + ESLint 修复 |

### 开发流程

1. 修改源代码 (`src/` 目录)
2. 运行 `npm run build` 构建扩展包
3. 在嘉立创 EDA 专业版中安装 `build/dist/` 下生成的扩展包

## 开发规范

### 代码风格

- **缩进**: 4 空格 (Tab)
- **行宽**: 150 字符
- **引号**: 单引号 (`'`)
- **分号**: 必须使用
- **尾随逗号**: 多行时必须有
- **换行符**: LF (Unix 风格)

### TypeScript 配置

- 严格模式开启 (`strict: true`)
- 目标环境：`ESNext`
- 模块系统：`CommonJS`
- 输出目录：`./dist/`

### Git Hooks

提交时自动执行：
- TypeScript 文件：ESLint 修复
- 其他文件 (js/ts/html/css/json/md)：Prettier 格式化

### 添加新总线类型

在 `src/core/bus-config.ts` 的 `BUS_CONFIGS` 数组中添加配置：

```typescript
{
	type: 'NEWBUS',
	displayName: 'New Bus',
	prefix: 'NEW',
	signals: [
		{ name: 'SIG1', description: '信号 1', direction: 'OUT' },
		{ name: 'SIG2', description: '信号 2', direction: 'IN' },
	],
	maxInstances: 4,
	icon: 'bi-icon-name',
}
```

## 扩展配置 (extension.json)

当前扩展配置：

- **名称**: mcu-bus-helper (单片机总线助手)
- **UUID**: b2c3d4e5f6789012b3c4d5e6f7890123
- **版本**: 1.0.0
- **EDA 引擎要求**: ^2.3.0
- **分类**: PCB Design

### 菜单注册

扩展在原理图编辑器头部菜单注册了两个入口：
- `总线助手...` → 调用 `openBusHelper()`
- `助手设置...` → 调用 `openSettings()`

## API 使用

插件通过嘉立创 EDA API 与编辑器交互：

```typescript
// 打开 IFrame 面板
eda.sys_IFrame.openIFrame('/iframe/index.html', 400, 650, 'panel-id', options);

// 插件激活入口
export function activate(status?: 'onStartupFinished', arg?: string): void;
```

详细 API 文档：https://prodocs.lceda.cn/cn/api/guide/

## 支持的网络标签格式

生成的网络标签遵循统一格式：

```
{全局前缀}_{总线网络标签标识名}{序号}_{信号名}
```

例如：`SYS_IIC1_SDA`、`SYS_SPI2_MOSI`

### 总线预设名称 vs 总线网络标签标识名

系统区分两个概念：

| 字段 | 作用 | 示例 |
|------|------|------|
| **总线预设名称** | 在"创建新总线"下拉列表中显示，用于用户识别 | `MCU_IIC`、`传感器_SPI`、`显示屏_UART` |
| **总线网络标签标识名** | 用于生成网络标签的标识符，需要简洁规范 | `IIC`、`SPI`、`UART` |

**示例：**
- 总线预设名称：`MCU_IIC` → 在下拉列表中显示
- 总线网络标签标识名：`IIC` → 用于生成网络标签
- 全局前缀：`SYS`
- 生成的网络标签：`SYS_IIC1_SDA`（而不是 `SYS_MCU_IIC1_SDA`）

这样设计有助于辨别总线用途，同时保持网络标签的简洁规范。

## 多原理图图页支持

总线助手支持检测当前原理图中所有图页的总线信息：

### 实现原理
1. 使用 `DMT_Schematic.getCurrentSchematicAllSchematicPagesInfo()` 获取当前原理图的所有图页信息
2. 保存当前活动图页的 UUID
3. 使用 `DMT_EditorControl.openDocument(pageUuid)` 切换到每个图页
4. 获取该图页的导线信息
5. 汇总所有图页的总线信息
6. 恢复到原来的活动图页

### 相关 API
- `DMT_Schematic.getCurrentSchematicAllSchematicPagesInfo()` - 获取当前原理图的所有图页信息
- `DMT_Schematic.getCurrentSchematicPageInfo()` - 获取当前活动图页信息
- `DMT_EditorControl.openDocument(documentUuid)` - 打开/激活文档

### 注意事项
- 只检测当前原理图的图页，不会检测其他打开的原理图
- 切换图页不会关闭 iframe，但会触发图页切换动画

## 前缀黑名单

系统内置前缀黑名单机制，禁止使用保留前缀（如电源网络）：

- **黑名单前缀**: `PW`
- **验证位置**:
  - 全局前缀设置（设置页面）
  - 总线自定义前缀（设置页面）
  - 总线创建时（后端验证）
- **前端实时验证**: 输入时显示警告提示
- **保存时验证**: 阻止保存黑名单前缀

## 配置导入导出

支持将配置导出为 JSON 文件，方便备份或分享：

### 导出配置
1. 打开"助手设置"页面
2. 点击底部"💾 导入/导出"按钮
3. 点击"⬇️ 导出配置文件"
4. 保存 JSON 文件到本地

### 导入配置
1. 打开"助手设置"页面
2. 点击底部"💾 导入/导出"按钮
3. 选择 JSON 配置文件
4. 点击"⬆️ 导入配置文件"
5. 确认刷新页面应用配置

### 清除缓存
1. 打开"助手设置"页面
2. 点击底部"🗑️ 清除缓存"按钮
3. 确认清除操作
4. 页面自动刷新，配置重置

清除内容：
- 本地存储的配置（localStorage）
- EDA 扩展用户配置

### 配置文件格式
```json
{
  "netPrefix": "SYS",
  "historyPrefixes": [],
  "enabledHistoryPrefixes": [],
  "busConfigs": [
    {
      "name": "I2C",
      "presetName": "MCU_IIC",
      "labelId": "IIC",
      "prefix": "",
      "signals": ["SDA", "SCL"],
      "color": "#0d6efd"
    }
  ],
  "defaultBusType": "MCU_IIC",
  "defaultBusIndex": 1,
  "wireSpacing": 10,
  "wireLength": 50,
  "wireDirection": "right",
  "shortcutKey": "1",
  "refreshShortcutKey": "R"
}
```

相关文件：
- `iframe/settings.html` - 设置页面导入导出 UI 和逻辑

## 相关文件

- [README.md](./README.md) - 项目说明
- [CHANGELOG.md](./CHANGELOG.md) - 更新日志
- [LICENSE](./LICENSE) - Apache License 2.0
- [extension.json](./extension.json) - 扩展元数据
