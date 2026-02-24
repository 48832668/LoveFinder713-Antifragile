# Draft: LCSC元器件详情读取Chrome扩展

## 需求摘要 (已确认)

### 核心功能
- 目标URL: `https://item.szlcsc.com/*.html` (元器件详情页)
- 后续扩展: 元器件列表页面的批量读取
- 对接系统: ElecAntifreeze 电子元器件管理系统

### 三层架构设计
1. **Layer1_apiIO**: 与ElecAntifreeze系统API交互
   - 参照 apiGuide.md
   - Base URL: `http://localhost:11451`
   - 主要端点: POST /addComp
   
2. **Layer2_funcHandle**: 业务逻辑层
   - 数据整理、筛选、排序、过滤
   - 解析Layer3下发的任务
   - 对Layer3提供现成数据
   
3. **Layer3**: UI交互层
   - 扩展界面组件实现
   - 用户交互处理
   - 界面布局

### 配置需求
- [x] URL匹配模式易于配置
- [x] API请求IP和端口可配置 (默认: localhost:11451)
- [x] 操作界面位置可配置 (默认: 右下角)
- [x] 窗口尺寸可调节
- [x] "展开"/"收起"按钮

### 数据读取行为
- 网页加载完成后自动尝试读取信息
- 读取完成后构建JSON数据
- JSON打印到console控制台

### 元器件数据字段 (基于示例 https://item.szlcsc.com/763484.html)
```json
{
  "name": "TS-1088-AR02016",
  "manufacturer": "XUNPU(讯普)",
  "description": "4*3*2mm 立贴 轻触开关",
  "partNumber": "C720477",
  "package": "SMD,4x3mm",
  "unitPrice": 0.28557,
  "imageUrl": "https://...",
  "parameters": {
    "元件类型": "轻触开关",
    "电路结构": "单刀单掷",
    "按钮形状": "圆形按钮",
    "作用力": "1.6N",
    "安装方式": "立贴",
    "开关长度": "4mm",
    "开关宽度": "3mm",
    "开关高度": "2mm",
    "带支架": "不带支架",
    "触点电流": "50mA",
    "额定电压": "12V",
    "按钮/盖帽颜色": "黑色",
    "引脚样式": "SMD接片",
    "工作寿命": "10万次",
    "工作温度": "-30℃~+80℃"
  }
}
```

### 图片URL定位规则
- 查找 aria-label 包含 "查看{元件名}的PCB引脚图、焊盘图、高清图" 的 `<a>` 标签
- 获取其中 `<img>` 的 `src` 属性值

## 参考项目分析

### chrome-extension-lcsc-order 结构
```
chrome-extension-lcsc-order/
├── manifest.json          # MV3配置
├── scripts/
│   ├── content-script.js  # 核心业务逻辑 (1006行)
│   └── background.js      # API转发 (62行)
├── styles/
│   └── content-style.css  # 样式 (401行)
├── icons/                 # 图标资源
└── 技术文档.md            # 详细文档
```

### 已采用的设计模式
- 纯CSS无Bootstrap依赖
- MutationObserver + debounce处理动态DOM
- 通过background.js绕过CORS
- 文本内容定位元素(不依赖固定索引)
- 悬浮面板UI模式

## API规范 (apiGuide.md)

### POST /addComp
```json
{
  "name": "string (必填)",
  "type": "string | number (可选)",
  "package": "string | number (可选)",
  "stock": "number (可选, 默认0)",
  "totalPrice": "number (可选)",
  "imageUrl": "string (可选)",
  // 其他自定义属性...
}
```

### 响应格式
```json
{
  "success": true,
  "data": { "id": 123, "message": "元器件创建成功" }
}
```

## 技术决策

### 架构模式
- 遵循三层Layer设计
- 高内聚低耦合
- 功能模块化复用

### 开发起点
1. 先设计界面和功能 → Layer3成形
2. 编写业务处理代码 → Layer2
3. 实现API调用 → Layer1

### 代码规范
- 所有函数必须严格注释
- 便于理解和维护

## 待澄清问题
- 扩展名称?
- 是否需要支持批量添加到系统?
- 价格梯度是否需要全部读取还是只取第一个?
- 是否需要库存数量字段?
