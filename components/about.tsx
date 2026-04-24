"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

const STATS = [
  { label: "Web Architecture", value: 95, icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { label: "Data & Intelligence", value: 88, icon: "M9 19v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
  { label: "Electronics Design", value: 85, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { label: "Simulation & CAD", value: 82, icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
];

export default function About() {
  const [selectedStat, setSelectedStat] = useState<number | null>(null);

  return (
    <section id="about" className="w-full min-h-screen relative bg-[#050505] flex flex-col justify-between p-8 md:p-16 lg:p-24 overflow-hidden text-[#888888]">
      
      {/* Background Character Image with Neural Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <Image 
          src="/assets/aboutusChar.png" 
          alt="About Me Character" 
          fill
          className="object-contain scale-110 md:scale-100 translate-x-[10%] opacity-50"
          priority
        />
        {/* Neural Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      {/* Top Header Row - Character Identity */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-between items-start w-full relative z-10"
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
            <span className="font-orbitron text-[10px] tracking-[0.4em] text-[var(--accent)] uppercase">Subject: Bennett Joshua</span>
          </div>
          <h2 className="font-orbitron font-bold text-[3.5rem] md:text-[6rem] lg:text-[7rem] text-white leading-[0.9] uppercase tracking-tighter">
            SYSTEM <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--accent)' }}>SYNC</span>
          </h2>
          
          <div className="max-w-md mt-8 font-inter text-[#888888] text-sm md:text-base leading-relaxed border-l-2 border-[var(--accent)]/30 pl-6">
            Engineered with precision and a passion for scalable architectures. I bridge the gap between human imagination and machine execution.
          </div>
        </div>

        {/* Right: Technical Stats - Character Attributes */}
        <div className="mt-16 md:mt-0 w-full md:w-[350px] lg:w-[450px]">
          <h3 className="font-orbitron text-[var(--accent)] tracking-[0.3em] font-bold mb-8 text-[10px] uppercase flex items-center gap-2">
            // NEURAL_COMPETENCIES
          </h3>
          <div className="space-y-6">
            {STATS.map((stat, i) => (
              <div 
                key={i} 
                className="group cursor-pointer"
                onMouseEnter={() => setSelectedStat(i)}
                onMouseLeave={() => setSelectedStat(null)}
              >
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-3">
                    <svg className={`w-4 h-4 transition-colors duration-300 ${selectedStat === i ? 'text-[var(--accent)]' : 'text-[#444]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                    </svg>
                    <span className={`font-orbitron text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${selectedStat === i ? 'text-white' : 'text-[#666]'}`}>
                      {stat.label}
                    </span>
                  </div>
                  <span className="font-orbitron text-[10px] text-[var(--accent)]">{stat.value}%</span>
                </div>
                <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "circOut", delay: i * 0.1 }}
                    className="absolute top-0 left-0 h-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"
                  />
                  {selectedStat === i && (
                    <motion.div 
                      layoutId="stat-glow"
                      className="absolute top-0 left-0 h-full w-full bg-white/10 blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Row - Equipment / Tools */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="flex flex-col lg:flex-row justify-between items-end w-full mt-24 mb-4 relative z-20 gap-12"
      >
        {/* Bio Card / Mission Log */}
        <div className="w-full lg:w-[500px] rounded-2xl border border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl p-8 relative overflow-hidden group hover:border-[var(--accent)]/30 transition-all duration-500">
          <div className="absolute top-0 right-0 p-3 opacity-20">
             <svg className="w-12 h-12 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45z" />
             </svg>
          </div>
          
          <h4 className="text-[var(--accent)] font-orbitron font-bold tracking-[0.3em] text-[10px] mb-6 uppercase">
            [ MISSION_LOG_01 ]
          </h4>
          <p className="text-[#888888] font-inter text-sm leading-relaxed mb-8 italic">
            "The objective is not just to build, but to optimize. Every line of code is a synapse in a larger digital consciousness. Currently focusing on the intersection of AI integration and high-fidelity user experiences."
          </p>
          
          <div className="flex items-center gap-4">
             <div className="px-4 py-1.5 rounded-sm border border-[var(--accent)]/30 text-[var(--accent)] text-[9px] font-orbitron tracking-[0.2em] uppercase bg-[var(--accent)]/5">
                STATUS: ACTIVE
             </div>
             <div className="px-4 py-1.5 rounded-sm border border-white/10 text-[#555] text-[9px] font-orbitron tracking-[0.2em] uppercase">
                LVL: 24_ENGINEER
             </div>
          </div>
        </div>

        {/* Tech Loadout Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full lg:w-auto">
          {['React', 'Next.js', 'Node.js', 'PostgreSQL'].map((tech, i) => (
            <div key={i} className="px-6 py-4 bg-[#0a0a0a] border border-white/5 rounded-xl flex flex-col items-center justify-center group hover:border-[var(--accent)]/40 transition-all duration-300">
              <span className="text-[#444] font-orbitron text-[8px] mb-2 uppercase tracking-widest group-hover:text-[var(--accent)]/50">Module</span>
              <span className="text-white font-orbitron text-xs tracking-widest uppercase group-hover:text-[var(--accent)] transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
