import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import SectionHeading from "../components/ui/SectionHeading";
import GlowCard from "../components/ui/GlowCard";
import { SkillIcon } from "../lib/skillIcons";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit spanning silicon to software"
          description="Grouped by domain — hover any card to see it come alive."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (catIdx % 3) * 0.08 }}
            >
              <GlowCard className="h-full">
                <h3 className="font-display text-lg font-semibold text-white">{cat.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{cat.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      <SkillIcon icon={item.icon} size={14} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
