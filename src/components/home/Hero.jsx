import { ArrowRight, Sparkles } from 'lucide-react';
import { FloatingStickers } from '../effects/Sticker';
import { StickyNote } from '../effects/Tape';

const Hero = ({ onRandomPick }) => {
  return (
    <section className="relative py-16 px-4 text-center overflow-hidden">
      {/* Floating Background Stickers */}
      <FloatingStickers className="absolute inset-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* AI Life Sticky Note */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 animate-float">
            <StickyNote type="ai" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-[#24201B]/5 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">100 个 AI 生活场景</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          我用 AI 解决的
          <span className="font-hand text-5xl md:text-7xl block mt-2 text-[#FFD84D]">
            一百件小事
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#24201B]/70 mb-8 max-w-2xl mx-auto">
          从写周报到做菜谱，从学编程到哄孩子，AI 已经渗透进生活的方方面面。
          这里记录了 100 个真实可用的 AI 生活场景。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary flex items-center space-x-2">
            <span>开始探索</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            className="btn-secondary flex items-center space-x-2"
            onClick={onRandomPick}
          >
            <Sparkles className="w-4 h-4" />
            <span>随机抽一个</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD84D]">100+</div>
            <div className="text-sm text-[#24201B]/60">实用场景</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#AEE6C3]">5</div>
            <div className="text-sm text-[#24201B]/60">大分类</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF9FB2]">∞</div>
            <div className="text-sm text-[#24201B]/60">可能性</div>
          </div>
        </div>

        {/* Quick Access Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <div className="flex items-center space-x-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-[#FFD84D]"></div>
            <span className="text-sm font-medium">效率提升</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-[#AEE6C3]"></div>
            <span className="text-sm font-medium">生活灵感</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-[#C8B6FF]"></div>
            <span className="text-sm font-medium">学习成长</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-[#A7D8FF]"></div>
            <span className="text-sm font-medium">娱乐消遣</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/60 rounded-full px-4 py-2 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-[#FFB36B]"></div>
            <span className="text-sm font-medium">创意脑洞</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFD84D]/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#AEE6C3]/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;