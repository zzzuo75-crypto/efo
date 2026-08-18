import { MetricItem, PartnerItem, TestimonialItem, JobPosition, MarketTicker } from '../types';

export const METRIC_ITEMS: MetricItem[] = [
  {
    id: 'volume',
    value: '$150B+',
    label: 'cumulative trading volume to date',
    sublabel: 'Across Tier-1 CEX & DEX venues'
  },
  {
    id: 'market_share',
    value: '~1.2%',
    label: 'of the global crypto spot trading volume',
    sublabel: 'Consistently quoting top order books',
    isHighlighted: true
  },
  {
    id: 'teammates',
    value: '65+',
    label: 'teammates (& growing)',
    sublabel: 'Quants, C++ devs, PhD researchers'
  },
  {
    id: 'exchanges',
    value: '35+',
    label: 'leading global and local crypto exchanges',
    sublabel: 'Direct low-latency API connections'
  },
  {
    id: 'founded',
    value: '2018',
    label: 'start, crypto-natives',
    sublabel: 'Through multiple market cycles'
  },
  {
    id: 'pairs',
    value: '1,800+',
    label: 'crypto-asset pairs quoted',
    sublabel: 'Spot, perpetuals, options'
  },
  {
    id: 'uptime',
    value: '24/7/365',
    label: 'non-stop algorithmic liquidity',
    sublabel: 'Zero downtime automated bots'
  },
  {
    id: 'trades',
    value: '750M+',
    label: 'trades executed to date',
    sublabel: 'Microsecond order processing'
  }
];

export const LIVE_TICKERS: MarketTicker[] = [
  { pair: 'BTC / USDT', price: '96,420.50', change24h: '+3.42%', isPositive: true, spread: '0.005%', volume24h: '$4.2B' },
  { pair: 'ETH / USDT', price: '2,780.80', change24h: '+4.18%', isPositive: true, spread: '0.008%', volume24h: '$2.8B' },
  { pair: 'SOL / USDT', price: '188.45', change24h: '+6.85%', isPositive: true, spread: '0.012%', volume24h: '$1.4B' },
  { pair: 'ARB / USDT', price: '0.742', change24h: '-1.12%', isPositive: false, spread: '0.015%', volume24h: '$320M' },
  { pair: 'SUI / USDT', price: '3.14', change24h: '+8.90%', isPositive: true, spread: '0.018%', volume24h: '$680M' },
  { pair: 'AVAX / USDT', price: '28.90', change24h: '+2.15%', isPositive: true, spread: '0.014%', volume24h: '$410M' },
  { pair: 'LINK / USDT', price: '19.65', change24h: '+1.75%', isPositive: true, spread: '0.010%', volume24h: '$290M' },
  { pair: 'NEAR / USDT', price: '5.82', change24h: '+5.30%', isPositive: true, spread: '0.016%', volume24h: '$340M' }
];

