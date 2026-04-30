import { Sparkles, User } from 'lucide-react';

const Header = ({ onRandomPick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#f7efdf]/80 backdrop-blur-md">
      <nav className="max-w-[1180px] mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-[#2b2925]" />
            <span className="text-xl font-bold text-[#2b2925]">AI Playground</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-[58px]">
            <a href="#home" className="text-[15px] text-[#2b2925] hover:text-[#2b2925]/70 transition-colors relative active">
              首页
              {false && <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[26px] h-[4px] bg-[#ffd33d] rounded-[999px]"></span>}
            </a>
            <a href="#about" className="text-[15px] text-[#2b2925] hover:text-[#2b2925]/70 transition-colors relative">
              关于
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              className="capsule-btn flex items-center space-x-2"
              onClick={onRandomPick}
            >
              <Sparkles className="w-4 h-4" />
              <span>随机扭蛋</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-[#2b2925]/10 flex items-center justify-center">
              <User className="w-5 h-5 text-[#2b2925]" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;