import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

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

  // 获取卡片布局类名对应的宽度
  const getContentWidth = () => {
    // 这里根据不同的卡片尺寸返回不同的宽度
    // 由于我们不知道具体是哪种卡片类型，先返回默认值
    return '52%';
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
      {/* 编号圆圈 - 调整大小和位置 */}
      <div className="card-index">
        {thing.number}
      </div>

      {/* 卡片内容区域 - 固定宽度 */}
      <div className="card-content" style={{ width: getContentWidth() }}>
        {/* 分类标签 - 避免与编号重叠 */}
        <span className="card-tag">
          {thing.category}
        </span>

        {/* 标题 */}
        <h3 className="card-title">
          {thing.title}
        </h3>

        {/* 描述 */}
        <p className="card-desc">
          {thing.description}
        </p>

        {/* 查看详情按钮 */}
        <button
          className="card-link"
          onClick={(e) => {
            e.stopPropagation();
            onClick(thing);
          }}
        >
          查看详情 ›
        </button>

        {/* 复制按钮 */}
        <button
          className="card-copy"
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

      {/* 贴纸图片容器 - 控制溢出 */}
      {thing.image && (
        <div className="card-visual">
          <img
            src={thing.image}
            alt=""
          />
        </div>
      )}

      {/* 装饰贴纸 - 修复alt和路径 */}
      {thing.stickers && thing.stickers.length > 0 && (
        <>
          {thing.stickers.map((sticker, index) => (
            <div
              key={index}
              className="sticker"
              style={{
                [index === 0 ? 'top' : 'bottom']: index === 0 ? '10px' : '10px',
                [index === 0 ? 'left' : 'right']: index === 0 ? '10px' : '10px',
                animationDelay: `${index * 0.5}s`
              }}
            >
              <img
                src={sticker}
                alt=""
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ThingCard;