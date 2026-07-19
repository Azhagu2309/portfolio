import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const LAYERS = [
  [{ x: 10, y: 20 }, { x: 10, y: 50 }, { x: 10, y: 80 }],
  [{ x: 50, y: 10 }, { x: 50, y: 40 }, { x: 50, y: 65 }, { x: 50, y: 90 }],
  [{ x: 90, y: 30 }, { x: 90, y: 60 }],
];

const edges: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
LAYERS[0].forEach((a, ai) =>
  LAYERS[1].forEach((b, bi) => {
    edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, delay: (ai + bi) * 0.15 });
  })
);
LAYERS[1].forEach((a, ai) =>
  LAYERS[2].forEach((b, bi) => {
    edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, delay: (ai + bi) * 0.12 + 0.3 });
  })
);

export default function NeuralNetworkMesh({ className = "" }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  const nodes = LAYERS.flat();

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {edges.map((e, i) => (
        <line
          key={i}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="rgba(0,229,255,0.14)"
          strokeWidth="0.35"
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={1.4}
          fill="rgba(0,229,255,0.7)"
          initial={{ opacity: 0.3 }}
          animate={reducedMotion ? { opacity: 0.6 } : { opacity: [0.25, 0.85, 0.25] }}
          transition={reducedMotion ? { duration: 0.6 } : { duration: 2.4, repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </svg>
  );
}
