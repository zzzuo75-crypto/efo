import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES_LIST } from '../data/eduData';
import {
  Compass,
  LineChart,
  CalendarDays,
  Gem,
  RotateCw,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { EduTreeMark } from './EduFamilyOfficeLogo';

const SERVICE_ICONS = [
  Compass,
  LineChart,
  CalendarDays,
  Gem,
  Sparkles
];

export const ServicesFlipCards: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const flipAll = (state: boolean) => {
    setFlippedCards({
      0: state, 1: state, 2: state, 3: state, 4: state
    });
  };

  return (
    <div className="w-full">
      {/* Top Controls / Hint */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-serif-tc text-[#526058]">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#EFE9DD] text-[#0E3B2E] text-[11px] font-bold">
            i
          </span>
          <span>點擊任一張卡片即可 3D 翻面查看服務細節與核心交付物</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => flipAll(true)}
            className="px-3 py-1.5 rounded-lg text-xs font-serif-tc text-[#0E3B2E] bg-white hover:bg-[#F3EDE2] border border-[#DFCDB4] transition shadow-2xs cursor-pointer"
          >
            全部翻面查看內容
          </button>
          <button
            onClick={() => flipAll(false)}
            className="px-3 py-1.5 rounded-lg text-xs font-serif-tc text-[#526058] bg-white hover:bg-[#F3EDE2] border border-[#DFCDB4] transition shadow-2xs cursor-pointer"
          >
            全部翻回封面
          </button>
        </div>
      </div>

      {/* 5 Flip Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_LIST.slice(0, 5).map((srv, index) => {
          const isFlipped = !!flippedCards[index];
          const IconComponent = SERVICE_ICONS[index] || Compass;

          return (
            <div
              key={srv.id}
              className="relative h-[480px] w-full cursor-pointer select-none [perspective:1000px] group"
              onClick={() => toggleFlip(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFlip(index);
                }
              }}
              aria-label={`服務 0${index + 1}: ${srv.title}，點擊翻面`}
            >
              {/* Inner 3D Flip Container */}
              <motion.div
                className="w-full h-full relative [transform-style:preserve-3d] rounded-3xl"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                
                {/* ================= CARD FRONT (封面) ================= */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] [-webkit-transform:translateZ(0)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-lux transition-all duration-300 group-hover:shadow-lux-lg border border-[#DFCDB4] bg-white"
                >
                  <div className="absolute -right-6 -bottom-6 opacity-[0.04] text-[#0E3B2E] pointer-events-none">
                    <EduTreeMark size={200} />
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-cinzel px-2.5 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] font-bold border border-[#DFCDB4]">
                        {srv.enTitle.split(' ')[0]}
                      </span>
                      <span className="text-xs font-cinzel font-bold text-[#C5A059] tracking-widest">
                        SERVICE 0{index + 1}
                      </span>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-[#0E3B2E] text-[#E5C687] flex items-center justify-center shadow-md mb-4 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#0E3B2E] tracking-tight mb-2">
                      {srv.title}
                    </h3>
                    
                    <div className="p-3 bg-[#FAF8F5] border-l-2 border-[#C5A059] rounded-r-xl my-3">
                      <p className="text-xs font-serif-tc font-bold text-[#0E3B2E]">
                        「{srv.quote}」
                      </p>
                    </div>

                    <p className="text-xs font-serif-tc text-[#526058] leading-relaxed line-clamp-3">
                      {srv.summary}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-[#E8E0D2] flex items-center justify-between text-xs font-serif-tc text-[#0E3B2E] group-hover:text-[#C5A059] transition-colors">
                    <div className="flex items-center gap-1.5 font-semibold">
                      <RotateCw className="w-3.5 h-3.5 text-[#C5A059] group-hover:rotate-180 transition-transform duration-500" />
                      <span>點擊翻面查看詳情</span>
                    </div>
                    <span className="text-[10px] font-cinzel text-[#8A7963]">FLIP ➔</span>
                  </div>
                </div>

                {/* ================= CARD BACK (翻面內容) ================= */}
                <div
                  className="absolute inset-0 w-full h-full rounded-3xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(0)] [-webkit-transform:rotateY(180deg)_translateZ(0)] p-6 sm:p-7 flex flex-col justify-between overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-lux transition-all duration-300 border border-[#C5A059]/40 bg-[#0E3B2E] text-white"
                  style={{
                    background: 'linear-gradient(155deg, #0E3B2E 0%, #08261E 100%)',
                  }}
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-cinzel font-bold text-[#E5C687] tracking-widest">
                        SERVICE 0{index + 1}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-serif-tc text-[#D1DDD6]">
                        服務細節
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-serif-tc text-white mb-3">
                      {srv.title}
                    </h3>

                    <div className="space-y-3">
                      <div className="text-[11px] font-cinzel text-[#E5C687] font-semibold tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#E5C687]" />
                        <span>核心服務項目：</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {srv.details.slice(0, 4).map((d, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[11px] font-serif-tc text-[#E2EBE6] leading-snug"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {srv.deliverables && srv.deliverables.length > 0 && (
                        <div className="pt-3 mt-3 border-t border-white/10">
                          <div className="text-[11px] font-serif-tc text-[#E5C687] font-bold mb-1.5">
                            交付物：
                          </div>
                          <div className="text-[11px] font-serif-tc text-[#D1DDD6] bg-white/5 p-2 rounded-lg border border-white/5">
                            {srv.deliverables.join('、')}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-serif-tc text-[#D1DDD6]">
                    <div className="flex items-center gap-1.5 text-[#E5C687] font-semibold">
                      <RotateCw className="w-3.5 h-3.5 rotate-180" />
                      <span>點擊翻回封面</span>
                    </div>
                    <span className="text-[10px] font-cinzel text-[#E5C687]/80">BACK ↺</span>
                  </div>
                </div>

              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
