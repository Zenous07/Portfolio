"use client";

import React, { useRef, useEffect, useState } from 'react';
import BorderGlow from './border-glow';
import { motion } from "framer-motion";

export default function ProjectsClient({ repos }: { repos: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [containerHeight, setContainerHeight] = useState('300vh');
  const [accentColor, setAccentColor] = useState('#d49353');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setAccentColor(customEvent.detail);
    };
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (trackRef.current) {
        if (window.innerWidth < 768) {
          setContainerHeight('auto');
          setTranslateX(0);
          return;
        }
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxScroll = Math.max(0, trackWidth - viewportWidth + 160);
        setContainerHeight(`${window.innerHeight + maxScroll}px`);
      }
    };
    
    setTimeout(updateSize, 100);
    window.addEventListener('resize', updateSize);
    
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      if (!containerRef.current || !trackRef.current) return;
      
      const { top, bottom } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslateX = Math.max(0, trackWidth - viewportWidth + 160); 

      if (top <= 0 && bottom >= windowHeight) {
        const scrollableDistance = containerRef.current.scrollHeight - windowHeight;
        const scrolledDistance = -top;
        const boundedProgress = Math.max(0, Math.min(1, scrolledDistance / scrollableDistance));
        setTranslateX(boundedProgress * maxTranslateX);
      } else if (top > 0) {
        setTranslateX(0);
      } else if (bottom < windowHeight) {
        setTranslateX(maxTranslateX);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSize);
    };
  }, [repos]);

  return (
    <section id="projects" ref={containerRef} className="w-full relative bg-[#050505] text-white" style={{ height: containerHeight }}>
      <div className="md:sticky md:top-0 w-full md:h-screen md:overflow-hidden flex flex-col justify-center py-20 md:py-0">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-8 md:px-16 lg:px-24 mb-12 flex-shrink-0 z-10 relative"
        >
          <h2 className="text-4xl font-bold font-orbitron tracking-widest text-[var(--accent)] uppercase">Github // Archives</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          ref={trackRef} 
          className="flex flex-nowrap px-8 md:px-16 lg:px-24 gap-4 md:gap-8 items-stretch h-[350px] md:h-[400px] overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ transform: mounted && window.innerWidth < 768 ? 'none' : `translateX(-${translateX}px)`, transition: 'transform 0.1s ease-out' }}
        >
          {repos.length > 0 ? (
            repos.map((repo: any) => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 group overflow-visible relative flex h-full active:scale-[0.98] transition-transform duration-[200ms] ease-[var(--ease-ui)] snap-center"
              >
                <BorderGlow 
                  className="w-[300px] md:w-[450px] shrink-0 p-8 h-full"
                  glowColor="30 61 58"
                  backgroundColor="#050505"
                  colors={[accentColor, '#eab308', '#888888']}
                  animated={true}
                >
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-[var(--accent)] transition-colors font-orbitron truncate">{repo.name}</h3>
                  <p className="text-[#888888] text-sm md:text-base mb-6 line-clamp-3 md:line-clamp-4 flex-1 font-inter leading-relaxed">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-[#555555] mt-auto font-inter border-t border-white/5 pt-4">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[var(--accent)] inline-block shadow-[0_0_8px_rgba(212,147,83,0.8)]"></span>
                      {repo.language || 'Code'}
                    </span>
                    <span className="flex items-center gap-1">
                      ⭐ {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      🍴 {repo.forks_count}
                    </span>
                  </div>
                </BorderGlow>
              </a>
            ))
          ) : (
            <div className="text-[#888888] font-inter">Loading or no public repositories found...</div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
