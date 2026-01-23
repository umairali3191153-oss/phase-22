
'use client';

import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import UseCases from '../components/UseCases';
import HowItWorks from '../components/HowItWorks';
import Automation from '../components/Automation';
import Analytics from '../components/Analytics';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
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
