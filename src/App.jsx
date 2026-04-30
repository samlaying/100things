import { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import CategoryFilter from './components/home/CategoryFilter';
import MasonryGrid from './components/home/MasonryGrid';
import ThingDetailModal from './components/thing/ThingDetailModal';
import { useRandomThing } from './hooks/useThings';
import './styles/globals.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedThing, setSelectedThing] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const { getRandom } = useRandomThing();

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleCardClick = (thing) => {
    setSelectedThing(thing);
  };

  const handleCloseModal = () => {
    setSelectedThing(null);
  };

  const handleCopyPrompt = (thing) => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleRandomPick = async () => {
    const randomThing = await getRandom();
    if (randomThing) {
      setSelectedThing(randomThing);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Header onRandomPick={handleRandomPick} />

      <main className="relative z-10">
        <Hero onRandomPick={handleRandomPick} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <MasonryGrid
          selectedCategory={selectedCategory}
          onCardClick={handleCardClick}
          onCopyPrompt={handleCopyPrompt}
        />
      </main>

      {/* Detail Modal */}
      {selectedThing && (
        <ThingDetailModal
          thing={selectedThing}
          onClose={handleCloseModal}
          onCopyPrompt={handleCopyPrompt}
        />
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-[#24201B] text-[#FFF8E8] px-6 py-3 rounded-full shadow-lg animate-fade-in z-50">
          提示词已复制到剪贴板
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 mt-12">
        <div className="max-w-[1180px] mx-auto px-4">
          <p className="font-hand text-2xl text-[#2b2925]">
            记录生活，热爱生活，AI 让一切更美好！💖
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
