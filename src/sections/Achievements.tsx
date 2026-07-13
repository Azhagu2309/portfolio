import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star } from "lucide-react";
import { achievements } from "../data/achievements";
import SectionHeading from "../components/ui/SectionHeading";

const ICONS = [Trophy, Medal, Award, Star];

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition earned on the field"
          description="National-level hackathon finals and a technical quiz win."
        />

        <div className="relative space-y-10 border-l border-white/10 pl-10">
          {achievements.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <motion.span
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  className="absolute -left-[57px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/40 bg-[#0f172a] text-cyan-300 shadow-[0_0_20px_-6px_rgba(0,229,255,0.6)]"
                >
                  <Icon size={16} />
                </motion.span>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 group-hover:border-cyan-400/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                    <span className="font-mono text-xs text-cyan-300">{item.date}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
