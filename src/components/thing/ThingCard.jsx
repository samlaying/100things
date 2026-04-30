import { useState } from 'react';
import { Copy, Check, ChevronRight } from 'lucide-react';

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

  return (
    <div
      className="card cursor-pointer"
      style={{
        backgroundColor: thing.bgColor,
        color: thing.textColor
      }}
      onClick={() => onClick(thing)}
    >
      {/* 编号圆圈 */}
      <div className="absolute top-[24px] left-[24px] w-[34px] h-[34px] rounded-full bg-[#211d19] text-white flex items-center justify-center font-extrabold text-[15px] z-20">
        {thing.number}
      </div>

      {/* 卡片内容区域 */}
      <div className="relative z-10 w-[55%] mt-[18px]">
        {/* 分类标签 */}
        <div className="tag mb-3">
          {thing.category}
        </div>

        {/* 标题 */}
        <h3 className="text-[21px] leading-[1.35] mb-[12px] text-[#171411] font-bold">
          {thing.title}
        </h3>

        {/* 描述 */}
        <p className="text-[14px] leading-[1.65] text-[#312b25] mb-4">
          {thing.description}
        </p>

        {/* 操作区域 */}
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

      {/* 贴纸图片 - 固定在右侧 */}
      {thing.image && (
        <div className="absolute right-[16px] bottom-[12px] w-[43%] max-h-[165px] z-1 object-contain">
          <img
            src={thing.image}
            alt={thing.title}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* 装饰贴纸 */}
      {thing.stickers && thing.stickers.length > 0 && (
        <>
          {thing.stickers.map((sticker, index) => (
            <div
              key={index}
              className="absolute w-16 h-16 opacity-60 animate-float z-0"
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
    </div>
  );
};

export default ThingCard;