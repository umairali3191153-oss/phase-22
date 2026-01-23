
'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  // Added onNavigate as an optional prop to support hash-based navigation in the legacy App.tsx version of the site.
  onNavigate?: (hash: string) => void;
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, onNavigate }) => {
  return (
    <footer className={`transition-colors duration-500 pt-24 pb-12 px-6 border-t relative z-10 ${isDarkMode ? 'bg-black/80 backdrop-blur-xl border-white/5' : 'bg-white border-gray-200'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className={`text-2xl font-bold tracking-tighter mb-6 block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              SYNQUE<span className="text-[#25D366]">.</span>
            </Link>
            <p className="text-slate-600 dark:text-white opacity-80 max-w-xs leading-relaxed">
              Empowering global enterprises to scale their customer communications with the official WhatsApp Business API.
            </p>
          </div>
          
          <div>
            <h5 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Product</h5>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/80">
              <li><Link href="/features" className="hover:text-[#25D366]">Dashboard</Link></li>
              <li><Link href="/features" className="hover:text-[#25D366]">Campaigns</Link></li>
              <li><Link href="/#faq" className="hover:text-[#25D366]">API Docs</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Company</h5>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/80">
              <li><Link href="/contact" className="hover:text-[#25D366]">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-[#25D366]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Legal</h5>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/80">
              <li><Link href="/privacy" className="hover:text-[#25D366]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#25D366]">Terms of Service</Link></li>
              <li><Link href="/gdpr" className="hover:text-[#25D366]">GDPR</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={`pt-12 border-t flex flex-col items-center justify-center text-center gap-6 text-sm text-slate-500 dark:text-white/60 ${isDarkMode ? 'border-white/5' : 'border-gray-100'}`}>
          <p>© 2024 Synque Platform Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
