"use client";

import React, { useRef, useState, useEffect } from "react";

const THEMES = ['#d49353', '#1fa3db', '#1eb980', '#c443e1'];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleTheme = () => {
    const nextIndex = (themeIndex + 1) % THEMES.length;
    setThemeIndex(nextIndex);
    const newColor = THEMES[nextIndex];
    document.documentElement.style.setProperty('--accent', newColor);
    window.dispatchEvent(new CustomEvent('themeChange', { detail: newColor }));
  };

  // Tech stack items for the 3D radar
  const techStack = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Python', 'Node.js', 'GraphQL', 'Docker'];

  return (
    <div id="home" className="flex flex-col flex-1 min-h-screen bg-white p-2 md:p-4 font-inter">
      {/* Main Black Container */}
      <main className="relative flex-1 w-full bg-[#050505] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl">

        {/* Background Video */}
        <video
          ref={videoRef}
          src="/assets/animation2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-opacity duration-500"
          style={{ opacity: isPlaying ? 0.9 : 0.4 }}
        />
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

        {/* Top Left Logo Cutout (White) */}
        <div className="absolute top-0 left-0 bg-white rounded-br-[16px] md:rounded-br-[40px] p-2 pr-4 md:p-6 md:pr-8 md:pb-8 z-20">
          {/* Inverted Corners */}
          <div className="absolute top-0 -right-4 md:-right-10 w-4 h-4 md:w-10 md:h-10 bg-transparent rounded-tl-[16px] md:rounded-tl-[40px] shadow-[-8px_-8px_0_8px_white] md:shadow-[-20px_-20px_0_20px_white]"></div>
          <div className="absolute -bottom-4 md:-bottom-10 left-0 w-4 h-4 md:w-10 md:h-10 bg-transparent rounded-tl-[16px] md:rounded-tl-[40px] shadow-[-8px_-8px_0_8px_white] md:shadow-[-20px_-20px_0_20px_white]"></div>

          {/* Logo Pill */}
          <div className="relative z-10 bg-[#050505] text-white rounded-[16px] md:rounded-[24px] px-4 py-1.5 md:px-8 md:py-3 font-orbitron font-bold text-sm md:text-2xl tracking-widest italic flex items-center justify-center cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[var(--ease-ui)]">
            Zenous
          </div>
        </div>

        {/* Top Right Nav Cutout (White) */}
        <div className="absolute top-0 right-0 bg-white rounded-bl-[16px] md:rounded-bl-[40px] p-2 pl-4 md:p-6 md:pl-8 md:pb-8 flex items-center gap-1.5 md:gap-4 z-20">
          {/* Inverted Corners */}
          <div className="absolute top-0 -left-4 md:-left-10 w-4 h-4 md:w-10 md:h-10 bg-transparent rounded-tr-[16px] md:rounded-tr-[40px] shadow-[8px_-8px_0_8px_white] md:shadow-[20px_-20px_0_20px_white]"></div>
          <div className="absolute -bottom-4 md:-bottom-10 right-0 w-4 h-4 md:w-10 md:h-10 bg-transparent rounded-tr-[16px] md:rounded-tr-[40px] shadow-[8px_-8px_0_8px_white] md:shadow-[20px_-20px_0_20px_white]"></div>

          {/* Search Button */}
          <button className="relative z-10 w-8 h-8 md:w-14 md:h-14 bg-[#050505] rounded-full flex items-center justify-center cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[var(--ease-ui)]">
            <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Bag Button */}
          <button className="relative z-10 w-8 h-8 md:w-14 md:h-14 bg-[#050505] rounded-full flex items-center justify-center cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[var(--ease-ui)]">
            <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>

          {/* Contact Pill */}
          <a href="#contact" className="relative z-10 h-8 md:h-14 px-3 md:px-8 bg-[#050505] rounded-[16px] md:rounded-[28px] flex items-center justify-center cursor-pointer active:scale-[0.97] transition-all duration-300 ease-[var(--ease-ui)] hover:shadow-[0_0_15px_var(--accent)] border border-transparent hover:border-accent">
            <span className="text-white text-[10px] md:text-sm font-medium tracking-wide">Contact</span>
          </a>
        </div>

        {/* Bottom Right Image Cutout Group (White Area containing empty black pill) */}
        <div className="absolute bottom-0 right-0 bg-white rounded-tl-[60px] pl-8 pt-8 hidden md:flex z-20 w-[400px] h-[300px]">
          {/* Inverted Corners */}
          <div className="absolute bottom-0 -left-10 w-10 h-10 bg-transparent rounded-br-[40px] shadow-[20px_20px_0_20px_white]"></div>
          <div className="absolute -top-10 right-0 w-10 h-10 bg-transparent rounded-br-[40px] shadow-[20px_20px_0_20px_white]"></div>

          {/* Tech Stack Radar (Dark Container) */}
          <div className="group relative w-full h-full bg-[#050505] rounded-[40px] rounded-br-[20px] rounded-bl-[40px] mr-6 mb-6 mt-0 ml-0 overflow-hidden border border-white/5 cursor-crosshair flex items-center justify-center radar-container">
            
            {/* The Rotating Cylinder */}
            <div className="radar-cylinder w-full h-full relative">
              {techStack.map((tech, i) => {
                const angle = (360 / techStack.length) * i;
                return (
                  <div 
                    key={tech} 
                    className="radar-item text-center w-[120px] -ml-[60px] -mt-[15px] font-orbitron font-bold text-sm tracking-widest uppercase transition-colors duration-300"
                    style={{ transform: `rotateY(${angle}deg) translateZ(150px)` }}
                  >
                    <span className="text-[#555555] group-hover:text-[var(--accent)] drop-shadow-[0_0_8px_transparent] group-hover:drop-shadow-[0_0_8px_var(--accent)] transition-all duration-300">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Inner HUD elements */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-1 h-full bg-[var(--accent)] absolute top-0 left-1/2 -translate-x-1/2 opacity-20"></div>
              <div className="w-full h-1 bg-[var(--accent)] absolute top-1/2 left-0 -translate-y-1/2 opacity-20"></div>
              <div className="w-32 h-32 border border-[var(--accent)] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 animate-[spin_4s_linear_infinite]"></div>
            </div>

            {/* Subtle glow/gradient to indicate it's an active area */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/5 to-transparent group-hover:from-[var(--accent)]/20 transition-all duration-500 opacity-50"></div>
          </div>
        </div>

        {/* Outer mini dots on bottom right corner */}
        <div className="absolute bottom-16 right-[420px] hidden md:flex gap-4 z-20">
          {/* Play/Pause Button */}
          <button 
            onClick={toggleVideo}
            className="w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-[0.97] transition-all border border-transparent hover:border-accent group hover:shadow-[0_0_15px_var(--accent)]"
          >
            {isPlaying ? (
              <svg className="w-4 h-4 text-white group-hover:text-[var(--accent)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white group-hover:text-[var(--accent)] transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          
          {/* Theme Swapper Button */}
          <button 
            onClick={toggleTheme}
            className="w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 active:scale-[0.97] transition-all border border-transparent hover:border-accent group hover:shadow-[0_0_15px_var(--accent)] relative overflow-hidden"
          >
            <div className="w-3 h-3 rounded-full transition-colors duration-300" style={{ backgroundColor: THEMES[themeIndex] }}></div>
            {/* Spinning ring on hover */}
            <svg className="absolute inset-1 w-10 h-10 text-white/20 group-hover:text-[var(--accent)] transition-colors animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m15.364 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
            </svg>
          </button>
        </div>

        {/* Bottom Left Huge Typography */}
        <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 flex flex-col font-orbitron text-white z-20 pointer-events-none select-none">
          <h1 className="text-[14vw] sm:text-[7vw] leading-[1.05] font-bold tracking-[0.05em] uppercase">
            <span className="block hover:text-gray-300 transition-colors duration-500 pointer-events-auto">Bennett</span>
            <span className="block text-transparent relative group pointer-events-auto" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
              Joshua
              {/* Optional glowing effect hidden normally */}
              <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </span>
          </h1>
          <button 
            onClick={() => window.dispatchEvent(new Event('toggleDevMode'))}
            className="mt-4 pointer-events-auto text-[10px] md:text-sm tracking-[0.2em] text-white/30 hover:text-[var(--accent)] hover:shadow-[0_0_10px_var(--accent)] border border-white/10 hover:border-[var(--accent)] bg-black/50 backdrop-blur-sm px-4 py-1 rounded w-fit transition-all duration-300 uppercase"
          >
            [ DEV_MODE ]
          </button>
        </div>

      </main>
    </div>
  );
}
