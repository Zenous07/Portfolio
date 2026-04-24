"use client";

import React, { useEffect, useState } from "react";

interface EasterEggProps {
  onClose: () => void;
}

export default function EasterEgg({ onClose }: EasterEggProps) {
  const [glitching, setGlitching] = useState(true);

  useEffect(() => {
    // Stop the intense glitch after 2 seconds
    const timer = setTimeout(() => {
      setGlitching(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center font-orbitron overflow-hidden backdrop-blur-md">
      
      {/* Glitch Overlay */}
      {glitching && (
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-difference opacity-50">
          <div className="w-full h-full bg-[url('https://media.giphy.com/media/YkQdIItE8U6V8wKItN/giphy.gif')] bg-cover opacity-30"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-2xl px-6">
        <h1 className={`text-4xl md:text-6xl font-bold text-red-500 mb-6 uppercase tracking-[0.2em] ${glitching ? 'animate-pulse' : ''}`}>
          System Override
        </h1>
        
        <div className="bg-red-950/30 border border-red-500/50 p-6 md:p-12 rounded-lg backdrop-blur-sm text-left">
          <p className="text-red-400 text-sm md:text-base mb-4 font-mono">
            &gt; Authentication sequence accepted.
            <br />
            &gt; Decrypting classified archives...
            <br />
            &gt; Access granted: LEVEL OMEGA.
          </p>
          
          <div className="mt-8 border-t border-red-500/30 pt-6">
            <h2 className="text-2xl text-white mb-2 font-bold tracking-widest">PROJECT: BENNETT</h2>
            <p className="text-white/70 mb-8 font-inter">
              You've found the hidden terminal. Only the most curious minds make it here.
              If you are reading this, you are exactly the type of person I want to work with.
            </p>
            
            <a 
              href="mailto:hire@example.com?subject=I%20found%20the%20Easter%20Egg!" 
              className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-bold tracking-widest uppercase hover:bg-red-500 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.5)]"
            >
              Initiate Contact
            </a>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="mt-12 text-white/50 hover:text-white uppercase tracking-widest text-sm transition-colors"
        >
          [ Return to Main Network ]
        </button>
      </div>

    </div>
  );
}
