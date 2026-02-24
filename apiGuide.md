# ElecAntifreeze 外部 API 使用指南

本文档描述 ElecAntifreeze 电子元器件库存管理系统提供的 HTTP API 接口，供外部应用程序调用。

## 基本信息

- **服务地址**: `http://localhost:11451`
- **局域网地址**: `http://<你的IP>:11451`
- **协议**: HTTP
- **数据格式**: JSON
- **字符编码**: UTF-8
- **CORS策略**: `*` (允许任何来源跨域访问)

## 启动 API 服务

API 服务器随 Electron 应用主进程一同启动。确保应用正在运行时，API 服务自动监听 `localhost:11451` 端口。

## 接口列表

### 1. 健康检查

检查 API 服务是否正常运行。

**请求**

```
GET /health
```

**响应示例**

```json
{
  "success": true,
  "data": {
    "status": "ok",
    "timestamp": "2026-02-22T14:00:00.000Z",
    "version": "1.0.0"
  }
}
```

---

### 2. 新建元器件

创建一个新的元器件记录。

**请求**

```
POST /addComp
Content-Type: application/json
```

**请求体参数**

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `name` | string | 是 | 元器件名称 |
| `type` | number \| string | 否 | 类型 ID 或名称。若为名称且不存在，将自动创建 |
| `package` | number \| string | 否 | 封装 ID 或名称。若为名称且不存在，将自动创建 |
| `stock` | number | 否 | 库存数量，默认为 0 |
| `totalPrice` | number | 否 | 库存总价值，默认为 0 |
| `imgShow` | number | 否 | 图片数量 |
| `*` | any | 否 | 其他自定义属性（如 `voltage`, `power`, `tolerance` 等） |

**请求示例**

```json
{
  "name": "10K",
  "type": "电阻",
  "package": "0603",
  "stock": 100,
  "totalPrice": 5.00,
  "power": "1/10W",
  "tolerance": "1%"
}
```

**成功响应**

```json
{
  "success": true,
  "data": {
    "id": 123,
    "created_at": "2026-02-22T14:30:00.000Z",
    "message": "元器件创建成功"
  }
}
```

**响应字段说明**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | number | 新建元器件的唯一标识符 |
| `created_at` | string | 元器件注册时间（ISO 8601 格式） |
| `message` | string | 操作结果描述 |

**错误响应**

```json
{
  "success": false,
  "error": "错误描述信息"
}
```

**HTTP 状态码**

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误（如 JSON 格式无效、缺少必填字段） |
| 500 | 服务器内部错误 |

---

## 使用示例

### cURL

```bash
# 健康检查
curl http://localhost:11451/health

# 新建元器件
curl -X POST http://localhost:11451/addComp \
  -H "Content-Type: application/json" \
  -d '{
    "name": "100nF",
    "type": "电容",
    "package": "0805",
    "stock": 200,
    "totalPrice": 10.00,
    "voltage": "50V"
  }'
```

### Python

```python
import requests
import json

# API 基础地址
BASE_URL = "http://localhost:11451"

# 健康检查
response = requests.get(f"{BASE_URL}/health")
print(response.json())

# 新建元器件
component_data = {
    "name": "STM32F103C8T6",
    "type": "IC",
    "package": "LQFP48",
    "stock": 50,
    "totalPrice": 150.00,
    "manufacturer": "ST",
    "core": "ARM Cortex-M3"
}

response = requests.post(
    f"{BASE_URL}/addComp",
    headers={"Content-Type": "application/json"},
    data=json.dumps(component_data)
)

result = response.json()
if result["success"]:
    print(f"创建成功，元器件 ID: {result['data']['id']}")
else:
    print(f"创建失败: {result['error']}")
```

### JavaScript (Node.js)

```javascript
const http = require('http');

// 健康检查
http.get('http://localhost:11451/health', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
}).on('error', console.error);

// 新建元器件
const componentData = JSON.stringify({
  name: '10uF',
  type: '电容',
  package: '1206',
  stock: 300,
  totalPrice: 15.00,
  voltage: '25V'
});

const options = {
  hostname: 'localhost',
  port: 11451,
  path: '/addComp',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(componentData)
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
});

req.on('error', console.error);
req.write(componentData);
req.end();
```

### JavaScript (浏览器 Fetch API)

```javascript
// 健康检查
fetch('http://localhost:11451/health')
  .then(res => res.json())
  .then(console.log);

// 新建元器件
fetch('http://localhost:11451/addComp', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: '1K',
    type: '电阻',
    package: '0402',
    stock: 500,
    totalPrice: 2.50
  })
})
  .then(res => res.json())
  .then(result => {
    if (result.success) {
      console.log(`创建成功，ID: ${result.data.id}`);
    } else {
      console.error(`创建失败: ${result.error}`);
    }
  });
```

---

## 元器件命名建议

为保持数据一致性，建议遵循以下命名规范：

| 元器件类型 | 命名示例 | 说明 |
|------------|----------|------|
| 电阻 | `10K`, `4.7K`, `100R` | 只写阻值 |
| 电容 | `100nF`, `10uF`, `22pF` | 只写容值 |
| 电感 | `10uH`, `100nH` | 只写感值 |
| 晶振 | `8MHz`, `16MHz`, `32.768kHz` | 只写频率 |
| IC | `STM32F103C8T6`, `ATMEGA328P` | 写完整型号 |
| 二极管 | `1N4148`, `SS34` | 写完整型号 |
| 三极管 | `2N3904`, `S8050` | 写完整型号 |

---

## 注意事项

1. **服务可用性**: API 服务仅在 ElecAntifreeze 应用运行时可用
2. **端口占用**: 如端口 `11451` 被占用，服务将无法启动
3. **网络访问**: API 监听 `0.0.0.0`，支持局域网远程访问（如 `http://192.168.1.100:11451`）
4. **CORS策略**: `*` 允许任何来源跨域访问，包括本地、局域网、嘉立创EDA等
5. **类型/封装自动创建**: 当传入名称（字符串）而非 ID（数字）时，系统会自动创建不存在的类型或封装
6. **自定义属性**: 任何不在系统字段列表中的参数都会被存储为元器件的自定义属性

---

## 版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-02-22 | 初始版本，支持新建元器件接口 |
