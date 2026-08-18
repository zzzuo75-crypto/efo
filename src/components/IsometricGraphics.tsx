import React from 'react';

export const BrandLogo: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 36 }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 45-degree Geometric Balance Diamond Mark */}
      <div 
        className="w-8 h-8 bg-blue-600 rounded-sm rotate-45 flex items-center justify-center shadow-md shadow-blue-200 shrink-0"
      >
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1 font-bold tracking-tight text-slate-900 text-lg font-['Space_Grotesk'] leading-none">
          <span>AETHER</span>
          <span className="text-blue-600">QUANT</span>
        </div>
        <span className="text-[9px] font-mono font-medium tracking-widest text-slate-500 uppercase mt-0.5">
          Algorithmic Market Maker
        </span>
      </div>
    </div>
  );
};

// 3D Isometric Token & Project Liquidity Graphic with Geometric Balance Elements
export const ProjectTokensIsometric: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
      {/* Geometric circular orbits matching design theme */}
      <div className="absolute w-[360px] h-[360px] border border-blue-100 rounded-full pointer-events-none" />
      <div className="absolute w-[280px] h-[280px] border border-blue-200 rounded-full rotate-45 pointer-events-none" />
      <div className="absolute w-[190px] h-[190px] bg-blue-50/70 rounded-2xl rotate-12 flex items-center justify-center pointer-events-none" />
      
      {/* Floating Isometric Canvas Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-xl overflow-visible">
          <defs>
            {/* Gradients */}
            <linearGradient id="token_top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="token_left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>
            <linearGradient id="token_right" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="gold_top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="gold_left" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
            <linearGradient id="gold_right" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
            <linearGradient id="purple_top" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="grid_glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Isometric Ground Grid Plate */}
          <g transform="translate(250, 360)">
            <ellipse cx="0" cy="0" rx="190" ry="85" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
            <ellipse cx="0" cy="0" rx="140" ry="60" fill="none" stroke="url(#grid_glow)" strokeWidth="1.5" strokeDasharray="6 4" className="animate-spin" style={{ transformOrigin: '0px 0px', animationDuration: '40s' }} />
            <ellipse cx="0" cy="0" rx="90" ry="40" fill="none" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.3" />
          </g>

          {/* Central Main Liquidity Pillar & Cube */}
          <g className="animate-float" style={{ transformOrigin: '250px 220px' }}>
            {/* Center Cube (Royal Blue Token) */}
            <g transform="translate(250, 210)">
              {/* Top face */}
              <polygon points="0,-45 75, -2 0,40 -75,-2" fill="url(#token_top)" />
              {/* Left face */}
              <polygon points="-75,-2 0,40 0,115 -75,73" fill="url(#token_left)" />
              {/* Right face */}
              <polygon points="0,40 75,-2 75,73 0,115" fill="url(#token_right)" />
              
              {/* Symbol on Top Face */}
              <path d="M0,-22 L22,-9 L0,4 L-22,-9 Z" fill="#ffffff" fillOpacity="0.95" />
              <circle cx="0" cy="-9" r="6" fill="#60a5fa" />
            </g>

            {/* Orbiting Golden Coin 1 (Bitcoin Gold) */}
            <g transform="translate(380, 160)" className="animate-float-reverse">
              <polygon points="0,-25 42,-2 0,22 -42,-2" fill="url(#gold_top)" />
              <polygon points="-42,-2 0,22 0,55 -42,32" fill="url(#gold_left)" />
              <polygon points="0,22 42,-2 42,32 0,55" fill="url(#gold_right)" />
              <text x="0" y="3" textAnchor="middle" fill="#78350f" fontSize="14" fontWeight="bold" fontFamily="monospace">₿</text>
            </g>

            {/* Orbiting Indigo Coin 2 (Ethereum / DeFi) */}
            <g transform="translate(120, 170)" className="animate-float">
              <polygon points="0,-22 38,-2 0,18 -38,-2" fill="url(#purple_top)" />
              <polygon points="-38,-2 0,18 0,48 -38,28" fill="#3730a3" />
              <polygon points="0,18 38,-2 38,28 0,48" fill="#4338ca" />
              <path d="M0,-8 L12,0 L0,8 L-12,0 Z" fill="#ffffff" />
            </g>

            {/* Small Floating Liquidity Orbs */}
            <g transform="translate(190, 100)">
              <circle cx="0" cy="0" r="14" fill="#2563eb" filter="drop-shadow(0 4px 8px rgba(37,99,235,0.3))" />
              <circle cx="0" cy="0" r="6" fill="#ffffff" />
            </g>
            <g transform="translate(320, 95)">
              <circle cx="0" cy="0" r="12" fill="#16a34a" filter="drop-shadow(0 4px 6px rgba(22,163,74,0.3))" />
              <circle cx="0" cy="0" r="5" fill="#ffffff" />
            </g>
          </g>

          {/* Flowing Liquidity Stream Lines */}
          <path d="M120,220 C180,300 320,300 380,210" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.7" />
          <path d="M160,180 C220,120 280,120 340,170" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
};

