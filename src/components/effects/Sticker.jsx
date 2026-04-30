import { useState, useEffect } from 'react';
import { getRandomSticker } from '../../data/componentsMap';

const Sticker = ({ src, alt = '', className = '', style = {}, onClick = null }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`
        transition-all duration-300
        hover:scale-110 hover:rotate-2
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease, transform 0.3s ease'
      }}
      onLoad={() => setIsLoaded(true)}
      onClick={onClick}
    />
  );
};

// 随机装饰贴纸组件
export const RandomSticker = ({ count = 3, className = '' }) => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const generateStickers = () => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        src: getRandomSticker(),
        style: {
          position: 'absolute',
          left: `${Math.random() * 80 + 10}%`,
          top: `${Math.random() * 80 + 10}%`,
          transform: `rotate(${Math.random() * 30 - 15}deg)`,
          width: `${Math.random() * 40 + 40}px`,
          height: 'auto',
          opacity: 0.8,
          zIndex: 1
        }
      }));
    };

    setStickers(generateStickers());
  }, [count]);

  return (
    <div className={`relative ${className}`}>
      {stickers.map(sticker => (
        <Sticker
          key={sticker.id}
          src={sticker.src}
          className="animate-float"
          style={sticker.style}
        />
      ))}
    </div>
  );
};

// 固定位置装饰贴纸
export const FixedSticker = ({ src, position = 'top-right', size = 'md', className = '' }) => {
  const positionStyles = {
    'top-right': { top: '20px', right: '20px' },
    'top-left': { top: '20px', left: '20px' },
    'bottom-right': { bottom: '20px', right: '20px' },
    'bottom-left': { bottom: '20px', left: '20px' },
    'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
  };

  const sizes = {
    xs: '30px',
    sm: '40px',
    md: '60px',
    lg: '80px',
    xl: '120px'
  };

  return (
    <div
      className={`absolute ${className}`}
      style={{
        ...positionStyles[position],
        width: sizes[size],
        height: 'auto',
        zIndex: 2
      }}
    >
      <Sticker src={src} className="animate-float" />
    </div>
  );
};

// 贴纸云背景
export const StickerCloud = ({ stickers, className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${sticker.x || Math.random() * 80}%`,
            top: `${sticker.y || Math.random() * 80}%`,
            width: sticker.size || '50px',
            height: 'auto',
            transform: `rotate(${sticker.rotation || Math.random() * 20 - 10}deg)`,
            opacity: sticker.opacity || 0.6,
            animationDelay: `${index * 0.5}s`
          }}
        >
          <Sticker src={sticker.src} />
        </div>
      ))}
    </div>
  );
};

// 悬浮贴纸
export const FloatingStickers = ({ className = '' }) => {
  const floatingStickers = [
    { src: '/stickers/component_06_yellow_burst.png', size: '60px', x: '10%', y: '20%' },
    { src: '/stickers/component_07_pink_sparkle.png', size: '40px', x: '80%', y: '15%' },
    { src: '/stickers/component_05_pink_heart.png', size: '50px', x: '75%', y: '70%' },
    { src: '/stickers/component_08_yellow_sparkle.png', size: '35px', x: '15%', y: '75%' },
    { src: '/stickers/component_09_small_yellow_burst.png', size: '45px', x: '50%', y: '10%' },
  ];

  return <StickerCloud stickers={floatingStickers} className={className} />;
};

export default Sticker;