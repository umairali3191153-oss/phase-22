
import React from 'react';

interface FooterProps {
  onNavigate: (hash: string) => void;
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, isDarkMode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    onNavigate(hash);
  };

  return (
    <footer className={`transition-colors duration-500 pt-24 pb-12 px-6 border-t relative z-10 ${isDarkMode ? 'bg-black/80 backdrop-blur-xl border-white/5' : 'bg-white border-gray-200'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" onClick={(e) => handleClick(e, '#')} className={`text-2xl font-bold tracking-tighter mb-6 block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              SYNQUE<span className="text-[#25D366]">.</span>
            </a>
            <p className="text-slate-600 dark:text-white opacity-80 max-w-xs leading-relaxed">
              Empowering global enterprises to scale their customer communications with the official WhatsApp Business API.
            </p>
          </div>
          
          <div>
            <h5 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Product</h5>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/80">
              <li><a href="#features" onClick={(e) => handleClick(e, '#features')} className="hover:text-[#25D366]">Dashboard</a></li>
              <li><a href="#features" onClick={(e) => handleClick(e, '#features')} className="hover:text-[#25D366]">Campaigns</a></li>
              <li><a href="#faq" onClick={(e) => handleClick(e, '#faq')} className="hover:text-[#25D366]">API Docs</a></li>
              <li><a href="#features" onClick={(e) => handleClick(e, '#features')} className="hover:text-[#25D366]">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Company</h5>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/80">
              <li><a href="#" onClick={(e) => handleClick(e, '#')} className="hover:text-[#25D366]">About Us</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hover:text-[#25D366]">Partners</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hover:text-[#25D366]">Careers</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hover:text-[#25D366]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className={`font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Legal</h5>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-white/80">
              <li><a href="#privacy" onClick={(e) => handleClick(e, '#privacy')} className="hover:text-[#25D366]">Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => handleClick(e, '#terms')} className="hover:text-[#25D366]">Terms of Service</a></li>
              <li><a href="#gdpr" onClick={(e) => handleClick(e, '#gdpr')} className="hover:text-[#25D366]">GDPR</a></li>
              <li><a href="#privacy" onClick={(e) => handleClick(e, '#privacy')} className="hover:text-[#25D366]">Cookie Policy</a></li>
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
