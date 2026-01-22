
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VantaBackground from './components/VantaBackground';
import { VantaEffect } from './types';

// Page Components
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Showcase from './components/Showcase';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Automation from './components/Automation';
import Analytics from './components/Analytics';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

// Dedicated Page Views
import ContactPage from './pages/ContactPage';
import FeaturesDetailedPage from './pages/FeaturesDetailedPage';
import PricingDetailedPage from './pages/PricingDetailedPage';
import LegalPage from './pages/LegalPage';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');
  const [activeEffect, setActiveEffect] = useState<VantaEffect>(VantaEffect.CLOUDS);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const navigate = (hash: string) => {
    window.location.hash = hash;
    setCurrentHash(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const isLanding = currentHash === '#' || currentHash === '' || currentHash === '#home';

    if (isLanding) {
      // Precise Section Mapping
      const sectionConfigs = [
        { id: 'hero', effect: VantaEffect.CLOUDS },
        { id: 'social-proof', effect: VantaEffect.FOG },
        { id: 'features', effect: VantaEffect.NET },
        { id: 'showcase', effect: VantaEffect.NONE },       // Disabled as requested
        { id: 'use-cases', effect: VantaEffect.TOPOLOGY },
        { id: 'how-it-works', effect: VantaEffect.WAVES },
        { id: 'automation', effect: VantaEffect.FOG },
        { id: 'analytics', effect: VantaEffect.DOTS },
        { id: 'testimonials', effect: VantaEffect.NONE },    // Disabled as requested
        { id: 'pricing', effect: VantaEffect.NET },
        { id: 'faq', effect: VantaEffect.DOTS },
        { id: 'final-cta', effect: VantaEffect.CLOUDS }
      ];

      sectionConfigs.forEach((config) => {
        ScrollTrigger.create({
          trigger: `#${config.id}`,
          start: "top 95%", // Immediate switch
          onEnter: () => setActiveEffect(config.effect),
          onEnterBack: () => setActiveEffect(config.effect),
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, [currentHash, isDarkMode]);

  const renderContent = () => {
    switch (currentHash) {
      case '#features': return <FeaturesDetailedPage />;
      case '#pricing': return <PricingDetailedPage />;
      case '#contact': return <ContactPage />;
      case '#privacy': return <LegalPage title="Privacy Policy" />;
      case '#terms': return <LegalPage title="Terms of Service" />;
      case '#gdpr': return <LegalPage title="GDPR Compliance" />;
      default:
        return (
          <>
            <Hero />
            <SocialProof />
            <Features />
            <Showcase />
            <UseCases />
            <HowItWorks />
            <Automation />
            <Analytics />
            <Testimonials />
            <Pricing />
            <FAQ />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div className={`relative overflow-x-hidden selection:bg-[#25D366] selection:text-white min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-[#0f172a] text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <VantaBackground 
          key={`${activeEffect}-${isDarkMode}`}
          effect={activeEffect} 
          isActive={true} 
          scrollProgress={0} 
          isDarkMode={isDarkMode}
        />
      </div>

      <Header onNavigate={navigate} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="relative z-10">{renderContent()}</main>
      <Footer onNavigate={navigate} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
