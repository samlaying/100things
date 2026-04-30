import { categories } from '../../data/things';
import { Clock } from 'lucide-react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-8 px-4">
      {/* 分类按钮区域 */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`capsule-btn ${selectedCategory === category.id ? 'active' : ''}`}
          >
            <span className="flex items-center space-x-2">
              <span>{category.name}</span>
              <span className="text-xs opacity-70">({category.count})</span>
            </span>
          </button>
        ))}
      </div>

      {/* 排序按钮 */}
      <button className="capsule-btn flex items-center space-x-2">
        <Clock className="w-4 h-4" />
        <span>最新</span>
      </button>
    </div>
  );
};

export default CategoryFilter;