import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { leadership } from "../data/achievements";
import GlowCard from "../components/ui/GlowCard";

export default function Leadership() {
  return (
    <section id="leadership" className="relative px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500"
        >
          Positions of Responsibility
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2">
          {leadership.map((role, i) => (
            <motion.div
              key={role.role + role.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard className="flex h-full items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-400/10 text-blue-300">
                  <Users size={18} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{role.role}</h3>
                  <p className="text-sm text-cyan-300/90">{role.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{role.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
