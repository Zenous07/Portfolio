"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDetailProps {
  repo: any;
  isOpen: boolean;
  onClose: () => void;
  accentColor: string;
}

export default function ProjectDetail({ repo, isOpen, onClose, accentColor }: ProjectDetailProps) {
  if (!repo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Column: Visual/Glitch Area */}
            <div className="w-full md:w-1/3 bg-[#111] relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
              <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                 <div className="w-24 h-24 rounded-full border-2 border-[var(--accent)]/40 flex items-center justify-center mb-4 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)] animate-ping opacity-20"></div>
                    <svg className="w-10 h-10 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                 </div>
                 <div className="font-orbitron text-[10px] tracking-[0.4em] text-[var(--accent)] uppercase">Status: Validated</div>
              </div>

              {/* Diagonal HUD line */}
              <div className="absolute top-0 right-0 w-full h-[1px] bg-white/5 origin-top-right -rotate-45"></div>
            </div>

            {/* Right Column: Diagnostic Data */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 font-inter bg-black/40 custom-scrollbar">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-[#444] hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></div>
                <span className="font-orbitron text-[10px] tracking-[0.3em] text-[#444] uppercase">Archive_Ref: {repo.id}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6 uppercase tracking-tight">
                {repo.name}
              </h2>

              <div className="flex flex-wrap gap-3 mb-10">
                {['Live Demo', 'Source Code', 'Documentation'].map((tab) => (
                  <div key={tab} className="px-4 py-1.5 rounded-sm border border-white/5 text-[9px] font-orbitron tracking-[0.2em] text-[#666] uppercase hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all cursor-pointer">
                    {tab}
                  </div>
                ))}
              </div>

              <div className="space-y-10">
                <section>
                  <h3 className="font-orbitron text-[10px] tracking-[0.3em] text-[var(--accent)] mb-4 uppercase flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-[var(--accent)]/50"></span>
                    Objective
                  </h3>
                  <p className="text-[#888888] text-sm md:text-base leading-relaxed pl-6 border-l border-white/5">
                    {repo.description || 'System mission objectives remain classified or underspecified.'}
                  </p>
                </section>

                <section>
                  <h3 className="font-orbitron text-[10px] tracking-[0.3em] text-[var(--accent)] mb-6 uppercase flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-[var(--accent)]/50"></span>
                    Tech Loadout
                  </h3>
                  <div className="grid grid-cols-2 gap-4 pl-6">
                    <div className="bg-[#111] p-4 rounded-lg border border-white/5">
                       <div className="text-[10px] text-[#444] font-orbitron mb-1 uppercase tracking-widest">Primary</div>
                       <div className="text-white text-sm font-semibold">{repo.language || 'Codebase'}</div>
                    </div>
                    <div className="bg-[#111] p-4 rounded-lg border border-white/5">
                       <div className="text-[10px] text-[#444] font-orbitron mb-1 uppercase tracking-widest">Visibility</div>
                       <div className="text-white text-sm font-semibold uppercase">{repo.visibility || 'Public'}</div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="font-orbitron text-[10px] tracking-[0.3em] text-[var(--accent)] mb-4 uppercase flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-[var(--accent)]/50"></span>
                    Impact Metrics
                  </h3>
                  <div className="flex gap-8 pl-6">
                    <div>
                      <div className="text-2xl font-bold text-white">{repo.stargazers_count}</div>
                      <div className="text-[9px] text-[#444] font-orbitron uppercase tracking-widest">Stargazers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{repo.forks_count}</div>
                      <div className="text-[9px] text-[#444] font-orbitron uppercase tracking-widest">Forks</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{repo.watchers_count}</div>
                      <div className="text-[9px] text-[#444] font-orbitron uppercase tracking-widest">Watchers</div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
                 <a 
                   href={repo.html_url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-[var(--accent)] font-orbitron text-[10px] tracking-[0.4em] uppercase flex items-center gap-2 hover:translate-x-2 transition-transform"
                 >
                   Access Source <span className="text-lg">→</span>
                 </a>
                 <div className="text-[#222] font-mono text-[9px] animate-pulse">
                   // SYNC_COMPLETE
                 </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
