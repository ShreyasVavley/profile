"use client";
import React, { useRef, useState } from "react";

export const SpotlightButton = ({ text }: { text: string }) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl transition-all hover:border-accent-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.3), transparent 70%)`,
        }}
      />
      <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-sm group-hover:text-accent-blue transition-colors">
        {text}
      </span>
    </button>
  );
};
