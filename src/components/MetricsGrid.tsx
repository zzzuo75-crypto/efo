import React from 'react';
import { METRIC_ITEMS } from '../data/marketData';

interface MetricsGridProps {
  currentLang: string;
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ currentLang }) => {
  return (
    <section id="about" className="relative py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement Block */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 text-xs font-bold font-mono tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase border border-blue-100">
            {currentLang === 'zh' ? '// 公司願景與核心使命' : '// OUR CORE MISSION'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-snug">
            {currentLang === 'zh' ? (
              <>
                在 <span className="text-blue-600">Aether Quant</span>，我們的使命是平衡全球加密貨幣市場的供需關係。
                我們是一家由交易員、量化研究員與系統架構師創立的原生加密造市商，堅定信仰並引領數位資產與去中心化的未來。
              </>
            ) : (
              <>
                At <span className="text-blue-600">Aether Quant</span>, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.
              </>
            )}
          </h2>
        </div>

        {/* 4x2 Quantitative Metric Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {METRIC_ITEMS.map((metric) => {
            if (metric.isHighlighted) {
              return (
                <div
                  key={metric.id}
                  id={`metric-${metric.id}`}
                  className="relative group rounded-2xl p-7 flex flex-col justify-between overflow-hidden shadow-xl shadow-blue-200/60 transition-all duration-300 hover:scale-[1.02] bg-blue-600 text-white"
                >
                  {/* Geometric ring motif */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 border border-white/20 rounded-full pointer-events-none" />
                  <div className="absolute -right-4 -top-4 w-24 h-24 border border-white/20 rounded-full pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight text-white mb-3">
                      {metric.value}
                    </div>
                    <div className="text-sm font-semibold text-blue-100 leading-snug">
                      {currentLang === 'zh' ? '全球加密貨幣現貨交易量佔比' : metric.label}
                    </div>
                  </div>
                  <div className="relative z-10 mt-6 pt-3 border-t border-white/20 text-xs font-mono text-blue-100 flex items-center justify-between">
                    <span>{currentLang === 'zh' ? '頂級訂單簿份額' : 'Global Spot Market'}</span>
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={metric.id}
                id={`metric-${metric.id}`}
                className="group rounded-2xl p-7 flex flex-col justify-between bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-300 shadow-xs"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium leading-snug">
                    {currentLang === 'zh' ? getZhMetricLabel(metric.id) : metric.label}
                  </div>
                </div>
                
                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400 group-hover:text-slate-500 transition-colors">
                  {metric.sublabel}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

function getZhMetricLabel(id: string): string {
  switch (id) {
    case 'volume':
      return '累積至今總交易量';
    case 'market_share':
      return '全球現貨市場份額';
    case 'teammates':
      return '量化團隊成員 (& 持續擴張中)';
    case 'exchanges':
      return '全球領先與在地交易所直接合作';
    case 'founded':
      return '創立時間，深耕加密原生市場';
    case 'pairs':
      return '24/7 全天候報價加密貨幣交易對';
    case 'uptime':
      return '全自動量化演算法不間斷流動性';
    case 'trades':
      return '至今累計執行撮合交易筆數';
    default:
      return '';
  }
}
