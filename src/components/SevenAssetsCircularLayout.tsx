import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION_ASSETS } from '../data/eduData';
import {
  BookOpen,
  Globe,
  Cpu,
  Award,
  Compass,
  Users,
  Navigation,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const ASSET_ICONS = [
  BookOpen,
  Globe,
  Cpu,
  Award,
  Compass,
  Users,
  Navigation,
];

export const SevenAssetsCircularLayout: React.FC = () => {
  return (
    <div className="w-full">
      {/* Cards Grid: 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {EDUCATION_ASSETS.map((asset, index) => {
          const IconComponent = ASSET_ICONS[index] || BookOpen;
          const isDirection = asset.id === 'direction'; // Asset 07: 方向資產 (特別醒目佈局)

          return (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-3xl border p-5 sm:p-6 transition-all duration-300 shadow-lux hover:shadow-lux-lg ${
                isDirection
                  ? 'lg:col-span-2 bg-gradient-to-br from-[#0E3B2E] via-[#0E3B2E] to-[#092B22] text-white border-[#C5A059]/60'
                  : 'bg-white border-[#DFCDB4] hover:border-[#C5A059]'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                
                {/* 1. 圓形呈現區 (Circular Asset Orb) */}
                <div className="shrink-0 flex flex-col items-center">
                  <div
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center text-center p-3 transition-transform duration-300 hover:scale-105 shadow-md relative ${
                      isDirection
                        ? 'bg-[#164D3D] text-white ring-4 ring-[#C5A059]/40 border-2 border-[#E5C687]'
                        : 'bg-[#0E3B2E] text-white ring-4 ring-[#EFE9DD] border-2 border-[#C5A059]'
                    }`}
                  >
                    {/* Floating Top Asset Number Tag inside Circle */}
                    <span className="text-[10px] font-cinzel font-bold tracking-widest text-[#E5C687] mb-1">
                      0{index + 1}
                    </span>

                    {/* Icon */}
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#E5C687] mb-1" />

                    {/* Asset Name Inside Circle */}
                    <span className="text-sm sm:text-base font-serif-tc font-bold text-white tracking-wide">
                      {asset.name}
                    </span>

                    {/* English subtitle */}
                    <span className="text-[9px] font-cinzel text-[#D1DDD6]/80 tracking-wider truncate max-w-[80px]">
                      {asset.enName.split(' ')[0]}
                    </span>
                  </div>

                  <span className={`text-[10px] font-cinzel font-semibold mt-2 ${
                    isDirection ? 'text-[#E5C687]' : 'text-[#8A7963]'
                  }`}>
                    ASSET 0{index + 1}
                  </span>
                </div>

                {/* 2. 圓形旁邊的詳細內容（條列式清單） (Bulleted Details Beside Circle) */}
                <div className="flex-1 min-w-0 text-left">
                  
                  {/* Top Eyebrow & English Name */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs sm:text-sm font-bold font-serif-tc ${
                        isDirection ? 'text-white' : 'text-[#0E3B2E]'
                      }`}>
                        {asset.name}
                      </span>
                      <span className={`text-xs font-cinzel tracking-wider px-2 py-0.5 rounded-full ${
                        isDirection
                          ? 'bg-white/10 text-[#E5C687] border border-[#C5A059]/40'
                          : 'bg-[#F3EDE2] text-[#0E3B2E]'
                      }`}>
                        {asset.enName}
                      </span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <div className={`text-xs sm:text-sm font-serif-tc font-semibold mb-2 flex items-center gap-1.5 ${
                    isDirection ? 'text-[#E5C687]' : 'text-[#C5A059]'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{asset.tagline}</span>
                  </div>

                  {/* Summary Paragraph */}
                  <p className={`text-xs font-serif-tc leading-relaxed mb-3.5 ${
                    isDirection ? 'text-[#D1DDD6]' : 'text-[#526058]'
                  }`}>
                    {asset.description}
                  </p>

                  {/* 條列式項目清單 (Bulleted List beside circle) */}
                  <div className={`rounded-2xl p-3 sm:p-3.5 border ${
                    isDirection
                      ? 'bg-white/5 border-white/10'
                      : 'bg-[#FAF8F5] border-[#E8E0D2]'
                  }`}>
                    <div className={`text-[11px] font-bold font-serif-tc mb-2 flex items-center gap-1 ${
                      isDirection ? 'text-[#E5C687]' : 'text-[#0E3B2E]'
                    }`}>
                      <span>關鍵沉澱要素與培養指標：</span>
                    </div>

                    <ul className="space-y-1.5">
                      {asset.examples.map((item, exIdx) => (
                        <li
                          key={exIdx}
                          className={`flex items-start gap-2 text-xs font-serif-tc leading-snug ${
                            isDirection ? 'text-[#E2EBE6]' : 'text-[#3E4D45]'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isDirection ? 'text-[#E5C687]' : 'text-[#0E3B2E]'
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
