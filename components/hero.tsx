import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white p-4 font-inter">
      {/* Main Black Container */}
      <main className="relative flex-1 w-full bg-[#050505] rounded-[40px] overflow-hidden shadow-2xl">

        {/* Background Video */}
        <video
          src="/assets/animation2.mp4"
          alt="Hero Background"
          autoPlay
          muted
          className="object-contain scale-95 z-0 pointer-events-none opacity-90"
          priority
        />
        {/* Dark Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

        {/* Top Left Logo Cutout (White) */}
        <div className="absolute top-0 left-0 bg-white rounded-br-[40px] p-6 pr-8 pb-8 z-20">
          {/* Inverted Corners */}
          <div className="absolute top-0 -right-10 w-10 h-10 bg-transparent rounded-tl-[40px] shadow-[-20px_-20px_0_20px_white]"></div>
          <div className="absolute -bottom-10 left-0 w-10 h-10 bg-transparent rounded-tl-[40px] shadow-[-20px_-20px_0_20px_white]"></div>

          {/* Logo Pill */}
          <div className="relative z-10 bg-[#050505] text-white rounded-[24px] px-8 py-3 font-orbitron font-bold text-2xl tracking-widest italic flex items-center justify-center cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[var(--ease-ui)]">
            Zenous
          </div>
        </div>

        {/* Top Right Nav Cutout (White) */}
        <div className="absolute top-0 right-0 bg-white rounded-bl-[40px] p-6 pl-8 pb-8 flex items-center gap-4 z-20">
          {/* Inverted Corners */}
          <div className="absolute top-0 -left-10 w-10 h-10 bg-transparent rounded-tr-[40px] shadow-[20px_-20px_0_20px_white]"></div>
          <div className="absolute -bottom-10 right-0 w-10 h-10 bg-transparent rounded-tr-[40px] shadow-[20px_-20px_0_20px_white]"></div>

          {/* Search Button */}
          <button className="relative z-10 w-14 h-14 bg-[#050505] rounded-full flex items-center justify-center cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[var(--ease-ui)]">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Bag Button */}
          <button className="relative z-10 w-14 h-14 bg-[#050505] rounded-full flex items-center justify-center cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[var(--ease-ui)]">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>

          {/* Contact Pill */}
          <button className="relative z-10 h-14 px-8 bg-[#050505] rounded-[28px] flex items-center justify-center cursor-pointer active:scale-[0.97] transition-transform duration-[160ms] ease-[var(--ease-ui)]">
            <span className="text-white text-sm font-medium tracking-wide">Contact</span>
          </button>
        </div>



        {/* Bottom Right Image Cutout Group (White Area containing empty black pill) */}
        <div className="absolute bottom-0 right-0 bg-white rounded-tl-[60px] pl-8 pt-8 flex z-20 w-[400px] h-[300px]">
          {/* Inverted Corners */}
          <div className="absolute bottom-0 -left-10 w-10 h-10 bg-transparent rounded-br-[40px] shadow-[20px_20px_0_20px_white]"></div>
          <div className="absolute -top-10 right-0 w-10 h-10 bg-transparent rounded-br-[40px] shadow-[20px_20px_0_20px_white]"></div>

          {/* Empty Space for Image (Dark Container) */}
          <div className="relative w-full h-full bg-[#050505] rounded-[40px] rounded-br-[20px] rounded-bl-[40px] mr-6 mb-6 mt-0 ml-0 overflow-hidden border border-white/5">
            {/* Dots */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              <div className="w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
            {/* Subtle glow/gradient to indicate it's an image placeholder */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/2 to-transparent"></div>
          </div>

          {/* Extra dots layout as seen in reference */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 z-30 opacity-0 pointer-events-none">
            {/* We omitted external dots since image pill is inside */}
          </div>
        </div>

        {/* Outer mini dots on bottom right corner (like the reference has near the cutout) */}
        <div className="absolute bottom-16 right-[420px] flex gap-4 z-20">
          <div className="w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
          <div className="w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* HUD Elements */}
        {/* Box 1 - Voidblade */}

        {/* Box 2 - Shadow Circuit Jacket */}


        {/* Bottom Left Huge Typography */}
        <div className="absolute bottom-12 left-12 flex flex-col font-orbitron text-white z-20 pointer-events-none select-none">
          <h1 className="text-[6vw] sm:text-[7vw] leading-[1.05] font-bold tracking-[0.05em] uppercase">
            <span className="block hover:text-gray-300 transition-colors duration-500">Bennett</span>
            <span className="block text-transparent relative group" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
              Joshua
              {/* Optional glowing effect hidden normally */}
              <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </span>
            
          </h1>
        </div>

      </main>
    </div>
  );
}
