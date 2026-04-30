# 🎯 组件资源快速参考

## 🚀 快速启动

```bash
cd F:\100things\ai-playground
npm run dev
```

访问: http://localhost:5173/

## 📁 资源速查

### 🎨 贴纸 (28个)
```javascript
import { stickers } from '../data/componentsMap';

// 常用贴纸
stickers.robotAssistant      // 机器人助手
stickers.coffeeCup           // 咖啡杯
stickers.weeklyReport        // 周报记事本
stickers.pinkHeart           // 粉色爱心
stickers.yellowSparkle       // 黄色闪光
stickers.giftBox             // 礼品盒
stickers.crystalBall         // 水晶球
stickers.gumballMachine      // 糖果机
```

### 🏷️ 图标 (24个)
```javascript
import { icons } from '../data/componentsMap';

// 图标使用
icons.icon01  // icon_01_label.png
icons.icon02  // icon_02_label.png
// ... icon_01 到 icon_38
```

### 🖼️ 主图 (17个)
```javascript
import { images } from '../data/componentsMap';

// 常用主图
images.weeklyReport           // 周报记事本
images.travelCollage         // 旅行照片拼贴
images.stackBooks            // 书堆
images.giftBox               // 礼品盒
images.crystalBall           // 水晶球
images.gumballMachine        // 糖果机
```

## 🎨 组件使用

### 贴纸组件
```jsx
import { FloatingStickers, FixedSticker } from '../components/effects/Sticker';

// 浮动装饰背景
<FloatingStickers className="absolute inset-0" />

// 固定位置贴纸
<FixedSticker src={stickers.pinkHeart} position="top-right" size="md" />
```

### 便利贴组件
```jsx
import { StickyNote, StickyNoteCollection } from '../components/effects/Tape';

// 单个便利贴
<StickyNote type="ai" />  // ai, coffee, idea, love, star

// 便利贴集合
<StickyNoteCollection className="my-8" />
```

### 涂鸦组件
```jsx
import { DoodleBorder, DoodleCollection } from '../components/effects/Doodle';

// 涂鸦边框
<DoodleBorder>
  <h1>你的内容</h1>
</DoodleBorder>

// 涂鸦集合
<DoodleCollection maxDoodles={5} />
```

## 🔥 智能功能

### 按分类获取贴纸
```javascript
import { getCategoryStickers } from '../data/componentsMap';

const stickers = getCategoryStickers('效率提升');
// 返回: [周报记事本, 成长图表, 清单, 机器人助手]
```

### 获取随机贴纸
```javascript
import { getRandomSticker } from '../data/componentsMap';

const randomSticker = getRandomSticker();
```

## 📊 数据格式

### 场景数据模板
```javascript
{
  id: 1,
  number: "01",
  title: "场景标题",
  subtitle: "副标题",
  description: "详细描述",
  category: "效率提升",  // 效率提升, 生活灵感, 学习成长, 娱乐消遣, 创意脑洞
  bgColor: "#FFD84D",    // 卡片背景色
  textColor: "#221F18",  // 文字颜色
  image: images.weeklyReport,  // 主图
  icon: icons.icon02,            // 图标
  cardType: "large",    // large, normal, wide, mini
  stickers: [stickers.weeklyReport, stickers.robotAssistant],  // 装饰贴纸
  prompt: "推荐提示词",
  steps: ["步骤1", "步骤2", "步骤3"]
}
```

## 🎨 颜色速查

### 分类颜色
```javascript
const categoryColors = {
  '全部': '#222222',
  '效率提升': '#FFD84D',    // 黄色
  '生活灵感': '#AEE6C3',    // 绿色
  '学习成长': '#C8B6FF',    // 紫色
  '娱乐消遣': '#A7D8FF',    // 蓝色
  '创意脑洞': '#FFB36B'     // 橙色
};
```

### 卡片颜色类
```css
bg-card-yellow    /* #FFD84D */
bg-card-green     /* #AEE6C3 */
bg-card-pink      /* #FF9FB2 */
bg-card-blue      /* #A7D8FF */
bg-card-purple    /* #C8B6FF */
bg-card-orange    /* #FFB36B */
```

## ⚡ 动画效果

### CSS 动画类
```css
animate-float      /* 浮动动画 */
animate-shake      /* 悬停摇晃 */
animate-fade-in    /* 淡入效果 */
```

### 悬停效果
```css
hover:scale-110    /* 悬停放大 */
hover:rotate-2     /* 悬停旋转 */
hover:-translate-y-1  /* 悬停上移 */
```

## 📱 响应式断点

```css
/* 手机 */
@media (max-width: 640px) { }

/* 平板 */
@media (min-width: 641px) and (max-width: 1024px) { }

/* 桌面 */
@media (min-width: 1025px) { }
```

### Tailwind 响应式类
```jsx
<div className="w-8 md:w-12 lg:w-16">  {/* 响应式尺寸 */}
<div className="hidden md:block">       {/* 响应式显示 */}
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">  {/* 响应式网格 */}
```

## 🔧 常用操作

### 添加新场景
1. 在 `src/data/things.js` 中添加场景数据
2. 选择合适的图片资源
3. 添加相关装饰贴纸
4. 重新启动开发服务器

### 自定义装饰
1. 选择合适的组件 (Sticker/Tape/Doodle)
2. 配置位置和大小
3. 添加动画效果
4. 测试响应式表现

### 调试技巧
1. 使用 React DevTools 查看组件状态
2. 使用浏览器开发者工具检查样式
3. 查看控制台是否有错误信息
4. 测试不同屏幕尺寸下的表现

## 📚 相关文档

- `COMPONENTS_GUIDE.md` - 详细组件使用指南
- `TESTING_GUIDE.md` - 测试指南
- `PROJECT_STRUCTURE.md` - 项目结构说明
- `QUICKSTART.md` - 快速开始指南

## 🎯 开发工作流

1. **启动项目**: `npm run dev`
2. **编辑数据**: `src/data/things.js`
3. **使用组件**: 导入需要的装饰组件
4. **测试效果**: 刷新浏览器查看
5. **构建部署**: `npm run build`

---

**提示**: 所有组件都已整合完成，可以直接使用！🎉