
'use client';

import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  // Added onNavigate as an optional prop to support hash-based navigation in the legacy App.tsx version of the site.
  onNavigate?: (hash: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, onNavigate }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b px-6 py-4 transition-colors ${isDarkMode ? 'bg-black/10 border-white/10' : 'bg-white/70 border-gray-200'}`}>
      <div className="container mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className={`text-2xl font-bold tracking-tighter transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            SYNQUE<span className="text-[#25D366]">.</span>
          </Link>
        </div>
        
        <div className={`hidden md:flex items-center space-x-8 text-sm font-medium transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <Link href="/features" className="hover:text-[#25D366] transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-[#25D366] transition-colors">Pricing</Link>
          <Link href="/contact" className="hover:text-[#25D366] transition-colors">Contact</Link>
          <Link href="/#faq" className="hover:text-[#25D366] transition-colors">Help Center</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all hover:scale-110 active:scale-95 ${isDarkMode ? 'border-white/10 bg-white/5 text-yellow-400' : 'border-gray-200 bg-gray-100 text-gray-700'}`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <Link href="/login" className={`hidden lg:block text-sm font-semibold border transition-all px-5 py-2 rounded-full ${isDarkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-200 text-gray-700 hover:bg-gray-100'}`}>
            Log In
          </Link>
          <Link href="/contact" className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/20 hover:scale-105 transition-transform">
            Start Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
