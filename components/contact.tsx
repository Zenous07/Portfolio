"use client";

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full relative bg-[#050505] text-white flex flex-col pt-24 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden font-inter z-10">
      
      {/* Decorative vertical gradient lines in background (matching reference) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-evenly -z-10">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent to-transparent"></div>
      </div>

      {/* TOP SECTION: Header & CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 md:mb-24 gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold tracking-wide">
          Get started today
        </h2>
        
        <a href="mailto:hello@zenous.dev" className="flex items-center gap-1 group cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[var(--ease-ui)]">
          <div className="bg-accent text-[#050505] font-orbitron font-bold text-xs md:text-sm tracking-widest uppercase px-6 md:px-8 py-4 pointer-events-none">
            Book A Demo
          </div>
          <div className="bg-accent text-[#050505] px-4 py-4 flex items-center justify-center pointer-events-none">
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </a>
      </div>

      {/* MIDDLE SECTION: Massive Logo */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full mb-16 md:mb-24 overflow-hidden">
        {/* Three Slanted Bars */}
        <div className="flex gap-2 md:gap-4 mr-4 md:mr-8 h-[12vw] min-h-[80px]">
          <div className="w-[4vw] min-w-[20px] h-full bg-accent transform -skew-x-[20deg]"></div>
          <div className="w-[4vw] min-w-[20px] h-full bg-accent transform -skew-x-[20deg]"></div>
          <div className="w-[4vw] min-w-[20px] h-full bg-accent transform -skew-x-[20deg]"></div>
        </div>
        
        {/* Massive Text */}
        <h1 className="text-[18vw] leading-none font-orbitron font-bold tracking-tighter lowercase select-none">
          zenous
        </h1>
      </div>

      {/* INFO GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 w-full">
        
        {/* Col 1: Bio */}
        <div className="flex flex-col text-[#888888] text-sm md:text-base leading-relaxed pr-4">
          <p>
            AI agents and high-performance interfaces to help you build faster and ship better.
          </p>
        </div>

        {/* Col 2: Contact Info */}
        <div className="flex flex-col text-[#888888] text-xs md:text-sm gap-6">
          <div>
            <h4 className="text-white font-orbitron font-bold tracking-widest uppercase mb-4 text-xs">Contact Us</h4>
            <p>123 Innovation Drive</p>
            <p>San Francisco, CA 94107</p>
          </div>
          <div>
            <a href="mailto:hello@zenous.dev" className="hover:text-white transition-colors">hello@zenous.dev</a>
          </div>
        </div>

        {/* Col 3: Badge */}
        <div className="flex items-start justify-start lg:justify-center">
          <a href="mailto:hello@zenous.dev" className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#333333] flex items-center justify-center relative overflow-hidden group cursor-pointer hover:border-accent transition-colors">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="text-center font-orbitron text-[10px] md:text-xs text-[#888888] group-hover:text-white transition-colors">
              <span className="block mb-1">AVAILABLE</span>
              <span className="block font-bold text-white text-sm md:text-base">HIRE</span>
              <span className="block mt-1">2026</span>
            </div>
          </a>
        </div>

        {/* Col 4: Newsletter Input */}
        <div className="flex flex-col">
          <h4 className="text-white font-orbitron font-bold tracking-widest uppercase mb-4 text-xs">Stay Up To Date</h4>
          <div className="flex w-full h-12 border border-[#333333] focus-within:border-accent transition-colors overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent flex-1 px-4 outline-none text-sm text-white placeholder-[#555555]"
            />
            <button className="bg-white text-black font-orbitron font-bold text-[10px] md:text-xs uppercase px-4 md:px-6 hover:bg-accent hover:text-black transition-colors">
              Submit
            </button>
          </div>
        </div>

      </div>

      {/* FOOTER LINKS */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-[1px] bg-[#333333] mb-8"></div>
        
        <div className="w-full flex flex-wrap justify-between items-center gap-8 mb-12">
          <div className="flex flex-wrap gap-6 md:gap-12 font-orbitron text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#888888]">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="https://github.com/Zenous07" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/bennettjoshuaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/u/BennettJoshua/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LeetCode</a>
          </div>
        </div>
        
        <div className="w-full flex justify-between items-center text-[10px] md:text-xs text-[#555555] font-inter">
          <p>© Zenous. All Rights Reserved 2026</p>
          <p>Site by Zenous</p>
        </div>
      </div>

    </section>
  );
}
