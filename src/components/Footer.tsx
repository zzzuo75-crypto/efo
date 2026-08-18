import React from 'react';
import { EduFamilyOfficeLogo } from './EduFamilyOfficeLogo';
import { NavSection } from '../types';
import { Shield, Sparkles, MapPin, Mail, Phone, Lock, Play } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation, onReplayIntro }) => {
  return (
    <footer className="bg-[#0E3B2E] text-white border-t border-[#C5A059]/30 pt-16 pb-12 font-serif-tc">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <EduFamilyOfficeLogo theme="dark" size="lg" />
            <p className="text-xs text-[#D1DDD6] leading-relaxed max-w-sm pt-2">
              為重視教育的家庭，打造孩子未來 3、5、10 年以上的學涯策略。
              讓教育投入從分散消費，轉化為可持續累積的終身資產。
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E5C687] pt-2">
              <Lock className="w-3.5 h-3.5" />
              <span>獨立中立第三方智囊 • 恪守家庭隱私保密</span>
            </div>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <div className="font-bold text-[#E5C687] tracking-wider text-sm mb-2">快速導覽</div>
            <ul className="space-y-2 text-[#D1DDD6]">
              <li>
                <button onClick={() => onNavigate('approach')} className="hover:text-white transition cursor-pointer">
                  教育方法（Our Approach）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition cursor-pointer">
                  核心服務與方案（Services & Plans）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-white transition cursor-pointer">
                  學涯專題洞察（Insights）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition cursor-pointer">
                  關於學涯家辦（About Us）
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition cursor-pointer">
                  常見問題解答（FAQ）
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Replay Col */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <div className="font-bold text-[#E5C687] tracking-wider text-sm mb-2">私人諮詢預約</div>
            <p className="text-[#D1DDD6] leading-relaxed">
              學涯家辦採嚴格預約制。每季開放有限名額進行深度家庭訪談與學涯健檢。
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-xl bg-[#C5A059] text-[#0E3B2E] font-bold text-xs hover:bg-[#E5C687] transition inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>預約專屬諮詢</span>
              </button>

              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="px-4 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/15 border border-white/20 text-xs transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3 text-[#E5C687]" />
                  <span>重播開場</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A3B8AD] gap-4">
          <div>
            © {new Date().getFullYear()} 學涯家辦 Edu Family Office. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition cursor-pointer">
              隱私政策
            </button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition cursor-pointer">
              服務條款
            </button>
            <button onClick={() => onNavigate('independence')} className="hover:text-white transition cursor-pointer">
              非中介獨立性聲明
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
