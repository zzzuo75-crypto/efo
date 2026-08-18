import React from 'react';
import { SERVICES_LIST, ENGAGEMENT_PLANS } from '../data/eduData';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicesAndPlansProps {
  onOpenConsultation: () => void;
}

export const ServicesAndPlans: React.FC<ServicesAndPlansProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-24 py-12">
      {/* 5 Core Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
            <span>✦ 五項核心服務 ✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
            專業學涯管理服務
          </h2>
          <p className="text-base text-[#4A5851] font-serif-tc">
            涵蓋家庭策略、路線圖繪製、重大決策諮詢、七大能力發展與長期家庭顧問
          </p>
        </div>

        <div className="space-y-6">
          {SERVICES_LIST.map((srv, idx) => (
            <div key={srv.id} className="bg-white rounded-3xl border border-[#DFCDB4] p-6 sm:p-8 shadow-lux hover:border-[#C5A059] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5">
                  <div className="text-xs font-cinzel text-[#C5A059] font-bold mb-1">SERVICE 0{idx + 1}</div>
                  <h3 className="text-2xl font-bold font-serif-tc text-[#0E3B2E] mb-1">{srv.title}</h3>
                  <div className="text-xs font-cinzel text-[#526058] uppercase tracking-wider mb-3">{srv.enTitle}</div>
                  <div className="p-3.5 bg-[#FAF8F5] border-l-2 border-[#C5A059] rounded-r-xl mb-3">
                    <p className="text-sm font-serif-tc font-bold text-[#0E3B2E]">「{srv.quote}」</p>
                  </div>
                  <p className="text-xs text-[#526058] font-serif-tc leading-relaxed">{srv.summary}</p>
                </div>

                <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8E0D2]">
                  <div className="text-xs font-bold font-serif-tc text-[#0E3B2E] mb-3">服務範疇與執行內容：</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-serif-tc text-[#4A5851] mb-4">
                    {srv.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#C5A059] font-bold mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  {srv.deliverables && (
                    <div className="pt-3 border-t border-[#E8E0D2] flex flex-wrap items-center gap-2 text-xs font-serif-tc">
                      <span className="font-bold text-[#0E3B2E]">核心交付：</span>
                      {srv.deliverables.map((del, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-[#DFCDB4] text-[#0E3B2E]">
                          {del}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models (4 Tiers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
            <span>✦ 合作層級方案 ✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
            四大合作方案
          </h2>
          <p className="text-base text-[#4A5851] font-serif-tc">
            依照家庭當前所處階段與需求深度，選擇最匹配的學涯顧問陪伴模式
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENGAGEMENT_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 border flex flex-col justify-between transition-all ${
                plan.highlight
                  ? 'bg-[#0E3B2E] text-white border-[#C5A059] shadow-lux-lg ring-1 ring-[#C5A059]'
                  : 'bg-white text-[#172821] border-[#DFCDB4] shadow-lux'
              }`}
            >
              <div>
                {plan.badge && (
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#C5A059] text-white text-[10px] font-bold font-serif-tc mb-3">
                    {plan.badge}
                  </span>
                )}
                <h3 className={`text-xl font-bold font-serif-tc mb-1 ${plan.highlight ? 'text-white' : 'text-[#0E3B2E]'}`}>
                  {plan.name}
                </h3>
                <div className={`text-xs font-cinzel mb-2 ${plan.highlight ? 'text-[#E5C687]' : 'text-[#C5A059]'}`}>
                  {plan.enName}
                </div>
                <p className={`text-xs font-serif-tc mb-4 leading-relaxed ${plan.highlight ? 'text-[#D1DDD6]' : 'text-[#526058]'}`}>
                  {plan.tagline}
                </p>

                <div className={`p-3 rounded-xl text-[11px] font-serif-tc mb-4 ${plan.highlight ? 'bg-white/10 text-white' : 'bg-[#FAF8F5] text-[#0E3B2E]'}`}>
                  <strong>適合對象：</strong> {plan.suitableFor}
                </div>

                <div className="space-y-2 mb-6">
                  <div className={`text-xs font-bold font-serif-tc ${plan.highlight ? 'text-[#E5C687]' : 'text-[#0E3B2E]'}`}>
                    包含項目：
                  </div>
                  <ul className="space-y-1.5 text-xs font-serif-tc">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.highlight ? 'text-[#E5C687]' : 'text-[#0E3B2E]'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className={`w-full py-2.5 rounded-xl text-xs font-bold font-serif-tc transition flex items-center justify-center gap-1.5 ${
                  plan.highlight
                    ? 'bg-[#C5A059] text-[#0E3B2E] hover:bg-[#E5C687]'
                    : 'bg-[#0E3B2E] text-white hover:bg-[#164D3D]'
                }`}
              >
                <span>預約了解此方案</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
