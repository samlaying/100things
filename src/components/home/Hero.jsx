import { Sparkles } from 'lucide-react';

const Hero = ({ onRandomPick }) => {
  return (
    <section className="relative h-[345px] mt-[35px] text-center">
      {/* 装饰贴纸 */}
      <div className="absolute left-[20px] top-[115px] w-[145px] animate-float pointer-events-none">
        <div className="w-full h-full bg-[#FFD84D]/20 rounded-full flex items-center justify-center">
          <Sparkles className="w-16 h-16 text-[#FFD84D]" />
        </div>
      </div>

      <div className="absolute right-[65px] top-[10px] w-[180px] animate-float pointer-events-none" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-32 bg-[#9fe3b9]/30 rounded-lg transform -rotate-6 flex items-center justify-center">
          <span className="font-hand text-3xl text-[#2b2925]">📝</span>
        </div>
      </div>

      <div className="absolute right-[95px] bottom-[20px] w-[82px] animate-float pointer-events-none" style={{ animationDelay: '1s' }}>
        <div className="w-full h-16 bg-[#ffad63]/20 rounded-full flex items-center justify-center">
          <span className="text-2xl">☕</span>
        </div>
      </div>

      {/* 主标题区域 */}
      <div className="relative z-10 max-w-[1180px] mx-auto px-4">
        <h1 className="relative z-2 font-hand text-[82px] leading-[1.08] font-black tracking-[2px] text-[#25211d]">
          我用 <span className="text-[#ff6878]">AI</span> 解决的<br />
          <span className="text-[#7555f6]">一百</span> 件小事
        </h1>

        <p className="mt-[22px] text-[19px] text-[#34302a]">
          平凡日常里的小确幸，AI 是我的万能瑞士军刀 ✨
        </p>
      </div>
    </section>
  );
};

export default Hero;