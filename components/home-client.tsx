"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import CareerPath from "@/components/career-path";
import ProjectsClient from "@/components/projects-client";
import LeetcodeClient from "@/components/leetcode-client";
import Contact from "@/components/contact";
import Terminal from "@/components/terminal";
import GithubTicker from "@/components/github-ticker";
import EasterEgg from "@/components/easter-egg";
import { useKonamiCode } from "@/hooks/useKonamiCode";

export default function HomeClient({ repos, leetcodeData }: { repos: any[], leetcodeData: any }) {
  const [isDevMode, setIsDevMode] = useState(false);
  
  // Z-E-N-O-U-S Easter Egg
  const konami = useKonamiCode(['z','e','n','o','u','s']);

  React.useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Only force scroll to top once on initial mount to counteract browser restoration
    const forceTop = () => {
      window.scrollTo(0, 0);
      if (typeof document !== 'undefined') {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    forceTop();
    const timer = setTimeout(forceTop, 150);

    const handleDevModeToggle = () => setIsDevMode(true);
    window.addEventListener('toggleDevMode', handleDevModeToggle);
    return () => {
      window.removeEventListener('toggleDevMode', handleDevModeToggle);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {konami.success && <EasterEgg onClose={konami.reset} />}
      
      {isDevMode ? (
        <Terminal onExit={() => setIsDevMode(false)} />
      ) : (
        <div className="flex flex-col bg-[#050505] w-full min-h-screen pb-10 relative">
          <Hero />
          <About />
          <Skills />
          <CareerPath />
          <ProjectsClient repos={repos} />
          <LeetcodeClient data={leetcodeData} />
          <Contact />
          <GithubTicker />
        </div>
      )}
    </>
  );
}
