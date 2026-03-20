import React from 'react';
import PixelBlast from './pixel-blast';

export default function Leetcode() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Interactive WebGL Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <PixelBlast
          color="#d49353"
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
      
      {/* Simple Clean Overlay Content */}
      <div className="relative z-10 text-center pointer-events-none px-6">
        <h2 className="text-5xl md:text-7xl font-bold font-orbitron tracking-widest text-[#d49353] uppercase mb-6 drop-shadow-[0_0_20px_rgba(212,147,83,0.4)]">
          LeetCode
        </h2>
        <p className="text-[#888888] font-inter text-xl md:text-2xl max-w-2xl mx-auto tracking-wide">
          Algorithmic logic and data structure execution matrix.
        </p>
      </div>
    </section>
  );
}
