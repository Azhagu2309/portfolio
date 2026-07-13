import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto mb-14 max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-1 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
        <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-cyan-400" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      )}
    </motion.div>
  );
}
