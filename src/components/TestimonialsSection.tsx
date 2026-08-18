import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/marketData';
import { ChevronLeft, ChevronRight, Quote, Star, MessageCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  currentLang: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-28 bg-white border-t border-slate-100 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{currentLang === 'zh' ? '客戶評價與信賴背書' : 'CLIENT TESTIMONIALS'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-slate-900 tracking-tight">
              {currentLang === 'zh' ? '全球交易所與項目方的真實評價' : 'Trusted by Leading Exchanges & Protocols'}
            </h2>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-3 mt-6 sm:mt-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative rounded-3xl bg-slate-50/80 border border-slate-200/80 p-8 sm:p-12 md:p-16 shadow-sm overflow-hidden">
          
          {/* Large decorative quotation mark */}
          <Quote className="absolute top-8 right-10 w-24 h-24 text-slate-200/80 -z-0 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Rating Stars */}
            <div className="flex items-center gap-1.5 text-amber-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-mono text-slate-500">Verified Institutional Partner</span>
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-normal leading-relaxed mb-10 tracking-normal">
              "{current.quote}"
            </p>

            {/* Author details */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
              {/* Author Initial Badge */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${current.avatarBg} flex items-center justify-center text-white font-bold font-['Space_Grotesk'] text-xl shadow-xs`}>
                {current.author.charAt(0)}
              </div>

              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 font-['Space_Grotesk']">
                  {current.author}
                </div>
                <div className="text-xs sm:text-sm text-blue-600 font-medium">
                  {current.title} • <span className="text-slate-700 font-semibold">{current.company}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {current.companyType}
                </div>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-4">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
