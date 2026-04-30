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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dark"></div>
      </div>
    );
  }

  if (things.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-[#24201B]/60">暂无相关内容</p>
      </div>
    );
  }

  return (
    <div className="masonry px-4 max-w-7xl mx-auto pb-12">
      {things.map((thing, index) => (
        <div
          key={thing.id}
          className="masonry-item animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
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