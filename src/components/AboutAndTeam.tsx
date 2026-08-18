import React from 'react';
import { ADVISORY_PRINCIPLES, TEAM_NETWORK, PHILOSOPHY_POINTS } from '../data/eduData';
import { EduTreeMark } from './EduFamilyOfficeLogo';
import { ShieldCheck, CheckCircle2, Award, Users } from 'lucide-react';

export const AboutAndTeam: React.FC = () => {
  return (
    <div className="space-y-24 py-12">
      {/* 1. Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#DFCDB4] p-8 sm:p-12 shadow-lux relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-4">
                <span>✦ 品牌起源 ✦</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-6">
                將家族辦公室長期管理資產的思維<br />
                帶入孩子的教育與學涯規劃
              </h2>
              <div className="space-y-4 text-sm sm:text-base font-serif-tc text-[#4A5851] leading-relaxed">
                <p>
                  在現代社會中，高淨值家庭對於家族財富的管理往往具備長達數十年的戰略眼光；然而，面對家族最重要的傳承基石——「孩子的教育」，卻往往陷入零散、被動與焦慮的跟風應試中。
                </p>
                <p>
                  學涯家辦（Edu Family Office）應運而生。我們整合了頂尖教育戰略家、跨領域學術導師與青少年心理專家，跳脫傳統培訓機構「賣課、補習、仲介代辦」的商業模式，轉而以「家庭私人學涯智囊」的角色，陪伴家庭以 3、5、10 年的宏觀尺度，為孩子建立可持續累積的核心競爭力與未來的廣闊選擇權。
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E0D2] flex flex-col items-center text-center">
                <EduTreeMark size={140} />
                <div className="mt-4 text-lg font-bold font-serif-tc text-[#0E3B2E]">學涯家辦</div>
                <div className="text-xs font-cinzel text-[#C5A059] uppercase tracking-widest">Edu Family Office</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Advisory Principles (8 Commitments) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
            <span>✦ 專業顧問原則 ✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
            專業，比承諾更重要
          </h2>
          <p className="text-base text-[#4A5851] font-serif-tc">
            我們恪守獨立中立的八大專業承諾，永遠以孩子的長遠發展為最高準則
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADVISORY_PRINCIPLES.map((principle, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-[#E8E0D2] shadow-xs">
              <div className="text-xs font-cinzel text-[#C5A059] font-bold mb-1">PRINCIPLE 0{idx + 1}</div>
              <h3 className="text-base font-bold font-serif-tc text-[#0E3B2E] mb-2">{principle.title}</h3>
              <p className="text-xs text-[#526058] font-serif-tc leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Expert Network Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-semibold mb-3">
            <span>✦ 跨領域顧問網絡 ✦</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-tc text-[#0E3B2E] mb-4">
            專業團隊架構
          </h2>
          <p className="text-base text-[#4A5851] font-serif-tc">
            由核心學涯戰略顧問主導，彈性調動各領域頂尖學者與導師資源
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM_NETWORK.map((team, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#E8E0D2] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F3EDE2] text-[#0E3B2E] flex items-center justify-center font-bold text-sm shrink-0 font-serif-tc">
                0{idx + 1}
              </div>
              <div>
                <h4 className="text-base font-bold font-serif-tc text-[#0E3B2E]">{team.role}</h4>
                <div className="text-xs font-cinzel text-[#C5A059] uppercase tracking-wider mb-2">{team.enRole}</div>
                <p className="text-xs text-[#526058] font-serif-tc leading-relaxed">{team.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
