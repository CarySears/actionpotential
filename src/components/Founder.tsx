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
  { label: "Behavioral Science", desc: "Understanding how humans make decisions", color: "#79C5C7" },
  { label: "AI & Technology", desc: "Building systems that scale", color: "#2EA6D4" },
  { label: "UX Design", desc: "Creating experiences that convert", color: "#00A79D" },
  { label: "Growth Marketing", desc: "Driving measurable outcomes", color: "#1B75BB" },
];

export default function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="founder" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-6 mx-auto w-fit">
            <span>Meet the Founder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-strong)] mb-4">
            The mind behind{" "}
            <span className="gradient-text">the engine.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Founder info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-fit mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--teal-light)]/15 to-[var(--blue-deep)]/15 border border-[var(--teal-light)]/12 flex items-center justify-center overflow-hidden">
                <div className="text-3xl font-bold gradient-text">C</div>
              </div>
              <div
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--teal-green)] to-[var(--blue-deep)] border-2 flex items-center justify-center"
                style={{ borderColor: "var(--color-bg)" }}
              >
                <Zap className="w-2.5 h-2.5 text-white" fill="white" />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[var(--color-text-strong)]">Cary Sears</h3>
              <p className="text-[var(--teal-light)]/60 font-medium text-sm">Founder & CEO</p>
            </div>

            <div className="space-y-4 text-sm text-[var(--color-text)]/60 leading-relaxed">
              <p>
                Cary is a UX strategist, applied behavioral scientist, and marketer with dual
                master&apos;s degrees in Experimental Psychology and User Experience Design.
              </p>
              <p>
                His passion is combining high-tech with high-touch to drive exceptional outcomes
                for businesses and customers.
              </p>
              <p className="text-[var(--color-text)]/70 font-medium">
                He founded ActionPotential.AI to blend behavioral science, UX strategy, and
                practical growth execution into one operating model.
              </p>
            </div>

            <div className="mt-8 space-y-2.5">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: cred.color + "10" }}
                  >
                    <cred.icon className="w-3 h-3" style={{ color: cred.color + "80" }} />
                  </div>
                  <span className="text-xs text-[var(--color-text)]/55">{cred.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Intersection diagram */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contained-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-30" />

              <div className="relative z-10">
                <h4 className="text-base font-semibold text-[var(--color-text-strong)] mb-8">
                  Where four disciplines meet
                </h4>

                {/* Diagram: center node with connections */}
                <div className="relative aspect-square max-w-[280px] mx-auto mb-8">
                  {/* Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--teal-light)]/20 to-[var(--blue-deep)]/20 border border-[var(--teal-light)]/20 flex items-center justify-center z-20">
                    <Zap className="w-6 h-6 text-[var(--teal-light)]" />
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                    {intersections.map((item, i) => {
                      const angle = (i / intersections.length) * Math.PI * 2 - Math.PI / 4;
                      const radius = 90;
                      const x = 50 + (Math.cos(angle) * radius / 140) * 100;
                      const y = 50 + (Math.sin(angle) * radius / 140) * 100;
                      return (
                        <line
                          key={i}
                          x1="50%"
                          y1="50%"
                          x2={`${x}%`}
                          y2={`${y}%`}
                          stroke={item.color}
                          strokeWidth="1"
                          strokeOpacity="0.15"
                          strokeDasharray="4 4"
                        />
                      );
                    })}
                  </svg>

                  {/* Orbiting nodes */}
                  {intersections.map((item, i) => {
                    const angle = (i / intersections.length) * Math.PI * 2 - Math.PI / 4;
                    const radius = 90;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        <div
                          className="w-[72px] h-[72px] rounded-xl flex flex-col items-center justify-center text-center p-2 bg-[var(--color-surface)] border"
                          style={{ borderColor: item.color + "18" }}
                        >
                          <span className="text-[10px] font-medium text-[var(--color-text-strong)] leading-tight">
                            {item.label}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Descriptions */}
                <div className="space-y-2.5">
                  {intersections.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: item.color + "50" }}
                      />
                      <div>
                        <span className="text-sm font-medium" style={{ color: item.color + "80" }}>
                          {item.label}
                        </span>
                        <span className="text-sm text-[var(--color-text)]/40"> — {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-5 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] relative"
            >
              <div className="absolute top-4 left-4 text-3xl text-[var(--blue-bright)]/15 font-serif leading-none">&ldquo;</div>
              <p className="text-sm text-[var(--color-text)]/60 italic leading-relaxed pt-4 pl-4">
                My passion is building systems where high-tech and high-touch reinforce each other.
                Technology should feel warm. Automation should feel human.
              </p>
              <footer className="mt-3 text-xs text-[var(--teal-light)]/40 pl-4">— Cary Sears, Founder</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
