import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

const ThingDetailModal = ({ thing, onClose, onCopyPrompt }) => {
  const [copied, setCopied] = useState(false);

  // 禁用页面滚动
  useEffect(() => {
    if (thing) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [thing]);

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
      <article
        className="modal animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{ '--card-color': thing.bgColor }}
      >
        {/* Modal Header */}
        <header className="modal-header">
          <button className="modal-close" onClick={onClose}>×</button>

          <div className="modal-title-wrap">
            <div className="modal-index">{thing.number}</div>
            <span className="modal-tag">{thing.category}</span>
            <h2 className="modal-title">{thing.title}</h2>
            {thing.subtitle && (
              <p className="modal-desc">{thing.subtitle}</p>
            )}
          </div>

          {thing.image && (
            <div className="modal-visual">
              <img src={thing.image} alt="" />
            </div>
          )}
        </header>

        {/* Modal Body */}
        <main className="modal-body">
          <section className="modal-section">
            <h3>推荐提示词</h3>
            <p>{thing.prompt}</p>
          </section>

          {thing.steps && thing.steps.length > 0 && (
            <section className="modal-section">
              <h3>使用步骤</h3>
              <div className="steps">
                {thing.steps.map((step, index) => (
                  <div key={index} className="step">
                    <span className="step-num">{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {thing.description && (
            <section className="modal-section">
              <h3>详细说明</h3>
              <p>{thing.description}</p>
            </section>
          )}
        </main>

        {/* Modal Footer */}
        <footer className="modal-footer">
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                已复制
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                复制提示词
              </>
            )}
          </button>
        </footer>
      </article>
    </div>
  );
};

export default ThingDetailModal;