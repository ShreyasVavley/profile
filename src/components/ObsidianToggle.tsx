"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ObsidianToggleProps {
  onToggle: (val: boolean) => void;
}

export const ObsidianToggle = ({ onToggle }: ObsidianToggleProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <div className="flex items-center gap-6 glass p-2 px-6 rounded-full border border-white/5">
      <span className={`text-xs tracking-[0.2em] uppercase transition-all duration-500 ${!isOn ? 'text-accent-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] font-bold' : 'text-white/20'}`}>
        Logic
      </span>
      
      <div 
        onClick={toggle}
        className="relative h-8 w-16 cursor-pointer rounded-full bg-white/5 p-1 transition-all border border-white/10 overflow-hidden"
      >
        <motion.div
          animate={{ 
            x: isOn ? 32 : 0,
            backgroundColor: isOn ? "rgba(139, 92, 246, 1)" : "rgba(59, 130, 246, 1)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="h-full aspect-square rounded-full shadow-2xl relative z-10"
        >
            <div className={`absolute inset-0 blur-[8px] opacity-50 ${isOn ? 'bg-accent-violet' : 'bg-accent-blue'}`} />
        </motion.div>
      </div>

      <span className={`text-xs tracking-[0.2em] uppercase transition-all duration-500 ${isOn ? 'text-accent-violet drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] font-bold' : 'text-white/20'}`}>
        Analytics
      </span>
    </div>
  );
};
