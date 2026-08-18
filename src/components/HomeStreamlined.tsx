import React from 'react';
import { motion } from 'motion/react';
import { Hero } from './Hero';
import { APPROACH_PILLARS, SERVICES_LIST, TARGET_FAMILIES, COMPARISON_TABLE } from '../data/eduData';
import { SevenAssetsCircularLayout } from './SevenAssetsCircularLayout';
import { ServicesFlipCards } from './ServicesFlipCards';
import { SevenStepsCircularWorkflow } from './SevenStepsCircularWorkflow';
import { DeliverablesFlipCards } from './DeliverablesFlipCards';
import { ClosingCtaSection } from './ClosingCtaSection';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Compass,
  Layers,
  TrendingUp,
  UserCheck,
  Target,
  ShieldCheck,
  Award,
  ChevronRight,
} from 'lucide-react';
import { EduTreeMark } from './EduFamilyOfficeLogo';

interface HomeStreamlinedProps {
  onOpenConsultation: () => void;
  onExploreApproach: () => void;
}

export const HomeStreamlined: React.FC<HomeStreamlinedProps> = ({
  onOpenConsultation,
  onExploreApproach,
}) => {
  return (
    <div className="w-full space-y-20 sm:space-y-28">
      
      {/* =========================================================================
          01 HERO: 品牌是什麼
      ========================================================================== */}
      <div id="section-hero">
        <Hero
          onOpenConsultation={onOpenConsultation}
          onExploreApproach={onExploreApproach}
        />
      </div>

      {/* =========================================================================
          02 WHAT IS EDU FAMILY OFFICE: 我們是什麼 ＋ 怎麼做
      ========================================================================== */}
      <section id="section-what-is-efo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#DFCDB4] p-6 sm:p-12 shadow-lux">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3 border border-[#DFCDB4]">
              <span className="font-cinzel text-[#C5A059] font-bold">02</span>
              <span>WHAT IS EDU FAMILY OFFICE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-3">
              什麼是學涯家辦？我們怎麼做？
            </h2>
            <p className="text-base sm:text-lg text-[#4A5851] leading-relaxed font-serif-tc">
              家族辦公室管理家族長期的財富與資產；<strong className="text-[#0E3B2E]">學涯家辦管理的，則是孩子未來長期的學涯資產。</strong>
            </p>
            <p className="text-sm sm:text-base text-[#526058] mt-1 font-serif-tc">
              教育不再是一次次零散的選擇，而是一套可以長期累積、追蹤與調整的科學策略。
            </p>
          </div>

          {/* Part A: 我們是什麼 (對比定位) */}
          <div className="mb-12">
            <div className="text-xs font-cinzel text-[#C5A059] font-bold uppercase tracking-wider mb-3">
              CORE POSITIONING • 我們是什麼
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#E8E0D2]">
              <table className="w-full text-left text-sm font-serif-tc">
                <thead className="bg-[#F7F3EA] text-[#0E3B2E] text-xs font-bold border-b border-[#E8E0D2]">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">教育服務型態</th>
                    <th className="py-3.5 px-4 sm:px-6">核心解決焦點</th>
                    <th className="py-3.5 px-4 sm:px-6">時間跨度</th>
                    <th className="py-3.5 px-4 sm:px-6">核心機制</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E0D2]">
                  {COMPARISON_TABLE.map((row, i) => (
                    <tr key={i} className={row.isHighlight ? 'bg-[#F2ECE0]/80 font-semibold text-[#0E3B2E]' : 'bg-white text-[#4A5851]'}>
                      <td className="py-3.5 px-4 sm:px-6 font-bold flex items-center gap-1.5">
                        {row.isHighlight && <span className="text-[#C5A059]">✦</span>}
                        <span>{row.dimension}</span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6">{row.focus}</td>
                      <td className="py-3.5 px-4 sm:px-6">{row.scope}</td>
                      <td className="py-3.5 px-4 sm:px-6">{row.mechanism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Part B: 我們怎麼做 (四大核心支柱) */}
          <div>
            <div className="text-xs font-cinzel text-[#C5A059] font-bold uppercase tracking-wider mb-3">
              OUR METHODOLOGY • 我們怎麼做
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {APPROACH_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8E0D2] hover:border-[#C5A059] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-cinzel font-bold text-[#C5A059]">
                      PILLAR {pillar.step}
                    </span>
                    <span className="text-[11px] font-cinzel text-[#8A7963]">
                      {pillar.enTitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-serif-tc text-[#0E3B2E] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#526058] font-serif-tc leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          03 WHAT WE MANAGE: 七大學涯資產 (圓形呈現 ＋ 旁邊條列式)
      ========================================================================== */}
      <section id="section-assets" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3 border border-[#DFCDB4]">
            <span className="font-cinzel text-[#C5A059] font-bold">03</span>
            <span>WHAT WE MANAGE • 核心資產體系</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-3">
            七大學涯資產
          </h2>
          <p className="text-sm sm:text-base text-[#4A5851] font-serif-tc">
            超越單一應試分數，全面沉澱孩子未來不可被 AI 取代的終身資本
          </p>
        </div>

        {/* Dedicated Circular + Bulleted Details Component */}
        <SevenAssetsCircularLayout />
      </section>

      {/* =========================================================================
          04 HOW WE HELP: 服務 ＋ 流程
      ========================================================================== */}
      <section id="section-services-workflow" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Part A: 核心服務精選 */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3 border border-[#DFCDB4]">
              <span className="font-cinzel text-[#C5A059] font-bold">04</span>
              <span>HOW WE HELP • 服務與流程</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-3">
              五項核心學涯服務
            </h2>
            <p className="text-sm sm:text-base text-[#4A5851] font-serif-tc">
              從長遠策略到執行月曆，提供全方位的專業陪伴與顧問智囊
            </p>
          </div>

          <ServicesFlipCards />
        </div>

        {/* Part B: 七步驟管理流程 */}
        <div className="pt-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-tc text-[#0E3B2E] mb-2">
              七步驟學涯管理流程
            </h3>
            <p className="text-xs sm:text-sm text-[#526058] font-serif-tc">
              家庭策略訪談 → 孩子能力診斷 → 目標設定 → 能力配置 → 資源選擇 → 執行追蹤 → 成果沉澱
            </p>
          </div>

          <SevenStepsCircularWorkflow />
        </div>

      </section>

      {/* =========================================================================
          05 WHAT FAMILIES RECEIVE: 成果 ＋ 適合家庭
      ========================================================================== */}
      <section id="section-deliverables-audience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Part A: 四大實質成果 (3D 快速翻頁卡片) */}
        <div className="bg-[#FAF8F5] rounded-3xl border border-[#DFCDB4] p-6 sm:p-10 shadow-lux">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3 border border-[#DFCDB4]">
              <span className="font-cinzel text-[#C5A059] font-bold">05</span>
              <span>WHAT FAMILIES RECEIVE • 實質交付成果</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-tc text-[#0E3B2E] mb-2">
              家庭獲得的四大成果
            </h2>
            <p className="text-xs sm:text-sm text-[#526058] font-serif-tc">
              清晰的交付物，讓每一次教育投入都沉澱為具體可見的家庭資產
            </p>
          </div>

          <DeliverablesFlipCards />
        </div>

        {/* Part B: 適合的家庭 */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-tc text-[#0E3B2E] mb-2">
              適合的家庭
            </h3>
            <p className="text-xs sm:text-sm text-[#526058] font-serif-tc">
              我們與具備前瞻視野、重視孩子長期成長的家庭並肩同行
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TARGET_FAMILIES.map((tf) => (
              <div key={tf.id} className="bg-white rounded-3xl p-6 border border-[#DFCDB4] shadow-lux hover:border-[#C5A059] transition-all">
                <div className="w-9 h-9 rounded-xl bg-[#0E3B2E] text-[#E5C687] flex items-center justify-center font-bold font-cinzel text-xs mb-3 shadow-2xs">
                  0{tf.id}
                </div>
                <h4 className="text-lg font-bold font-serif-tc text-[#0E3B2E] mb-2">{tf.title}</h4>
                <p className="text-xs text-[#526058] font-serif-tc leading-relaxed">{tf.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================================================
          06 PRIVATE CONSULTATION: CTA
      ========================================================================== */}
      <section id="section-cta">
        <ClosingCtaSection onOpenConsultation={onOpenConsultation} />
      </section>

    </div>
  );
};
