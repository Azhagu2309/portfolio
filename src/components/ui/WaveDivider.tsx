import { motion } from "framer-motion";

export default function WaveDivider() {
  return (
    <div className="relative mx-auto my-4 h-14 w-full max-w-5xl overflow-hidden opacity-40">
      <svg viewBox="0 0 800 60" className="h-full w-full" preserveAspectRatio="none">
        <motion.path
          d="M0 30 Q 20 5, 40 30 T 80 30 T 120 30 T 160 30 T 200 30 T 240 30 T 280 30 T 320 30 T 360 30 T 400 30 T 440 30 T 480 30 T 520 30 T 560 30 T 600 30 T 640 30 T 680 30 T 720 30 T 760 30 T 800 30"
          fill="none"
          stroke="#00E5FF"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
