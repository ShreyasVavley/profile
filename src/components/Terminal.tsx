"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const AntigravityTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Shreyas Vavley System [Version 10.0.Obsidian]",
    "(c) 2026 Shreyas Vavley. All rights reserved.",
    "",
    "Type 'help' to begin."
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.toLowerCase().trim();
    let response: string[] = [];

    switch (cmd) {
      case "shreyas --info":
        response = [
          "Name: Shreyas Vavley",
          "Role: Creative Technologist & AI Architect",
          "Focus: RAG Systems, Intelligent Automation, Immersive UI",
          "Education: Computer Science Engineering"
        ];
        break;
      case "shreyas --socials":
        response = [
          "GitHub: github.com/shreyasvavley",
          "LinkedIn: linkedin.com/in/shreyasvavley",
          "Twitter: @shreyasvavley"
        ];
        break;
      case "shreyas --status":
        response = [
          "Status: SECURE",
          "Core: Antigravity-v4",
          "Environment: Midnight Obsidian",
          "AI Assistant: VavleyAI-v2.1 ONLINE"
        ];
        break;
      case "stitch --initialize":
        response = [
          "Initializing Neural Link...",
          "Mapping scroll progress to Spline camera...",
          "Syncing with Midnight Obsidian backend...",
          "CONNECTION ESTABLISHED."
        ];
        break;
      case "help":
        response = [
          "Available Commands:",
          "  shreyas --info      Display professional bio",
          "  shreyas --socials   Show connection links",
          "  shreyas --status    System diagnostics",
          "  stitch --initialize  Sync neural link",
          "  clear              Purge terminal output"
        ];
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        response = [`Command not found: '${cmd}'. Type 'help' for options.`];
    }

    setHistory([...history, `➜ ${input}`, ...response, ""]);
    setInput("");
  };

  return (
    <div className="w-full max-w-3xl glass rounded-2xl border border-white/5 overflow-hidden font-mono text-[11px] md:text-sm shadow-2xl">
      <div className="bg-white/[0.02] px-4 py-3 border-b border-white/5 flex items-center justify-between">
         <div className="flex gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/20 border border-red-400/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/40" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/20 border border-green-400/40" />
         </div>
         <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">Vavley-OS / v4.2.0</span>
      </div>
      <div 
        ref={scrollRef} 
        className="h-72 p-6 overflow-y-auto space-y-1 scrollbar-hide bg-black/20"
      >
        {history.map((line, i) => (
          <div key={i} className={`${line.startsWith("➜") ? "text-accent-blue" : line.includes("Available") ? "text-accent-violet font-bold" : "text-white/50"} leading-relaxed`}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-3 items-center pt-2">
           <span className="text-accent-blue font-bold">➜</span>
           <input
             autoFocus
             value={input}
             onChange={(e) => setInput(e.target.value)}
             className="bg-transparent border-none outline-none text-white w-full caret-accent-blue"
             spellCheck={false}
           />
        </form>
      </div>
    </div>
  );
};
