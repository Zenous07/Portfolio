"use client";

import React, { useEffect, useState } from "react";
import { Activity } from "lucide-react";

// Standard GitHub SVG since Lucide removed brand icons
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function GithubTicker() {
  const [latestCommit, setLatestCommit] = useState<string | null>(null);
  const [timeAgo, setTimeAgo] = useState<string>("");

  useEffect(() => {
    const fetchGithubActivity = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Zenous07/events/public");
        if (!res.ok) throw new Error("API Limit or Error");
        
        const events = await res.json();
        // Find the most recent PushEvent
        const pushEvent = events.find((e: any) => e.type === "PushEvent");
        
        if (pushEvent) {
          const repoName = pushEvent.repo.name.split("/")[1];
          const commitMsg = pushEvent.payload.commits[0]?.message || "Updates made";
          const date = new Date(pushEvent.created_at);
          
          const now = new Date();
          const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);
          
          let timeString = `${diffInMinutes}m ago`;
          if (diffInMinutes > 60) {
            const hours = Math.floor(diffInMinutes / 60);
            timeString = `${hours}h ago`;
            if (hours > 24) {
              const days = Math.floor(hours / 24);
              timeString = `${days}d ago`;
            }
          }
          
          setLatestCommit(`Bennett pushed to '${repoName}': "${commitMsg}"`);
          setTimeAgo(timeString);
        } else {
          setLatestCommit("No recent push events found.");
        }
      } catch (err) {
        setLatestCommit("SYSTEM ONLINE // Tracking active repositories...");
      }
    };

    fetchGithubActivity();
  }, []);

  if (!latestCommit) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full h-8 bg-[#050505] border-t border-white/10 flex items-center overflow-hidden z-50 text-[10px] md:text-xs font-orbitron font-medium tracking-widest text-white/50">
      
      {/* Left Anchor */}
      <div className="flex items-center gap-2 px-4 bg-[#050505] h-full relative z-10 border-r border-white/10 shrink-0 uppercase text-accent">
        <Activity className="w-3 h-3 animate-pulse" />
        <span className="hidden sm:inline">LIVE FEED</span>
      </div>
      
      {/* Marquee Area */}
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap flex items-center gap-4 group hover:[animation-play-state:paused] cursor-default">
          <GithubIcon className="w-3 h-3 inline" />
          <span>{latestCommit}</span>
          {timeAgo && <span className="text-white/30">[{timeAgo}]</span>}
          <span className="mx-8 text-white/20">///</span>
          <GithubIcon className="w-3 h-3 inline" />
          <span>{latestCommit}</span>
          {timeAgo && <span className="text-white/30">[{timeAgo}]</span>}
          <span className="mx-8 text-white/20">///</span>
          <GithubIcon className="w-3 h-3 inline" />
          <span>{latestCommit}</span>
          {timeAgo && <span className="text-white/30">[{timeAgo}]</span>}
        </div>
      </div>
      
    </div>
  );
}
