import { useState, useEffect } from 'react';
import ThingCard from '../thing/ThingCard';
import { getThingsByCategory } from '../../services/thingsApi';

const MasonryGrid = ({ selectedCategory, onCardClick, onCopyPrompt }) => {
  const [things, setThings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadThings = async () => {
      setLoading(true);
      try {
        const data = await getThingsByCategory(selectedCategory);
        setThings(data);
      } catch (error) {
        console.error('Failed to load things:', error);
      } finally {
        setLoading(false);
      }
    };

    loadThings();
  }, [selectedCategory]);

  // 为每个卡片分配布局尺寸
  const getCardLayoutClass = (index) => {
    // 第一行：3张大卡 (每张span 4)
    if (index < 3) return 'card-lg';

    // 第二行：小卡 + 横向卡 + 小卡 (span 3 + span 6 + span 3)
    if (index === 3) return 'card-sm';
    if (index === 4) return 'card-wide';
    if (index === 5) return 'card-sm';

    // 第三行：4张小卡 (每张span 3)
    if (index >= 6 && index <= 9) return 'card-sm';

    // 第四行：横向卡 + 中卡 + 小卡 (span 6 + span 3 + span 3)
    if (index === 10) return 'card-wide';
    if (index === 11) return 'card-sm';
    if (index === 12) return 'card-sm';

    // 默认小卡
    return 'card-sm';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#221e1a]"></div>
      </div>
    );
  }

  if (things.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#2b2925]/60">暂无相关内容</p>
      </div>
    );
  }

  return (
    <div className="collage-grid px-4 pb-12">
      {things.map((thing, index) => (
        <div
          key={thing.id}
          className={`animate-fade-in ${getCardLayoutClass(index)}`}
          style={{
            animationDelay: `${index * 0.1}s`,
            '--rotation': `${Math.random() * 2 - 1}deg`
          }}
        >
          <ThingCard
            thing={thing}
            onClick={onCardClick}
            onCopyPrompt={onCopyPrompt}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;