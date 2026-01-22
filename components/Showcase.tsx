
import React, { useState } from 'react';

const Showcase: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Simulated graph points for the SVG line
  const points = "0,100 40,80 80,90 120,40 160,60 200,30 240,50 280,10 320,40 360,20 400,50";

  return (
    <section id="showcase" className="py-32 px-6 bg-slate-50 dark:bg-slate-900/40 border-y border-black/5 dark:border-white/5 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black dark:text-white">Designed for Seamless Operations</h2>
        
        <div className="relative group perspective-1000">
          <div className="relative glass-card rounded-[40px] border border-black/10 dark:border-white/20 overflow-hidden shadow-2xl transition-all duration-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl">
            
            {/* Browser Header */}
            <div className="bg-slate-100 dark:bg-black/60 p-5 flex items-center justify-between border-b border-black/5 dark:border-white/10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-[10px] text-gray-500 dark:text-white uppercase tracking-[0.3em] font-bold">Synque Enterprise Hub v4.2</div>
              <div className="w-8"></div>
            </div>
            
            <div className="flex flex-col md:flex-row h-auto min-h-[600px]">
              {/* Sidebar */}
              <div className="w-full md:w-64 border-r border-black/5 dark:border-white/10 p-6 space-y-8 hidden md:block bg-slate-50/50 dark:bg-black/40">
                <div className="space-y-4 text-left">
                  <div className="h-2 w-12 bg-[#25D366] rounded-full"></div>
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-2 bg-slate-200 dark:bg-white/20 rounded-full w-full"></div>
                  ))}
                </div>
                <div className="pt-10 space-y-4 text-left">
                  <div className="h-2 w-20 bg-slate-200 dark:bg-white/20 rounded-full"></div>
                  {[1,2].map(i => (
                    <div key={i} className="h-2 bg-slate-100 dark:bg-white/10 rounded-full w-2/3"></div>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-8 md:p-12 text-left space-y-10">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-black text-[#25D366] uppercase tracking-widest">Global Overview</div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">System Performance</h3>
                  </div>
                  <div className="flex space-x-3">
                    <div className="h-10 w-32 bg-[#25D366]/10 rounded-xl border border-[#25D366]/20 flex items-center justify-center text-[10px] font-black text-[#25D366]">
                      LIVE STATUS
                    </div>
                  </div>
                </div>

                {/* Top Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: 'Active Sessions', val: '1,429', trend: '+12%', color: '#25D366' },
                    { label: 'Avg. Latency', val: '142ms', trend: '-8ms', color: '#60a5fa' },
                    { label: 'Queue Depth', val: '42', trend: 'Stable', color: '#facc15' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/80 dark:bg-white/10 rounded-2xl border border-black/5 dark:border-white/10 p-6 hover:bg-white dark:hover:bg-white/20 transition-all hover:scale-[1.02] cursor-default group/stat shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[10px] font-bold text-gray-500 dark:text-white opacity-60 uppercase tracking-wider">{stat.label}</div>
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: stat.color }}></div>
                      </div>
                      <div className="text-2xl font-bold text-black dark:text-white mb-1">{stat.val}</div>
                      <div className="text-[10px] font-bold" style={{ color: stat.color }}>{stat.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Main Analytics Graph Section */}
                <div className="relative flex-1 bg-slate-50 dark:bg-black/60 rounded-3xl border border-black/5 dark:border-white/10 p-8 group/graph overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-sm font-bold text-gray-600 dark:text-white">Message Volume (24h)</div>
                    <div className="flex space-x-2">
                      <div className="px-3 py-1 bg-white dark:bg-white/10 rounded-md text-[10px] text-gray-500 dark:text-white">D</div>
                      <div className="px-3 py-1 bg-[#25D366] rounded-md text-[10px] text-white font-bold">W</div>
                      <div className="px-3 py-1 bg-white dark:bg-white/10 rounded-md text-[10px] text-gray-500 dark:text-white">M</div>
                    </div>
                  </div>

                  {/* SVG Graph */}
                  <div className="relative h-64 w-full">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between opacity-5">
                      {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-slate-400 dark:bg-white"></div>)}
                    </div>

                    <svg 
                      viewBox="0 0 400 120" 
                      className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 400;
                        setHoveredPoint(x);
                      }}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <defs>
                        <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#25D366" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d={`M 0,120 L ${points} L 400,120 Z`} fill="url(#graphGradient)" className="transition-all duration-500" />
                      <polyline fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={points} className="transition-all duration-500" />
                      {hoveredPoint !== null && (
                        <>
                          <line x1={hoveredPoint} y1="0" x2={hoveredPoint} y2="120" stroke="rgba(37,211,102,0.4)" strokeWidth="1" strokeDasharray="4 2" />
                          <circle cx={hoveredPoint} cy={60} r="4" fill="#25D366" className="drop-shadow-[0_0_8px_#25D366]" />
                        </>
                      )}
                    </svg>
                    <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#25D366]/50 to-transparent left-0 animate-[scan_4s_linear_infinite] pointer-events-none"></div>
                  </div>
                  <div className="absolute bottom-10 right-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-lg border border-[#25D366]/30 opacity-0 group-hover/graph:opacity-100 transition-opacity shadow-lg">
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-tighter">Current Velocity</div>
                    <div className="text-sm font-bold text-black dark:text-white">842 msgs / sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
