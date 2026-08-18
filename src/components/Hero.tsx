import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Compass, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';
import { HeroGrowthPath } from './HeroGrowthPath';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreApproach: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreApproach,
}) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Background warm ambient light */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#F3ECE0]/70 via-[#FAF8F5]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Two-Column Layout (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* 1. Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] border border-[#DFCDB4] text-[#0E3B2E] text-xs sm:text-sm font-medium shadow-xs"
            >
              <span className="text-[#C5A059] font-bold">✦</span>
              <span className="font-serif-tc tracking-wider">私人學涯智囊 • 家族辦公室模式</span>
              <span className="text-[#C5A059] font-bold">✦</span>
            </motion.div>

            {/* 2. Main Headline H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-tc text-[#0E3B2E] tracking-tight leading-[1.22]"
            >
              為重視教育的家庭<br />
              打造孩子未來 <span className="text-[#C5A059]">3、5、10 年以上</span> 的學涯策略
            </motion.h1>

            {/* 3. Supporting Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#4A5851] leading-relaxed font-serif-tc"
            >
              從孩子的天賦能力、真實興趣與家庭期待出發，以資產配置的嚴謹視角，協助家庭進行目標設定、能力配置、資源整合、執行追蹤與成果管理。
            </motion.p>

            {/* 4. Core Value Claim Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-[#DFCDB4] shadow-xs"
            >
              <div className="flex items-start gap-3">
                <span className="text-[#C5A059] text-lg mt-0.5">🌿</span>
                <div>
                  <div className="text-xs font-cinzel text-[#C5A059] font-bold uppercase tracking-wider mb-0.5">
                    CORE PRINCIPLE
                  </div>
                  <div className="text-sm sm:text-base font-serif-tc font-bold text-[#0E3B2E]">
                    讓孩子不只是升學成功，而是擁有未來的選擇權。
                  </div>
                  <div className="text-xs text-[#526058] font-serif-tc mt-1">
                    教育不是零散的焦慮消費，而是一套可長期沉澱的家庭學涯資產。
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5. CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#0E3B2E] hover:bg-[#164D3D] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 border border-[#C5A059]/40 font-serif-tc tracking-wider cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#E5C687]" />
                <span>預約私人諮詢</span>
              </button>

              <button
                onClick={onExploreApproach}
                className="px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0E3B2E] bg-white hover:bg-[#F3EDE2] border border-[#DFCDB4] transition-all duration-200 flex items-center justify-center gap-2 font-serif-tc cursor-pointer"
              >
                <span>了解我們的方法</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>
            </motion.div>

            {/* 6. Supporting Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-serif-tc text-[#526058]"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E3B2E]" />
                <span>非代辦中介・第三方獨立智囊</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E3B2E]" />
                <span>恪守家庭隱私保密協定</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E3B2E]" />
                <span>3/5/10 年可持續累積藍圖</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: 方案 B｜路徑式成長隱喻 (Path-based Growth Metaphor) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <HeroGrowthPath />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
