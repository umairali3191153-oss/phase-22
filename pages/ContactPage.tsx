
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-40 pb-32 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-extrabold tracking-tighter text-black dark:text-white">
              Let's Scale Your <br />
              <span className="text-[#25D366]">Conversations.</span>
            </h1>
            <p className="text-xl text-black dark:text-white leading-relaxed max-w-md opacity-90">
              Our experts are ready to help you implement the Official WhatsApp Business API for your specific enterprise needs.
            </p>
            
            <div className="space-y-6 pt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] text-xl">
                  📧
                </div>
                <div>
                  <div className="text-black dark:text-white font-bold">Email Us</div>
                  <div className="text-black dark:text-white opacity-70">enterprise@synque.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] text-xl">
                  📍
                </div>
                <div>
                  <div className="text-black dark:text-white font-bold">Global HQ</div>
                  <div className="text-black dark:text-white opacity-70">101 California St, San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[40px] relative overflow-hidden bg-white/80 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-20 space-y-6">
                <div className="text-6xl animate-bounce">✅</div>
                <h2 className="text-3xl font-bold text-black dark:text-white">Message Received!</h2>
                <p className="text-black dark:text-white opacity-70">One of our API specialists will reach out within 2 hours.</p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="px-8 py-3 bg-[#25D366]/10 text-[#25D366] rounded-full font-bold border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black dark:text-white opacity-70">Full Name</label>
                    <input disabled={status === 'submitting'} type="text" required className="w-full bg-slate-100 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 focus:border-[#25D366] outline-none transition-all disabled:opacity-50 text-black dark:text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-black dark:text-white opacity-70">Work Email</label>
                    <input disabled={status === 'submitting'} type="email" required className="w-full bg-slate-100 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 focus:border-[#25D366] outline-none transition-all disabled:opacity-50 text-black dark:text-white" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black dark:text-white opacity-70">Company Name</label>
                  <input disabled={status === 'submitting'} type="text" required className="w-full bg-slate-100 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 focus:border-[#25D366] outline-none transition-all disabled:opacity-50 text-black dark:text-white" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black dark:text-white opacity-70">Message</label>
                  <textarea disabled={status === 'submitting'} rows={4} required className="w-full bg-slate-100 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 focus:border-[#25D366] outline-none transition-all disabled:opacity-50 text-black dark:text-white" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-[#25D366] text-white rounded-full font-bold text-lg shadow-xl shadow-green-500/20 hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center space-x-3"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : 'Send Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
