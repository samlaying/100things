import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8E8]/80 backdrop-blur-md border-b border-[#24201B]/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-[#24201B]" />
            <span className="text-xl font-bold">AI Playground</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#24201B] hover:text-[#24201B]/70 transition-colors">
              首页
            </a>
            <a href="#about" className="text-[#24201B] hover:text-[#24201B]/70 transition-colors">
              关于
            </a>
            <button className="btn-primary text-sm">
              随机探索
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#24201B]/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#24201B]/10 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-[#24201B] hover:text-[#24201B]/70 transition-colors py-2">
                首页
              </a>
              <a href="#about" className="text-[#24201B] hover:text-[#24201B]/70 transition-colors py-2">
                关于
              </a>
              <button className="btn-primary text-sm w-full">
                随机探索
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;