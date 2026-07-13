import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { profile, education } from "../data/profile";
import SectionHeading from "../components/ui/SectionHeading";
import StatCounter from "../components/ui/StatCounter";
import Chip from "../components/ui/Chip";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering across the stack — from silicon to software"
          description="A quick look at who I am, where I study, and what keeps me building."
        />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base leading-relaxed text-slate-300">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.passions.map((p) => (
                <Chip key={p}>{p}</Chip>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 font-mono text-sm text-slate-400">
              <MapPin size={16} className="text-cyan-300" />
              {profile.location}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative border-l border-white/10 pl-8"
          >
            {education.map((edu) => (
              <div key={edu.institution} className="relative pb-2">
                <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/50 bg-[#050816]">
                  <GraduationCap size={13} className="text-cyan-300" />
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-cyan-300">{edu.duration}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{edu.institution}</h3>
                <p className="text-sm text-slate-400">{edu.affiliation}</p>
                <p className="mt-2 text-base text-slate-300">{edu.degree}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.coursework.map((c) => (
                    <Chip key={c} className="text-[11px]">
                      {c}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:grid-cols-4">
          {profile.stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
