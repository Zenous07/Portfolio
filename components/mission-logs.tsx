"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LOGS = [
  { 
    id: '01', 
    date: '2026.04.12', 
    title: 'NEURAL_INTERFACE_LATENCY', 
    content: 'Optimizing WebSocket synchronization for real-time 3D environments. Reduced overhead by 40% using custom binary protocols.',
    tags: ['WebGL', 'WebSockets', 'Optimization']
  },
  { 
    id: '02', 
    date: '2026.03.28', 
    title: 'AGENTIC_WORKFLOW_ORCHESTRATION', 
    content: 'Developing recursive task-planning algorithms for autonomous AI agents. Implementing safe-guard gates for complex multi-step reasoning.',
    tags: ['AI', 'LLMs', 'Architecture']
  },
  { 
    id: '03', 
    date: '2026.02.15', 
    title: 'SCALABLE_DISTRIBUTED_SYSTEMS', 
    content: 'Architecting a global edge-computing network with 99.99% uptime. Leveraged Cloudflare Workers and D1 for low-latency data persistence.',
    tags: ['Backend', 'Edge', 'D1']
  }
];

function DecryptText({ text, isHovered }: { text: string, isHovered: boolean }) {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split('').map((char, index) => {
          if (index < iterations) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('')
      );

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1/3;
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered, text]);

  return <span className="font-mono">{displayText}</span>;
}

export default function MissionLogs() {
  const [hoveredLog, setHoveredLog] = useState<string | null>(null);

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-[1px] bg-[var(--accent)]/30"></div>
        <span className="font-orbitron text-[10px] tracking-[0.4em] text-[var(--accent)] uppercase">Accessing_Encrypted_Archives</span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {LOGS.map((log) => (
          <motion.div
            key={log.id}
            onMouseEnter={() => setHoveredLog(log.id)}
            onMouseLeave={() => setHoveredLog(null)}
            className="group relative bg-[#0a0a0a]/60 border border-white/5 p-6 rounded-xl overflow-hidden hover:border-[var(--accent)]/30 transition-all duration-500"
          >
            {/* Background Glitch Line */}
            <div className="absolute top-0 left-0 w-[2px] h-full bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/40 transition-all"></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col">
                <span className="font-orbitron text-[9px] text-[#444] mb-1 tracking-widest">LOG_REF_{log.id} // {log.date}</span>
                <h4 className="text-white font-orbitron text-sm tracking-widest uppercase group-hover:text-[var(--accent)] transition-colors">
                  <DecryptText text={log.title} isHovered={hoveredLog === log.id} />
                </h4>
              </div>
              <div className="flex gap-2">
                {log.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-orbitron px-2 py-0.5 border border-white/5 text-[#444] rounded-sm group-hover:border-[var(--accent)]/20 group-hover:text-[var(--accent)]/60 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[#666] font-inter text-xs leading-relaxed group-hover:text-[#888] transition-colors line-clamp-2">
              {log.content}
            </p>

            <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="text-[9px] font-orbitron text-[var(--accent)]/60">DECRYPTION_SUCCESSFUL</div>
               <div className="w-4 h-4 rounded-full border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)] text-[8px]">
                 →
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
