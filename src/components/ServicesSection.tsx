import React from 'react';
import { ProjectTokensIsometric, ExchangeTerminalIsometric } from './IsometricGraphics';
import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (type?: 'project' | 'exchange') => void;
  currentLang: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact, currentLang }) => {
  return (
    <section id="services" className="relative py-28 bg-white border-t border-slate-100 overflow-hidden">
      {/* Background subtle geometric light */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-50/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{currentLang === 'zh' ? '核心服務項目' : 'QUANTITATIVE CAPABILITIES'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] text-slate-900 tracking-tight mb-6">
            {currentLang === 'zh' ? '加密貨幣量化造市服務' : 'Crypto Market Making'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {currentLang === 'zh'
              ? '我們是全球領先的加密資產流動性提供商與演算法造市商，全天候 24/7 在全球 20 多個國家及 35+ 家主流加密交易所進行高頻數位資產交易。'
              : 'We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets 24/7 across crypto exchanges in over 20 countries worldwide.'}
          </p>
        </div>

        {/* Service Block 1: Market Making for Crypto Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-32">
          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-block text-xs font-bold font-mono tracking-wider text-blue-700 uppercase mb-3">
              {currentLang === 'zh' ? '// 項目方代幣流動性方案' : '// FOR CRYPTO PROJECTS'}
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 tracking-tight leading-tight mb-4">
              {currentLang === 'zh' ? '加密項目代幣造市與流動性擴展' : 'Market Making for Crypto Projects'}
            </h3>

            <div className="text-lg font-semibold text-blue-600 mb-4">
              {currentLang === 'zh' 
                ? '透過提升深度與緊縮價差，全面加速您代幣的全球上線與成長旅程'
                : "Accelerate your token's journey by boosting its liquidity"}
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              {currentLang === 'zh'
                ? '我們致力於建立長期、可持續的戰略合作夥伴關係。透過機構級量化造市、深度訂單簿維護、頂級交易所上幣網絡以及產業洞見，全方位支持項目成長。'
                : 'We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.'}
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  {currentLang === 'zh' ? '極窄買賣價差 (< 0.10%)' : 'Ultra-tight Bid-Ask Spreads (<0.10%)'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  {currentLang === 'zh' ? '多交易所同步訂單簿深度' : 'Multi-Venue Depth Preservation'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  {currentLang === 'zh' ? '24/7 即時監控與透明後台' : '24/7 Real-time Client Analytics'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  {currentLang === 'zh' ? '防夾子與反操縱保護機制' : 'Anti-Sniper & MEV Mitigation'}
                </span>
              </div>
            </div>

            {/* Learn More Action Button */}
            <div>
              <button
                onClick={() => onOpenContact('project')}
                className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 font-mono tracking-wider transition-colors"
              >
                <span>{currentLang === 'zh' ? '了解更多項目造市方案' : 'Learn more'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Isometric Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
            <ProjectTokensIsometric />
          </div>
        </div>

        {/* Service Block 2: Market Making for Crypto Exchanges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Isometric Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <ExchangeTerminalIsometric />
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-block text-xs font-bold font-mono tracking-wider text-blue-700 uppercase mb-3">
              {currentLang === 'zh' ? '// 交易所訂單簿流動性' : '// FOR CRYPTO EXCHANGES'}
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 tracking-tight leading-tight mb-4">
              {currentLang === 'zh' ? '加密貨幣交易所造市與訂單簿深度' : 'Market Making for Crypto Exchanges'}
            </h3>

            <div className="text-lg font-semibold text-blue-600 mb-4">
              {currentLang === 'zh'
                ? '以深厚訂單簿與高頻流動性，吸引更多交易者與頂級項目入駐'
                : 'Attract more traders and projects with deep order books & liquidity'}
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              {currentLang === 'zh'
                ? '我們世界級的造市基礎設施與微秒級撮合連線已被證實能有效協助新興與在地交易所擴大市場份額、降低滑點，並在關鍵交易對中建立市場主導地位。'
                : 'Our world-class market making services are proven to help local and emerging exchanges win market share and gain market-leading positions with deep market dominance.'}
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  {currentLang === 'zh' ? '微秒級低延遲 API / FIX 介接' : 'Microsecond Low-Latency FIX/WebSocket'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  {currentLang === 'zh' ? '現貨與合約雙向不間斷報價' : 'Continuous 2-Way Spot & Perp Quotes'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  {currentLang === 'zh' ? '新幣首發首日流動性即時保障' : 'Day-1 Primary Listing Support'}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 font-medium">
                  {currentLang === 'zh' ? '零停機風險對沖與庫存管理' : 'Automated Delta-Neutral Risk Hedging'}
                </span>
              </div>
            </div>

            {/* Learn More Action Button */}
            <div>
              <button
                onClick={() => onOpenContact('exchange')}
                className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 font-mono tracking-wider transition-colors"
              >
                <span>{currentLang === 'zh' ? '了解交易所流動性對接' : 'Learn more'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
