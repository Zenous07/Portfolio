"use client";

import React from 'react';
import { motion } from "framer-motion";
import SkillsGraph from './skills-graph';
import MissionLogs from './mission-logs';

export default function Skills() {
  return (
    <section id="skills" className="w-full min-h-screen relative bg-[#050505] flex flex-col pt-32 pb-24 px-8 md:p-16 lg:p-24 overflow-hidden text-[#888888]">
      
      {/* Background HUD elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column: Identity & Skills Graph */}
        <div className="xl:col-span-7 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
              <span className="font-orbitron text-[10px] tracking-[0.4em] text-[var(--accent)] uppercase">Skill_Set: Verified // SYS_AUTH</span>
            </div>
            
            <h2 className="font-orbitron font-bold text-[3rem] md:text-[5.5rem] text-white leading-[0.9] uppercase tracking-tighter mb-8">
              NEURAL <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--accent)' }}>SYNC</span>
            </h2>
            
            <p className="max-w-xl font-inter text-[#888888] text-sm md:text-base leading-relaxed border-l-2 border-[var(--accent)]/30 pl-6 mb-12">
              Visualizing the interconnected neural network of my technical competencies. Every node represents a primary specialization, while the edges trace the flow of architectural integration.
            </p>

            <div className="w-full">
               <h3 className="font-orbitron text-[var(--accent)] tracking-[0.3em] font-bold mb-6 text-[10px] uppercase flex items-center gap-3">
                 <span className="w-4 h-[1px] bg-[var(--accent)]/50"></span>
                 Neural_Sync_Graph
               </h3>
               <SkillsGraph />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Mission Logs & Diagnostic Data */}
        <div className="xl:col-span-5 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="font-orbitron text-white tracking-[0.3em] font-bold mb-10 text-[10px] uppercase flex items-center gap-3">
              <span className="w-4 h-[1px] bg-white/20"></span>
              Technical_Mission_Logs
            </h3>
            
            <MissionLogs />

            {/* Hardware Status Card */}
            <div className="mt-12 bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 opacity-5 translate-x-8 -translate-y-8">
                  <svg viewBox="0 0 100 100" className="animate-spin-slow">
                     <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none" strokeDasharray="10 20" />
                  </svg>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-[8px] font-orbitron text-[#444] uppercase tracking-widest mb-2">Core_Clock</div>
                    <div className="text-white font-orbitron text-lg font-bold tracking-tighter">4.20 GHZ</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-orbitron text-[#444] uppercase tracking-widest mb-2">Sync_Stability</div>
                    <div className="text-[var(--accent)] font-orbitron text-lg font-bold tracking-tighter">99.9%</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-orbitron text-[#444] uppercase tracking-widest mb-2">Loadout_Type</div>
                    <div className="text-white font-orbitron text-[10px] tracking-widest uppercase">Full_Stack_S2</div>
                  </div>
                  <div>
                    <div className="text-[8px] font-orbitron text-[#444] uppercase tracking-widest mb-2">Last_Update</div>
                    <div className="text-white font-orbitron text-[10px] tracking-widest uppercase">2026.04.24</div>
                  </div>
               </div>

               <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-orbitron tracking-[0.2em] text-[#444] uppercase">Hardware_Diagnostic: Nominal</span>
                  <div className="flex gap-1">
                     {[...Array(5)].map((_, i) => (
                       <div key={i} className="w-2 h-1 bg-[var(--accent)]/40 rounded-full"></div>
                     ))}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
