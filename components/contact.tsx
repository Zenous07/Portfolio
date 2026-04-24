"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "connecting" | "transmitting" | "received">("idle");
  const [terminalLogs, setTerminalLogs] = useState<string[]>(["SYSTEM READY", "AWAITING INPUT..."]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const addLog = (log: string) => {
    setTerminalLogs(prev => [...prev, `> ${log}`].slice(-6));
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !email) {
      addLog("ERROR: INCOMPLETE DATA PACKET");
      return;
    }

    setStatus("connecting");
    addLog("ESTABLISHING ENCRYPTED LINK...");
    
    setTimeout(() => {
      setStatus("transmitting");
      addLog("UPLOADING NEURAL DATA...");
      
      setTimeout(() => {
        setStatus("received");
        addLog("TRANSMISSION SUCCESSFUL.");
        addLog("SIGNAL LOGGED.");
        setMessage("");
        setEmail("");
      }, 2000);
    }, 1500);
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [terminalLogs, isMounted]);

  return (
    <section id="contact" className="w-full relative bg-[#050505] text-white flex flex-col pt-32 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden font-inter z-10">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column: Branding & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[var(--accent)]"></div>
              <span className="font-orbitron text-[10px] tracking-[0.4em] text-[var(--accent)] uppercase">Comm-Link: Initialized</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-orbitron font-bold tracking-tighter mb-8 leading-none">
              READY TO <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>UPGRADE?</span>
            </h2>
            
            <p className="text-[#888888] text-sm md:text-base leading-relaxed max-w-md mb-12">
              Whether you need a high-performance interface, an AI-driven solution, or a complete digital overhaul, the signal is open.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-16">
              <div>
                <h4 className="font-orbitron text-[9px] tracking-[0.3em] text-[#444] uppercase mb-6">// Neural_Directory</h4>
                <ul className="space-y-4">
                  {[
                    { label: 'System_Init', href: '#home' },
                    { label: 'Core_Identity', href: '#about' },
                    { label: 'Neural_Graph', href: '#skills' },
                    { label: 'Career_Path', href: '#experience' },
                    { label: 'Project_Repo', href: '#projects' },
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[#888] font-orbitron text-[10px] tracking-widest uppercase hover:text-[var(--accent)] transition-colors flex items-center gap-2 group/link">
                        <span className="w-1 h-1 rounded-full bg-white/10 group-hover/link:bg-[var(--accent)] transition-colors"></span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-orbitron text-[9px] tracking-[0.3em] text-[#444] uppercase mb-6">// External_Nodes</h4>
                <ul className="space-y-4">
                  {[
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/bennett-joshua' },
                    { label: 'GitHub', href: 'https://github.com/Zenous07' },
                    { label: 'LeetCode', href: 'https://leetcode.com/BennettJoshua' },
                    { label: 'Download_CV', href: '#' },
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#888] font-orbitron text-[10px] tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 group/link">
                        <svg className="w-3 h-3 opacity-30 group-hover/link:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6 mb-16">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--accent)] group-hover:shadow-[0_0_10px_var(--accent)] transition-all">
                  <svg className="w-4 h-4 text-[#444] group-hover:text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[#888888] font-orbitron text-xs tracking-widest uppercase group-hover:text-white transition-colors">bennett.joshua@outlook.com</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
             <h1 className="text-[10vw] leading-none font-orbitron font-bold tracking-tighter lowercase opacity-5 select-none hover:opacity-10 transition-opacity duration-700">
               zenous
             </h1>
          </div>
        </div>

        {/* Right Column: Terminal Interface */}
        <div className="lg:col-span-7">
          <div className="relative group">
            {/* Terminal Frame Decor */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-white/10 pointer-events-none group-hover:border-[var(--accent)]/40 transition-colors"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-white/10 pointer-events-none group-hover:border-[var(--accent)]/40 transition-colors"></div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative group-hover:border-[var(--accent)]/20 transition-all duration-500">
              {/* Terminal Header */}
              <div className="bg-[#111] border-b border-white/5 px-6 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]/40"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/40"></div>
                </div>
                <div className="font-orbitron text-[9px] tracking-[0.2em] text-[#444] uppercase">Secure Transmission Portal v4.0</div>
              </div>

              {/* Terminal Output */}
              <div className="p-6 h-32 overflow-hidden font-mono text-[10px] text-[#444] bg-black/40">
                {terminalLogs.map((log, i) => (
                  <div key={i} className={`mb-1 ${i === terminalLogs.length - 1 ? 'text-[var(--accent)] animate-pulse' : ''}`}>
                    {log}
                  </div>
                ))}
                <div ref={terminalEndRef}></div>
              </div>

              {/* Terminal Form */}
              <form onSubmit={handleTransmit} className="p-8 space-y-8">
                <div className="relative">
                  <label className="absolute -top-2 left-4 bg-[#0a0a0a] px-2 font-orbitron text-[9px] tracking-[0.2em] text-[#444] uppercase z-10 group-focus-within:text-[var(--accent)] transition-colors">Encryption Key (Email)</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="USER@NETWORK.COM"
                    className="w-full bg-transparent border border-white/5 rounded-lg px-6 py-4 outline-none focus:border-[var(--accent)]/50 transition-all font-mono text-sm text-[var(--accent)] placeholder-[#222]"
                    disabled={status !== "idle"}
                  />
                </div>

                <div className="relative">
                  <label className="absolute -top-2 left-4 bg-[#0a0a0a] px-2 font-orbitron text-[9px] tracking-[0.2em] text-[#444] uppercase z-10 group-focus-within:text-[var(--accent)] transition-colors">Signal Data (Message)</label>
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="DESCRIBE_YOUR_OBJECTIVE..."
                    className="w-full bg-transparent border border-white/5 rounded-lg px-6 py-4 outline-none focus:border-[var(--accent)]/50 transition-all font-mono text-sm text-[var(--accent)] placeholder-[#222] resize-none"
                    disabled={status !== "idle"}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={status !== "idle"}
                  className={`w-full py-5 rounded-lg font-orbitron font-bold tracking-[0.3em] uppercase transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-4
                    ${status === "idle" ? 'bg-white text-black hover:bg-[var(--accent)]' : 'bg-[#111] text-[#444] cursor-not-allowed'}
                  `}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>Initiate Transmission</motion.span>
                    )}
                    {status === "connecting" && (
                      <motion.div key="connecting" className="flex items-center gap-3">
                         <div className="w-3 h-3 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
                         <span>Establishing...</span>
                      </motion.div>
                    )}
                    {status === "transmitting" && (
                      <motion.span key="transmitting" className="animate-pulse">Uploading...</motion.span>
                    )}
                    {status === "received" && (
                      <motion.span key="received" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-[var(--accent)]">SIGNAL_LOGGED</motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="w-full flex flex-col items-center mt-32">
        <div className="w-full h-[1px] bg-white/5 mb-12"></div>
        
        <div className="w-full flex flex-wrap justify-between items-center gap-8 mb-16">
          <div className="flex flex-wrap gap-6 md:gap-12 font-orbitron text-[10px] font-bold tracking-[0.2em] uppercase text-[#444]">
            {['Home', 'About', 'Projects', 'Github', 'LinkedIn', 'LeetCode'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[var(--accent)] transition-colors">{link}</a>
            ))}
          </div>
          <div className="text-[9px] font-orbitron tracking-[0.4em] text-[#333] uppercase">
            EST. 2026 // NEURAL_NET_SECURE
          </div>
        </div>
        
        <div className="w-full flex justify-between items-center text-[9px] text-[#444] font-orbitron tracking-[0.2em] uppercase">
          <p>© ZEOUS_LABS</p>
          <div className="flex items-center gap-4">
             <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/40 shadow-[0_0_5px_var(--accent)]"></span>
             <span>System Online</span>
          </div>
        </div>
      </div>

    </section>
  );
}
