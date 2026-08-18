import React, { useState } from 'react';
import { Calculator, Zap, Shield, ArrowUpRight } from 'lucide-react';

interface LiquiditySimulatorProps {
  onOpenContact: (type?: 'project' | 'exchange') => void;
  currentLang: string;
}

export const LiquiditySimulator: React.FC<LiquiditySimulatorProps> = ({ onOpenContact, currentLang }) => {
  const [marketCap, setMarketCap] = useState<number>(50); // $50M
  const [dailyVolume, setDailyVolume] = useState<number>(5); // $5M
  const [exchangesCount, setExchangesCount] = useState<number>(3);
  const [targetSpread, setTargetSpread] = useState<number>(0.08); // 0.08%

  // Calculations
  const estimatedOrderBookDepth = (dailyVolume * 0.045 * 1000).toFixed(0); // in $K per side
  const slippageReduction = Math.min(94, Math.max(65, Math.round(92 - targetSpread * 100)));
  const estimated24hOrders = (dailyVolume * 12500).toLocaleString();
  const uptimeScore = '99.99%';

  return (
    <section id="simulator" className="relative py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{currentLang === 'zh' ? '即時流動性試算工具' : 'INTERACTIVE QUANTITATIVE SIMULATOR'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-slate-900 tracking-tight mb-4">
            {currentLang === 'zh' ? '代幣流動性與訂單簿深度試算' : 'Token Liquidity & Depth Calculator'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {currentLang === 'zh'
              ? '調節參數以預覽 Aether Quant 演算法如何為您的代幣或交易所收窄價差、提升訂單簿厚度並降低大額交易滑點。'
              : 'Adjust parameters to simulate how Aether Quant algorithmic market making tightens spreads and optimizes order book depth.'}
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-50/70 rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          
          {/* Left Controls */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold font-mono tracking-wider text-slate-700 uppercase">
                  {currentLang === 'zh' ? '目標 24 小時交易量' : 'Target 24h Trading Volume'}
                </label>
                <span className="text-sm font-bold font-mono text-blue-600">${dailyVolume}M USD</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="50"
                step="0.5"
                value={dailyVolume}
                onChange={(e) => setDailyVolume(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>$500K</span>
                <span>$25M</span>
                <span>$50M+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold font-mono tracking-wider text-slate-700 uppercase">
                  {currentLang === 'zh' ? '目標買賣價差 (Bid-Ask Spread)' : 'Target Bid-Ask Spread'}
                </label>
                <span className="text-sm font-bold font-mono text-blue-600">{(targetSpread * 100).toFixed(2)}% ({((targetSpread * 10000)).toFixed(0)} bps)</span>
              </div>
              <input
                type="range"
                min="0.02"
                max="0.30"
                step="0.01"
                value={targetSpread}
                onChange={(e) => setTargetSpread(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>0.02% (Tightest)</span>
                <span>0.15% (Standard)</span>
                <span>0.30%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold font-mono tracking-wider text-slate-700 uppercase">
                  {currentLang === 'zh' ? '同時上線交易所數量' : 'Active Exchanges Connected'}
                </label>
                <span className="text-sm font-bold font-mono text-blue-600">{exchangesCount} Venues</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 5, 8].map((num) => (
                  <button
                    key={num}
                    onClick={() => setExchangesCount(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition ${
                      exchangesCount === num
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {num} {num === 1 ? 'Venue' : 'Venues'}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-blue-700 font-semibold">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>{currentLang === 'zh' ? '量化保障承諾' : 'Quantitative SLA Guarantee'}</span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                {currentLang === 'zh'
                  ? '所有造市參數均受 SLA 智能協議約束，包含 24/7 在線率、最低報價深度維護以及即時對沖機制。'
                  : 'All algorithmic parameters are governed by strict contractual SLAs including guaranteed order book depth and zero toxicity.'}
              </p>
            </div>
          </div>

          {/* Right Metrics Output Panel */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                  {currentLang === 'zh' ? '預估造市表現' : 'ESTIMATED MM OUTPUT'}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <Zap className="w-3 h-3" /> Live Optimized
                </span>
              </div>

              {/* Grid of Results */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs text-slate-500 mb-1">
                    {currentLang === 'zh' ? '單邊訂單簿常駐深度' : 'Top-of-Book Depth (Per Side)'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-blue-600">
                    ${estimatedOrderBookDepth}K
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">±1% from Mid-Market</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs text-slate-500 mb-1">
                    {currentLang === 'zh' ? '大額滑點平均降低' : 'Slippage Reduction'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-600">
                    -{slippageReduction}%
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Compared to unmanaged books</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs text-slate-500 mb-1">
                    {currentLang === 'zh' ? '每日撮合訂單數' : 'Daily Executed Quotes'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-indigo-600">
                    {estimated24hOrders}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Algorithmic micro-fills</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs text-slate-500 mb-1">
                    {currentLang === 'zh' ? '做市在線率保證' : 'Uptime SLA'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-blue-700">
                    {uptimeScore}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Redundant multi-region nodes</div>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenContact('project')}
                className="w-full group flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs tracking-wider text-white uppercase bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
              >
                <span>{currentLang === 'zh' ? '索取客製化造市提案與報價' : 'REQUEST CUSTOM PROPOSAL FOR YOUR TOKEN'}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
