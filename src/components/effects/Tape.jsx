import { stickers } from '../../data/componentsMap';

const Tape = ({
  text = '',
  color = 'yellow',
  rotation = -2,
  className = '',
  style = {}
}) => {
  const tapeStyles = {
    yellow: {
      backgroundColor: '#FFD84D',
      color: '#221F18'
    },
    pink: {
      backgroundColor: '#FF9FB2',
      color: '#221F18'
    },
    blue: {
      backgroundColor: '#A7D8FF',
      color: '#221F18'
    },
    green: {
      backgroundColor: '#AEE6C3',
      color: '#221F18'
    },
    purple: {
      backgroundColor: '#C8B6FF',
      color: '#221F18'
    },
    orange: {
      backgroundColor: '#FFB36B',
      color: '#221F18'
    }
  };

  return (
    <div
      className={`
        relative px-4 py-2 shadow-lg
        transform hover:scale-105 hover:rotate-0
        transition-all duration-300
        ${className}
      `}
      style={{
        ...tapeStyles[color],
        transform: `rotate(${rotation}deg)`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        ...style
      }}
    >
      {/* 透明胶带效果 */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '60px',
          height: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(4px)',
          borderRadius: '2px'
        }}
      />

      {/* 文字内容 */}
      <p className="font-hand text-lg relative z-10">
        {text}
      </p>

      {/* 装饰钉子 */}
      <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-black/20" />
      <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-black/20" />
      <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-black/20" />
      <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-black/20" />
    </div>
  );
};

// 预设便利贴组件
export const StickyNote = ({ type = 'ai', className = '', style = {} }) => {
  const stickyNotes = {
    ai: {
      image: stickers.stickyNote,
      text: 'AI 生活',
      color: 'yellow'
    },
    coffee: {
      image: stickers.coffeeCup,
      text: '咖啡时间',
      color: 'orange'
    },
    idea: {
      image: stickers.pencil,
      text: '好主意！',
      color: 'pink'
    },
    love: {
      image: stickers.pinkHeart,
      text: '喜欢这个',
      color: 'pink'
    },
    star: {
      image: stickers.yellowSparkle,
      text: '推荐',
      color: 'yellow'
    }
  };

  const note = stickyNotes[type] || stickyNotes.ai;

  return (
    <div className={`relative ${className}`} style={style}>
      <img
        src={note.image}
        alt={note.text}
        className="w-full h-auto transform hover:scale-105 hover:rotate-2 transition-all duration-300"
      />
    </div>
  );
};

// 便利贴集合
export const StickyNoteCollection = ({ className = '' }) => {
  const notes = [
    { type: 'ai', rotation: -3, delay: 0 },
    { type: 'coffee', rotation: 2, delay: 0.2 },
    { type: 'idea', rotation: -1, delay: 0.4 },
    { type: 'love', rotation: 3, delay: 0.6 },
    { type: 'star', rotation: -2, delay: 0.8 }
  ];

  return (
    <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
      {notes.map((note, index) => (
        <div
          key={index}
          className="animate-fade-in"
          style={{
            animationDelay: `${note.delay}s`,
            transform: `rotate(${note.rotation}deg)`
          }}
        >
          <StickyNote type={note.type} />
        </div>
      ))}
    </div>
  );
};

export default Tape;