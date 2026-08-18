export type NavSection = 'home' | 'approach' | 'services' | 'insights' | 'about' | 'faq' | 'consultation' | 'privacy' | 'terms' | 'independence';

export interface EducationAsset {
  id: string;
  name: string;
  enName: string;
  tagline: string;
  description: string;
  examples: string[];
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  enTitle: string;
  quote: string;
  source: string;
  summary: string;
  details: string[];
  deliverables?: string[];
  iconName: string;
}

export interface EngagementPlan {
  id: string;
  name: string;
  enName: string;
  tagline: string;
  highlight?: boolean;
  features: string[];
  suitableFor: string;
  badge?: string;
}

export interface WorkStep {
  step: number;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface Deliverable {
  title: string;
  enTitle: string;
  description: string;
  bullets: string[];
  iconName: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  categoryEn: string;
  title: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  takeaways: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'concept' | 'service' | 'comparison' | 'process';
}

export interface ConsultationFormData {
  parentName: string;
  phone: string;
  email: string;
  contactMethod: 'line' | 'wechat' | 'phone' | 'email';
  contactId: string;
  studentGrade: string;
  studentAge: string;
  location: string;
  currentCurriculum: string;
  isConsideringAbroad: string;
  primaryChallenge: string;
  targetService: string;
  preferredTime: string;
  additionalNotes: string;
  agreeTerms: boolean;
}
