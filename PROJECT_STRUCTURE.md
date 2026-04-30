# 📁 AI Playground 项目结构

## 完整目录结构

```
ai-playground/
├── public/                        # 静态资源目录
│   ├── fonts/                    # 字体文件
│   ├── icons/                    # 图标资源
│   ├── images/                   # 图片资源
│   ├── stickers/                 # 装饰贴纸
│   └── textures/                 # 纹理背景
│
├── src/                          # 源代码目录
│   ├── components/               # React 组件
│   │   ├── layout/              # 布局组件
│   │   │   └── Header.jsx       # 顶部导航栏
│   │   ├── home/                # 首页组件
│   │   │   ├── Hero.jsx         # 首屏英雄区
│   │   │   ├── CategoryFilter.jsx  # 分类筛选
│   │   │   └── MasonryGrid.jsx  # 瀑布流网格
│   │   ├── thing/               # 小事相关组件
│   │   │   ├── ThingCard.jsx    # 卡片组件
│   │   │   └── ThingDetailModal.jsx  # 详情弹窗
│   │   └── effects/             # 特效组件（待添加）
│   │
│   ├── data/                    # 数据文件
│   │   └── things.js            # 场景数据和分类数据
│   │
│   ├── hooks/                   # 自定义 Hooks
│   │   └── useThings.js         # 数据相关 Hooks
│   │
│   ├── pages/                   # 页面组件（待添加）
│   ├── services/                # API 服务
│   │   └── thingsApi.js         # 数据获取服务
│   │
│   ├── styles/                  # 样式文件
│   │   └── globals.css          # 全局样式和 Tailwind 配置
│   │
│   ├── utils/                   # 工具函数（待添加）
│   ├── assets/                  # 资源文件
│   ├── App.jsx                  # 主应用组件
│   ├── App.css                  # 应用样式
│   ├── main.jsx                 # 应用入口
│   └── index.css                # 基础样式
│
├── .env.example                 # 环境变量示例
├── index.html                   # HTML 模板
├── package.json                 # 项目依赖配置
├── vite.config.js              # Vite 构建配置
├── tailwind.config.js          # Tailwind CSS 配置
├── README.md                   # 项目说明
├── PROJECT_STATUS.md           # 项目状态文档
├── QUICKSTART.md              # 快速开始指南
└── PROJECT_STRUCTURE.md       # 本文件
```

## 📝 文件说明

### 核心配置文件

| 文件 | 说明 |
|------|------|
| `package.json` | 项目依赖和脚本配置 |
| `vite.config.js` | Vite 构建工具配置 |
| `tailwind.config.js` | Tailwind CSS 主题配置 |
| `index.html` | 应用 HTML 模板 |

### 组件文件

| 组件 | 路径 | 功能 |
|------|------|------|
| Header | `components/layout/Header.jsx` | 顶部导航，包含 Logo 和菜单 |
| Hero | `components/home/Hero.jsx` | 首屏标题区，展示项目介绍 |
| CategoryFilter | `components/home/CategoryFilter.jsx` | 分类筛选按钮组 |
| MasonryGrid | `components/home/MasonryGrid.jsx` | 瀑布流布局容器 |
| ThingCard | `components/thing/ThingCard.jsx` | 单个场景卡片 |
| ThingDetailModal | `components/thing/ThingDetailModal.jsx` | 场景详情弹窗 |

### 数据和服务

| 文件 | 路径 | 功能 |
|------|------|------|
| things.js | `data/things.js` | 场景数据和分类数据 |
| thingsApi.js | `services/thingsApi.js` | 数据获取 API 服务 |
| useThings.js | `hooks/useThings.js` | 数据管理自定义 Hooks |

### 样式文件

| 文件 | 路径 | 功能 |
|------|------|------|
| globals.css | `styles/globals.css` | 全局样式、Tailwind 指令、自定义样式类 |

## 🔧 扩展指南

### 添加新页面

1. 在 `src/pages/` 创建页面组件
2. 在 `App.jsx` 中添加路由
3. 在 Header 中添加导航链接

### 添加新组件

1. 确定组件类型（layout/home/thing/effects）
2. 在对应目录创建组件文件
3. 导出并在需要的地方引入

### 添加新样式

1. 在 `globals.css` 中添加自定义样式类
2. 或在 `tailwind.config.js` 中扩展主题配置

### 添加新功能

1. 在 `services/` 创建 API 服务
2. 在 `hooks/` 创建自定义 Hook
3. 在组件中使用新的服务

---

**提示**：保持目录结构清晰有助于项目维护和扩展！