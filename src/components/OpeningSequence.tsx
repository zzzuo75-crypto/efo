import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EduTreeMark } from './EduFamilyOfficeLogo';

interface OpeningSequenceProps {
  onComplete: () => void;
  forcePlay?: boolean;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({
  onComplete,
  forcePlay = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && !forcePlay) {
      onComplete();
      setIsVisible(false);
      return;
    }

    // Check if already seen in current session unless forcePlay
    if (!forcePlay) {
      const seen = sessionStorage.getItem('efo_intro_seen');
      if (seen === 'true') {
        onComplete();
        setIsVisible(false);
        return;
      }
    }

    // Auto complete after sequence duration (~3.4s)
    const timer = setTimeout(() => {
      handleFinish();
    }, 3400);

    return () => clearTimeout(timer);
  }, [forcePlay]);

  const handleFinish = () => {
    setIsVisible(false);
    sessionStorage.setItem('efo_intro_seen', 'true');
    setTimeout(() => {
      onComplete();
    }, 500); // Allow fade out animation to finish
  };

  const handleSkip = () => {
    setIsSkipped(true);
    handleFinish();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] text-[#0E3B2E] select-none cursor-pointer"
          onClick={handleSkip}
          aria-label="Brand Opening Animation"
          role="dialog"
        >
          {/* Subtle warm luxury background vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#FAF8F5_0%,#F5EFE4_100%)] pointer-events-none" />

          {/* Skip Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full text-xs font-serif-tc text-[#526058] hover:text-[#0E3B2E] bg-white/70 hover:bg-white border border-[#EADFCF] shadow-xs transition backdrop-blur-xs z-10"
          >
            跳過開場 Skip ✕
          </button>

          {/* Central Logo Animated Sequence */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4">
            
            {/* Exact Tree of Life Emblem */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center mb-2"
            >
              <EduTreeMark size={140} className="relative z-10 drop-shadow-md" />
            </motion.div>

            {/* 2.2s - 2.8s: Brand Name & Typography Fade-in */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mt-5"
            >
              <div className="text-3xl sm:text-4xl font-serif-tc font-bold tracking-[0.25em] text-[#0E3B2E] pl-2">
                學涯家辦
              </div>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
                className="flex items-center justify-center gap-2.5 mt-2"
              >
                <span className="w-8 sm:w-12 h-[1px] bg-[#C5A059]" />
                <span className="text-xs sm:text-sm tracking-[0.28em] font-cinzel uppercase font-semibold text-[#967432] whitespace-nowrap">
                  Edu Family Office
                </span>
                <span className="w-8 sm:w-12 h-[1px] bg-[#C5A059]" />
              </motion.div>
            </motion.div>

            {/* Subtle supporting tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="text-[11px] font-serif-tc text-[#526058] tracking-widest mt-4"
            >
              管理孩子的長期學涯資產
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
