"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Zap, Users, Building2 } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "M.A. Experimental Psychology", color: "#79C5C7" },
  { icon: GraduationCap, label: "M.S. User Experience Design", color: "#2EA6D4" },
  { icon: Brain, label: "Clinical neuropsychological testing and biofeedback research — Cleveland Clinic", color: "#00A79D" },
  { icon: Users, label: "Senior manager at Noom — led 10+ managers and 100+ individual contributors", color: "#1B75BB" },
  { icon: Building2, label: "Founding team member — Neura Health (virtual neurology clinic)", color: "#79C5C7" },
];

const intersections = [
  { label: "Behavioral Science", desc: "Understanding how humans make decisions" },
  { label: "AI & Technology", desc: "Building systems that scale" },
  { label: "UX Design", desc: "Creating experiences that convert" },
  { label: "Growth Marketing", desc: "Driving measurable outcomes" },
];

export default function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="founder" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2EA6D4]/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2EA6D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2EA6D4]/10 border border-[#2EA6D4]/20 text-[#2EA6D4] text-sm mb-6">
            Meet the Founder
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            The mind behind{" "}
            <span className="gradient-text">the engine.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Founder info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Avatar placeholder with neural glow */}
            <div className="relative w-fit mb-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#79C5C7]/30 to-[#1B75BB]/30 border border-[#79C5C7]/20 flex items-center justify-center overflow-hidden relative">
                <div className="text-4xl font-black gradient-text">C</div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#79C5C7]/5 to-[#1B75BB]/5" />
              </div>
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#79C5C7]/10 to-[#1B75BB]/10 blur-xl -z-10" />
              <div
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#00A79D] to-[#1B75BB] border-2 flex items-center justify-center"
                style={{ borderColor: "var(--color-bg)" }}
              >
                <Zap className="w-3 h-3 text-white" fill="white" />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-black text-white">Cary Sears</h3>
              <p className="text-[#79C5C7] font-medium">Founder & CEO</p>
            </div>

            <div className="space-y-4 text-[#e8f4f8]/82 leading-relaxed">
              <p>
                Cary is a UX strategist, applied behavioral scientist, and marketer with dual
                master&apos;s degrees in Experimental Psychology and User Experience Design.
              </p>
              <p>
                His passion is combining high-tech with high-touch to drive exceptional outcomes
                for businesses and customers.
              </p>
              <p className="text-[#e8f4f8]/80 font-medium">
                He founded ActionPotential.AI to blend behavioral science, UX strategy, and
                practical growth execution into one operating model.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
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

          {/* Right: Intersection visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h4 className="text-lg font-bold text-white mb-6">
                Where four disciplines meet
              </h4>

              {/* Venn-style intersection visual */}
              <div className="relative aspect-square max-w-xs mx-auto mb-8">
                {/* Center node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#79C5C7] to-[#1B75BB] flex items-center justify-center z-20 node-pulse">
                  <Zap className="w-7 h-7 text-white" fill="white" />
                </div>

                {/* Orbiting nodes */}
                {intersections.map((item, i) => {
                  const angle = (i / intersections.length) * Math.PI * 2 - Math.PI / 4;
                  const radius = 100;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const colors = ["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB"];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      {/* Connection line */}
                      <svg
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{ width: Math.abs(x) * 2 + 20, height: Math.abs(y) * 2 + 20 }}
                      />

                      <div
                        className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-center p-2 glass-card"
                        style={{ border: `1px solid ${colors[i]}30` }}
                      >
                        <span className="text-xs font-semibold text-white leading-tight">
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                  {intersections.map((_, i) => {
                    const angle = (i / intersections.length) * Math.PI * 2 - Math.PI / 4;
                    const radius = 100;
                    const x = 50 + (Math.cos(angle) * radius / 2);
                    const y = 50 + (Math.sin(angle) * radius / 2);
                    const colors = ["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB"];
                    return (
                      <line
                        key={i}
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke={colors[i]}
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Intersection descriptions */}
              <div className="space-y-3">
                {intersections.map((item, i) => {
                  const colors = ["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB"];
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: colors[i] }}
                      />
                      <div>
                        <span className="text-sm font-medium" style={{ color: colors[i] }}>
                          {item.label}
                        </span>
                        <span className="text-sm text-[#e8f4f8]/72"> — {item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 p-6 rounded-2xl bg-[#2EA6D4]/5 border border-[#2EA6D4]/15 relative"
            >
              <div className="absolute top-4 left-4 text-4xl text-[#2EA6D4]/20 font-serif leading-none">&ldquo;</div>
              <p className="text-[#e8f4f8]/88 italic text-sm leading-relaxed pt-4 pl-4">
                My passion is building systems where high-tech and high-touch reinforce each other.
                Technology should feel warm. Automation should feel human.
              </p>
              <footer className="mt-3 text-xs text-[#79C5C7] pl-4">— Cary Sears, Founder</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
