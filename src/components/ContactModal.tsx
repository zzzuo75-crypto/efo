import React, { useState } from 'react';
import { X, Send, CheckCircle2, PhoneCall } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'project' | 'exchange' | 'career';
  currentLang: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialType = 'project',
  currentLang
}) => {
  const [inquiryType, setInquiryType] = useState(initialType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    orgName: '',
    tokenTicker: '',
    targetVolume: '$1M - $5M / day',
    targetVenues: 'Binance, OKX, Bybit, Uniswap',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-slate-900">
              {currentLang === 'zh' ? '諮詢請求已成功送出' : 'Inquiry Submitted Successfully'}
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {currentLang === 'zh'
                ? '感謝您的洽詢。Aether Quant 機構造市負責人將在 2 小時內透過 Telegram 或電子郵件與您聯繫。'
                : 'Thank you for reaching out. Our institutional trading desk will get back to you via Telegram or Email within 2 hours.'}
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-widest uppercase mb-3">
                <PhoneCall className="w-3 h-3" />
                <span>INSTITUTIONAL CONSULTATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-slate-900">
                {currentLang === 'zh' ? '洽詢 Aether Quant 量化流動性' : 'Connect with Aether Quant'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {currentLang === 'zh'
                  ? '請填寫您的基本資訊，我們將為您的項目或交易所量身訂製造市策略與試算報告。'
                  : 'Submit your requirements to receive a customized algorithmic market making proposal and liquidity simulation.'}
              </p>
            </div>

            {/* Inquiry Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[
                { id: 'project', label: currentLang === 'zh' ? '項目方造市' : 'Crypto Project' },
                { id: 'exchange', label: currentLang === 'zh' ? '交易所對接' : 'Exchange Venue' },
                { id: 'career', label: currentLang === 'zh' ? '加入團隊' : 'Career / Quant' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setInquiryType(tab.id as any)}
                  className={`py-2 px-2 text-center text-xs font-bold rounded-xl transition ${
                    inquiryType === tab.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    {currentLang === 'zh' ? '姓名 / 職稱 *' : 'Your Name & Title *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Chen, Head of Growth"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    {currentLang === 'zh' ? '項目 / 交易所名稱 *' : 'Organization / Token Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Protocol ($APEX)"
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1">
                    {currentLang === 'zh' ? '公務電子信箱 *' : 'Work Email *'}
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
                    {currentLang === 'zh' ? 'Telegram 帳號 (即時溝通) *' : 'Telegram Handle (Primary) *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@alex_founder"
                    value={formData.telegram}
                    onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                  />
                </div>
              </div>

              {inquiryType === 'project' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1">
                      {currentLang === 'zh' ? '代幣符號 (Ticker)' : 'Token Ticker (if listed)'}
                    </label>
                    <input
                      type="text"
                      placeholder="$TICKER / Unreleased"
                      value={formData.tokenTicker}
                      onChange={(e) => setFormData({ ...formData, tokenTicker: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1">
                      {currentLang === 'zh' ? '目標 24h 交易量規模' : 'Target 24h Volume'}
                    </label>
                    <select
                      value={formData.targetVolume}
                      onChange={(e) => setFormData({ ...formData, targetVolume: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-xs"
                    >
                      <option>&lt; $1M / day</option>
                      <option>$1M - $5M / day</option>
                      <option>$5M - $20M / day</option>
                      <option>$20M+ / day (Institutional)</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1">
                  {currentLang === 'zh' ? '具體造市需求或備註' : 'Specific Requirements / Message'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    currentLang === 'zh'
                      ? '請敘述您的上幣時間表、目標交易所清單或流動性深度要求...'
                      : 'Provide details about your launch timeline, target listing venues, or order book depth requirements...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none shadow-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200 transition-all flex items-center justify-center gap-2"
                >
                  <span>{currentLang === 'zh' ? '確認送出洽詢' : 'SUBMIT INQUIRY & SCHEDULE CALL'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
