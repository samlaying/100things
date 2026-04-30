import { Sparkles } from 'lucide-react';

const Hero = ({ onRandomPick }) => {
  return (
    <section className="relative h-[345px] mt-[35px] text-center">
      {/* 装饰贴纸 */}
      <img
        className="absolute left-[20px] top-[115px] w-[145px] animate-float pointer-events-none"
        src="/assets/components/component_02_robot_assistant.png"
        alt=""
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      <img
        className="absolute right-[65px] top-[10px] w-[180px] animate-float pointer-events-none"
        src="/assets/components/component_01_sticky_note_ai_life.png"
        alt=""
        style={{ animationDelay: '0.5s' }}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      <img
        className="absolute right-[95px] bottom-[20px] w-[82px] animate-float pointer-events-none"
        src="/assets/components/component_03_coffee_cup.png"
        alt=""
        style={{ animationDelay: '1s' }}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      <img
        className="absolute left-[128px] top-[72px] w-[88px] animate-float pointer-events-none"
        src="/assets/components/component_04_speech_bubble_convenient.png"
        alt=""
        style={{ animationDelay: '0.3s' }}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

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