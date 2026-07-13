import type { ReactNode } from "react";
import { useTilt } from "../../hooks/useTilt";

interface Props {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

export default function GlowCard({ children, className = "", tilt = true }: Props) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(6);

  return (
    <div
      ref={tilt ? ref : undefined}
      onMouseMove={tilt ? onMouseMove : undefined}
      onMouseLeave={tilt ? onMouseLeave : undefined}
      style={{ transition: "transform 0.35s ease" }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-cyan-400/30 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(0,229,255,0.12), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
