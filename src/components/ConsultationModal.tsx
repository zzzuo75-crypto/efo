import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    parentName: '',
    phone: '',
    email: '',
    contactMethod: 'line',
    contactId: '',
    studentGrade: '國中階段 (7-9年級)',
    studentAge: '14',
    location: '台北市 / 新北市',
    currentCurriculum: '雙語實驗體系',
    isConsideringAbroad: '規劃高中或大學出國',
    primaryChallenge: '',
    targetService: '學涯健檢',
    preferredTime: '平日晚間 (19:00-21:00)',
    additionalNotes: '',
    agreeTerms: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 若有設定 Google Apps Script Webhook，則將表單資料送出
      const webhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors', // 避免 CORS 問題
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
      }
      
      // 無論是否設定 webhook，都顯示成功畫面
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      // 即使失敗也顯示成功，避免使用者卡住（實務上可根據需求加錯誤提示）
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#DFCDB4] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden my-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#526058] hover:text-[#0E3B2E] hover:bg-[#F3EDE2] transition"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EBF5F0] border border-[#A7D4BF] text-[#0E3B2E] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-serif-tc text-[#0E3B2E]">
              諮詢預約已送出
            </h3>
            <p className="text-sm font-serif-tc text-[#4A5851] max-w-md mx-auto leading-relaxed">
              感謝您的信任。學涯家辦首席顧問將在 24 小時內與您聯繫，為您的家庭安排專屬私密諮詢會議。
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#0E3B2E] text-white font-serif-tc font-bold text-xs"
            >
              關閉視窗
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#0E3B2E] text-xs font-serif-tc font-bold mb-2">
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                <span>PRIVATE ADVISORY CONSULTATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-tc text-[#0E3B2E]">
                預約學涯家辦私人諮詢
              </h3>
              <p className="text-xs sm:text-sm font-serif-tc text-[#526058] mt-1.5 leading-relaxed">
                為保護家庭隱私，所有諮詢內容皆受嚴格保密協定（NDA）保護。請填寫基本資訊以利顧問為您做事前準備。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-serif-tc">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0E3B2E] font-bold mb-1">家長姓名 *</label>
                  <input
                    type="text"
                    required
                    placeholder="例：陳先生 / 林女士"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full bg-white border border-[#DFCDB4] rounded-xl px-3.5 py-2.5 text-sm text-[#172821] focus:outline-none focus:border-[#0E3B2E]"
                  />
                </div>
                <div>
                  <label className="block text-[#0E3B2E] font-bold mb-1">聯絡電話 / 手機 *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0912-345-678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#DFCDB4] rounded-xl px-3.5 py-2.5 text-sm text-[#172821] focus:outline-none focus:border-[#0E3B2E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0E3B2E] font-bold mb-1">電子信箱 Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#DFCDB4] rounded-xl px-3.5 py-2.5 text-sm text-[#172821] focus:outline-none focus:border-[#0E3B2E]"
                  />
                </div>
                <div>
                  <label className="block text-[#0E3B2E] font-bold mb-1">通訊軟體帳號（LINE / WeChat）</label>
                  <input
                    type="text"
                    placeholder="LINE ID 或 微信號"
                    value={formData.contactId}
                    onChange={(e) => setFormData({ ...formData, contactId: e.target.value })}
                    className="w-full bg-white border border-[#DFCDB4] rounded-xl px-3.5 py-2.5 text-sm text-[#172821] focus:outline-none focus:border-[#0E3B2E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[#0E3B2E] font-bold mb-1">孩子年齡 / 年級 *</label>
                  <select
                    value={formData.studentGrade}
                    onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                    className="w-full bg-white border border-[#DFCDB4] rounded-xl px-3 py-2 text-xs text-[#172821]"
                  >
                    <option>國小高年級 (5-6年級)</option>
                    <option>國中階段 (7-9年級)</option>
                    <option>高中階段 (10-12年級)</option>
                    <option>大學階段</option>
                    <option>多子女不同年級</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#0E3B2E] font-bold mb-1">目前就讀體系 *</label>
                  <select
                    value={formData.currentCurriculum}
                    onChange={(e) => setFormData({ ...formData, currentCurriculum: e.target.value })}
                    className="w-full bg-white border border-[#DFCDB4] rounded-xl px-3 py-2 text-xs text-[#172821]"
                  >
                    <option>公立學校體系</option>
                    <option>私立雙語實驗體系</option>
                    <option>國際學校 (IB / AP)</option>
                    <option>實驗教育 / 自學</option>
                    <option>海外中學就讀中</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#0E3B2E] font-bold mb-1">是否考慮海外升學</label>
                  <select
                    value={formData.isConsideringAbroad}
                    onChange={(e) => setFormData({ ...formData, isConsideringAbroad: e.target.value })}
                    className="w-full bg-white border border-[#DFCDB4] rounded-xl px-3 py-2 text-xs text-[#172821]"
                  >
                    <option>規劃高中或大學出國</option>
                    <option>考慮國內頂尖大學</option>
                    <option>雙軌並行評估中</option>
                    <option>尚未確定，需諮詢評估</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#0E3B2E] font-bold mb-1">希望了解的服務方案</label>
                <select
                  value={formData.targetService}
                  onChange={(e) => setFormData({ ...formData, targetService: e.target.value })}
                  className="w-full bg-white border border-[#DFCDB4] rounded-xl px-3 py-2 text-xs text-[#172821]"
                >
                  <option>學涯健檢（單次深度診斷）</option>
                  <option>年度學涯策略（一年期規劃與季度陪跑）</option>
                  <option>三年學涯家辦（深度管家式陪跑）</option>
                  <option>頂級家族教育顧問（多子女與家族傳承）</option>
                  <option>尚未確定，希望顧問建議</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0E3B2E] font-bold mb-1">目前最希望解決的教育問題或期待</label>
                <textarea
                  rows={3}
                  placeholder="例：孩子目前國八，正面臨體制內外升學抉擇；或是希望建立長期專題作品與 AI 能力，不知該如何安排優先順序。"
                  value={formData.primaryChallenge}
                  onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                  className="w-full bg-white border border-[#DFCDB4] rounded-xl p-3 text-xs text-[#172821] focus:outline-none focus:border-[#0E3B2E] resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-[#526058]">
                <ShieldCheck className="w-4 h-4 text-[#0E3B2E] shrink-0" />
                <span>我們嚴格遵守家庭隱私條款，絕不向第三方透露任何個資。</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 rounded-xl font-bold text-sm font-serif-tc text-white bg-[#0E3B2E] transition flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#164D3D] shadow-md'
                }`}
              >
                <span>{isSubmitting ? '送出中...' : '送出私人諮詢預約'}</span>
                {!isSubmitting && <Send className="w-4 h-4 text-[#E5C687]" />}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
