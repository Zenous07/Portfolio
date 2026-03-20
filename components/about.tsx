import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full min-h-screen relative bg-[#050505] flex flex-col justify-between p-8 md:p-16 lg:p-24 overflow-hidden text-[#888888]">
      
      {/* Background Character Image */}
      <Image 
        src="/assets/aboutusChar.png" 
        alt="About Me Character" 
        fill
        className="object-contain scale-95 opacity-30 z-0 pointer-events-none"
        priority
      />

      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-10">
        {/* Left: Giant Title */}
        <div className="flex flex-col">
          <h2 className="font-orbitron font-bold text-[3rem] md:text-[5rem] lg:text-[6rem] text-[#d49353] leading-[1.05] uppercase tracking-wide">
            About Me <span className="text-[#d49353]/70">//</span><br />
            Full Stack<br />
            Developer
          </h2>
          
          {/* Paragraph below title */}
          <div className="max-w-md mt-6 md:mt-10 font-inter text-[#888888] text-sm md:text-base leading-relaxed">
            Engineered with precision and a passion for scalable architectures. I don't just write code—I build digital realities. Shift your perspective.
          </div>

          {/* 3 Icons below paragraph */}
          <div className="flex gap-4 mt-8 md:mt-12">
            <div className="w-12 h-12 rounded-full border border-[#d49353]/30 flex items-center justify-center text-[#d49353] hover:border-[#d49353] hover:shadow-[0_0_15px_rgba(212,147,83,0.3)] transition-all cursor-pointer">
              {/* Icon 1: Hexagon/Code */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full border border-[#d49353]/30 flex items-center justify-center text-[#d49353] hover:border-[#d49353] hover:shadow-[0_0_15px_rgba(212,147,83,0.3)] transition-all cursor-pointer">
              {/* Icon 2: Database/Server */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full border border-[#d49353]/30 flex items-center justify-center text-[#d49353] hover:border-[#d49353] hover:shadow-[0_0_15px_rgba(212,147,83,0.3)] transition-all cursor-pointer">
              {/* Icon 3: Sparkle */}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Pagination & Tech Specs Table */}
        <div className="flex flex-col items-end mt-16 md:mt-0 w-full md:w-auto relative z-10">
          {/* Pagination */}
          <div className="flex items-center gap-6 text-[#d49353] font-inter text-xs md:text-sm font-medium tracking-widest uppercase">
            <span>01/03</span>
            <div className="w-16 md:w-24 h-[1px] bg-[#d49353]/30 relative rounded-full overflow-hidden">
               <div className="absolute left-0 top-0 h-full w-1/3 bg-[#d49353] shadow-[0_0_8px_rgba(212,147,83,0.8)]"></div>
            </div>
            <span>Experience</span>
          </div>

          {/* Technical Skills Table */}
          <div className="mt-24 md:mt-40 w-full md:w-[400px]">
             <h3 className="font-orbitron text-[#d49353] tracking-widest font-bold mb-6 text-sm md:text-base uppercase flex items-center gap-2">
                Technical Skills
             </h3>
             <div className="flex flex-col w-full border-t border-[#d49353]/20 text-xs md:text-sm font-inter tracking-wide">
                {[
                  { label: "Frontend", value: "React, Next.js, Tailwind" },
                  { label: "Backend", value: "Node.js, Python, REST" },
                  { label: "Database", value: "PostgreSQL, MongoDB" },
                  { label: "Build", value: "Docker, Git, CI/CD" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between py-4 border-b border-[#d49353]/20 hover:bg-[#d49353]/[0.02] transition-colors">
                    <span className="text-[#888888]">{item.label}</span>
                    <span className="text-[#d49353] text-right">{item.value}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-end w-full mt-24 mb-8 md:mb-0 relative z-20">
        
        {/* Bottom Left Card */}
        <div className="w-full md:w-[460px] rounded-3xl border border-[#d49353]/20 bg-[#050505]/80 backdrop-blur-md p-6 lg:p-8 flex gap-6 relative group hover:border-[#d49353]/50 transition-colors duration-500 shadow-2xl">
          {/* Subtle bg glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#d49353]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Image Placeholder */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-tr from-[#d49353]/10 to-transparent border border-[#d49353]/20 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-inner font-orbitron text-[#d49353]/30 text-xs text-center p-2">
             <div className="absolute inset-0 bg-[#050505]/50"></div>
             <span className="relative z-10">[ IMG_CORE ]</span>
             {/* Small glowing dot */}
             <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#d49353] shadow-[0_0_8px_rgba(212,147,83,0.8)]"></div>
          </div>
          
          {/* Card Content */}
          <div className="flex flex-col justify-center font-inter z-10">
            <h4 className="text-[#d49353] font-orbitron font-bold tracking-widest text-xs md:text-sm mb-2 md:mb-3 uppercase">
              CS-01: Current Focus
            </h4>
            <p className="text-[#888888] text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Building high-performance AI interfaces and scalable next-generation platforms.
            </p>
            <div className="flex items-center">
              <button className="px-5 py-2 rounded-full border border-[#d49353]/30 text-[#d49353] text-xs font-medium hover:bg-[#d49353] hover:text-[#050505] transition-all duration-300 tracking-wider uppercase">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Right Connected Pills */}
        <div className="hidden lg:flex items-center gap-0 mt-12 md:mt-0 font-inter text-[10px] md:text-xs tracking-widest uppercase text-[#888888] relative">
           
           <div className="px-5 py-2.5 border border-[#d49353]/20 rounded-full hover:text-[#d49353] hover:border-[#d49353]/60 hover:shadow-[0_0_10px_rgba(212,147,83,0.15)] transition-all cursor-pointer bg-[#050505] z-10 relative">
             REACT
           </div>
           
           <div className="w-8 h-[1px] bg-[#d49353]/20 -mx-2 z-0"></div>

           <div className="px-5 py-2.5 border border-[#d49353]/20 rounded-full text-white border-[#d49353]/50 shadow-[0_0_10px_rgba(212,147,83,0.1)] transition-all cursor-pointer bg-[#050505] z-10 relative">
             NEXT.JS
           </div>
           
           <div className="w-8 h-[1px] bg-[#d49353]/20 -mx-2 z-0"></div>
           
           <div className="px-5 py-2.5 border border-[#d49353]/20 rounded-full hover:text-[#d49353] hover:border-[#d49353]/60 transition-all cursor-pointer bg-[#050505] z-10 relative">
             TYPESCRIPT
           </div>

           <div className="w-8 h-[1px] bg-[#d49353]/20 -mx-2 z-0"></div>

           <div className="px-5 py-2.5 border border-[#d49353]/20 rounded-full hover:text-[#d49353] hover:border-[#d49353]/60 transition-all cursor-pointer bg-[#050505] z-10 relative">
             TAILWIND
           </div>
           
           {/* Star connection */}
           <div className="w-6 h-[1px] bg-[#d49353]/20 -ml-1 z-0"></div>
           
           {/* 4-point Diamond Star */}
           <div className="text-[#888888] flex items-center justify-center animate-pulse relative z-10 -ml-2">
             <svg className="w-8 h-8 md:w-10 md:h-10 text-[#d49353]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
             </svg>
           </div>
        </div>
      </div>

    </section>
  );
}
