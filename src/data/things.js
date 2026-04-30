import { stickers, icons, images } from './componentsMap';

export const things = [
  {
    id: 1,
    number: "01",
    title: "3秒写完周报初稿",
    subtitle: "把一周工作内容丢给 AI",
    description: "结构清晰，重点突出，老板说很到位。",
    category: "效率提升",
    bgColor: "#FFD84D",
    textColor: "#221F18",
    image: images.reportNotepad,
    icon: icons.icon02,
    cardType: "large",
    stickers: [stickers.weeklyReport, stickers.robotAssistant],
    prompt: "请根据以下工作内容，帮我生成一份结构清晰、重点突出的周报。",
    steps: [
      "输入本周工作内容",
      "让 AI 按项目分类整理",
      "补充结果与下周计划"
    ]
  },
  {
    id: 2,
    number: "02",
    title: "智能整理会议纪要",
    subtitle: "录音转文字 + 自动提炼",
    description: "再也不用自己手写纪要了。",
    category: "效率提升",
    bgColor: "#AEE6C3",
    textColor: "#221F18",
    image: images.growthClipboard,
    icon: icons.icon03,
    cardType: "normal",
    stickers: [stickers.checklist, stickers.pencil],
    prompt: "请根据以下会议记录，生成结构化的会议纪要，包括讨论重点、决议事项和待办任务。",
    steps: [
      "上传会议录音或文字记录",
      "AI 自动提炼重点内容",
      "确认并补充遗漏事项"
    ]
  },
  {
    id: 3,
    number: "03",
    title: "生成创意菜谱",
    subtitle: "根据冰箱剩菜推荐做法",
    description: "告别外卖，在家做大厨。",
    category: "生活灵感",
    bgColor: "#FF9FB2",
    textColor: "#221F18",
    image: images.foodOptions,
    icon: icons.icon05,
    cardType: "normal",
    stickers: [stickers.forkIcon, stickers.coffeeCup],
    prompt: "我家里有以下食材：[列出食材]，请推荐几道简单易做的菜谱，并给出详细步骤。",
    steps: [
      "拍照或输入现有食材",
      "AI 推荐搭配菜谱",
      "跟着步骤做美食"
    ]
  },
  {
    id: 4,
    number: "04",
    title: "制定学习计划",
    subtitle: "把大目标拆成小任务",
    description: "学习不再三天打鱼两天晒网。",
    category: "学习成长",
    bgColor: "#C8B6FF",
    textColor: "#221F18",
    image: images.stackBooks,
    icon: icons.icon04,
    cardType: "normal",
    stickers: [stickers.mindMap, stickers.pencil],
    prompt: "我想在[时间]内学会[技能]，请帮我制定详细的学习计划，包括每日任务和进度检查点。",
    steps: [
      "明确学习目标和时间",
      "AI 生成个性化学习计划",
      "按计划执行并调整"
    ]
  },
  {
    id: 5,
    number: "05",
    title: "生成睡前故事",
    subtitle: "根据孩子喜好定制故事",
    description: "每个晚上都是新的冒险。",
    category: "娱乐消遣",
    bgColor: "#A7D8FF",
    textColor: "#221F18",
    image: images.plushLamb,
    icon: icons.icon06,
    cardType: "wide",
    stickers: [stickers.crystalBall, stickers.pinkSparkle],
    prompt: "请为[年龄]岁的孩子创作一个关于[主题]的睡前故事，要温暖有趣，适合慢慢朗读。",
    steps: [
      "设置孩子的年龄和兴趣",
      "AI 生成原创故事",
      "温馨的睡前时光"
    ]
  },
  {
    id: 6,
    number: "06",
    title: "社交媒体文案助手",
    subtitle: "一键生成朋友圈/小红书文案",
    description: "告别文案焦虑，点赞暴涨。",
    category: "创意脑洞",
    bgColor: "#FFB36B",
    textColor: "#221F18",
    image: images.phoneInspiration,
    icon: icons.icon07,
    cardType: "normal",
    stickers: [stickers.pinkHeart, stickers.yellowSparkle],
    prompt: "我分享了关于[主题]的内容，请帮我写一个适合[平台]的文案，要有趣有料，能引起互动。",
    steps: [
      "描述要分享的内容",
      "选择目标平台风格",
      "AI 生成多个版本供选择"
    ]
  },
  {
    id: 7,
    number: "07",
    title: "旅行计划助手",
    subtitle: "根据偏好定制完美行程",
    description: "说走就走，不用再做攻略。",
    category: "生活灵感",
    bgColor: "#AEE6C3",
    textColor: "#221F18",
    image: images.travelCollage,
    icon: icons.icon08,
    cardType: "normal",
    stickers: [stickers.santoriniPhoto, stickers.paperAirplane],
    prompt: "我想去[目的地]旅行[天数]天，预算[金额]，喜欢[兴趣点]，请帮我制定详细的旅行计划。",
    steps: [
      "设置目的地和预算",
      "选择兴趣偏好",
      "AI 生成详细行程"
    ]
  },
  {
    id: 8,
    number: "08",
    title: "健身计划定制",
    subtitle: "根据目标生成训练计划",
    description: "科学健身，事半功倍。",
    category: "效率提升",
    bgColor: "#FFD84D",
    textColor: "#221F18",
    image: stickers.dumbbell,
    icon: icons.icon09,
    cardType: "normal",
    stickers: [stickers.growthChart, stickers.yellowBurst],
    prompt: "我想[健身目标]，每周可以锻炼[天数]，请帮我制定训练计划和饮食建议。",
    steps: [
      "设定健身目标",
      "输入可锻炼时间",
      "获得定制计划"
    ]
  },
  {
    id: 9,
    number: "09",
    title: "礼物推荐助手",
    subtitle: "根据关系和预算选礼物",
    description: "再也不用纠结送什么了。",
    category: "生活灵感",
    bgColor: "#FF9FB2",
    textColor: "#221F18",
    image: images.giftBox,
    icon: icons.icon10,
    cardType: "wide",
    stickers: [stickers.pinkHeart, stickers.envelope],
    prompt: "我要给[关系]送礼物，预算[金额]，TA 喜欢[兴趣]，请推荐一些有创意的礼物。",
    steps: [
      "描述收礼人信息",
      "设定预算范围",
      "获得个性化推荐"
    ]
  },
  {
    id: 10,
    number: "10",
    title: "灵感记录助手",
    subtitle: "捕捉和整理零散想法",
    description: "让每个灵感都有价值。",
    category: "创意脑洞",
    bgColor: "#C8B6FF",
    textColor: "#221F18",
    image: images.inspirationChecklist,
    icon: icons.icon12,
    cardType: "normal",
    stickers: [stickers.pencil, stickers.yellowSparkle],
    prompt: "我有一个关于[主题]的想法：[想法内容]，请帮我整理和完善这个灵感。",
    steps: [
      "快速记录灵感",
      "AI 帮助整理分类",
      "形成可执行的创意"
    ]
  },
  {
    id: 11,
    number: "11",
    title: "音乐推荐助手",
    subtitle: "根据心情推荐歌单",
    description: "每个瞬间都有完美的配乐。",
    category: "娱乐消遣",
    bgColor: "#A7D8FF",
    textColor: "#221F18",
    image: images.audioPlayer,
    icon: icons.icon13,
    cardType: "normal",
    stickers: [stickers.earbuds, stickers.pinkSparkle],
    prompt: "我现在感觉[心情]，在做[活动]，请推荐一些适合的歌曲。",
    steps: [
      "描述当前心情",
      "说明活动场景",
      "获得专属歌单"
    ]
  },
  {
    id: 12,
    number: "12",
    title: "数据可视化助手",
    subtitle: "把复杂数据变成图表",
    description: "让数据讲故事，一目了然。",
    category: "效率提升",
    bgColor: "#FFB36B",
    textColor: "#221F18",
    image: images.donutChart,
    icon: icons.icon14,
    cardType: "large",
    stickers: [stickers.growthChart, stickers.yellowBurst],
    prompt: "请帮我将以下数据可视化，选择最合适的图表类型：[数据]",
    steps: [
      "上传数据表格",
      "AI 分析数据特征",
      "生成最佳可视化方案"
    ]
  }
];

export const categories = [
  { id: "all", name: "全部", count: 12, color: "#222222" },
  { id: "efficiency", name: "效率提升", count: 4, color: "#FFD84D" },
  { id: "life", name: "生活灵感", count: 3, color: "#AEE6C3" },
  { id: "study", name: "学习成长", count: 1, color: "#C8B6FF" },
  { id: "fun", name: "娱乐消遣", count: 2, color: "#A7D8FF" },
  { id: "creative", name: "创意脑洞", count: 2, color: "#FFB36B" }
];