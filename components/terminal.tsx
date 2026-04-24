"use client";

import React, { useState, useRef, useEffect } from "react";

interface TerminalProps {
  onExit: () => void;
}

export default function Terminal({ onExit }: TerminalProps) {
  const [history, setHistory] = useState<{ type: "input" | "output"; text: string }[]>([
    { type: "output", text: "ZENOUS OS [Version 10.0.19045.2965]" },
    { type: "output", text: "(c) Zenous Corporation. All rights reserved." },
    { type: "output", text: "" },
    { type: "output", text: "Type 'help' for a list of commands." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  useEffect(() => {
    // Focus input on mount and on any click anywhere in the terminal
    inputRef.current?.focus();
    const handleGlobalClick = () => inputRef.current?.focus();
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    // Echo input
    setHistory((prev) => [...prev, { type: "input", text: `C:\\Users\\Zenous> ${trimmedCmd}` }]);

    const lowerCmd = trimmedCmd.toLowerCase();
    
    setTimeout(() => {
      let outputText = "";

      switch (lowerCmd) {
        case "help":
          outputText = `Available commands:
  help       - Show this message
  whoami     - Display current user identity
  ls         - List files in current directory
  cat        - Read a file (e.g., cat bio.txt)
  skills     - List technical proficiencies
  resume     - Open official resume/CV
  clear      - Clear the terminal screen
  sudo       - Execute a command as superuser
  exit       - Return to the graphical interface`;
          break;
        case "whoami":
          outputText = "visitor\nAccess Level: GUEST";
          break;
        case "ls":
          outputText = "Directory of C:\\Users\\Zenous\n\n04/24/2026  10:00 AM    <DIR>          projects\n04/24/2026  10:01 AM               452 bio.txt\n04/24/2026  10:02 AM             1,024 resume.pdf";
          break;
        case "cat bio.txt":
        case "cat bio":
          outputText = "Bennett Joshua\nFull-Stack Developer & Design Engineer\nPassionate about building highly interactive, performant web applications that push the boundaries of design.";
          break;
        case "cat resume.pdf":
        case "cat resume":
        case "resume":
          window.open('/assets/resume.pdf', '_blank');
          outputText = "Opening C:\\Users\\Zenous\\resume.pdf in a new buffer...";
          break;
        case "skills":
          outputText = "[FRONTEND]\nReact, Next.js, TypeScript, TailwindCSS, Three.js, Framer Motion\n\n[BACKEND]\nNode.js, Python, PostgreSQL, GraphQL, Docker";
          break;
        case "sudo":
        case "sudo hire_bennett":
        case "sudo su":
          outputText = "Access Denied: This incident will be reported. (Just kidding, send an email to hire me!)";
          break;
        case "clear":
          setHistory([]);
          return;
        case "exit":
          onExit();
          return;
        default:
          if (lowerCmd.startsWith("cat ")) {
            outputText = `cat: ${trimmedCmd.split(" ")[1]}: No such file or directory`;
          } else {
            outputText = `'${trimmedCmd}' is not recognized as an internal or external command, operable program or batch file.`;
          }
      }

      setHistory((prev) => [...prev, { type: "output", text: outputText }]);
    }, 150); // slight artificial delay for realism
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-[#0c0c0c] text-[#00ff00] font-mono text-sm md:text-base p-4 overflow-y-auto w-full h-full">
      <div className="max-w-4xl mx-auto w-full">
        {history.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">
            {line.text}
          </div>
        ))}
        
        <div className="flex items-center mt-1">
          <span className="mr-2">C:\Users\Zenous&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-[#00ff00] font-mono"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
