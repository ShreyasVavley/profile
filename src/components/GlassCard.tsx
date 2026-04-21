"use client";
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface GlassCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export const GlassCard = ({ title, description, icon: Icon, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="glass animate-float p-8 rounded-[2.5rem] w-full max-w-md border border-white/5 hover:border-white/20 transition-all duration-700"
    >
      <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors">
        <Icon className="text-white h-7 w-7" />
      </div>
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-white/50 text-base leading-relaxed font-light">
        {description}
      </p>
    </motion.div>
  );
};
