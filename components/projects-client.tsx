"use client";

import React, { useRef, useEffect, useState } from 'react';
import BorderGlow from './border-glow';

export default function ProjectsClient({ repos }: { repos: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [containerHeight, setContainerHeight] = useState('300vh');
  const [accentColor, setAccentColor] = useState('#d49353');

  useEffect(() => {
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
        // Adding 160px padding at the end for good measure
        const maxScroll = Math.max(0, trackWidth - viewportWidth + 160);
        // Map 1px vertical scroll to 1px horizontal scroll exactly
        setContainerHeight(`${window.innerHeight + maxScroll}px`);
      }
    };
    
    // Slight delay to ensure DOM is fully painted
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

      // If the sticky container is pinned (section is passing through viewport)
      if (top <= 0 && bottom >= windowHeight) {
        const scrollableDistance = containerRef.current.scrollHeight - windowHeight;
        const scrolledDistance = -top;
        const boundedProgress = Math.max(0, Math.min(1, scrolledDistance / scrollableDistance));
        setTranslateX(boundedProgress * maxTranslateX);
      } else if (top > 0) {
        // Above the viewport
        setTranslateX(0);
      } else if (bottom < windowHeight) {
        // Below the viewport
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
    // The tall container that gives us vertical scroll runway
    <section id="projects" ref={containerRef} className="w-full relative bg-[#050505] text-white" style={{ height: containerHeight }}>
      
      {/* The sticky shell locking to the screen */}
      <div className="md:sticky md:top-0 w-full md:h-screen md:overflow-hidden flex flex-col justify-center py-20 md:py-0">
        
        <div className="px-8 md:px-16 lg:px-24 mb-12 flex-shrink-0 z-10 relative">
          <h2 className="text-4xl font-bold font-orbitron tracking-widest text-[var(--accent)] uppercase">Github // Archives</h2>
        </div>
        
        {/* The horizontally sliding track */}
        <div 
          ref={trackRef} 
          className="flex flex-nowrap px-8 md:px-16 lg:px-24 gap-4 md:gap-8 items-stretch h-[350px] md:h-[400px] overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ transform: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : `translateX(-${translateX}px)`, transition: 'transform 0.1s ease-out' }}
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
        </div>
      </div>
    </section>
  );
}
