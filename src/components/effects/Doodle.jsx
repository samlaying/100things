import { useState } from 'react';
import { stickers } from '../../data/componentsMap';

const Doodle = ({
  src,
  alt = '',
  className = '',
  style = {},
  animated = true,
  onClick = null
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`inline-block ${animated ? 'animate-float' : ''} ${className}`}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className={`
          transition-transform duration-300
          ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
        `}
        style={{
          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
          transformOrigin: 'center'
        }}
      />
    </div>
  );
};

// 涂鸦集合组件
export const DoodleCollection = ({ className = '', maxDoodles = 5 }) => {
  const doodles = [
    stickers.blackCurlDoodle,
    stickers.pinkScribble,
    stickers.pinkScribbleMarks,
    stickers.paperAirplane,
    stickers.yellowBurst,
    stickers.pinkSparkle,
    stickers.yellowSparkle
  ];

  const selectedDoodles = doodles.slice(0, maxDoodles);

  return (
    <div className={`flex flex-wrap gap-2 justify-center ${className}`}>
      {selectedDoodles.map((doodle, index) => (
        <Doodle
          key={index}
          src={doodle}
          alt={`doodle-${index}`}
          className="w-12 h-12"
          style={{
            animationDelay: `${index * 0.2}s`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`
          }}
        />
      ))}
    </div>
  );
};

// 装饰性涂鸦边框
export const DoodleBorder = ({
  children,
  className = '',
  doodles = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
}) => {
  const doodleComponents = {
    'top-left': stickers.paperAirplane,
    'top-right': stickers.yellowSparkle,
    'bottom-left': stickers.pinkScribble,
    'bottom-right': stickers.blackCurlDoodle
  };

  return (
    <div className={`relative p-8 ${className}`}>
      {/* 涂鸦装饰 */}
      {doodles.map((position, index) => (
        doodleComponents[position] && (
          <div
            key={index}
            className="absolute w-16 h-16"
            style={{
              [position.includes('top') ? 'top' : 'bottom']: '-20px',
              [position.includes('left') ? 'left' : 'right']: '-20px',
            }}
          >
            <Doodle src={doodleComponents[position]} animated={true} />
          </div>
        )
      ))}

      {/* 内容 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// 涂鸦背景
export const DoodleBackground = ({
  children,
  className = '',
  density = 'medium'
}) => {
  const backgroundDoodles = {
    light: 3,
    medium: 6,
    heavy: 10
  };

  const count = backgroundDoodles[density] || backgroundDoodles.medium;
  const doodleArray = [
    stickers.yellowBurst,
    stickers.pinkSparkle,
    stickers.yellowSparkle,
    stickers.smallYellowBurst,
    stickers.blackCurlDoodle,
    stickers.pinkScribbleMarks
  ];

  const generateDoodles = () => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      src: doodleArray[i % doodleArray.length],
      style: {
        position: 'absolute',
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
        width: `${Math.random() * 30 + 30}px`,
        height: 'auto',
        opacity: 0.4,
        transform: `rotate(${Math.random() * 360}deg)`,
        pointerEvents: 'none'
      }
    }));
  };

  const [doodles] = useState(generateDoodles());

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 背景涂鸦 */}
      {doodles.map(doodle => (
        <Doodle
          key={doodle.id}
          src={doodle.src}
          style={doodle.style}
          animated={true}
        />
      ))}

      {/* 内容 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// 互动涂鸦
export const InteractiveDoodle = ({ src, onClick, className = '' }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    if (onClick) onClick();
  };

  return (
    <Doodle
      src={src}
      onClick={handleClick}
      className={className}
      style={{
        transform: clickCount % 2 === 0 ? 'scale(1)' : 'scale(1.2)'
      }}
    />
  );
};

export default Doodle;