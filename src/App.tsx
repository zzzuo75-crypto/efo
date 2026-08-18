import React, { useState, useEffect } from 'react';
import { NavSection } from './types';
import { OpeningSequence } from './components/OpeningSequence';
import { Navbar } from './components/Navbar';
import { HomeStreamlined } from './components/HomeStreamlined';
import { ConceptAndApproach } from './components/ConceptAndApproach';
import { ServicesAndPlans } from './components/ServicesAndPlans';
import { InsightsAndArticles } from './components/InsightsAndArticles';
import { AboutAndTeam } from './components/AboutAndTeam';
import { FAQSection } from './components/FAQSection';
import { ClosingCtaSection } from './components/ClosingCtaSection';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { LegalPages } from './components/LegalPages';

export function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isPlayingIntro, setIsPlayingIntro] = useState(true);
  const [forcePlayIntro, setForcePlayIntro] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this session or prefers reduced motion
    const seen = sessionStorage.getItem('efo_intro_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen === 'true' || prefersReducedMotion) {
      setIsPlayingIntro(false);
    }
  }, []);

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayIntro = () => {
    setForcePlayIntro(true);
    setIsPlayingIntro(true);
    setCurrentSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIntroComplete = () => {
    setIsPlayingIntro(false);
    setForcePlayIntro(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#172821] flex flex-col font-sans selection:bg-[#EAE0D0] selection:text-[#0E3B2E]">
      {/* Brand Opening Sequence Animation */}
      {isPlayingIntro && (
        <OpeningSequence
          onComplete={handleIntroComplete}
          forcePlay={forcePlayIntro}
        />
      )}

      {/* Navigation Bar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentSection === 'home' && (
          <HomeStreamlined
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onExploreApproach={() => handleNavigate('approach')}
          />
        )}

        {currentSection === 'approach' && (
          <div className="pt-28 pb-12">
            <ConceptAndApproach
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
            <ClosingCtaSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {currentSection === 'services' && (
          <div className="pt-28 pb-12">
            <ServicesAndPlans
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
            <ClosingCtaSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {currentSection === 'insights' && (
          <div className="pt-28 pb-12">
            <InsightsAndArticles
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
            <ClosingCtaSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {currentSection === 'about' && (
          <div className="pt-28 pb-12">
            <AboutAndTeam />
            <ClosingCtaSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {currentSection === 'faq' && (
          <div className="pt-28 pb-12">
            <FAQSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
            <ClosingCtaSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {['privacy', 'terms', 'independence'].includes(currentSection) && (
          <LegalPages 
            page={currentSection as 'privacy' | 'terms' | 'independence'} 
            onBack={() => handleNavigate('home')} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Booking / Private Advisory Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

export default App;
