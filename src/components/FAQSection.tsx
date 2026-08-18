import React, { useState } from 'react';
import { FAQ_LIST } from '../data/eduData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQSectionProps {
  onOpenConsultation?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredFAQs = filterCategory === 'all'
    ? FAQ_LIST
    : FAQ_LIST.filter(item => item.category === filterCategory);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>常見問題解答</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
          常見問題 FAQ
        </h2>
        <p className="text-base text-[#4A5851] font-serif-tc">
          整理家庭在了解學涯家辦時最關心的 12 項核心問題
        </p>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: 'all', label: '全部問題' },
            { id: 'concept', label: '核心概念' },
            { id: 'comparison', label: '服務差異' },
            { id: 'service', label: '服務與方案' },
            { id: 'process', label: '流程與交付' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-serif-tc transition ${
                filterCategory === cat.id
                  ? 'bg-[#0E3B2E] text-white font-bold'
                  : 'bg-white text-[#4A5851] border border-[#DFCDB4] hover:bg-[#F3EDE2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFAQs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-[#DFCDB4] shadow-xs overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-serif-tc"
              >
                <span className="text-base sm:text-lg font-bold text-[#0E3B2E]">
                  Q{faq.id}. {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm text-[#4A5851] font-serif-tc leading-relaxed border-t border-[#F3EDE2]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {onOpenConsultation && (
        <div className="mt-12 text-center p-8 rounded-3xl bg-white border border-[#DFCDB4] shadow-xs">
          <h3 className="text-xl font-bold font-serif-tc text-[#0E3B2E] mb-2">還有其他想了解的細節？</h3>
          <p className="text-xs text-[#526058] font-serif-tc mb-4">歡迎預約私人諮詢，我們的首席學涯顧問將為您親自解答。</p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-2.5 rounded-xl bg-[#0E3B2E] text-white font-serif-tc font-bold text-xs hover:bg-[#164D3D] transition inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E5C687]" />
            <span>預約私人諮詢</span>
          </button>
        </div>
      )}
    </section>
  );
};
