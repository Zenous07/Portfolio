"use client";

import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE = [
  {
    role: "IEEE MTTS Student Chair",
    period: "Dec 2025 - Current",
    skills: ["Leadership", "Team Management", "Event Organizing"],
    type: "Leadership"
  },
  {
    role: "Intern @ Dewdas Technology",
    period: "April 2025 - June 2025",
    skills: ["Raspberry Pi", "Cloud Deploying", "Python", "YOLO", "React"],
    type: "Professional"
  },
  {
    role: "IEEE APS Webmaster",
    period: "Dec 2024 - Dec 2025",
    skills: ["Team Collaboration", "Digital Media", "Website Management", "Networking"],
    type: "Technical"
  },
  {
    role: "SWO LitSoc Senior Volunteer",
    period: "June 2024 - June 2025",
    skills: ["Event Organization", "Team Management", "Large-Scale Planning"],
    type: "Volunteering"
  },
  {
    role: "Event Volunteer",
    period: "Multiple Bodies",
    skills: ["CUESTIC Event Planning", "Organized Debate", "TechUtsav"],
    type: "Volunteering"
  }
];

const CERTIFICATES = [
  "Oracle Generative AI Professional",
  "Google - Basics of Google Compute Skills",
  "Dewdas Internship Certificate",
  "First in Extra-Curricular Activities",
  "NPTEL - Data Structures and Algorithms"
];

export default function CareerPath() {
  return (
    <section id="experience" className="w-full relative bg-[#050505] pt-24 pb-32 px-8 md:p-16 lg:p-24 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Experience Timeline */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-12">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]"></span>
              <span className="font-orbitron text-[10px] tracking-[0.4em] text-[var(--accent)] uppercase">Career_Timeline: Accessing</span>
            </div>

            <div className="relative border-l border-white/10 ml-4 space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-0 -left-[5px] w-[9px] h-[9px] rounded-full bg-[#222] border border-white/20 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:shadow-[0_0_10px_var(--accent)] transition-all duration-300"></div>
                  
                  <div className="bg-[#0a0a0a]/60 border border-white/5 rounded-xl p-8 hover:border-[var(--accent)]/30 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                      <div>
                        <h4 className="text-white font-orbitron text-sm md:text-base tracking-widest uppercase mb-1">{exp.role}</h4>
                        <span className="text-[10px] font-orbitron text-[#444] uppercase tracking-[0.2em]">{exp.period}</span>
                      </div>
                      <div className="px-3 py-1 rounded-sm border border-[var(--accent)]/20 text-[var(--accent)] text-[8px] font-orbitron uppercase tracking-widest bg-[var(--accent)]/5">
                        {exp.type}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 rounded-sm bg-white/5 text-[#888] text-[9px] font-inter border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certificates & Achievements */}
          <div className="w-full lg:w-[400px]">
             <div className="flex items-center gap-3 mb-12">
              <span className="w-2 h-2 rounded-full bg-white/40 shadow-[0_0_8px_white/20]"></span>
              <span className="font-orbitron text-[10px] tracking-[0.4em] text-[#666] uppercase">Validated_Credentials</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATES.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#0a0a0a] border border-white/5 rounded-lg p-5 flex items-center gap-5 group hover:border-[var(--accent)]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 shrink-0 rounded-full border border-white/5 flex items-center justify-center text-[#444] group-hover:text-[var(--accent)] transition-colors">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>
                  </div>
                  <span className="text-[#888] font-inter text-xs leading-tight group-hover:text-white transition-colors">{cert}</span>
                </motion.div>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="mt-12 p-8 rounded-2xl border border-[var(--accent)]/10 bg-[var(--accent)]/5 relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="text-[var(--accent)] font-orbitron font-bold text-[10px] tracking-[0.3em] uppercase mb-2">Current_Status</div>
                  <div className="text-white font-orbitron text-xl font-bold tracking-tighter mb-4">OPEN FOR <br />INNOVATION</div>
                  <p className="text-[#888] text-[10px] leading-relaxed mb-6 font-inter">
                    Seeking roles at the intersection of AI, Web, and Embedded Systems.
                  </p>
                  <a href="#contact" className="inline-block px-6 py-2 bg-white text-black font-orbitron font-bold text-[10px] tracking-widest uppercase hover:bg-[var(--accent)] transition-colors">
                    Signal Me
                  </a>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rotate-12 translate-x-12 -translate-y-4">
                  <svg viewBox="0 0 100 100" fill="var(--accent)">
                     <path d="M50 0L61.2 38.8H100L68.4 61.8L79.6 100L50 77L20.4 100L31.6 61.8L0 38.8H38.8L50 0Z" />
                  </svg>
               </div>
            </div>
          </div>

        </div>

      </div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex justify-evenly">
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white"></div>
        <div className="w-[1px] h-full bg-white"></div>
      </div>
    </section>
  );
}
