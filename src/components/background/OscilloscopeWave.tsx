import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const PATH =
  "M0,40 L60,40 L75,40 Q80,40 82,20 L88,60 L94,10 L100,40 Q102,40 110,40 L170,40 L185,40 Q190,40 192,20 L198,60 L204,10 L210,40 Q212,40 220,40 L280,40";

export default function OscilloscopeWave({ className = "" }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 280 80"
      className={`pointer-events-none ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0" y1="40" x2="280" y2="40" stroke="rgba(34,197,94,0.12)" strokeWidth="1" />
      <motion.path
        d={PATH}
        fill="none"
        stroke="rgba(34,197,94,0.55)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          reducedMotion
            ? { pathLength: 1, opacity: 0.55 }
            : { pathLength: [0, 1], opacity: [0, 0.55, 0.55, 0] }
        }
        transition={
          reducedMotion
            ? { duration: 0.6 }
            : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </svg>
  );
}
