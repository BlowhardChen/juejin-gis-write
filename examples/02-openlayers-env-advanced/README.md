# OpenLayers 环境搭建进阶示例

这个目录配套文章《OpenLayers 环境搭建进阶：Vue3/Vite、React 集成与国内公共底图替换实战》。

## 目录

```txt
examples/02-openlayers-env-advanced/
├── shared/
│   └── baseLayers.ts         # OSM / 天地图 / 高德底图统一封装
├── vue3-vite/                # Vue3 + Vite 示例
└── react-vite/               # React + Vite 示例
```

## 运行 Vue3 示例

```bash
cd examples/02-openlayers-env-advanced/vue3-vite
npm install
npm run dev
```

## 运行 React 示例

```bash
cd examples/02-openlayers-env-advanced/react-vite
npm install
npm run dev
```

## 天地图 token

如果需要使用天地图底图，在对应示例目录下创建 `.env.local`：

```env
VITE_TDT_TOKEN=你的天地图tk
```

示例代码里没有内置真实 token，避免把个人或项目密钥提交到仓库。

## 共享底图封装

两个示例都复用了 `shared/baseLayers.ts`。Vite 示例通过 `server.fs.allow` 允许读取上一级共享目录，方便文章示例保持同一套底图逻辑。
