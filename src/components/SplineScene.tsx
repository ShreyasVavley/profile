"use client";
import React, { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export const SplineScene = ({ scene, className = "" }: { scene: string, className?: string }) => {
  return (
    <div className={className}>
      <Suspense fallback={<div className="h-full w-full bg-obsidian flex items-center justify-center text-white/10 uppercase tracking-[.5em] text-xs">Initializing Neural Link...</div>}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
};
