import React, { useState } from 'react';
import { PARTNERS_DATA } from '../data/marketData';
import { Network } from 'lucide-react';

interface PartnersSectionProps {
  currentLang: string;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ currentLang }) => {
  const [filter, setFilter] = useState<'all' | 'exchange' | 'dex' | 'protocol'>('all');

  const filteredPartners = filter === 'all' 
    ? PARTNERS_DATA 
    : PARTNERS_DATA.filter(p => p.category === filter);

  return (
    <section id="partners" className="relative py-28 bg-slate-50/60 border-t border-slate-100 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & 3D floating crypto cluster */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <Network className="w-3.5 h-3.5" />
                <span>{currentLang === 'zh' ? '全球交易所與公鏈生態' : 'GLOBAL ECOSYSTEM'}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] text-slate-900 tracking-tight leading-tight mb-6">
                {currentLang === 'zh' ? (
                  <>
                    合作夥伴與<br />
                    <span className="text-blue-600">
                      生態盟友
                    </span>
                  </>
                ) : (
                  <>
                    Our Partners &<br />
                    <span className="text-blue-600">
                      Friends
                    </span>
                  </>
                )}
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8">
                {currentLang === 'zh'
                  ? '我們與全球 35+ 家頂級中心化交易所、去中心化訂單簿與頂尖 Layer 1 / Layer 2 基金會建立了深厚的直接低延遲 API 連線與策略做市合作。'
                  : 'We have established direct high-throughput API gateways and strategic market making relationships with tier-1 exchanges, DEXs, and top Layer 1 / Layer 2 foundations worldwide.'}
              </p>

              {/* Verified connectivity badges */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span>{currentLang === 'zh' ? '全球頂尖交易所 VIP 伺服器同地機房 (Co-location)' : 'Direct VIP Co-located Cross-Connects'}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span>{currentLang === 'zh' ? '多鏈 EVM 與 SVM 原生智能合約做市引擎' : 'Native EVM / SVM On-chain JIT Liquidity Bots'}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span>{currentLang === 'zh' ? '無衝突純量化做市 (非方向性避險)' : 'Delta-Neutral Execution with Zero Market Conflict'}</span>
                </div>
              </div>
            </div>

            {/* Floating Gateway Card */}
            <div className="hidden lg:block relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-blue-700 mb-2">
                <span>GATEWAY LATENCY</span>
                <span className="text-emerald-600 font-bold">● ACTIVE</span>
              </div>
              <div className="text-2xl font-bold font-mono text-slate-900 mb-1">0.084 ms</div>
              <div className="text-xs text-slate-500">Average round-trip execution latency across Tokyo, LD4, and NY4 nodes.</div>
            </div>
          </div>

          {/* Right Column: Interactive Partner Grid with Filters */}
          <div className="lg:col-span-7">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { id: 'all', label: currentLang === 'zh' ? '全部夥伴' : 'All Venues' },
                { id: 'exchange', label: currentLang === 'zh' ? '中心化交易所 (CEX)' : 'CEX Venues' },
                { id: 'dex', label: currentLang === 'zh' ? '去中心化協議 (DEX)' : 'DeFi & CLOB' },
                { id: 'protocol', label: currentLang === 'zh' ? '公鏈與 L2' : 'L1 / L2 Protocols' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    filter === tab.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Grid of Partners */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.id}
                  id={`partner-${partner.id}`}
                  className="group relative rounded-xl p-4 bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between min-h-[105px] shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-xs sm:text-sm font-extrabold tracking-wider font-['Space_Grotesk'] text-slate-900 group-hover:text-blue-600"
                    >
                      {partner.logoText}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-xs shadow-emerald-400" />
                  </div>

                  <div>
                    <div className="text-[11px] font-medium text-slate-800 truncate">
                      {partner.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 mt-0.5 flex items-center justify-between">
                      <span>{partner.type}</span>
                      <span className="text-blue-600 font-sans text-[9px] font-medium">{partner.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom info banner */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between text-xs text-slate-600">
              <span>{currentLang === 'zh' ? '需要對接新交易所或新幣種？' : 'Looking to list or connect your exchange venue?'}</span>
              <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 font-mono">
                <span>{currentLang === 'zh' ? '聯繫商務對接 →' : 'Contact BD Desk →'}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
