import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EduTreeMark } from './EduFamilyOfficeLogo';
import { Sparkles, Compass, Target, Award, ArrowUpRight } from 'lucide-react';

export const HeroGrowthPath: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(1);

  const nodes = [
    {
      id: 0,
      year: 'NOW',
      title: '現在起點',
      enTitle: 'Starting Point',
      desc: '深入訪談家庭理念，精準診斷孩子真實特質與學習稟賦',
      accent: '#C5A059',
      x: 14,
      y: 78,
    },
    {
      id: 1,
      year: '3 年',
      title: '能力定向',
      enTitle: 'Competency Mapping',
      desc: '以減法思維聚焦關鍵學科底蘊、雙語思辨與 AI 工具素養',
      accent: '#C5A059',
      x: 38,
      y: 56,
    },
    {
      id: 2,
      year: '5 年',
      title: '資產沉澱',
      enTitle: 'Asset Compounding',
      desc: '產出原創專題研究、實體作品集與高含金量實踐經驗',
      accent: '#C5A059',
      x: 64,
      y: 38,
    },
    {
      id: 3,
      year: '10 年+',
      title: '未來選擇權',
      enTitle: 'Lifetime Agency',
      desc: '具備面對全球多元路徑的獨立思維、熱情所在與終身競爭力',
      accent: '#E5C687',
      x: 88,
      y: 18,
    },
  ];

  return (
    <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] rounded-3xl bg-gradient-to-br from-[#0E3B2E] via-[#0E3B2E] to-[#08261E] border border-[#C5A059]/40 p-6 sm:p-8 shadow-lux-lg overflow-hidden flex flex-col justify-between select-none">
      
      {/* Background Watermark & Gold Glow */}
      <div className="absolute -right-8 -bottom-10 opacity-[0.07] pointer-events-none text-white">
        <EduTreeMark size={400} />
      </div>

      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A059]/30 text-white text-xs font-serif-tc">
          <span className="text-[#E5C687]">🌿</span>
          <span className="tracking-wider">學涯成長路徑隱喻</span>
          <span className="text-white/40">•</span>
          <span className="text-[#E5C687] font-cinzel text-[10px]">ROADMAP MATRIX</span>
        </div>

        <div className="text-[11px] font-cinzel tracking-widest text-[#D1DDD6]/70 uppercase hidden sm:block">
          Step by Step
        </div>
      </div>

      {/* Center Dynamic SVG Trajectory Path (方案 B: 路徑式成長隱喻) */}
      <div className="relative z-10 my-auto w-full h-[220px] sm:h-[250px]">
        <svg
          viewBox="0 0 100 80"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="growthLineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#C5A059" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#F5E3B5" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="pulseGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background subtle guide lines */}
          <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(197, 160, 89, 0.08)" strokeDasharray="2,3" />
          <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(197, 160, 89, 0.08)" strokeDasharray="2,3" />
          <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(197, 160, 89, 0.08)" strokeDasharray="2,3" />

          {/* Glowing Continuous S-Curve Pathway */}
          <motion.path
            d="M 14 78 Q 26 72, 38 56 T 64 38 T 88 18"
            fill="none"
            stroke="url(#growthLineGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          {/* Secondary animated subtle pulse line */}
          <motion.path
            d="M 14 78 Q 26 72, 38 56 T 64 38 T 88 18"
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            strokeDasharray="6, 30"
            animate={{ strokeDashoffset: [-60, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            opacity={0.35}
          />

        </svg>

        {/* HTML Overlay for Nodes and Text (Prevents squashing/stretching) */}
        <div className="absolute inset-0 pointer-events-none">
          {nodes.map((node, i) => {
            const isSelected = activeNode === i;
            return (
              <div
                key={node.id}
                className="absolute pointer-events-auto cursor-pointer flex flex-col items-center justify-center group"
                style={{
                  left: `${node.x}%`,
                  top: `${(node.y / 80) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => setActiveNode(i)}
              >
                {/* Year Label (Top) */}
                <div 
                  className={`absolute bottom-full mb-3 text-center transition-colors whitespace-nowrap font-cinzel text-[13px] md:text-[15px] tracking-widest ${
                    isSelected ? 'text-[#E5C687] font-bold' : 'text-[#D1DDD6] font-medium'
                  }`}
                >
                  {node.year}
                </div>

                {/* Node Circle Area */}
                <div className="relative flex items-center justify-center w-12 h-12">
                  {/* Pulse Ring */}
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#E5C687]"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    />
                  )}

                  {/* Core Circle */}
                  <div
                    className={`rounded-full transition-all duration-300 border-[2px] ${
                      isSelected 
                        ? 'w-[18px] h-[18px] bg-[#E5C687] border-[#C5A059] shadow-[0_0_15px_rgba(229,198,135,0.4)]' 
                        : 'w-[14px] h-[14px] bg-[#0E3B2E] border-[#C5A059] group-hover:bg-[#C5A059]/20'
                    }`}
                  />
                </div>

                {/* Title Label (Bottom) */}
                <div 
                  className={`absolute top-full mt-2 text-center transition-colors whitespace-nowrap font-serif-tc ${
                    isSelected ? 'text-white font-bold text-[15px] md:text-[17px]' : 'text-[#A3B8AD] text-[14px] md:text-[15px]'
                  }`}
                >
                  {node.title}
                </div>
              </div>
            );
          })}

          {/* Top Destination Star as HTML absolute element */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              left: '88%',
              top: `${(18 / 80) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg width="24" height="24" viewBox="-5 -5 10 10" fill="none">
              <path d="M0 -3.5 L0.8 -0.8 L3.5 0 L0.8 0.8 L0 3.5 L-0.8 0.8 L-3.5 0 L-0.8 -0.8 Z" fill="#F5E3B5" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Bottom Interactive Detail Card */}
      <motion.div
        key={activeNode}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-white"
      >
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-cinzel font-bold text-[#E5C687]">
              {nodes[activeNode].year} • {nodes[activeNode].title}
            </span>
            <span className="text-[10px] font-cinzel text-white/50 uppercase">
              ({nodes[activeNode].enTitle})
            </span>
          </div>
          <div className="text-[10px] text-[#D1DDD6]/60 font-serif-tc">
            點擊節點切換
          </div>
        </div>
        <p className="text-xs font-serif-tc text-[#D1DDD6] leading-relaxed">
          {nodes[activeNode].desc}
        </p>
      </motion.div>

      {/* Micro quote below card */}
      <div className="relative z-10 text-center pt-1 text-[11px] font-serif-tc text-[#A3B8AD] flex items-center justify-center gap-2">
        <span className="w-4 h-[1px] bg-[#C5A059]/40" />
        <span>一步一腳印，讓每一次投入都沉澱為長遠資產</span>
        <span className="w-4 h-[1px] bg-[#C5A059]/40" />
      </div>

    </div>
  );
};
