# 🎨 组件资源使用指南

## 📁 资源文件总览

已成功整合 icon-splitter 的所有组件资源到项目中：

### 📊 资源统计
- **贴纸组件**: 40+ 个装饰性贴纸
- **图标标签**: 30+ 个分类图标
- **主图组件**: 20+ 个场景图片
- **总计**: 90+ 个精美UI组件

## 🗂️ 资源分类

### 🎯 贴纸组件 (`/public/stickers/`)

#### 主要角色
- `sticky_note_ai_life.png` - AI生活便利贴
- `robot_assistant.png` - 机器人助手
- `coffee_cup.png` - 咖啡杯
- `potted_plant_smiley.png` - 笑脸盆栽

#### 装饰元素
- `component_05_pink_heart.png` - 粉色爱心
- `component_06_yellow_burst.png` - 黄色星爆
- `component_07_pink_sparkle.png` - 粉色闪光
- `component_08_yellow_sparkle.png` - 黄色闪光

#### 场景相关
- `weekly_report_notepad.png` - 周报记事本
- `travel_photo_collage.png` - 旅行照片拼贴
- `food_options_grid.png` - 食物选项网格
- `stack_of_books.png` - 书堆

### 🏷️ 图标标签 (`/public/icons/`)

按编号分类的图标标签：
- `component_10_icon_01_label.png` 到 `component_69_icon_38_label.png`
- 适用于不同的功能分类

### 🖼️ 主图组件 (`/public/images/`)

大型场景图片：
- `open_book_to_be_continued.png` - 打开的书
- `crystal_ball.png` - 水晶球
- `gumball_machine.png` - 糖果机
- `gift_box.png` - 礼品盒
- `donut_chart.png` - 甜甜圈图

## 🎨 React 组件系统

### 1. 贴纸组件 (`Sticker.jsx`)

#### 基础贴纸
```jsx
import Sticker from '../components/effects/Sticker';

<Sticker
  src="/stickers/robot_assistant.png"
  alt="机器人助手"
  className="w-16 h-16"
/>
```

#### 随机装饰贴纸
```jsx
import { RandomSticker } from '../components/effects/Sticker';

<RandomSticker count={3} className="relative h-64" />
```

#### 固定位置贴纸
```jsx
import { FixedSticker } from '../components/effects/Sticker';

<FixedSticker
  src="/stickers/pink_heart.png"
  position="top-right"
  size="md"
/>
```

#### 悬浮贴纸集合
```jsx
import { FloatingStickers } from '../components/effects/Sticker';

<FloatingStickers className="absolute inset-0" />
```

### 2. 便利贴组件 (`Tape.jsx`)

#### 基础便利贴
```jsx
import Tape from '../components/effects/Tape';

<Tape
  text="好主意！"
  color="pink"
  rotation={-2}
/>
```

#### 预设便利贴
```jsx
import { StickyNote } from '../components/effects/Tape';

<StickyNote type="ai" />
<StickyNote type="coffee" />
<StickyNote type="idea" />
```

#### 便利贴集合
```jsx
import { StickyNoteCollection } from '../components/effects/Tape';

<StickyNoteCollection className="my-8" />
```

### 3. 涂鸦组件 (`Doodle.jsx`)

#### 基础涂鸦
```jsx
import Doodle from '../components/effects/Doodle';

<Doodle
  src="/stickers/paper_airplane_doodle.png"
  animated={true}
/>
```

#### 涂鸦集合
```jsx
import { DoodleCollection } from '../components/effects/Doodle';

<DoodleCollection maxDoodles={5} className="my-4" />
```

#### 涂鸦边框
```jsx
import { DoodleBorder } from '../components/effects/Doodle';

<DoodleBorder>
  <h1>你的内容</h1>
</DoodleBorder>
```

## 📝 在数据中使用

### 更新场景数据
```javascript
// src/data/things.js
import { stickers, icons, images } from './componentsMap';

export const things = [
  {
    id: 1,
    title: "你的场景标题",
    // 使用新的图片资源
    image: images.weeklyReport,
    icon: icons.icon02,
    stickers: [stickers.robotAssistant, stickers.yellowBurst],
    // ... 其他属性
  }
];
```

### 按分类获取贴纸
```javascript
import { getCategoryStickers } from './componentsMap';

const efficiencyStickers = getCategoryStickers('效率提升');
// 返回: [周报记事本, 成长图表, 清单, 机器人助手]
```

## 🎯 使用场景示例

### 1. 装饰首页 Hero 区
```jsx
<FloatingStickers className="absolute inset-0" />
<StickyNote type="ai" />
```

### 2. 卡片装饰
```jsx
<div className="card">
  {thing.stickers.map((sticker, index) => (
    <div key={index} className="absolute top-2 right-2">
      <img src={sticker} alt="装饰" className="w-8 h-8" />
    </div>
  ))}
</div>
```

### 3. 详情页装饰
```jsx
<DoodleBorder>
  <h2>场景详情</h2>
  <p>{description}</p>
</DoodleBorder>
```

### 4. 分类装饰
```jsx
const categoryStickers = getCategoryStickers(categoryName);
return (
  <div className="flex gap-2">
    {categoryStickers.map((sticker, index) => (
      <Sticker key={index} src={sticker} />
    ))}
  </div>
);
```

## 🎨 颜色搭配建议

### 贴纸与卡片颜色搭配
```javascript
const colorCombinations = {
  yellow: ['#FFD84D', '#FFF8E8'],  // 黄色卡片配奶油背景
  pink: ['#FF9FB2', '#FFF0F5'],    // 粉色卡片配淡紫背景
  green: ['#AEE6C3', '#F0FFF4'],   // 绿色卡片配淡绿背景
  blue: ['#A7D8FF', '#F0F8FF'],    // 蓝色卡片配淡蓝背景
  purple: ['#C8B6FF', '#F8F0FF'],  // 紫色卡片配淡紫背景
  orange: ['#FFB36B', '#FFF8E8']   // 橙色卡片配奶油背景
};
```

## 🚀 高级用法

### 动态贴纸选择
```javascript
const getRandomStickerForCategory = (category) => {
  const stickers = getCategoryStickers(category);
  return stickers[Math.floor(Math.random() * stickers.length)];
};
```

### 响应式贴纸大小
```jsx
<img
  src={sticker}
  alt="装饰贴纸"
  className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
/>
```

### 动画效果组合
```jsx
<div className="animate-float hover:scale-110 transition-all">
  <Sticker src={sticker} />
</div>
```

## 📋 资源管理

### 添加新资源
1. 将图片文件放入对应目录 (`/public/stickers/`, `/public/icons/`, `/public/images/`)
2. 在 `src/data/componentsMap.js` 中添加映射
3. 在需要的地方导入使用

### 资源优化建议
- 大图片使用 `images` 目录
- 小图标使用 `icons` 目录
- 装饰元素使用 `stickers` 目录
- 保持文件名描述性

---

**提示**: 所有组件都已整合完成，可以直接在项目中使用！