
import React from 'react';

const LegalPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="pt-40 pb-32 px-6 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-12 md:p-20 rounded-[40px] space-y-10 bg-white/90 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-2xl">
          <h1 className="text-5xl font-extrabold text-black dark:text-white tracking-tight">{title}</h1>
          <div className="space-y-6 text-black dark:text-white leading-relaxed">
            <p className="text-lg font-medium opacity-60">Last Updated: October 2024</p>
            
            <h2 className="text-2xl font-bold pt-8">1. Introduction</h2>
            <p className="opacity-80">Welcome to Synque. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this policy, or our practices with regards to your personal information, please contact us at <span className="text-[#25D366] font-bold">legal@synque.com</span>.</p>
            
            <h2 className="text-2xl font-bold pt-8">2. Data Collection</h2>
            <p className="opacity-80">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
            
            <h2 className="text-2xl font-bold pt-8">3. Use of Information</h2>
            <p className="opacity-80">We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
            
            <h2 className="text-2xl font-bold pt-8">4. Security</h2>
            <p className="opacity-80">We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
