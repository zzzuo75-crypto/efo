import React, { useState } from 'react';
import { OPEN_POSITIONS } from '../data/marketData';
import { Users, ArrowRight, Briefcase, MapPin, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';

interface CareersSectionProps {
  onOpenContact: (type?: 'career') => void;
  currentLang: string;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onOpenContact, currentLang }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const departments = ['All', 'Quant Research', 'Engineering', 'Trading Ops', 'Strategy & Growth'];

  const filteredJobs = selectedDept === 'All'
    ? OPEN_POSITIONS
    : OPEN_POSITIONS.filter(j => j.department === selectedDept);

  return (
    <section id="careers" className="relative py-28 bg-slate-50/70 border-t border-slate-100 overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Title */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>{currentLang === 'zh' ? '人才招募' : 'WE ARE HIRING'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] text-slate-900 tracking-tight leading-tight mb-6">
              {currentLang === 'zh' ? (
                <>
                  加入 <span className="text-blue-600">Aether Quant</span><br />
                  量化團隊
                </>
              ) : (
                <>
                  Join <span className="text-blue-600">Aether Quant</span><br />
                  Team
                </>
              )}
            </h2>

            <div className="flex flex-wrap gap-3 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Zurich • Singapore • London • Remote</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Top-tier Tier-1 Compensation & Bonus</span>
              </div>
            </div>
          </div>

          {/* Right Description matching the image */}
          <div className="lg:col-span-7">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              {currentLang === 'zh' ? (
                <>
                  加入由創新者、解決問題專家與當責者組成的全球社群，運用嚴謹的科學探索方法，讓加密貨幣市場變得更加高效透明。
                  如同我們的名字——Aether Quant Team，我們是一支卓越的團隊。每個成員都是各自領域的頂尖專家，對世界充滿好奇心，熱衷於攻克加密市場中最具挑戰性的量化問題。
                </>
              ) : (
                <>
                  Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone. As we emphasize it in our name – Aether Quant Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!
                </>
              )}
            </p>

            <button
              onClick={() => onOpenContact('career')}
              className="group inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 font-mono tracking-wider transition-colors"
            >
              <span>{currentLang === 'zh' ? '投遞履歷或自薦 →' : 'Apply or Submit Open Application →'}</span>
            </button>
          </div>

        </div>

        {/* Interactive Open Roles Directory */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-slate-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span>{currentLang === 'zh' ? '目前開放職缺 (4 個職位)' : 'Open Positions (4 roles)'}</span>
            </h3>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-1.5">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    selectedDept === dept
                      ? 'bg-blue-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings List */}
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div
                  key={job.id}
                  className="rounded-2xl bg-slate-50/60 border border-slate-200/70 overflow-hidden transition-all hover:border-blue-200"
                >
                  <div
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                          {job.department}
                        </span>
                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          • {job.type}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 font-['Space_Grotesk']">
                        {job.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenContact('career');
                        }}
                        className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition"
                      >
                        {currentLang === 'zh' ? '應徵' : 'Apply'}
                      </button>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded job details */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-slate-200/60 bg-white">
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="mb-5">
                        <div className="text-xs font-bold font-mono text-blue-700 uppercase mb-2">
                          Key Requirements:
                        </div>
                        <ul className="space-y-1.5">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => onOpenContact('career')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-blue-600 hover:text-blue-700 uppercase"
                      >
                        <span>Submit Application with Resume →</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
