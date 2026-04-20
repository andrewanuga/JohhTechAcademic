"use client";
import { useEffect, useRef } from "react";

export function SpotlightBg({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const spot = spotRef.current;
    if (!el || !spot) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(245,197,24,0.07), transparent 60%)`;
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <div ref={spotRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, transition: "background .1s" }} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

export function GlowCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--gx", `${x}%`);
      el.style.setProperty("--gy", `${y}%`);
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={ref} className="glow-card" style={style}>
      {children}
      <style>{`
        .glow-card {
          position: relative;
          isolation: isolate;
        }
        .glow-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: radial-gradient(200px circle at var(--gx,50%) var(--gy,50%), rgba(245,197,24,0.18), transparent 70%);
          opacity: 0;
          transition: opacity .3s;
          pointer-events: none;
          z-index: -1;
        }
        .glow-card:hover::before { opacity: 1; }
      `}</style>
    </div>
  );
}

export function MovingBorder({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="moving-border" style={style}>
      {children}
      <style>{`
        .moving-border {
          position: relative;
          isolation: isolate;
        }
        .moving-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(from var(--angle,0deg), transparent 0%, var(--accent) 40%, transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: rotateBorder 4s linear infinite;
          pointer-events: none;
        }
        @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes rotateBorder { to { --angle: 360deg; } }
      `}</style>
    </div>
  );
}
