# OpenLayers 从入门到企业级 GIS 系统实战

<div align="center">

![OpenLayers](https://img.shields.io/badge/OpenLayers-WebGIS-success)
![Vue3](https://img.shields.io/badge/Vue3-TypeScript-42b883)
![React](https://img.shields.io/badge/React-GIS-61dafb)
![React Native](https://img.shields.io/badge/ReactNative-MobileGIS-blue)
![Writing](https://img.shields.io/badge/Juejin-GIS%20Writing-orange)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

这是一个面向掘金专栏的前端 GIS 内容仓库，配套专栏：

**《OpenLayers 从入门到企业级 GIS 系统实战》**

这个仓库不准备把 OpenLayers 写成 API 手册。真正想沉淀的是一套更接近真实项目的前端 GIS 工程体系：从地图初始化、坐标系、图层管理，到性能优化、企业级架构、React Native GIS 和智慧农业场景。

实际项目里，GIS 页面很少只是“加载一张地图”。更常见的是坐标偏移、瓦片服务不统一、图层越来越多、点位渲染卡顿、业务权限和地图状态耦合在一起。这个仓库的内容会围绕这些问题展开。

---

## 仓库定位

本仓库主要用于：

- 规划 OpenLayers / WebGIS 掘金专栏选题
- 沉淀前端 GIS 工程化文章
- 组织示例代码、草稿、图片和写作模板
- 通过 Codex Skills 生成和优化技术文章
- 把真实项目里的地图问题整理成可复用的技术内容

重点不是“会调 API”，而是能解释清楚：

- 一个企业级 GIS 页面应该怎么拆
- 图层、数据源、Feature、Overlay 如何管理生命周期
- EPSG、GCJ02、Web Mercator、TileGrid 为什么会影响业务效果
- 海量点位、轨迹、矢量数据为什么会卡
- Web GIS 和 React Native GIS 在工程落地上有什么差异
- 智慧农业、物流、大屏这类行业地图系统应该怎么设计

---

## 内容方向

专栏内容会围绕 8 条主线展开。

### 1. OpenLayers 快速入门

- 为什么前端开发需要 GIS 能力
- 5 分钟搭建第一个 OpenLayers 地图
- Map / View / Layer / Source / Feature 五大核心对象
- 一个真实 GIS 页面由哪些模块组成

### 2. 核心开发能力

- TileLayer、VectorLayer、ImageLayer 的选择
- GeoJSON / KML / WKT 数据渲染
- Marker 点位、聚合、动画和点击交互
- 轨迹线、行政区划、热力图
- Overlay 弹窗和地图联动
- Draw / Modify / Select 绘制编辑
- WMTS / WMS / XYZ 瓦片服务加载

### 3. 坐标系与 GIS 原理

- EPSG:4326 与 EPSG:3857 的本质区别
- Web Mercator、WGS84、GCJ02、BD09
- fromLonLat 背后的投影转换
- TileGrid 与瓦片坐标体系
- 企业项目里的坐标系统一方案

### 4. 工程化体系

- Vue3 + OpenLayers 企业级封装
- React + OpenLayers 最佳实践
- GIS SDK 二次封装
- 图层树、图层状态、图层生命周期
- Pinia / Zustand 地图状态管理
- GIS 微前端与多地图系统统一
- 地图权限和动态配置体系

### 5. 性能优化与渲染机制

- 为什么地图缩放和拖拽会越来越卡
- 海量点位渲染与聚合优化
- Canvas vs WebGL 的工程取舍
- VectorTile 高性能渲染
- Feature 生命周期与内存压力
- 轨迹渲染、瓦片缓存、离线地图
- OpenLayers 渲染机制源码分析

### 6. 行业项目实战

- 智慧农业地图系统
- 农田地块绘制与面积测算
- 农机轨迹回放
- 北斗 / GPS 实时定位
- 物流轨迹和电子围栏
- ECharts + OpenLayers GIS 大屏

### 7. React Native GIS

- RN + WebView + OpenLayers 移动端地图方案
- Android / iOS 定位差异和权限处理
- 手机朝向、指南针、传感器集成
- 离线地图与弱网能力
- 智慧农业移动 GIS App 实战

### 8. 企业级架构

- GIS 地图中台
- 插件化地图平台
- 多业务地图系统统一
- GIS 低代码能力
- 企业级地图权限和配置中心
- GIS 技术团队建设

---

## 适合读者

这个专栏适合这些读者：

- 想进入 WebGIS / 前端地图可视化方向的前端工程师
- 已经会用 OpenLayers，但想进一步理解工程化封装的人
- 在项目里遇到坐标偏移、图层混乱、渲染卡顿问题的开发者
- 正在做智慧农业、物流、GIS 大屏、移动地图项目的工程师
- 希望把 GIS 能力从“功能开发”提升到“系统设计”的技术负责人

---

## 仓库结构

计划中的目录结构如下：

```txt
juejin-gis-write/
├── README.md
├── ROADMAP.md
├── CHANGELOG.md
├── LICENSE
├── .gitignore
│
├── articles/                 # 正式文章
│   ├── 01-getting-started/
│   ├── 02-core-development/
│   ├── 03-coordinate-system/
│   ├── 04-engineering/
│   ├── 05-performance/
│   ├── 06-project-practice/
│   ├── 07-react-native-gis/
│   └── 08-architecture/
│
├── examples/                 # 每篇文章配套示例代码
│   ├── ol-basic-map/
│   ├── ol-layer-manager/
│   ├── ol-coordinate-transform/
│   ├── ol-massive-points/
│   └── rn-gis-demo/
│
├── assets/                   # 图片、截图、动图
│   ├── images/
│   ├── diagrams/
│   └── screenshots/
│
├── templates/                # 写作模板
│   ├── article-template.md
│   ├── bug-analysis-template.md
│   ├── architecture-template.md
│   └── performance-template.md
│
├── resources/                # 资料库
│   ├── links.md
│   ├── gis-terms.md
│   ├── coordinate-system.md
│   └── openlayers-api-notes.md
│
└── .codex/
    └── skills/
        ├── openlayers-gis-author/
        ├── openlayers-core/
        ├── gis-performance/
        ├── gis-architecture/
        ├── rn-gis-mobile/
        ├── juejin-style/
        └── ai-humanizer/
```

---

## Codex Skills

仓库内置了一组面向 GIS 技术写作的 Codex Skills：

| Skill                   | 用途                                        |
| ----------------------- | ------------------------------------------- |
| `openlayers-gis-author` | 生成专业的 OpenLayers / 前端 GIS 工程文章   |
| `openlayers-core`       | 编写 OpenLayers 基础到进阶教程              |
| `gis-performance`       | 编写海量点位、渲染机制、性能优化类文章      |
| `gis-architecture`      | 编写 GIS 平台架构、图层管理、地图中台类文章 |
| `rn-gis-mobile`         | 编写 React Native GIS 和移动端地图文章      |
| `juejin-style`          | 优化掘金文章标题、节奏、可读性和 SEO        |
| `ai-humanizer`          | 降低 AI 模板感，让文章更像真实工程经验分享  |

写作时通常会组合使用这些 Skill。例如：

- OpenLayers 基础文章：`openlayers-core` + `juejin-style` + `ai-humanizer`
- 图层管理架构文章：`openlayers-gis-author` + `gis-architecture` + `juejin-style`
- 海量点位优化文章：`openlayers-gis-author` + `gis-performance` + `ai-humanizer`
- RN GIS 文章：`rn-gis-mobile` + `openlayers-gis-author` + `juejin-style`

---

## 写作原则

这个仓库里的文章会尽量遵守几个原则：

- 少写空泛概念，多写真实项目里的问题
- 少做 API 罗列，多解释底层机制和工程取舍
- 代码示例尽量使用 TypeScript，并贴近 Vue3、React 或 React Native 项目结构
- 坐标系、投影、瓦片、图层生命周期这些 GIS 概念要讲准确
- 性能优化不能停留在“减少数据量”，要说明瓶颈在哪里
- 文章要适合掘金阅读，但不做标题党

实际写作时，一篇文章通常会按这个节奏展开：

1. 业务背景
2. 问题场景
3. 技术分析
4. 方案设计
5. 核心代码
6. 工程注意事项
7. 优化建议
8. 总结经验

---

## 优先更新计划

短期优先沉淀这几类内容：

- 坐标系与点位偏移问题
- OpenLayers 图层管理体系
- 海量点位和轨迹渲染优化
- Vue3 / React 中的 OpenLayers 工程封装
- 智慧农业 GIS 项目实战
- React Native GIS 移动端方案

这些选题更容易体现这个专栏的差异化：不是从零散 API 开始，而是从真实 GIS 项目的问题出发。

---

## 作者

BlowhardChen

前端 GIS 开发工程师 / React Native GIS 开发 / OpenLayers 工程实践

GitHub：https://github.com/BlowhardChen

掘金专栏：

《OpenLayers 从入门到企业级 GIS 系统实战》https://juejin.cn/column/7619915308670582835

---

## License

MIT License
