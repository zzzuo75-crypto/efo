import React, { useState } from 'react';
import { RESEARCH_INSIGHTS } from '../data/marketData';
import { X, Clock, BookOpen } from 'lucide-react';

interface InsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: string;
}

export const InsightsModal: React.FC<InsightsModalProps> = ({ isOpen, onClose, currentLang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <BookOpen className="w-3 h-3" />
            <span>QUANTITATIVE RESEARCH & MARKET MICROSTRUCTURE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900">
            {currentLang === 'zh' ? 'Aether Quant 量化研究與產業洞察' : 'Aether Quant Research & Insights'}
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            {currentLang === 'zh'
              ? '由我們量化研究員撰寫的加密貨幣微觀結構、訂單簿深度分析與流動性專題報告。'
              : 'Empirical reports and market microstructure insights published by our quantitative researchers.'}
          </p>
        </div>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {RESEARCH_INSIGHTS.map((article) => (
            <div
              key={article.id}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-2">
                <span className="text-blue-700 font-semibold px-2 py-0.5 rounded bg-blue-50 border border-blue-100">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
                <span>• {article.date}</span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-['Space_Grotesk'] mb-2">
                {article.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {article.summary}
              </p>

              <button
                onClick={() => {
                  alert(`Opening complete memo: "${article.title}" (PDF Download initiated)`);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold font-mono text-blue-600 hover:text-blue-700 uppercase"
              >
                <span>{currentLang === 'zh' ? '閱讀完整研究報告 →' : 'Read Full Research Memo →'}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
