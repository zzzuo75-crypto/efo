import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WORK_STEPS } from '../data/eduData';
import {
  MessageSquareText,
  Activity,
  Target,
  Sliders,
  Filter,
  RefreshCw,
  Archive,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const STEP_ICONS = [
  MessageSquareText,
  Activity,
  Target,
  Sliders,
  Filter,
  RefreshCw,
  Archive,
];

export const SevenStepsCircularWorkflow: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = WORK_STEPS[activeStepIndex];
  const ActiveIcon = STEP_ICONS[activeStepIndex];

  return (
    <div className="w-full">
      {/* ================= DESKTOP VIEW (Horizontal Connected Circular Chain) ================= */}
      <div className="hidden lg:block">
        <div className="relative py-12 px-2">
          
          {/* Continuous Connecting Line Behind Circles */}
          <div className="absolute top-[88px] left-[6%] right-[6%] h-[3px] -translate-y-1/2 pointer-events-none z-0">
            {/* Background base line */}
            <div className="w-full h-full bg-[#E2D6C3]" />
            {/* Golden gradient progress beam */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0E3B2E] via-[#C5A059] to-[#E5C687] transition-all duration-500 ease-out"
              style={{ width: `${(activeStepIndex / (WORK_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          {/* 7 Circular Steps Container */}
          <div className="relative z-10 grid grid-cols-7 gap-2 items-start text-center">
            {WORK_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              const isPassed = activeStepIndex >= idx;
              const IconComp = STEP_ICONS[idx];

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center cursor-pointer group px-1"
                >
                  {/* Step Number Top Tag */}
                  <div className={`text-[11px] font-cinzel font-bold mb-2.5 transition-colors ${
                    isSelected ? 'text-[#C5A059]' : 'text-[#8A7963] group-hover:text-[#0E3B2E]'
                  }`}>
                    STEP 0{step.step}
                  </div>

                  {/* Circular Node */}
                  <div className="relative mb-4">
                    {/* Outer animated ring when active */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeCircleRing"
                        className="absolute -inset-2.5 rounded-full border-2 border-[#C5A059] bg-[#C5A059]/10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}

                    {/* Main Circle Orb */}
                    <div
                      className={`w-[78px] h-[78px] xl:w-[86px] xl:h-[86px] rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-[#0E3B2E] text-white ring-2 ring-[#C5A059] scale-105 shadow-lux'
                          : isPassed
                          ? 'bg-white text-[#0E3B2E] border-2 border-[#C5A059] hover:bg-[#FAF8F5] hover:scale-102'
                          : 'bg-white text-[#526058] border-2 border-[#DFCDB4] hover:border-[#C5A059] hover:text-[#0E3B2E] hover:scale-102'
                      }`}
                    >
                      <IconComp
                        className={`w-6 h-6 mb-1 transition-transform group-hover:scale-110 ${
                          isSelected ? 'text-[#E5C687]' : isPassed ? 'text-[#C5A059]' : 'text-[#7D8E84]'
                        }`}
                      />
                      <span className={`text-[10px] font-cinzel font-bold tracking-wider ${
                        isSelected ? 'text-[#E5C687]' : 'text-[#8A7963]'
                      }`}>
                        0{step.step}
                      </span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <h4 className={`text-sm xl:text-base font-bold font-serif-tc mb-1.5 transition-colors ${
                    isSelected ? 'text-[#0E3B2E] font-extrabold' : 'text-[#3E4D45] group-hover:text-[#0E3B2E]'
                  }`}>
                    {step.title}
                  </h4>

                  {/* Brief Summary */}
                  <p className="text-[11px] xl:text-xs text-[#526058] font-serif-tc leading-snug line-clamp-2 px-1">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* ================= TABLET & MOBILE VIEW (Vertical / Serpentine Connected Chain) ================= */}
      <div className="block lg:hidden py-6">
        <div className="relative pl-6 sm:pl-8 space-y-6">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[34px] sm:left-[40px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-[#0E3B2E] via-[#C5A059] to-[#DFCDB4] -translate-x-1/2 pointer-events-none" />

          {/* Vertical Step Nodes */}
          {WORK_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            const IconComp = STEP_ICONS[idx];

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#C5A059] shadow-lux ring-1 ring-[#C5A059]/40'
                    : 'bg-white/80 border-[#E8E0D2] hover:bg-white hover:border-[#C5A059]'
                }`}
              >
                {/* Circular Node */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0 flex flex-col items-center justify-center shadow-xs transition-all relative z-10 ${
                    isSelected
                      ? 'bg-[#0E3B2E] text-white ring-2 ring-[#C5A059]'
                      : 'bg-white text-[#0E3B2E] border-2 border-[#DFCDB4]'
                  }`}
                >
                  <IconComp className={`w-5 h-5 ${isSelected ? 'text-[#E5C687]' : 'text-[#C5A059]'}`} />
                  <span className={`text-[9px] font-cinzel font-bold ${isSelected ? 'text-[#E5C687]' : 'text-[#8A7963]'}`}>
                    0{step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-cinzel text-[#C5A059] font-bold">
                      STEP 0{step.step}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F3EDE2] text-[#0E3B2E] font-serif-tc font-bold">
                        當前選取
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold font-serif-tc text-[#0E3B2E] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#526058] font-serif-tc leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= ACTIVE STEP DEEP DETAIL PANEL ================= */}
      <motion.div
        key={activeStepIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-6 bg-[#FAF8F5] rounded-3xl border border-[#DFCDB4] p-6 sm:p-8 shadow-lux"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E0D2]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0E3B2E] text-[#E5C687] flex items-center justify-center shadow-xs">
              <ActiveIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-cinzel text-[#C5A059] font-bold">
                STEP 0{activeStep.step} 深度解析
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-tc text-[#0E3B2E]">
                {activeStep.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-serif-tc text-[#526058]">切換步驟：</span>
            <div className="flex items-center gap-1">
              {WORK_STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStepIndex(i)}
                  className={`w-7 h-7 rounded-lg text-xs font-cinzel font-bold transition ${
                    activeStepIndex === i
                      ? 'bg-[#0E3B2E] text-white ring-1 ring-[#C5A059]'
                      : 'bg-white text-[#526058] border border-[#DFCDB4] hover:bg-[#F3EDE2]'
                  }`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 items-center">
          <div className="md:col-span-8">
            <div className="text-xs font-bold font-serif-tc text-[#0E3B2E] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>核心管理目標與執行重點：</span>
            </div>
            <p className="text-sm sm:text-base font-serif-tc text-[#4A5851] leading-relaxed">
              {activeStep.details}
            </p>
          </div>

          <div className="md:col-span-4 bg-white rounded-2xl p-4 border border-[#E8E0D2] shadow-xs text-xs font-serif-tc text-[#0E3B2E] space-y-2">
            <div className="font-bold flex items-center gap-1.5 text-[#0E3B2E]">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
              <span>家辦管理標準：</span>
            </div>
            <p className="text-[#526058] leading-relaxed">
              拒絕盲目堆疊與跟風焦慮，以嚴謹的資產管理流程，確保每一步皆能為孩子未來的核心選擇權奠定基石。
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
