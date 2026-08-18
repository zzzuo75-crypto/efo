import React, { useState, useEffect } from 'react';
import { EduFamilyOfficeLogo } from './EduFamilyOfficeLogo';
import { NavSection } from '../types';
import { Menu, X, Sparkles, Play } from 'lucide-react';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenConsultation,
  onReplayIntro,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: NavSection; label: string; enLabel: string }[] = [
    { id: 'home', label: '首頁', enLabel: 'Home' },
    { id: 'approach', label: '教育方法', enLabel: 'Our Approach' },
    { id: 'services', label: '核心服務', enLabel: 'Services' },
    { id: 'insights', label: '學涯專題', enLabel: 'Insights' },
    { id: 'about', label: '關於家辦', enLabel: 'About' },
    { id: 'faq', label: '常見問題', enLabel: 'FAQ' },
  ];

  const handleNavClick = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EADFCF]'
          : 'bg-[#FAF8F5]/85 backdrop-blur-xs border-b border-[#EADFCF]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none cursor-pointer group"
          >
            <EduFamilyOfficeLogo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all relative cursor-pointer ${
                    isActive
                      ? 'text-[#0E3B2E] font-semibold bg-[#EFE9DD]'
                      : 'text-[#4A5851] hover:text-[#0E3B2E] hover:bg-[#F3EDE2]'
                  }`}
                >
                  <span className="font-serif-tc text-[15px]">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA & Replay Intro */}
          <div className="hidden lg:flex items-center gap-3">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                title="重播品牌開場動畫"
                className="p-2 rounded-xl text-[#526058] hover:text-[#0E3B2E] hover:bg-[#F3EDE2] transition cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-[#0E3B2E] hover:bg-[#164D3D] shadow-xs hover:shadow-md transition-all duration-200 border border-[#C5A059]/40 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#E5C687]" />
              <span className="font-serif-tc tracking-wider font-semibold">預約私人諮詢</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0E3B2E] border border-[#C5A059]/40"
            >
              預約諮詢
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0E3B2E] hover:bg-[#EFE9DD] transition cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EADFCF] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-serif-tc ${
                  currentSection === item.id
                    ? 'bg-[#EFE9DD] text-[#0E3B2E] font-bold'
                    : 'text-[#4A5851] hover:bg-[#F3EDE2]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-cinzel text-[#C5A059] uppercase tracking-wider">{item.enLabel}</span>
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl font-serif-tc font-bold text-white bg-[#0E3B2E] hover:bg-[#164D3D] shadow-md flex items-center justify-center gap-2 border border-[#C5A059]/40"
            >
              <Sparkles className="w-4 h-4 text-[#E5C687]" />
              <span>預約私人諮詢（專屬家辦會談）</span>
            </button>

            {onReplayIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                className="w-full py-2 rounded-xl text-xs font-serif-tc text-[#526058] hover:bg-[#F3EDE2] flex items-center justify-center gap-1.5"
              >
                <Play className="w-3 h-3" />
                <span>重播品牌開場動畫</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
