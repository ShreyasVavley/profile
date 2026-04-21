import React, { Suspense, lazy, Component, ErrorInfo, ReactNode } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const Fallback = () => (
  <div className="h-full w-full flex items-center justify-center text-white/10 uppercase tracking-[.5em] text-xs">
    Initializing Neural Link...
  </div>
);

// Error boundary so a Spline buffer crash never takes down the whole page
interface ErrorState { hasError: boolean }
class SplineErrorBoundary extends Component<{ children: ReactNode }, ErrorState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }
  componentDidCatch(error: Error, _info: ErrorInfo) {
    console.warn("[SplineScene] 3D scene failed to load:", error.message);
  }
  render() {
    if (this.state.hasError) {
      // Graceful fallback — animated gradient blob replaces spline
      return (
        <div className="h-full w-full relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.08) 50%, transparent 100%)",
              animation: "pulse 8s ease-in-out infinite",
            }}
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export const SplineScene = ({ scene, className = "" }: { scene: string; className?: string }) => {
  return (
    <div className={className}>
      <SplineErrorBoundary>
        <Suspense fallback={<Fallback />}>
          <Spline scene={scene} />
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
};
