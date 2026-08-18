import React from 'react';
import { Sparkles, Quote } from 'lucide-react';
import { EduTreeMark } from './EduFamilyOfficeLogo';

interface ClosingCtaProps {
  onOpenConsultation: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaProps> = ({ onOpenConsultation }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative rounded-3xl bg-[#0E3B2E] text-white p-8 sm:p-14 md:p-16 border border-[#C5A059]/40 shadow-lux-lg overflow-hidden text-center">
        {/* Subtle decorative background */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <EduTreeMark size={320} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E5C687] text-xs font-serif-tc font-semibold mb-6">
            <span>✦ 陪孩子走得更遠 ✦</span>
          </div>

          <div className="flex justify-center mb-4">
            <Quote className="w-10 h-10 text-[#C5A059] opacity-80" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold font-serif-tc leading-snug tracking-tight mb-8">
            給孩子最好的，不一定是更多資源，<br />
            而是更早知道：<span className="text-[#E5C687]">什麼值得投入、什麼可以放棄、什麼應該長期累積。</span>
          </h2>

          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-xl text-base font-bold font-serif-tc text-[#0E3B2E] bg-[#C5A059] hover:bg-[#E5C687] shadow-lg transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#0E3B2E]" />
            <span>預約私人諮詢（專屬家辦會談）</span>
          </button>
        </div>
      </div>
    </section>
  );
};
