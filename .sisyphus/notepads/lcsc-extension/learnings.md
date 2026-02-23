# LCSC Chrome扩展开发学习笔记

## 开发规范
- 三层Layer架构：Layer1_apiIO / Layer2_funcHandle / Layer3_UI
- 所有函数必须详细注释
- 使用纯CSS，不添加第三方UI框架

## 已知模式
- 参考项目：chrome-extension-lcsc-order
- MV3 Chrome扩展
- MutationObserver+debounce处理动态DOM
- background.js绕过CORS

## API配置
- 地址：http://localhost:11451
- 端点：POST /addComp

## 立创商城页面结构
- 详情页URL: https://item.szlcsc.com/*.html
- 图片URL定位：aria-label包含"查看{元件名}的..."的a标签中的img src
- Created Layer2_funcHandle.js skeleton:
-   - Included URL_MATCH_PATTERN configuration
-   - Implemented parseComponentData(input) skeleton with thorough comments
-   - Exported URL_MATCH_PATTERN and parseComponentData for reuse
-   - File path: chrome-extension-lcsc/Layer2_funcHandle.js
- Created Layer2_funcHandle.js skeleton:
-   - Included URL_MATCH_PATTERN configuration
-   - Implemented parseComponentData(input) skeleton with thorough comments
-   - Exported URL_MATCH_PATTERN and parseComponentData for reuse
-   - File path: chrome-extension-lcsc/Layer2_funcHandle.js
- Added unit test placeholder at tests/layer2_funcHandle.test.js to verify module exports
