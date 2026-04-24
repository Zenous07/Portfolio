"use client";

import React, { useEffect, useState } from 'react';
import PixelBlast from './pixel-blast';

interface LeetcodeData {
  profile: any;
  solved: any;
}

export default function LeetcodeClient({ data }: { data: LeetcodeData | null }) {
  const [mounted, setMounted] = useState(false);
  const [accentHex, setAccentHex] = useState('#d49353');

  useEffect(() => {
    setMounted(true);
    
    // Resolve CSS variable to Hex for Three.js
    const resolveAccent = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      if (color) setAccentHex(color);
    };
    
    resolveAccent();
    window.addEventListener('themeChange', resolveAccent);
    return () => window.removeEventListener('themeChange', resolveAccent);
  }, []);

  const easy = data?.solved?.easySolved ?? 0;
  const medium = data?.solved?.mediumSolved ?? 0;
  const hard = data?.solved?.hardSolved ?? 0;
  const total = data?.solved?.solvedProblem ?? 0;
  const rank = data?.profile?.ranking ?? 'Unknown';

  const easyTotal = 932;
  const medTotal = 2027;
  const hardTotal = 915;

  if (!mounted) return <div className="min-h-[85vh] bg-[#050505]" />;

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center bg-[#050505] overflow-hidden border-t border-white/5 py-32 z-0">
      
      {/* Interactive WebGL Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <PixelBlast
          color={accentHex}
          pixelSize={4}
          variant="diamond"
          patternScale={2}
          patternDensity={1}
          liquid={true}
          liquidStrength={0.2}
          enableRipples={true}
          transparent={true}
          className=""
          style={{}}
        />
      </div>
      
      {/* Sci-Fi HUD Overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pointer-events-none">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold font-orbitron tracking-[0.15em] text-[var(--accent)] uppercase drop-shadow-[0_0_20px_rgba(212,147,83,0.5)]">
            LeetCode // Override
          </h2>
          <div className="w-32 h-[2px] bg-[var(--accent)] mt-8 shadow-[0_0_15px_rgba(212,147,83,1)] opacity-70" />
        </div>

        {/* Main Stats Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pointer-events-auto relative items-stretch">
          
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[var(--accent)]/40 rounded-tl-xl pointer-events-none hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[var(--accent)]/40 rounded-br-xl pointer-events-none hidden md:block"></div>

          {/* Global Terminal */}
          <div className="lg:col-span-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-[var(--accent)]/30 rounded-3xl p-8 lg:p-10 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(212,147,83,0.05)] hover:border-[var(--accent)]/60 hover:shadow-[0_0_50px_rgba(212,147,83,0.1)] transition-all duration-500 group relative overflow-hidden min-h-[300px]">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[60px] group-hover:bg-[var(--accent)]/20 transition-colors duration-500"></div>

            <div className="text-[#888888] font-orbitron tracking-[0.2em] text-[10px] md:text-xs mb-6 uppercase text-center">Total Executed</div>
            
            <div className="text-[5rem] lg:text-[6rem] leading-none font-bold text-white font-inter tracking-tighter mb-8 relative z-10 group-hover:scale-105 transition-transform duration-500 group-hover:text-[var(--accent)] drop-shadow-[0_0_30px_rgba(212,147,83,0.2)]">
              {total}
            </div>
            
            <div className="w-full bg-[#111111]/80 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/5 flex flex-col xl:flex-row items-center justify-between gap-3 relative z-10 transition-colors group-hover:border-[var(--accent)]/40">
               <span className="text-[#888888] font-inter text-[10px] md:text-xs uppercase tracking-widest font-medium">Global Rank</span>
               <span className="text-[var(--accent)] font-orbitron font-semibold text-lg md:text-xl tracking-wider drop-shadow-[0_0_8px_rgba(212,147,83,0.4)]">
                 #{typeof rank === 'number' ? rank.toLocaleString() : rank}
               </span>
            </div>
          </div>

          {/* Complexity CPU Meters */}
          <div className="lg:col-span-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col justify-center shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-[100px] group-hover:bg-[var(--accent)]/10 transition-colors duration-500"></div>

            <h3 className="text-[#888888] font-orbitron text-xs uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4 text-center lg:text-left relative z-10 text-shadow-sm">Complexity Matrix</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full z-10">
               <HorseshoeMeter label="Easy" solved={easy} total={easyTotal} color="#00b8a3" />
               <HorseshoeMeter label="Medium" solved={medium} total={medTotal} color="#ffc01e" />
               <HorseshoeMeter label="Hard" solved={hard} total={hardTotal} color="#ef4743" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function HorseshoeMeter({ label, solved, total, color }: { label: string, solved: number, total: number, color: string }) {
  const radius = 38;
  const strokeWidth = 5;
  const circumference = 2 * Math.PI * radius; 
  const strokeLength = circumference * 0.75; 
  const gapLength = circumference * 0.25; 
  
  const percentage = total > 0 ? (solved / total) : 0;
  const minPercentage = 0.02; 
  const displayPercentage = solved > 0 ? Math.max(percentage, minPercentage) : 0;
  
  const fillLength = displayPercentage * strokeLength;
  
  const strokeDasharrayBackground = `${strokeLength} ${gapLength}`;
  const strokeDasharrayFill = `${fillLength} ${circumference}`;

  return (
    <div className="flex flex-col items-center bg-[#111111]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-xl group/meter hover:border-white/20 transition-all duration-500 relative cursor-default overflow-hidden">
       <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-10 transition-opacity duration-500 group-hover/meter:opacity-20 pointer-events-none" style={{ backgroundColor: color }}></div>

       <div className="relative w-28 h-28 flex items-center justify-center mb-3">
          <svg className="w-full h-full transform rotate-135" viewBox="0 0 100 100">
             <circle 
               cx="50" cy="50" r={radius} 
               fill="transparent" 
               stroke="#222" 
               strokeWidth={strokeWidth}
               strokeLinecap="round"
               strokeDasharray={strokeDasharrayBackground}
             />
             <circle 
               cx="50" cy="50" r={radius} 
               fill="transparent" 
               stroke={color} 
               strokeWidth={strokeWidth} 
               strokeLinecap="round" 
               strokeDasharray={strokeDasharrayFill}
               className="transition-all duration-1500 ease-out"
               style={{ filter: `drop-shadow(0 0 6px ${color})` }}
             />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center font-inter pt-2">
             <span className="text-3xl font-bold text-white tracking-tighter leading-none" style={{ textShadow: `0 0 15px ${color}` }}>{solved}</span>
             <span className="text-[#666] text-xs font-bold mt-1 tracking-widest">/{total}</span>
          </div>
       </div>
       
       <div className="text-[#888888] font-orbitron text-[11px] uppercase tracking-[0.25em] group-hover/meter:text-white transition-colors">
         {label}
       </div>
    </div>
  );
}
