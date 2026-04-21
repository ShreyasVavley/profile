"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SpotlightButton } from "@/components/SpotlightButton";
import { TiltCard } from "@/components/TiltCard";
import { GlassCard } from "@/components/GlassCard";
import { ObsidianToggle } from "@/components/ObsidianToggle";
import { AntigravityTerminal } from "@/components/Terminal";
import { SplineScene } from "@/components/SplineScene";
import { Brain, Cpu, MessageSquare, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Narrative Progress States
  const phase1Opacity = useTransform(smoothProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const phase2Opacity = useTransform(smoothProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
  const phase3Opacity = useTransform(smoothProgress, [0.5, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const phase4Opacity = useTransform(smoothProgress, [0.8, 0.9, 0.95, 1], [0, 1, 1, 0]);
  
  const [isAnalytics, setIsAnalytics] = useState(false);

  return (
    <main ref={containerRef} className="relative bg-obsidian text-white selection:bg-accent-blue/30 selection:text-white">
      <div className="noise-overlay" />
      
      {/* Fixed 3D Background with Stitch Motion */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ 
            scale: useTransform(smoothProgress, [0, 0.3], [1, 2.5]),
            filter: useTransform(smoothProgress, [0, 0.3, 0.5], ["blur(0px)", "blur(0px)", "blur(10px)"]),
            opacity: useTransform(smoothProgress, [0.5, 0.6], [1, 0.2])
          }}
          className="w-full h-full"
        >
          <SplineScene 
            scene="https://prod.spline.design/6Wq1Q7nS4Z3sn8Wj/scene.splinecode" 
            className="w-full h-full"
          />
        </motion.div>

        {/* Liquid-morphism Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ 
              backgroundColor: isAnalytics ? "rgba(139, 92, 246, 0.1)" : "rgba(59, 130, 246, 0.1)",
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-20"
          />
          <motion.div 
            animate={{ 
              backgroundColor: isAnalytics ? "rgba(59, 130, 246, 0.1)" : "rgba(139, 92, 246, 0.1)",
              x: [0, -80, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-20"
          />
        </div>

        <motion.div 
          className="absolute inset-0 transition-colors duration-1000"
          animate={{
            background: isAnalytics 
              ? "radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 70%)"
              : "radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"
          }}
        />
      </div>

      {/* Phase 1: Core */}
      <section className="relative h-screen flex flex-col items-center justify-center z-10">
        <motion.div 
          style={{ opacity: phase1Opacity }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/40 uppercase tracking-[0.5em] text-sm font-bold"
            >
              Creative Technologist
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black tracking-tighter"
            >
              Shreyas <span className="text-white/10">Vavley</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/50 font-light"
            >
              Building Intelligent Systems.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <SpotlightButton text="Initialize Neural Link" />
          </motion.div>
        </motion.div>
      </section>

      {/* Phase 2: The Interface (Nexus Stream) */}
      <section className="relative h-[150vh] flex items-center justify-center z-10">
        <motion.div 
          style={{ opacity: phase2Opacity }}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center gap-12"
        >
          <div className="text-center space-y-4 px-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Interface</h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
              Designing cinematic windows to digital worlds. Crafting high-fidelity, high-performance visual experiences.
            </p>
          </div>
          
          <TiltCard 
            title="Nexus Stream" 
            subtitle="Full-stack Cinematic OTT Platform"
            accentColor="#3b82f6"
          />
        </motion.div>
      </section>

      {/* Phase 3: The Intelligence (RAG & AI) */}
      <section className="relative h-[150vh] flex items-center justify-center z-10">
        <motion.div 
          style={{ opacity: phase3Opacity }}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center gap-12 px-6"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Intelligence</h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg">
              Architecting RAG systems for intelligent retrieval and automated reasoning.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-7xl">
            <div className="grid grid-cols-1 gap-6 w-full lg:w-1/2">
              <GlassCard 
                 title="Second Brain"
                 description="RAG-powered document analyzer utilizing FastAPI and ChromaDB for semantic retrieval."
                 icon={Brain}
                 delay={0.1}
              />
              <GlassCard 
                 title="Vavley AI"
                 description="Personal automation engine with desktop control through vision-language interaction."
                 icon={Cpu}
                 delay={0.3}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="hidden lg:block lg:w-1/2 relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 glass shadow-2xl group"
            >
              <img 
                src="/ai-specialist.png" 
                alt="AI Specialist Visualization" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/20" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 backdrop-blur-md translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                 <p className="text-white/80 font-mono text-xs mb-1 tracking-widest uppercase">System Core</p>
                 <h4 className="text-lg font-bold">RAG Architecture V4.2</h4>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Phase 4: The Analyst */}
      <section className="relative h-[150vh] flex items-center justify-center z-10">
        <motion.div 
          style={{ opacity: phase4Opacity }}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center gap-12 px-6"
        >
          <div className="text-center space-y-8 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Analyst</h2>
            <ObsidianToggle onToggle={setIsAnalytics} />
          </div>

          <motion.div 
            animate={{ 
              borderColor: isAnalytics ? "rgba(139, 92, 246, 0.3)" : "rgba(59, 130, 246, 0.3)",
              boxShadow: isAnalytics ? "0 0 50px rgba(139, 92, 246, 0.1)" : "0 0 50px rgba(59, 130, 246, 0.1)"
            }}
            className="w-full max-w-4xl glass p-12 rounded-[3rem] border transition-all duration-1000 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 space-y-6">
               <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors duration-1000 ${isAnalytics ? 'bg-accent-violet/20' : 'bg-accent-blue/20'}`}>
                 {isAnalytics ? <MessageSquare className="text-accent-violet" /> : <ShieldCheck className="text-accent-blue" />}
               </div>
               <h3 className="text-3xl font-bold">WhatsApp Pro Analyzer</h3>
               <p className="text-white/50 text-lg leading-relaxed">
                 High-fidelity data visualization and behavioral analysis for encrypted messaging platforms.
               </p>
               <div className="flex gap-4">
                 <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">Python</span>
                 <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">D3.js</span>
                 <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono">NLP</span>
               </div>
            </div>
            <div className="w-full md:w-1/2 aspect-video bg-black/20 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
               <div className={`absolute inset-0 blur-3xl opacity-20 transition-colors duration-1000 ${isAnalytics ? 'bg-accent-violet' : 'bg-accent-blue'}`} />
               <Zap className={`h-12 w-12 relative z-10 transition-colors duration-1000 ${isAnalytics ? 'text-accent-violet' : 'text-accent-blue'}`} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Phase 5: The Terminal */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center z-10 pb-32">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">System Access</h2>
          <p className="text-white/30 text-sm">Initialize direct connection to Vavley core.</p>
        </div>
        <AntigravityTerminal />
        
        <footer className="absolute bottom-12 w-full text-center">
          <p className="text-xs text-white/10 tracking-[1em] uppercase">Shreyas Vavley © 2026</p>
        </footer>
      </section>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }} 
        className="fixed top-0 left-0 right-0 h-1 bg-accent-blue origin-left z-50 pointer-events-none shadow-[0_0_10px_#3b82f6]"
      />
    </main>
  );
}
