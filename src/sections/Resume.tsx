import { motion } from "framer-motion";
import { Download, ShieldCheck, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "../components/ui/SectionHeading";
import MagneticButton from "../components/ui/MagneticButton";

export default function Resume() {
  return (
    <section id="resume" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Resume"
          title="One page, zero fluff"
          description="Preview it below, or grab the PDF."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass overflow-hidden rounded-2xl border border-cyan-400/20 p-4 sm:p-6"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
              <ShieldCheck size={13} /> ATS-Friendly Format
            </span>
            <div className="flex gap-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-cyan-300"
              >
                <ExternalLink size={13} /> Open in New Tab
              </a>
            </div>
          </div>

          <div className="aspect-[8.5/11] w-full overflow-hidden rounded-xl border border-white/10 bg-white">
            <object
              data={`${profile.resumeUrl}#toolbar=0`}
              type="application/pdf"
              className="h-full w-full"
              aria-label="Resume preview"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#0f172a] p-8 text-center">
                <p className="text-sm text-slate-300">
                  Inline preview isn&apos;t supported in this browser.
                </p>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-cyan-300 underline"
                >
                  Open the resume PDF directly
                </a>
              </div>
            </object>
          </div>

          <div className="mt-6 flex justify-center">
            <MagneticButton as="a" href={profile.resumeUrl} variant="primary">
              <Download size={16} /> Download Resume (PDF)
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
