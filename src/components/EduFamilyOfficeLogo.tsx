import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full-horizontal' | 'full-vertical' | 'mark-only';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * EduTreeMark: Exact vector reconstruction of the Tree of Life Emblem
 * Features:
 * - 4-Point Golden Star at the apex
 * - Double-helix intertwined calligraphic trunk with inner central leaf
 * - Symmetrical emerald leaves with 4 signature golden fruit leaves
 * - Grounded calligraphic root flare
 */
export const EduTreeMark: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-10 h-10", 
  size = 48 
}) => {
  return (
    <img
      src="/android-chrome-512x512.png"
      alt="Edu Family Office Tree Emblem"
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export const EduFamilyOfficeLogo: React.FC<LogoProps> = ({
  className = "",
  variant = 'full-horizontal',
  theme = 'light',
  size = 'md',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#0E3B2E]';
  const subTextColor = isDark ? 'text-[#D4AF37]' : 'text-[#967432]';
  const lineCol = isDark ? '#D4AF37' : '#C5A059';

  const markSizes = {
    sm: 32,
    md: 42,
    lg: 56,
    xl: 72,
  };

  if (variant === 'mark-only') {
    return <EduTreeMark size={markSizes[size]} className={className} />;
  }

  if (variant === 'full-vertical') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <EduTreeMark size={markSizes[size] || 56} />
        <div className="mt-3">
          <div className={`text-2xl sm:text-3xl font-serif-tc font-bold tracking-[0.2em] ${textColor} pl-1.5`}>
            學涯家辦
          </div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="w-6 h-[1px]" style={{ backgroundColor: lineCol }} />
            <span className={`text-[11px] sm:text-xs tracking-[0.25em] font-cinzel uppercase font-semibold ${subTextColor}`}>
              Edu Family Office
            </span>
            <span className="w-6 h-[1px]" style={{ backgroundColor: lineCol }} />
          </div>
        </div>
      </div>
    );
  }

  // full-horizontal default
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <EduTreeMark size={markSizes[size]} />
      <div className="flex flex-col justify-center">
        <div className={`text-xl sm:text-2xl font-serif-tc font-bold tracking-[0.18em] leading-tight ${textColor}`}>
          學涯家辦
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-3.5 h-[1px]" style={{ backgroundColor: lineCol }} />
          <span className={`text-[9.5px] sm:text-[10.5px] tracking-[0.22em] font-cinzel uppercase font-semibold ${subTextColor} whitespace-nowrap`}>
            Edu Family Office
          </span>
          <span className="w-3.5 h-[1px]" style={{ backgroundColor: lineCol }} />
        </div>
      </div>
    </div>
  );
};
