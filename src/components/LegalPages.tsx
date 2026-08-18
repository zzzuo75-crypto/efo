import React, { ReactNode } from 'react';

export type LegalPageType =
  | 'privacy'
  | 'terms'
  | 'independence';

interface LegalPagesProps {
  page: LegalPageType;
  onBack?: () => void;
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="border-t border-[#D8D1C5] pt-8">
      <h2 className="mb-4 font-serif text-xl font-medium text-[#0E3B2E] md:text-2xl">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-8 text-[#46524D] md:text-base">
        {children}
      </div>
    </section>
  );
}

function OrderedList({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal space-y-2 pl-6 marker:text-[#9A7B50]">
      {children}
    </ol>
  );
}

/* =========================================================
   隱私政策
   ========================================================= */

function PrivacyPolicy() {
  return (
    <>
      <Section title="一、適用範圍">
        <p>
          本政策適用於您瀏覽本網站、填寫諮詢表單、訂閱內容、
          聯繫我們，或使用本平台所提供之教育策略與顧問服務時，
          所涉及的個人資料蒐集、處理及利用。
        </p>

        <p>
          第三方網站、社群平台或外部服務所蒐集的資料，
          則依該第三方的隱私政策辦理。
        </p>
      </Section>

      <Section title="二、可能蒐集的資料">
        <OrderedList>
          <li>姓名、電子郵件、電話及所在城市等基本聯絡資料。</li>
          <li>學生年齡、就讀階段、教育目標及家庭關注事項。</li>
          <li>諮詢內容、會議紀錄、需求評估與服務進度。</li>
          <li>瀏覽器、裝置、IP 位址、瀏覽頁面及 Cookie 紀錄。</li>
          <li>其他由您主動提供，且與服務目的相關的資料。</li>
        </OrderedList>

        <p>
          請勿透過一般網站表單傳送身分證、護照、健康紀錄、
          財務資料或其他高度敏感資訊。如服務確有需要，
          我們將另行說明安全的提供方式及使用目的。
        </p>

        <p>
          如資料涉及未成年學生，應由其父母、法定代理人，
          或經合法授權之人提供或同意提供。
        </p>
      </Section>

      <Section title="三、資料使用目的">
        <OrderedList>
          <li>回覆詢問及安排私人諮詢。</li>
          <li>了解家庭需求並提供教育策略及學涯規劃服務。</li>
          <li>管理服務流程、會議紀錄及後續聯繫。</li>
          <li>寄送經您同意接收的文章、活動或服務資訊。</li>
          <li>改善網站內容、使用體驗及資訊安全。</li>
          <li>處理付款、帳務、契約及依法應保存的紀錄。</li>
          <li>履行法律義務或處理爭議。</li>
        </OrderedList>

        <p>
          我們僅在特定目的所必要的合理範圍內使用資料，
          不會任意出售或交換您的個人資料。
        </p>
      </Section>

      <Section title="四、資料分享與委外服務">
        <p>
          為提供網站及顧問服務，我們可能使用網站代管、表單、
          電子郵件、預約、雲端儲存、網站分析或付款等第三方服務。
        </p>

        <p>
          除取得您的同意、履行服務所必要，或法律另有規定外，
          我們不會向無關第三方揭露您的個人資料。
        </p>
      </Section>

      <Section title="五、Cookie 與網站分析">
        <p>
          本網站可能使用 Cookie 或類似技術，以維持網站功能、
          記錄使用偏好、了解網站流量及改善使用體驗。
        </p>

        <p>
          您可以透過瀏覽器設定限制或刪除 Cookie，
          但部分網站功能可能因此無法正常運作。
        </p>
      </Section>

      <Section title="六、資料保存與安全">
        <p>
          我們僅於提供服務、履行契約、處理帳務，
          或遵守法律所必要的期間內保存資料。
        </p>

        <p>
          我們會採取合理的技術及管理措施保護資料，
          但任何網路傳輸或電子儲存方式均無法保證絕對安全。
        </p>
      </Section>

      <Section title="七、您的權利">
        <p>依適用法令，您可以提出下列請求：</p>

        <OrderedList>
          <li>查詢、閱覽或請求製給複製本。</li>
          <li>請求補充或更正資料。</li>
          <li>請求停止蒐集、處理或利用。</li>
          <li>請求刪除個人資料。</li>
          <li>撤回已作出的行銷訊息同意。</li>
        </OrderedList>

        <p>
          如因法律、契約履行、帳務保存或權利主張所必要，
          我們可能無法立即刪除部分資料，並會向您說明理由。
        </p>
      </Section>

      <Section title="八、政策更新">
        <p>
          我們可能因服務、技術或法令變動修訂本政策。
          更新版本將公布於本網站，並標示最後更新日期。
        </p>
      </Section>

      <ContactInformation />
    </>
  );
}

/* =========================================================
   服務條款
   ========================================================= */

function TermsOfService() {
  return (
    <>
      <Section title="一、服務性質">
        <p>
          本平台提供教育策略、學涯規劃、家庭教育決策、
          學生發展、資源研究及顧問陪伴等服務。
        </p>

        <p>
          網站中的文章、工具與一般資訊僅供教育及參考用途，
          不構成法律、醫療、心理治療、財務投資或其他專業意見。
        </p>
      </Section>

      <Section title="二、個別顧問服務">
        <p>
          付費服務的範圍、期間、費用、付款方式、交付內容、
          取消及退費條件，以雙方另行確認的服務方案、
          報價單或書面契約為準。
        </p>

        <p>
          如個別契約與本網站條款不一致，
          原則上以個別契約的約定為優先。
        </p>
      </Section>

      <Section title="三、使用者責任">
        <OrderedList>
          <li>提供真實、完整且有權提供的資料。</li>
          <li>依約參與會議並完成必要事項。</li>
          <li>不得冒用他人身分或侵害他人隱私。</li>
          <li>不得非法干擾、破壞或存取本網站。</li>
          <li>涉及未成年學生時，應取得法定代理人的同意。</li>
        </OrderedList>
      </Section>

      <Section title="四、成果與非保證事項">
        <p>
          教育與學涯發展受到學生投入、家庭決策、個人條件、
          學校政策及外部環境等多項因素影響。
        </p>

        <p>除書面契約另有明確約定外，本平台不保證：</p>

        <OrderedList>
          <li>錄取特定學校、科系或教育計畫。</li>
          <li>取得獎學金、簽證、住宿或其他資格。</li>
          <li>達成特定成績、排名或職涯結果。</li>
          <li>第三方機構作出特定決定。</li>
        </OrderedList>

        <p>
          我們將以合理的專業注意與誠信提供服務，
          但顧問分析及建議不等同結果保證。
          最終決策仍由使用者及其家庭作出。
        </p>
      </Section>

      <Section title="五、費用、取消與退費">
        <p>
          實際費用、付款時程、改期、取消及退費方式，
          以使用者選擇的服務方案或個別契約為準。
        </p>

        <p>
          本條款不排除使用者依消費者保護法或其他適用法令
          所享有的權利。
        </p>
      </Section>

      <Section title="六、智慧財產權">
        <p>
          本網站的文字、圖像、品牌識別、顧問方法、表格、
          報告與教材，除另有標示外，均由本平台或合法權利人持有。
        </p>

        <p>
          未經書面同意，不得重製、公開傳輸、改作、轉售、
          散布或用於商業用途。
        </p>

        <p>
          使用者得於個人及家庭教育規劃的合理範圍內，
          使用付費服務所取得的資料。
        </p>
      </Section>

      <Section title="七、第三方資訊與連結">
        <p>
          本平台可能提供學校、教育機構、活動或其他第三方資源資訊。
          相關資格、費用、期限及內容，應以第三方最新公告為準。
        </p>

        <p>
          提供相關資訊或連結，不代表本平台為該機構背書、
          代理或保證其服務。
        </p>
      </Section>

      <Section title="八、服務調整與中止">
        <p>
          基於維護、安全、法令、不可抗力或服務調整需要，
          本平台可能暫停或變更部分網站功能。
        </p>

        <p>
          如變更涉及已付費且尚未完成的服務，
          將依個別契約及適用法令處理。
        </p>
      </Section>

      <Section title="九、責任範圍">
        <p>
          任何責任限制均以適用法律允許的範圍為限。
          本條款不排除因故意、重大過失、違反法定義務，
          或依法不得預先免除的責任。
        </p>

        <p>
          使用者根據網站一般資訊作出重要決策前，
          宜同時查證學校、政府機關或相關專業人士的正式資訊。
        </p>
      </Section>

      <Section title="十、準據法與爭議處理">
        <p>本條款原則上以中華民國法律為準據法。</p>

        <p>
          如發生爭議，雙方應先以誠信方式協商；
          協商不成時，依適用法律及管轄規定處理。
        </p>
      </Section>

      <ContactInformation />
    </>
  );
}

/* =========================================================
   非中介獨立性聲明
   ========================================================= */

function IndependenceStatement() {
  return (
    <>
      <div className="rounded-sm border border-[#D8D1C5] bg-white/50 p-6 leading-8 text-[#354740] md:p-8">
        <p>
          學涯家辦 Edu Family Office 是以家庭長期利益為核心的
          獨立教育策略顧問服務。
        </p>

        <p className="mt-4">
          除雙方另有明確書面約定外，我們並非學校、補習班、
          留學代辦、招生代理、簽證代辦、人力仲介或其他教育機構的代表，
          亦無權代表任何第三方作出錄取、資格認定或結果承諾。
        </p>
      </div>

      <Section title="一、顧問立場">
        <p>
          我們的分析與建議，以學生的長期發展、家庭目標、
          實際需求及可用資源為主要考量，不以推銷特定學校、
          課程、產品或機構為服務目的。
        </p>
      </Section>

      <Section title="二、不介入最終決策">
        <p>
          學校錄取、獎學金、簽證、測驗、住宿及其他資格，
          均由相關學校、政府機關或第三方機構獨立審核與決定。
        </p>

        <p>
          本平台提供的策略分析、資訊整理與申請準備建議，
          不代表或保證任何第三方將作出特定結果。
        </p>

        <p>最終教育選擇及申請決定，仍由學生及其家庭作出。</p>
      </Section>

      <Section title="三、第三方資源推薦">
        <p>
          如顧問服務中提及學校、課程、活動、測評、
          專業人士或其他外部資源，係基於當時可取得的資訊
          與家庭需求進行評估。
        </p>

        <p>
          此類推薦不代表本平台與該第三方存在代理、僱傭、
          合夥或背書關係。
        </p>

        <p>
          使用者應自行確認第三方的最新資格、費用、條件、
          服務品質及契約內容。
        </p>
      </Section>

      <Section title="四、利益關係揭露">
        <p>
          如本平台與受推薦的第三方存在合作、轉介費、佣金、
          贊助或其他可能影響獨立判斷的利益關係，
          我們將於提出建議前向家庭揭露。
        </p>

        <p>未經揭露的商業利益，不應成為教育建議的依據。</p>
      </Section>

      <Section title="五、另行委任事項">
        <p>
          如家庭另行委託本平台處理申請文件、聯繫機構，
          或其他具有代理性質的事項，服務範圍、權限、費用、
          責任及終止方式，應另以書面契約明確約定。
        </p>

        <p>
          在未取得書面授權前，本平台不會以使用者、
          學生或其家庭的名義向第三方作出承諾。
        </p>
      </Section>

      <blockquote className="border-l-2 border-[#A58A62] pl-6 font-serif text-lg leading-9 text-[#0E3B2E] md:text-xl">
        教育顧問的價值不在於替家庭決定，而在於協助家庭看清選項、
        理解取捨，並作出符合長期目標的選擇。
      </blockquote>
    </>
  );
}

/* =========================================================
   共用聯絡資訊
   ========================================================= */

function ContactInformation() {
  return (
    <Section title="聯絡方式">
      <address className="not-italic">
        <p>營運主體：[請填寫公司或工作室名稱]</p>
        <p>
          電子郵件：
          <a
            href="mailto:your-email@example.com"
            className="ml-1 text-[#0E3B2E] underline decoration-[#A58A62] underline-offset-4"
          >
            your-email@example.com
          </a>
        </p>
        <p>營業地址：[請填寫地址，如適用]</p>
      </address>
    </Section>
  );
}

/* =========================================================
   頁面主要元件
   ========================================================= */

const pageMeta: Record<
  LegalPageType,
  {
    eyebrow: string;
    title: string;
    englishTitle: string;
    description: string;
  }
> = {
  privacy: {
    eyebrow: 'PRIVACY',
    title: '隱私政策',
    englishTitle: 'Privacy Policy',
    description: '說明我們如何蒐集、使用、保存及保護您的個人資料。',
  },

  terms: {
    eyebrow: 'TERMS',
    title: '服務條款',
    englishTitle: 'Terms of Service',
    description: '說明網站及教育顧問服務的使用原則與雙方權利義務。',
  },

  independence: {
    eyebrow: 'INDEPENDENCE',
    title: '非中介獨立性聲明',
    englishTitle: 'Independence & Non-Intermediary Statement',
    description: '說明學涯家辦的獨立顧問定位、服務界線及利益揭露原則。',
  },
};

export function LegalPages({ page, onBack }: LegalPagesProps) {
  const meta = pageMeta[page];

  return (
    <article className="min-h-screen bg-[#FAF8F5] px-6 pb-24 pt-32 text-[#172821] md:px-10 md:pt-40">
      <div className="mx-auto max-w-3xl">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="mb-12 text-sm tracking-[0.12em] text-[#53625C] transition-colors hover:text-[#0E3B2E]"
          >
            ← 返回網站
          </button>
        )}

        <header className="mb-16 border-b border-[#D8D1C5] pb-12">
          <p className="mb-5 text-xs font-medium tracking-[0.24em] text-[#9A7B50]">
            {meta.eyebrow}
          </p>

          <h1 className="font-serif text-4xl font-medium tracking-tight text-[#0E3B2E] md:text-5xl">
            {meta.title}
          </h1>

          <p className="mt-3 font-serif text-lg text-[#7C877F]">
            {meta.englishTitle}
          </p>

          <p className="mt-8 max-w-2xl leading-8 text-[#53625C]">
            {meta.description}
          </p>

          <p className="mt-6 text-sm text-[#7C877F]">
            最後更新日期：2026 年 8 月 16 日
          </p>
        </header>

        <div className="space-y-12">
          {page === 'privacy' && <PrivacyPolicy />}
          {page === 'terms' && <TermsOfService />}
          {page === 'independence' && <IndependenceStatement />}
        </div>
      </div>
    </article>
  );
}
