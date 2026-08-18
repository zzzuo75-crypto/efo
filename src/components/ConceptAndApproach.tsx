import React from 'react';
import { TARGET_FAMILIES, COMPARISON_TABLE } from '../data/eduData';
import { Sparkles, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { SevenStepsCircularWorkflow } from './SevenStepsCircularWorkflow';
import { DeliverablesFlipCards } from './DeliverablesFlipCards';
import { SevenAssetsCircularLayout } from './SevenAssetsCircularLayout';

interface ConceptAndApproachProps {
  onOpenConsultation: () => void;
  onExploreAsset?: (assetId: string) => void;
}

export const ConceptAndApproach: React.FC<ConceptAndApproachProps> = ({
  onOpenConsultation,
}) => {
  return (
    <div className="space-y-24 py-12">
      {/* 1. What is Edu Family Office */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#DFCDB4] p-8 sm:p-12 shadow-lux">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
              <span>✦ 概念核心 ✦</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
              什麼是學涯家辦？
            </h2>
            <p className="text-base sm:text-lg text-[#4A5851] leading-relaxed font-serif-tc">
              家族辦公室管理家族長期的財富與資產；<strong className="text-[#0E3B2E]">學涯家辦管理的，則是孩子未來長期的學涯資產。</strong>
            </p>
            <p className="text-sm sm:text-base text-[#526058] mt-2 font-serif-tc">
              教育不再是一次次零散的選擇，而是一套可以長期累積、追蹤與調整的學涯策略。
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#E8E0D2]">
            <table className="w-full text-left text-sm font-serif-tc">
              <thead className="bg-[#F7F3EA] text-[#0E3B2E] text-xs font-bold border-b border-[#E8E0D2]">
                <tr>
                  <th className="py-3.5 px-4">教育服務型態</th>
                  <th className="py-3.5 px-4">核心解決焦點</th>
                  <th className="py-3.5 px-4">時間跨度</th>
                  <th className="py-3.5 px-4">核心機制</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E0D2]">
                {COMPARISON_TABLE.map((row, i) => (
                  <tr key={i} className={row.isHighlight ? 'bg-[#F2ECE0] font-semibold text-[#0E3B2E]' : 'bg-white text-[#4A5851]'}>
                    <td className="py-3.5 px-4 font-bold flex items-center gap-1.5">
                      {row.isHighlight && <span className="text-[#C5A059]">✦</span>}
                      <span>{row.dimension}</span>
                    </td>
                    <td className="py-3.5 px-4">{row.focus}</td>
                    <td className="py-3.5 px-4">{row.scope}</td>
                    <td className="py-3.5 px-4">{row.mechanism}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2. Seven Education Assets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
            <span>✦ 核心資產體系 ✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
            七大學涯資產
          </h2>
          <p className="text-base text-[#4A5851] font-serif-tc">
            超越單一應試分數，全面沉澱孩子未來不可被 AI 取代的終身資本
          </p>
        </div>

        <SevenAssetsCircularLayout />
      </section>

      {/* 3. Seven Steps Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
            <span>✦ 專業管理流程 ✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
            七步驟學涯管理
          </h2>
          <p className="text-base text-[#4A5851] font-serif-tc">
            家庭策略訪談 → 孩子能力診斷 → 目標設定 → 能力配置 → 資源選擇 → 執行追蹤 → 成果沉澱
          </p>
        </div>

        <SevenStepsCircularWorkflow />
      </section>

      {/* 4. What Families Receive (3D Flip Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#DFCDB4] p-6 sm:p-10 shadow-lux">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
              <span>✦ 實質交付資產 ✦</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-tc text-[#0E3B2E] mb-2">
              家庭獲得的四大成果
            </h2>
            <p className="text-sm text-[#526058] font-serif-tc">清晰的交付物，讓每一次投入都轉化為可見的資產</p>
          </div>

          <DeliverablesFlipCards />
        </div>
      </section>

      {/* 5. Target Families */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold font-serif-tc text-[#0E3B2E] mb-3">
            適合的家庭
          </h2>
          <p className="text-sm text-[#526058] font-serif-tc">我們與具備前瞻視野、重視孩子長期成長的家庭並肩同行</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TARGET_FAMILIES.map((tf) => (
            <div key={tf.id} className="bg-white rounded-2xl p-6 border border-[#E8E0D2] shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#F3EDE2] text-[#C5A059] flex items-center justify-center font-bold font-cinzel text-xs mb-3">
                0{tf.id}
              </div>
              <h3 className="text-lg font-bold font-serif-tc text-[#0E3B2E] mb-2">{tf.title}</h3>
              <p className="text-xs text-[#526058] font-serif-tc leading-relaxed">{tf.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