export const PARTNERS_DATA: PartnerItem[] = [
  { id: 'binance', name: 'Binance', category: 'exchange', type: 'Tier 1 CEX', status: 'Direct Gateway', logoText: 'BINANCE', logoAccent: '#F3BA2F' },
  { id: 'coinbase', name: 'Coinbase Exchange', category: 'exchange', type: 'Tier 1 CEX', status: 'VIP Colocation', logoText: 'COINBASE', logoAccent: '#0052FF' },
  { id: 'kraken', name: 'Kraken', category: 'exchange', type: 'Tier 1 CEX', status: 'Direct Gateway', logoText: 'KRAKEN', logoAccent: '#5841D8' },
  { id: 'okx', name: 'OKX', category: 'exchange', type: 'Global CEX & Perp', status: 'Ultra Low-Latency', logoText: 'OKX', logoAccent: '#FFFFFF' },
  { id: 'bybit', name: 'Bybit', category: 'exchange', type: 'Derivatives & Spot', status: 'Strategic MM', logoText: 'BYBIT', logoAccent: '#F7A600' },
  { id: 'kucoin', name: 'KuCoin', category: 'exchange', type: 'Altcoin Liquidity', status: 'Direct API', logoText: 'KUCOIN', logoAccent: '#23AF91' },
  { id: 'gateio', name: 'Gate.io', category: 'exchange', type: 'Global CEX', status: 'Primary MM', logoText: 'GATE.IO', logoAccent: '#2354E6' },
  { id: 'bitstamp', name: 'Bitstamp', category: 'exchange', type: 'European Pioneer', status: 'Direct Gateway', logoText: 'BITSTAMP', logoAccent: '#00C853' },
  { id: 'bitbank', name: 'Bitbank', category: 'exchange', type: 'Japan Licensed', status: 'Certified MM', logoText: 'BITBANK', logoAccent: '#3498DB' },
  { id: 'bitkub', name: 'Bitkub', category: 'exchange', type: 'Southeast Asia #1', status: 'Strategic Partner', logoText: 'BITKUB', logoAccent: '#00D084' },
  { id: 'uniswap', name: 'Uniswap v3 / v4', category: 'dex', type: 'On-chain AMM', status: 'JIT Liquidity Engine', logoText: 'UNISWAP', logoAccent: '#FF007A' },
  { id: 'hyperliquid', name: 'Hyperliquid', category: 'dex', type: 'On-Chain CLOB', status: 'Core Maker Node', logoText: 'HYPERLIQUID', logoAccent: '#40E0D0' },
  { id: 'arbitrum', name: 'Arbitrum One', category: 'protocol', type: 'Layer 2 Rollup', status: 'Ecosystem MM', logoText: 'ARBITRUM', logoAccent: '#28A0F0' },
  { id: 'solana', name: 'Solana', category: 'protocol', type: 'High Throughput L1', status: 'Validator & MM', logoText: 'SOLANA', logoAccent: '#14F195' },
  { id: 'polygon', name: 'Polygon PoS / zkEVM', category: 'protocol', type: 'Aggregated L2', status: 'DeFi Market Maker', logoText: 'POLYGON', logoAccent: '#8247E5' },
  { id: 'optimism', name: 'Optimism Superchain', category: 'protocol', type: 'OP Stack Ecosystem', status: 'Native Liquidity', logoText: 'OPTIMISM', logoAccent: '#FF0420' },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'bitkub',
    quote: 'Since 2019, Aether Quant has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Aether Quant has contributed high-quality volume and has proven to be a very reliable and trustworthy partner. We strongly advocate Aether Quant as they have been an indispensable part of our market-making infrastructure.',
    author: 'Atthakrit Chimplapibul',
    title: 'Co-founder & Chief Executive Officer',
    company: 'Bitkub Online Co., Ltd.',
    companyType: 'Licensed Digital Asset Exchange',
    avatarBg: 'from-emerald-500 to-teal-700'
  },
  {
    id: 'apexchain',
    quote: 'When launching our token across 5 major centralized exchanges and 3 DEXs simultaneously, Aether Quant provided spotless continuous tight order books and eliminated volatility slippage on day one. Their real-time monitoring dashboard and weekly transparency calls gave our foundation absolute peace of mind.',
    author: 'Elena Rostova',
    title: 'Head of Token Ecosystem & Growth',
    company: 'ApexChain Foundation',
    companyType: 'Layer 1 Blockchain Protocol',
    avatarBg: 'from-cyan-500 to-blue-700'
  },
  {
    id: 'novax',
    quote: 'Aether Quant brings institutional-grade quantitative discipline with sub-millisecond execution speeds. Their proprietary models adjusted to extreme market volatility during high-stress market events without pulling liquidity. One of the best algorithmic desks in the industry.',
    author: 'Marcus Vance',
    title: 'VP of Institutional Liquidity',
    company: 'NovaX Global Exchange',
    companyType: 'Spot & Derivatives Exchange',
    avatarBg: 'from-purple-500 to-indigo-700'
  },
  {
    id: 'horizon',
    quote: 'Their on-chain algorithmic liquidity provisioning on concentrated AMMs and order books transformed our token trading experience for retail and institutional traders alike. Spreads narrowed by 80% within the first 48 hours of onboarding.',
    author: 'David Chen',
    title: 'Core Protocol Lead',
    company: 'Horizon DeFi Labs',
    companyType: 'Cross-Chain Decentralized Exchange',
    avatarBg: 'from-amber-500 to-orange-700'
  }
];

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'quant-researcher',
    title: 'Senior Quantitative Researcher - High Frequency',
    department: 'Quant Research',
    location: 'Zurich / Singapore / Remote',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Design, backtest, and deploy statistical arbitrage, order flow toxicity prediction, and market-making strategies across crypto spot and perpetual futures markets.',
    requirements: [
      'Master’s or PhD in Mathematics, Physics, Computer Science or quantitative finance',
      'Proven track record developing automated trading strategies with positive Sharpe ratios',
      'Proficiency in Python (NumPy, Pandas, PyTorch) and C++20',
      'Deep understanding of microstructure, order book mechanics, and latency optimization'
    ]
  },
  {
    id: 'low-latency-cpp',
    title: 'Lead Low-Latency C++ Trading Systems Engineer',
    department: 'Engineering',
    location: 'London / Singapore / Remote',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Build and optimize our ultra-low-latency execution engine, market data feed handlers (WebSockets, FIX, binary protocols), and co-located exchange gateways.',
    requirements: [
      'Expertise in modern C++ (C++17/C++20), lock-free data structures, and cache locality',
      'Experience in Linux kernel bypass networking (Solarflare, DPDK, io_uring)',
      'Proven background in high-frequency trading (HFT) infrastructure',
      'Passion for 24/7 high-availability mission-critical software'
    ]
  },
  {
    id: 'crypto-quant-trader',
    title: 'Quantitative Algorithmic Trader (24/7 Desks)',
    department: 'Trading Ops',
    location: 'Singapore / Tokyo / Remote',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Monitor live trading strategies, risk exposures, inventory balances across 35+ venues, and dynamically tune algorithm parameters during major market regimes.',
    requirements: [
      'Experience in proprietary trading, asset management, or crypto market making desks',
      'Sharp quantitative reasoning, risk control instincts, and composure under pressure',
      'Familiarity with crypto derivatives, funding rate mechanics, and basis trading',
      'Scripting proficiency in Python and SQL'
    ]
  },
  {
    id: 'institutional-bd',
    title: 'Institutional Partnerships & Listings Director',
    department: 'Strategy & Growth',
    location: 'New York / Zurich / Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Originate and lead long-term market making partnerships with high-tier crypto foundation teams, Web3 gaming ecosystems, and emerging tier-1 exchanges.',
    requirements: [
      'Strong network with crypto project founders, token foundations, and exchange listing teams',
      'Comprehensive understanding of market making economics, spread dynamics, and compliance',
      'Exceptional presentation, negotiation, and relationship management capabilities',
      'Fluent in English; additional language (Mandarin, Japanese, or Korean) is a strong plus'
    ]
  }
];

export const RESEARCH_INSIGHTS = [
  {
    id: 'liquidity-post-etf',
    title: 'The Evolution of Crypto Market Depth & Spot Spreads Post-ETF Era',
    category: 'Quantitative Research',
    readTime: '6 min read',
    date: 'February 2025',
    summary: 'An empirical analysis of order book resiliency, institutional order routing patterns, and how market makers adjust inventory skew in high-velocity regimes.'
  },
  {
    id: 'onchain-clob-evolution',
    title: 'Next-Gen On-Chain Order Books: Liquidity Dynamics on Hyperliquid & Monad',
    category: 'Market Microstructure',
    readTime: '8 min read',
    date: 'January 2025',
    summary: 'Evaluating microsecond settlement on parallelized EVM chains and the implications for algorithmic latency arbitrage and multi-venue risk hedging.'
  },
  {
    id: 'token-launch-playbook',
    title: 'Token Launch Liquidity Playbook: Avoiding Day-1 Volatility Traps',
    category: 'Project Advisory',
    readTime: '5 min read',
    date: 'December 2024',
    summary: 'Strategic guidance for token foundations on initial circulating float provisioning, multi-exchange order book depth allocation, and anti-sniper pricing algorithms.'
  }
];
