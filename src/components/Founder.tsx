"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Building2, GraduationCap, Users } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "M.A. Experimental Psychology", color: "#79C5C7" },
  { icon: GraduationCap, label: "M.S. User Experience Design", color: "#2EA6D4" },
  {
    icon: Brain,
    label: "Clinical neuropsychological testing and biofeedback research at Cleveland Clinic",
    color: "#00A79D",
  },
  {
    icon: Users,
    label: "Senior manager at Noom, leading 10+ managers and 100+ contributors",
    color: "#1B75BB",
  },
  { icon: Building2, label: "Founding team member at Neura Health", color: "#79C5C7" },
];

const intersections = [
  { label: "Behavioral science", desc: "How people actually decide" },
  { label: "UX strategy", desc: "How people move through systems" },
  { label: "Conversational marketing", desc: "How conversations convert" },
  { label: "Human-centered AI", desc: "How automation stays helpful" },
];

export default function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="founder" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2EA6D4]/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2EA6D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2EA6D4]/10 border border-[#2EA6D4]/20 text-[#2EA6D4] text-sm mb-6">
            Meet the Founder
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Expertise behind
            <span className="gradient-text"> the method.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-fit mb-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#79C5C7]/30 to-[#1B75BB]/30 border border-[#79C5C7]/20 flex items-center justify-center overflow-hidden relative">
                <div className="text-4xl font-black gradient-text">C</div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#79C5C7]/5 to-[#1B75BB]/5" />
              </div>
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#79C5C7]/10 to-[#1B75BB]/10 blur-xl -z-10" />
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-black text-white">Cary Sears</h3>
              <p className="text-[#79C5C7] font-medium">Founder & CEO</p>
            </div>

            <div className="space-y-4 text-[#e8f4f8]/82 leading-relaxed">
              <p>
                Cary combines behavioral science, UX, and practical marketing operations to build
                conversion systems that teams can actually run.
              </p>
              <p>
                The goal is straightforward: reduce friction, improve response quality, and create
                more real conversations.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: cred.color + "15" }}
                  >
                    <cred.icon className="w-3.5 h-3.5" style={{ color: cred.color }} />
                  </div>
                  <span className="text-sm text-[#e8f4f8]/80">{cred.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h4 className="text-lg font-bold text-white mb-6">
                Operating framework
              </h4>
              <div className="space-y-3">
                {intersections.map((item, i) => {
                  const colors = ["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB"];
                  return (
                    <div key={item.label} className="rounded-xl border border-[#79C5C7]/14 bg-[#e8f4f8]/[0.02] p-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: colors[i] }}
                        />
                        <p className="text-sm font-semibold" style={{ color: colors[i] }}>
                          {item.label}
                        </p>
                      </div>
                      <p className="text-sm text-[#e8f4f8]/74 mt-2">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-[#2EA6D4]/15 bg-[#2EA6D4]/6 p-4">
                <p className="text-sm text-[#e8f4f8]/82">
                  High-tech and high-touch are designed together, not bolted on.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
