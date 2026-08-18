import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, PhoneCall } from 'lucide-react';

interface ContactSectionProps {
  onOpenContact: (type?: 'project' | 'exchange' | 'career') => void;
  currentLang: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact, currentLang }) => {
  const [inquiryType, setInquiryType] = useState<'project' | 'exchange' | 'career' | 'institutional'>('project');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    projectName: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', telegram: '', projectName: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 bg-slate-50/70 border-t border-slate-100 overflow-hidden">
      {/* Background soft ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Contact Container */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 md:p-16 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Matching Screenshot */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{currentLang === 'zh' ? '建立長期合作' : 'START A CONVERSATION'}</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] text-slate-900 tracking-tight mb-6">
                {currentLang === 'zh' ? '聯繫我們' : 'Contact Us'}
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {currentLang === 'zh' ? (
                  <>
                    我們隨時歡迎討論創造長期價值的新型合作夥伴關係。
                    無論您是尋求造市與深度流動性的加密項目方或交易所、希望共同提升市場效率的量化交易員或軟體工程師，或是擁有迫不及待想與我們分享的創新構想，請隨時與我們取得聯繫！
                  </>
                ) : (
                  <>
                    We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity, an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can't wait to share with us!
                  </>
                )}
              </p>

              {/* Direct channels */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-mono">INSTITUTIONAL DESK</div>
                    <div className="font-semibold text-slate-900">partnerships@aetherquant.io</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-mono">24/7 TELEGRAM DESK</div>
                    <div className="font-semibold text-blue-600">@AetherQuant_Institutional</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-6 bg-slate-50/60 rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900">
                    {currentLang === 'zh' ? '諮詢需求已送出！' : 'Inquiry Received!'}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {currentLang === 'zh' 
                      ? '我們的量化流動性團隊將在 2 小時內透過 Telegram 或 Email 與您聯繫。'
                      : 'Our institutional market making desk will contact you via Telegram or Email within 2 hours.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry Type Chips */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                      {currentLang === 'zh' ? '諮詢類型' : 'Inquiry Category'}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'project', label: currentLang === 'zh' ? '加密項目方' : 'Crypto Project' },
                        { id: 'exchange', label: currentLang === 'zh' ? '交易所對接' : 'Exchange Venue' },
                        { id: 'career', label: currentLang === 'zh' ? '人才求職' : 'Career / Quant' },
                        { id: 'institutional', label: currentLang === 'zh' ? '其他合作' : 'Other Inquiries' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setInquiryType(tab.id as any)}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold transition ${
                            inquiryType === tab.id
                              ? 'bg-blue-600 text-white shadow-xs'
                              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 mb-1">
                        {currentLang === 'zh' ? '您的姓名' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 mb-1">
                        {currentLang === 'zh' ? '公司 / 項目名稱' : 'Project / Company *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Protocol"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 mb-1">
                        {currentLang === 'zh' ? '電子郵件' : 'Work Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@protocol.io"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 mb-1">
                        {currentLang === 'zh' ? 'Telegram 或 Discord' : 'Telegram Handle *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="@alex_crypto"
                        value={formData.telegram}
                        onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1">
                      {currentLang === 'zh' ? '流動性需求簡述' : 'Message / Liquidity Requirements'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={
                        inquiryType === 'project'
                          ? 'Token ticker, target listing exchanges, target volume...'
                          : 'Please specify your exchange API capabilities or inquiry details...'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
                  >
                    <span>{currentLang === 'zh' ? '送出諮詢 (即刻排程通話)' : 'SUBMIT INQUIRY (SCHEDULE CALL)'}</span>
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="text-center text-[11px] text-slate-500">
                    🔒 Non-Disclosure Guarantee • Strict Institutional Confidentiality
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
