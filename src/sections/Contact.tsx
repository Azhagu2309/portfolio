import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/profile";
import { sendContactEmail, isEmailConfigured } from "../lib/emailjs";
import SectionHeading from "../components/ui/SectionHeading";
import MagneticButton from "../components/ui/MagneticButton";

type Status = "idle" | "sending" | "success" | "error";

const contactPoints = [
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FaLinkedin, label: "LinkedIn", value: "azhagumuruganr", href: profile.linkedin },
  { icon: SiGithub, label: "GitHub", value: "Azhagu2309", href: profile.github },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    if (!isEmailConfigured) {
      const data = new FormData(formRef.current);
      const subject = encodeURIComponent(String(data.get("subject") || "Portfolio Contact"));
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await sendContactEmail(formRef.current);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something reliable"
          description="Open to core engineering roles and internships in Embedded Systems, VLSI, and AI-driven product engineering."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]" viewBox="0 0 300 300">
              <circle cx="150" cy="150" r="40" fill="none" stroke="#00E5FF" strokeWidth="1" />
              <circle cx="150" cy="150" r="80" fill="none" stroke="#00E5FF" strokeWidth="1" />
              <circle cx="150" cy="150" r="120" fill="none" stroke="#00E5FF" strokeWidth="1" />
              <line x1="150" y1="0" x2="150" y2="300" stroke="#00E5FF" strokeWidth="1" />
              <line x1="0" y1="150" x2="300" y2="150" stroke="#00E5FF" strokeWidth="1" />
              <circle cx="150" cy="150" r="3" fill="#22C55E" />
            </svg>

            <div className="relative space-y-5">
              {contactPoints.map((point) => (
                <a
                  key={point.label}
                  href={point.href}
                  target={point.href?.startsWith("http") ? "_blank" : undefined}
                  rel={point.href?.startsWith("http") ? "noreferrer" : undefined}
                  data-cursor={point.href ? "link" : undefined}
                  className={`flex items-center gap-3 rounded-xl border border-white/5 bg-[#0f172a]/60 p-3 transition-colors ${
                    point.href ? "hover:border-cyan-400/40" : ""
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                    <point.icon size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{point.label}</p>
                    <p className="text-sm text-slate-200">{point.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass space-y-4 rounded-2xl border border-white/10 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#0f172a]/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#0f172a]/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className="w-full rounded-lg border border-white/10 bg-[#0f172a]/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                placeholder="Role, collaboration, project..."
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-white/10 bg-[#0f172a]/60 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-cyan-400/60"
                placeholder="Tell me a bit about the opportunity..."
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton type="submit" variant="primary" className="text-[#050816]">
                {status === "sending" ? "Sending..." : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </MagneticButton>

              {status === "success" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400">
                  <CheckCircle2 size={16} /> Message sent — thank you!
                </span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-red-400">
                  <AlertCircle size={16} /> Something went wrong — try email directly.
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
