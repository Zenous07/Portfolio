"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILLS = [
  // Languages Cluster
  { id: 'python', label: 'Python', x: 20, y: 15, size: 45, connections: ['cpp', 'js', 'yolo', 'fastapi'] },
  { id: 'cpp', label: 'C++', x: 10, y: 10, size: 40, connections: ['python', 'matlab'] },
  { id: 'js', label: 'Javascript', x: 30, y: 15, size: 42, connections: ['ts', 'react', 'nextjs'] },
  { id: 'ts', label: 'TypeScript', x: 35, y: 25, size: 45, connections: ['js', 'nextjs', 'solidity'] },
  { id: 'solidity', label: 'Solidity', x: 45, y: 15, size: 40, connections: ['ts', 'postgres'] },
  { id: 'sql', label: 'SQL', x: 30, y: 35, size: 40, connections: ['postgres', 'prisma'] },

  // Backend & Cloud Cluster
  { id: 'fastapi', label: 'FastAPI', x: 15, y: 40, size: 42, connections: ['python', 'postgres'] },
  { id: 'nextjs', label: 'Next.js', x: 25, y: 50, size: 48, connections: ['js', 'ts', 'react', 'prisma'] },
  { id: 'postgres', label: 'PostgreSQL', x: 10, y: 60, size: 45, connections: ['sql', 'prisma', 'fastapi'] },
  { id: 'prisma', label: 'Prisma', x: 20, y: 70, size: 38, connections: ['nextjs', 'postgres', 'sql'] },
  { id: 'cloudflare', label: 'Cloudflare', x: 5, y: 50, size: 40, connections: ['nextjs'] },
  { id: 'aws', label: 'AWS', x: 5, y: 35, size: 38, connections: ['fastapi', 'linux'] },

  // ML & AI Cluster
  { id: 'yolo', label: 'YOLOv8', x: 75, y: 15, size: 45, connections: ['python', 'sklearn'] },
  { id: 'crewai', label: 'CrewAI', x: 85, y: 10, size: 42, connections: ['python', 'llm'] },
  { id: 'sklearn', label: 'Scikit-Learn', x: 90, y: 25, size: 40, connections: ['python', 'yolo'] },
  { id: 'llm', label: 'LLM (Llama 3)', x: 70, y: 25, size: 48, connections: ['python', 'crewai'] },

  // DevOps & Infrastructure
  { id: 'gha', label: 'GitHub Actions', x: 80, y: 45, size: 40, connections: ['git', 'linux'] },
  { id: 'git', label: 'Git', x: 90, y: 50, size: 38, connections: ['gha'] },
  { id: 'linux', label: 'Linux', x: 70, y: 55, size: 42, connections: ['aws', 'modal'] },
  { id: 'modal', label: 'Modal', x: 85, y: 65, size: 40, connections: ['linux', 'python'] },

  // Frontend & UI Cluster
  { id: 'react', label: 'React', x: 40, y: 55, size: 45, connections: ['js', 'nextjs', 'tailwind', 'astro'] },
  { id: 'tailwind', label: 'Tailwind', x: 50, y: 65, size: 35, connections: ['react', 'nextjs', 'astro'] },
  { id: 'astro', label: 'AstroJS', x: 35, y: 75, size: 38, connections: ['react', 'tailwind'] },
  { id: 'framer', label: 'Framer Motion', x: 45, y: 85, size: 35, connections: ['react'] },

  // Engineering Core (ECE)
  { id: 'ansys', label: 'Ansys', x: 65, y: 75, size: 45, connections: ['matlab', 'solidworks'] },
  { id: 'cadence', label: 'Cadence', x: 75, y: 85, size: 42, connections: ['matlab'] },
  { id: 'matlab', label: 'Matlab', x: 85, y: 80, size: 48, connections: ['python', 'ansys', 'cadence'] },
  { id: 'solidworks', label: 'SolidWorks', x: 95, y: 70, size: 40, connections: ['ansys'] },
];

export default function SkillsGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const getConnections = () => {
    const lines: React.ReactNode[] = [];
    SKILLS.forEach(skill => {
      skill.connections.forEach(targetId => {
        const target = SKILLS.find(s => s.id === targetId);
        if (target) {
          const isHighlighted = hoveredNode === skill.id || hoveredNode === target.id;
          lines.push(
            <motion.line
              key={`${skill.id}-${targetId}`}
              x1={`${skill.x}%`}
              y1={`${skill.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke={isHighlighted ? "var(--accent)" : "#222"}
              strokeWidth={isHighlighted ? 2 : 1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHighlighted ? 0.8 : 0.3,
                stroke: isHighlighted ? "var(--accent)" : "#222"
              }}
              transition={{ duration: 1 }}
              style={{ filter: isHighlighted ? 'drop-shadow(0 0 5px var(--accent))' : 'none' }}
            />
          );
        }
      });
    });
    return lines;
  };

  return (
    <div className="w-full h-[600px] bg-[#0a0a0a]/40 border border-white/5 rounded-2xl relative overflow-hidden group">
      {/* HUD Background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="absolute top-4 left-6 flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></div>
        <span className="font-orbitron text-[9px] tracking-[0.4em] text-[var(--accent)] uppercase">Neural_Sync: Online</span>
      </div>

      <svg className="w-full h-full p-4 md:p-12">
        {/* Connections */}
        {getConnections()}

        {/* Nodes */}
        {SKILLS.map((skill) => {
          const isHighlighted = hoveredNode === skill.id || (hoveredNode && skill.connections.includes(hoveredNode));
          const isPrimary = hoveredNode === skill.id;
          
          // Adjust sizes for mobile readability
          const nodeSize = isMobile ? skill.size * 0.8 : skill.size;

          return (
            <motion.g
              key={skill.id}
              onMouseEnter={() => setHoveredNode(skill.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => isMobile && setHoveredNode(hoveredNode === skill.id ? null : skill.id)}
              className="cursor-pointer"
            >
              {/* Outer Ring */}
              <motion.circle
                cx={`${skill.x}%`}
                cy={`${skill.y}%`}
                r={nodeSize / 2 + (isMobile ? 8 : 10)}
                fill="transparent"
                stroke={isHighlighted ? "var(--accent)" : "transparent"}
                strokeWidth={1}
                strokeDasharray="4 4"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Node Body */}
              <motion.circle
                cx={`${skill.x}%`}
                cy={`${skill.y}%`}
                r={nodeSize / 2}
                fill={isPrimary ? "var(--accent)" : "#111"}
                stroke={isHighlighted ? "var(--accent)" : "#333"}
                strokeWidth={2}
                animate={{ 
                  scale: isPrimary ? 1.2 : 1,
                }}
              />

              {/* Text */}
              <motion.text
                x={`${skill.x}%`}
                y={`${skill.y}%`}
                dy={isMobile ? "1.8em" : "4"}
                textAnchor="middle"
                fill={isPrimary ? (isMobile ? "white" : "#000") : (isHighlighted ? "#fff" : "#666")}
                className="font-orbitron font-bold tracking-wider pointer-events-none"
                style={{ fontSize: isMobile ? '10px' : '9px' }}
              >
                {skill.label}
              </motion.text>
            </motion.g>
          );
        })}
      </svg>

      {/* Detail Overlay */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-6 right-6 bg-[#111] border border-[var(--accent)]/30 p-4 rounded-lg pointer-events-none"
          >
            <div className="font-orbitron text-[8px] text-[var(--accent)] mb-1 uppercase tracking-widest">Node_Focus</div>
            <div className="text-white text-sm font-bold uppercase">{SKILLS.find(s => s.id === hoveredNode)?.label}</div>
            <div className="mt-2 flex gap-1">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-3 h-1 bg-[var(--accent)]/40"></div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