// 3D Isometric Exchange Trading Terminal Graphic with Geometric Balance Elements
export const ExchangeTerminalIsometric: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[440px] mx-auto flex items-center justify-center">
      {/* Geometric concentric circular rings */}
      <div className="absolute w-[380px] h-[380px] border border-blue-100 rounded-full pointer-events-none" />
      <div className="absolute w-[290px] h-[290px] border border-slate-200 rounded-full rotate-45 pointer-events-none" />
      <div className="absolute w-[180px] h-[180px] bg-slate-50 border border-slate-100 rounded-2xl rotate-6 pointer-events-none" />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-xl overflow-visible">
          {/* Isometric Terminal Base Deck */}
          <g transform="translate(250, 270)">
            {/* Top Surface */}
            <polygon points="0,-100 190,0 0,100 -190,0" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            
            {/* Front Left Thickness */}
            <polygon points="-190,0 0,100 0,120 -190,20" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
            {/* Front Right Thickness */}
            <polygon points="0,100 190,0 190,20 0,120" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
            
            {/* Order Book Depth Levels (Bids & Asks Green/Red) */}
            {/* Bid levels (Green Left) */}
            <polygon points="-140,-15 -20,48 -20,56 -140,-7" fill="#16a34a" fillOpacity="0.85" />
            <polygon points="-130,-30 -30,22 -30,30 -130,-22" fill="#16a34a" fillOpacity="0.65" />
            <polygon points="-120,-45 -40,-4 -40,4 -120,-37" fill="#16a34a" fillOpacity="0.45" />
            <polygon points="-110,-60 -50,-30 -50,-22 -110,-52" fill="#16a34a" fillOpacity="0.25" />

            {/* Ask levels (Red Right) */}
            <polygon points="20,48 140,-15 140,-7 20,56" fill="#dc2626" fillOpacity="0.85" />
            <polygon points="30,22 130,-30 130,-22 30,30" fill="#dc2626" fillOpacity="0.65" />
            <polygon points="40,-4 120,-45 120,-37 40,4" fill="#dc2626" fillOpacity="0.45" />
            <polygon points="50,-30 110,-60 110,-52 50,-22" fill="#dc2626" fillOpacity="0.25" />

            {/* Center Spread Marker */}
            <line x1="0" y1="-80" x2="0" y2="80" stroke="#2563eb" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="5" fill="#2563eb" className="animate-ping" />
            <circle cx="0" cy="0" r="3" fill="#ffffff" />
          </g>

          {/* Floating Isometric Screen / Analytics Panel (Left Wing) */}
          <g transform="translate(140, 140)" className="animate-float">
            {/* Screen Panel */}
            <polygon points="0,-50 90,-5 90,65 0,20" fill="#ffffff" stroke="#2563eb" strokeWidth="1.5" />
            {/* Screen graph lines */}
            <polyline points="10,-20 30,-5 50,-30 75,-10" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            <polyline points="10,0 35,15 55,5 78,25" fill="none" stroke="#93c5fd" strokeWidth="1.5" />
            <circle cx="75" cy="-10" r="3.5" fill="#2563eb" />
          </g>

          {/* Floating Low-Latency Hub (Right Wing) */}
          <g transform="translate(340, 130)" className="animate-float-reverse">
            {/* Screen Panel */}
            <polygon points="-80,-10 10,-55 10,15 -80,60" fill="#ffffff" stroke="#4f46e5" strokeWidth="1.5" />
            {/* Terminal rows */}
            <line x1="-70" y1="5" x2="-10" y2="-25" stroke="#16a34a" strokeWidth="2" />
            <line x1="-70" y1="20" x2="-20" y2="-8" stroke="#2563eb" strokeWidth="2" />
            <line x1="-70" y1="35" x2="-30" y2="10" stroke="#818cf8" strokeWidth="2" />
            <circle cx="-10" cy="-25" r="2.5" fill="#16a34a" />
          </g>

          {/* Microsecond Gateway Beam */}
          <line x1="250" y1="90" x2="250" y2="230" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="250" cy="90" r="7" fill="#2563eb" filter="drop-shadow(0 2px 6px rgba(37,99,235,0.4))" />
        </svg>
      </div>
    </div>
  );
};
