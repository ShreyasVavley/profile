"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  title: string;
  subtitle: string;
  className?: string;
  accentColor?: string;
}

export const TiltCard = ({ title, subtitle, className = "", accentColor = "#3b82f6" }: TiltCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative h-[400px] w-[300px] rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-3xl transition-all hover:border-accent-blue/30 ${className}`}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at center, ${accentColor}, transparent 70%)` }}
      />
      
      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="flex h-full flex-col justify-between"
      >
        <div className="space-y-4">
          <div 
             className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10"
             style={{ transform: "translateZ(30px)" }}
          >
            <div className="h-6 w-6 rounded bg-accent-blue/50 blur-[8px]" />
          </div>
          <h3 style={{ transform: "translateZ(40px)" }} className="text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
          <p style={{ transform: "translateZ(20px)" }} className="text-sm text-white/50 leading-relaxed italic">
            "{subtitle}"
          </p>
        </div>
        
        <div 
          style={{ transform: "translateZ(60px)" }}
          className="h-1 w-12 bg-accent-blue rounded-full shadow-[0_0_10px_#3b82f6]"
        />
      </div>
    </motion.div>
  );
};
