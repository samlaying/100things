# 🚀 快速开始指南

## 启动项目

```bash
# 进入项目目录
cd F:\100things\ai-playground

# 启动开发服务器
npm run dev
```

项目将在 http://localhost:5173/ 启动

## 📝 添加新的 AI 场景

编辑 `src/data/things.js` 文件：

```javascript
{
  id: 7,  // 确保ID唯一
  number: "07",
  title: "你的场景标题",
  subtitle: "简短描述",
  description: "详细说明这个场景如何帮助用户",
  category: "效率提升", // 对应 categories 中的名称
  bgColor: "#FFD84D",   // 选择一个颜色
  textColor: "#221F18",
  image: "/images/your-image.png",
  icon: "/icons/your-icon.png",
  cardType: "normal",   // large, normal, wide, mini
  prompt: "这里是推荐的提示词模板",
  steps: [
    "第一步做什么",
    "第二步做什么",
    "第三步做什么"
  ]
}
```

## 🎨 自定义颜色

编辑 `tailwind.config.js`：

```javascript
colors: {
  'your-color': '#HEXCODE',
}
```

## 🖼️ 添加图片资源

1. 将图片放入 `public/images/` 目录
2. 在数据中引用：`image: "/images/your-image.png"`

## 🔧 常用命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

## 📱 测试响应式

1. 打开浏览器开发者工具（F12）
2. 切换设备模拟（手机/平板/桌面）
3. 测试不同屏幕尺寸

## 🎯 下一步

1. 添加更多 AI 场景数据
2. 创建自己的图片和图标
3. 测试所有功能
4. 准备部署

---

有问题？查看 `README.md` 或 `PROJECT_STATUS.md`