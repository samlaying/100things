import { categories } from '../../data/things';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-8 px-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-300
            ${selectedCategory === category.id
              ? 'shadow-lg transform -translate-y-1'
              : 'bg-white/50 hover:bg-white/80'
            }
          `}
          style={{
            backgroundColor: selectedCategory === category.id ? category.color : '',
            color: selectedCategory === category.id ? '#221F18' : '#24201B'
          }}
        >
          <span className="flex items-center space-x-2">
            <span>{category.name}</span>
            <span className="text-xs opacity-70">({category.count})</span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;