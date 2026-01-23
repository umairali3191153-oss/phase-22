'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VantaBackground from '../components/VantaBackground';
import { VantaEffect, SectionConfig } from '../types/index';
import '../globals.css';

const SECTIONS: SectionConfig[] = [
  { id: 'hero', effect: VantaEffect.CLOUDS },
  { id: 'social-proof', effect: VantaEffect.FOG },
  { id: 'features', effect: VantaEffect.NET },
  { id: 'showcase', effect: VantaEffect.NONE },
  { id: 'use-cases', effect: VantaEffect.TOPOLOGY },
  { id: 'how-it-works', effect: VantaEffect.WAVES },
  { id: 'automation', effect: VantaEffect.FOG },
  { id: 'analytics', effect: VantaEffect.DOTS },
  { id: 'testimonials', effect: VantaEffect.NONE },
  { id: 'pricing', effect: VantaEffect.NET },
  { id: 'faq', effect: VantaEffect.DOTS },
  { id: 'final-cta', effect: VantaEffect.CLOUDS }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeEffect, setActiveEffect] = useState<VantaEffect>(VantaEffect.CLOUDS);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const scrollTriggerRef = useRef<any[]>([]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  useEffect(() => {
    // Only run ScrollTrigger logic on the home page
    if (pathname !== '/' && pathname !== null) {
      setActiveEffect(VantaEffect.FOG);
      return;
    }

    const initTriggers = () => {
      // @ts-ignore
      const gsap = window.gsap;
      // @ts-ignore
      const ScrollTrigger = window.ScrollTrigger;
      
      if (!gsap || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger);

      // Clean up old triggers
      scrollTriggerRef.current.forEach(t => t.kill());
      scrollTriggerRef.current = [];

      scrollTriggerRef.current = SECTIONS.map((section) => {
        return ScrollTrigger.create({
          trigger: `#${section.id}`,
          start: "top 85%",
          onEnter: () => setActiveEffect(section.effect),
          onEnterBack: () => setActiveEffect(section.effect),
        });
      });
    };

    // Small delay to ensure DOM is ready and scripts are parsed
    const timer = setTimeout(initTriggers, 500);
    return () => {
      clearTimeout(timer);
      scrollTriggerRef.current.forEach(t => t.kill());
    };
  }, [pathname]);

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <head>
        <title>WABA by SYNQUE - WhatsApp Business API Platform</title>
        <meta name="description" content="Enterprise-grade WhatsApp Business API platform." />
      </head>
      <body className={`relative min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#0f172a] text-white' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Core Libraries - Ordered for dependencies */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js" strategy="beforeInteractive" />
        
        {/* Vanta Effects - Load after Three.js */}
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js" strategy="afterInteractive" />
        
        {/* GSAP */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />

        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-inherit">
          <VantaBackground effect={activeEffect} isDarkMode={isDarkMode} />
        </div>

        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <main className="relative z-10 w-full">
          {children}
        </main>

        <Footer isDarkMode={isDarkMode} />
      </body>
    </html>
  );
}