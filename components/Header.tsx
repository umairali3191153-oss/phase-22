
import React from 'react';

interface HeaderProps {
  onNavigate: (hash: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, isDarkMode, toggleTheme }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    onNavigate(hash);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b px-6 py-4 transition-colors ${isDarkMode ? 'bg-black/10 border-white/10' : 'bg-white/70 border-gray-200'}`}>
      <div className="container mx-auto max-w-6xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="#" onClick={(e) => handleClick(e, '#')} className={`text-2xl font-bold tracking-tighter transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            SYNQUE<span className="text-[#25D366]">.</span>
          </a>
        </div>
        
        <div className={`hidden md:flex items-center space-x-8 text-sm font-medium transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <a href="#features" onClick={(e) => handleClick(e, '#features')} className="hover:text-[#25D366] transition-colors">Features</a>
          <a href="#pricing" onClick={(e) => handleClick(e, '#pricing')} className="hover:text-[#25D366] transition-colors">Pricing</a>
          <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hover:text-[#25D366] transition-colors">Contact</a>
          <a href="#faq" onClick={(e) => handleClick(e, '#faq')} className="hover:text-[#25D366] transition-colors">Help Center</a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all hover:scale-110 active:scale-95 ${isDarkMode ? 'border-white/10 bg-white/5 text-yellow-400' : 'border-gray-200 bg-gray-100 text-gray-700'}`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hidden lg:block text-sm font-semibold border border-[#25D366] text-[#25D366] px-5 py-2 rounded-full hover:bg-[#25D366] hover:text-white transition-all">
            Book a Demo
          </a>
          <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="bg-[#25D366] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/20 hover:scale-105 transition-transform">
            Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
