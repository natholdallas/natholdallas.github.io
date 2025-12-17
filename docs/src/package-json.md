# 关于 package.json 的注意事项

```json
{
  "dependencies": {
    "express": "^4.17.21", // 允许升级到 <5.0.0
    "lodash": "~4.17.21", // 允许升级到 <4.18.0
    "axios": "1.6.7" // 固定死，不升级
  }
}
```
