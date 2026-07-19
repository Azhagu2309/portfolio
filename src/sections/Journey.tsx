import { motion } from "framer-motion";
import { journey } from "../data/journey";
import SectionHeading from "../components/ui/SectionHeading";
import GlowCard from "../components/ui/GlowCard";
import Chip from "../components/ui/Chip";
import { JourneyIcon } from "../lib/journeyIcons";

export default function Journey() {
  return (
    <section id="journey" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Journey"
          title="From first-year ECE to full-stack, AI-assisted systems"
          description="Milestones from campus, competitions, and the projects that shaped how I build."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-10">
            {journey.map((item, i) => {
              const alignRight = i % 2 === 1;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                  className={`relative pl-14 lg:w-1/2 lg:pl-0 ${
                    alignRight ? "lg:ml-auto lg:pl-12" : "lg:pr-12"
                  }`}
                >
                  <span
                    className={`absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border ${
                      item.needsContent
                        ? "border-amber-400/50 bg-amber-400/10 text-amber-300"
                        : "border-cyan-400/40 bg-[#0f172a] text-cyan-300 shadow-[0_0_20px_-6px_rgba(0,229,255,0.6)]"
                    } ${alignRight ? "lg:left-0" : "lg:left-auto lg:right-0 lg:translate-x-1/2"}`}
                  >
                    <JourneyIcon icon={item.icon} size={15} />
                  </span>

                  <GlowCard
                    className={`${item.needsContent ? "border-dashed border-amber-400/40" : ""}`}
                    tilt={false}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-cyan-300">{item.date}</span>
                      {item.needsContent && (
                        <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300">
                          Needs details
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.title}</h3>
                    {item.org && <p className="text-sm text-slate-400">{item.org}</p>}
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                    {item.tech && item.tech.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <Chip key={t} className="text-[11px]">
                            {t}
                          </Chip>
                        ))}
                      </div>
                    )}
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
