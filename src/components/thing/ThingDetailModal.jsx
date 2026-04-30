import { useState } from 'react';
import { X, Copy, Check, ArrowLeft } from 'lucide-react';

const ThingDetailModal = ({ thing, onClose, onCopyPrompt }) => {
  const [copied, setCopied] = useState(false);

  if (!thing) return null;

  const handleCopy = async () => {
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
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: thing.bgColor,
          color: thing.textColor
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Back Button */}
        <button
          className="absolute top-4 left-4 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
          onClick={onClose}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="p-8 pt-16">
          {/* Number */}
          <div className="font-hand text-6xl font-bold opacity-20 mb-4">
            {thing.number}
          </div>

          {/* Header */}
          <div className="mb-6">
            <div className="tag mb-3">
              {thing.category}
            </div>
            <h2 className="text-3xl font-bold mb-2">
              {thing.title}
            </h2>
            <p className="text-lg opacity-80">
              {thing.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg mb-8 opacity-90">
            {thing.description}
          </p>

          {/* Prompt Box */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">推荐提示词</h3>
              <button
                className="flex items-center space-x-2 px-4 py-2 bg-[#24201B] text-[#FFF8E8] rounded-full hover:bg-[#24201B]/80 transition-colors"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>已复制</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>复制</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              {thing.prompt}
            </p>
          </div>

          {/* Steps */}
          {thing.steps && thing.steps.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold mb-4">使用步骤</h3>
              <ol className="space-y-3">
                {thing.steps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#24201B] text-[#FFF8E8] flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="pt-1 opacity-90">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Image */}
          {thing.image && (
            <div className="rounded-2xl overflow-hidden">
              <img
                src={thing.image}
                alt={thing.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThingDetailModal;