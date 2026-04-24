"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SKILLS = [
  // Web Cluster
  { id: 'react', label: 'React', x: 20, y: 30, size: 45, connections: ['nextjs', 'tailwind', 'astro'] },
  { id: 'nextjs', label: 'Next.js', x: 10, y: 50, size: 50, connections: ['react', 'tailwind', 'prisma'] },
  { id: 'astro', label: 'Astro', x: 20, y: 70, size: 40, connections: ['react', 'tailwind'] },
  { id: 'tailwind', label: 'Tailwind', x: 5, y: 20, size: 35, connections: ['react', 'nextjs', 'astro'] },
  
  // Data & AI Cluster
  { id: 'python', label: 'Python', x: 50, y: 30, size: 48, connections: ['sklearn', 'sql', 'matlab'] },
  { id: 'sklearn', label: 'Scikit-Learn', x: 40, y: 50, size: 42, connections: ['python'] },
  { id: 'sql', label: 'SQL', x: 60, y: 50, size: 40, connections: ['python', 'postgres', 'prisma'] },
  { id: 'postgres', label: 'Postgres', x: 50, y: 70, size: 42, connections: ['sql', 'prisma'] },
  { id: 'prisma', label: 'Prisma', x: 30, y: 50, size: 38, connections: ['nextjs', 'sql', 'postgres'] },

  // Engineering Cluster
  { id: 'ansys', label: 'Ansys', x: 80, y: 30, size: 45, connections: ['matlab', 'solidworks'] },
  { id: 'cadence', label: 'Cadence', x: 90, y: 50, size: 42, connections: ['matlab'] },
  { id: 'matlab', label: 'Matlab', x: 80, y: 70, size: 48, connections: ['python', 'ansys', 'cadence'] },
  { id: 'solidworks', label: 'SolidWorks', x: 70, y: 50, size: 40, connections: ['ansys'] },
];

export default function SkillsGraph() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
              x1={skill.x * 10}
              y1={skill.y * 10}
              x2={target.x * 10}
              y2={target.y * 10}
              stroke={isHighlighted ? "var(--accent)" : "#222"}
              strokeWidth={isHighlighted ? (isMobile ? 3 : 2) : (isMobile ? 1.5 : 1)}
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
    <div className="w-full h-[500px] md:h-[500px] bg-[#0a0a0a]/40 border border-white/5 rounded-2xl relative overflow-hidden group">
      {/* HUD Background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--accent)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="absolute top-4 left-6 flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></div>
        <span className="font-orbitron text-[9px] tracking-[0.4em] text-[var(--accent)] uppercase">Neural_Sync: Online</span>
      </div>

      <svg className="w-full h-full p-2 md:p-12" viewBox="0 150 1000 700" preserveAspectRatio="xMidYMid meet">
        {/* Connections */}
        {getConnections()}

        {/* Nodes */}
        {SKILLS.map((skill) => {
          const isHighlighted = hoveredNode === skill.id || (hoveredNode && skill.connections.includes(hoveredNode));
          const isPrimary = hoveredNode === skill.id;
          const nodeSize = isMobile ? skill.size * 3.2 : skill.size * 1.8; // Even larger for mobile

          return (
            <motion.g
              key={skill.id}
              onMouseEnter={() => setHoveredNode(skill.id)}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => setHoveredNode(hoveredNode === skill.id ? null : skill.id)}
              className="cursor-pointer"
            >
              {/* Outer Ring */}
              <motion.circle
                cx={skill.x * 10}
                cy={skill.y * 10}
                r={nodeSize / 2 + (isMobile ? 35 : 15)}
                fill="transparent"
                stroke={isHighlighted ? "var(--accent)" : "transparent"}
                strokeWidth={isMobile ? 4 : 2}
                strokeDasharray="4 4"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Node Body */}
              <motion.circle
                cx={skill.x * 10}
                cy={skill.y * 10}
                r={nodeSize / 2}
                fill={isPrimary ? "var(--accent)" : "#111"}
                stroke={isHighlighted ? "var(--accent)" : "#333"}
                strokeWidth={isMobile ? 5 : 2}
                animate={{ 
                  scale: isPrimary ? 1.2 : 1,
                }}
              />

              {/* Text */}
              <motion.text
                x={skill.x * 10}
                y={skill.y * 10}
                dy={isMobile ? "6" : "5"}
                textAnchor="middle"
                fill={isPrimary ? "#000" : (isHighlighted ? "#fff" : "#666")}
                className="font-orbitron font-bold tracking-wider pointer-events-none"
                style={{ fontSize: isMobile ? '48px' : '18px' }}
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
