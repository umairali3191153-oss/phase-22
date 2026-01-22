
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Simulated Authentication Logic
    setTimeout(() => {
      setLoading(false);
      if (email === 'admin@synque.com' && password === 'admin') {
        setIsLoggedIn(true);
      } else {
        setError(true);
      }
    }, 1500);
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-md w-full glass-card p-12 rounded-[40px] text-center space-y-8 animate-fade-in bg-white/90 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-2xl">
          <div className="w-24 h-24 bg-[#25D366]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-black dark:text-white">Welcome, Admin</h1>
            <p className="text-black dark:text-white opacity-70">Login successful. Redirecting to your workspace...</p>
          </div>
          <button 
            onClick={() => window.location.hash = '#'} 
            className="w-full py-5 bg-[#25D366] text-white rounded-full font-bold text-lg shadow-xl shadow-green-500/20 hover:scale-[1.02] transition-all active:scale-95"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-md w-full glass-card p-10 rounded-[40px] space-y-8 text-center relative overflow-hidden bg-white/90 dark:bg-white/5 border-black/5 dark:border-white/10 shadow-2xl">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-black dark:text-white">Welcome Back</h1>
          <p className="text-black dark:text-white opacity-70">Access your WABA Dashboard</p>
        </div>

        <div className="space-y-4">
          <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold flex items-center justify-center space-x-3 hover:bg-slate-800 dark:hover:bg-gray-200 transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            <span>Login with Google</span>
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-black/10 dark:border-white/10"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-50 dark:bg-[#0f172a] px-2 text-black dark:text-white opacity-60">Or continue with</span></div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-xs font-bold text-center">
              Invalid credentials. Try admin@synque.com / admin
            </div>
          )}
          <div className="space-y-2">
            <label className="text-xs font-bold text-black dark:text-white opacity-60 uppercase tracking-widest">Email Address</label>
            <input 
              required 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-100 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 focus:border-[#25D366] outline-none transition-all text-black dark:text-white" 
              placeholder="admin@synque.com" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-black dark:text-white opacity-60 uppercase tracking-widest">Password</label>
            <input 
              required 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-100 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-xl px-5 py-4 focus:border-[#25D366] outline-none transition-all text-black dark:text-white" 
              placeholder="••••••••" 
            />
          </div>
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center text-black dark:text-white opacity-60 cursor-pointer hover:text-[#25D366]"><input type="checkbox" className="mr-2" /> Remember me</label>
            <button type="button" className="text-[#25D366] font-bold hover:underline">Forgot password?</button>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-5 bg-[#25D366] text-white rounded-full font-bold text-lg shadow-xl shadow-green-500/20 hover:scale-[1.02] transition-all active:scale-95 flex justify-center items-center"
          >
            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 'Login'}
          </button>
        </form>

        <p className="text-sm text-black dark:text-white opacity-60">
          Don't have an enterprise account? <button onClick={() => window.location.hash = '#contact'} className="text-[#25D366] font-bold underline hover:text-[#20bd5b]">Request Access</button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
