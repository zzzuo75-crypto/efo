import React, { useState } from 'react';
import { INSIGHT_ARTICLES } from '../data/eduData';
import { InsightArticle } from '../types';
import { BookOpen, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

interface InsightsAndArticlesProps {
  onOpenConsultation: () => void;
}

export const InsightsAndArticles: React.FC<InsightsAndArticlesProps> = ({ onOpenConsultation }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
          <span>✦ 學涯家辦洞察 ✦</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
          教育策略專題
        </h2>
        <p className="text-base text-[#4A5851] font-serif-tc">
          由學涯家辦顧問團隊撰寫，探討長遠策略、減法思維、AI 資產、國際教育與家庭教養
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INSIGHT_ARTICLES.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArticle(art)}
            className="bg-white rounded-3xl border border-[#DFCDB4] p-6 shadow-lux hover:border-[#C5A059] transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-cinzel text-[#C5A059] mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F3EDE2] text-[#0E3B2E] font-serif-tc font-bold">
                  {art.categoryEn}
                </span>
                <span className="flex items-center gap-1 text-[#526058]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{art.readTime}</span>
                </span>
              </div>

              <h3 className="text-xl font-bold font-serif-tc text-[#0E3B2E] group-hover:text-[#C5A059] transition mb-3">
                {art.title}
              </h3>

              <p className="text-xs text-[#526058] font-serif-tc leading-relaxed mb-4">
                {art.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E0D2] flex items-center justify-between text-xs font-serif-tc font-bold text-[#0E3B2E] group-hover:text-[#C5A059]">
              <span>閱讀完整專題</span>
              <ArrowRight className="w-4 h-4 transition transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#DFCDB4] my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#526058] hover:bg-[#F3EDE2] transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-bold mb-3">
              {selectedArticle.categoryEn} • {selectedArticle.category}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
              {selectedArticle.title}
            </h2>

            {/* Key Takeaways Box */}
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#E8E0D2] mb-6">
              <div className="text-xs font-bold font-serif-tc text-[#0E3B2E] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>核心觀點精要：</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#4A5851] font-serif-tc">
                {selectedArticle.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#C5A059] font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Paragraphs */}
            <div className="space-y-4 text-sm font-serif-tc text-[#172821] leading-relaxed mb-8">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E8E0D2] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#526058] font-serif-tc">
                對此主題有更多想法？歡迎與我們顧問進一步交流。
              </div>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenConsultation();
                }}
                className="px-6 py-2.5 rounded-xl bg-[#0E3B2E] text-white font-serif-tc font-bold text-xs hover:bg-[#164D3D] transition"
              >
                預約私人諮詢
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
