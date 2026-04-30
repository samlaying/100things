# AI Playground - 我用 AI 解决的一百件小事

基于 React + Vite + Tailwind CSS 构建的 AI 生活场景展示网站。

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

## 📁 项目结构

```
ai-playground/
├── public/               # 静态资源
│   ├── images/          # 图片资源
│   ├── icons/           # 图标资源
│   ├── stickers/        # 贴纸装饰
│   ├── textures/        # 纹理背景
│   └── fonts/           # 字体文件
├── src/
│   ├── components/      # React 组件
│   │   ├── layout/      # 布局组件
│   │   ├── home/        # 首页组件
│   │   ├── thing/       # 小事相关组件
│   │   └── effects/     # 特效组件
│   ├── data/           # 数据文件
│   ├── hooks/          # 自定义 Hooks
│   ├── pages/          # 页面组件
│   ├── services/       # API 服务
│   ├── styles/         # 全局样式
│   ├── utils/          # 工具函数
│   ├── App.jsx         # 主应用组件
│   └── main.jsx        # 应用入口
├── index.html          # HTML 模板
├── package.json        # 项目配置
├── vite.config.js      # Vite 配置
└── tailwind.config.js  # Tailwind CSS 配置
```

## 🎨 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **动画库**: Framer Motion
- **图标库**: Lucide React
- **路由**: React Router

## 🎯 核心功能

- ✅ 100 个 AI 生活场景展示
- ✅ 分类筛选功能
- ✅ 瀑布流卡片布局
- ✅ 详情弹窗
- ✅ 提示词一键复制
- ✅ 随机探索功能
- ✅ 响应式设计
- ✅ 平滑动画效果

## 📝 数据格式

在 `src/data/things.js` 中添加新的场景：

```javascript
{
  id: 1,
  number: "01",
  title: "场景标题",
  subtitle: "副标题",
  description: "详细描述",
  category: "分类名称",
  bgColor: "#FFD84D",
  textColor: "#221F18",
  image: "/images/example.png",
  icon: "/icons/example.png",
  cardType: "large",
  prompt: "推荐提示词",
  steps: ["步骤1", "步骤2", "步骤3"]
}
```

## 🔧 配置说明

### 添加新分类
在 `src/data/things.js` 的 `categories` 数组中添加：

```javascript
{ id: "new-category", name: "新分类", count: 0, color: "#颜色代码" }
```

### 自定义样式
修改 `tailwind.config.js` 中的主题配置：

```javascript
theme: {
  extend: {
    colors: {
      // 自定义颜色
    },
    fontFamily: {
      // 自定义字体
    }
  }
}
```

## 🚀 部署

### Vercel 部署
```bash
npm run build
# 然后将 dist 目录部署到 Vercel
```

### Docker 部署
```bash
docker build -t ai-playground .
docker run -p 8080:80 ai-playground
```

## 📄 许可证

MIT License

## 🙏 致谢

项目灵感来源于 AI 在日常生活中的应用场景。