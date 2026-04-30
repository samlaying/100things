import { useState } from 'react';
import { Copy, Check, ChevronRight, Star } from 'lucide-react';

const ThingCard = ({ thing, onClick, onCopyPrompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(thing.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      if (onCopyPrompt) onCopyPrompt(thing);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getCardSizeClass = () => {
    switch (thing.cardType) {
      case 'large':
        return 'row-span-2';
      case 'wide':
        return 'col-span-2';
      case 'mini':
        return 'row-span-1';
      default:
        return '';
    }
  };

  return (
    <div
      className={`card cursor-pointer ${getCardSizeClass()}`}
      style={{
        backgroundColor: thing.bgColor,
        color: thing.textColor
      }}
      onClick={() => onClick(thing)}
    >
      {/* Number Badge */}
      <div className="absolute top-4 right-4 font-bold text-2xl opacity-30 font-hand">
        {thing.number}
      </div>

      {/* Decorative Stickers */}
      {thing.stickers && thing.stickers.length > 0 && (
        <>
          {thing.stickers.map((sticker, index) => (
            <div
              key={index}
              className="absolute w-16 h-16 opacity-60 animate-float"
              style={{
                [index === 0 ? 'top' : 'bottom']: index === 0 ? '10px' : '10px',
                [index === 0 ? 'left' : 'right']: index === 0 ? '10px' : '10px',
                animationDelay: `${index * 0.5}s`
              }}
            >
              <img
                src={sticker}
                alt={`sticker-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {thing.icon && (
          <div className="w-12 h-12 mb-4 bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <img src={thing.icon} alt={thing.title} className="w-6 h-6" />
          </div>
        )}

        {/* Category Tag */}
        <div className="tag mb-3">
          {thing.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2">
          {thing.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm opacity-80 mb-3">
          {thing.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm opacity-70 mb-4 line-clamp-2">
          {thing.description}
        </p>

        {/* Action */}
        <div className="flex items-center justify-between">
          <button
            className="flex items-center space-x-1 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              onClick(thing);
            }}
          >
            <span>查看详情</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            className="p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors backdrop-blur-sm"
            onClick={handleCopy}
            title="复制提示词"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Featured Badge */}
      {thing.cardType === 'large' && (
        <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/40 rounded-full px-3 py-1 backdrop-blur-sm">
          <Star className="w-3 h-3" />
          <span className="text-xs font-medium">推荐</span>
        </div>
      )}
    </div>
  );
};

export default ThingCard;