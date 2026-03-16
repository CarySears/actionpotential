"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain } from "lucide-react";

const SIGNAL_STEPS = [
  { label: "Prospect encounters your brand", active: false, icon: "○" },
  { label: "They ask a question", active: false, icon: "○" },
  { label: "They seek clarity", active: true, icon: "◉" },
  { label: "They look for reassurance", active: true, icon: "◉" },
  { label: "Your system fires", active: true, icon: "⚡" },
  { label: "They move forward", active: true, icon: "→" },
] as const;

/** SVG representation of a neuron action-potential signal trace */
function SignalDiagram({ isInView }: { isInView: boolean }) {
  const w = 340, h = 200;
  // Define the signal path: flat baseline → resting → rapid spike → overshoot → recovery → plateau
  const baseline = 140;
  // Points describing the voltage trace (x, y)
  const pts: [number, number][] = [
    [0, baseline],
    [60, baseline],       // resting
    [80, baseline - 4],   // threshold reached
    [100, 28],            // peak depolarisation
    [120, 168],           // overshoot (hyperpolarisation)
    [155, baseline],      // recovery
    [200, baseline - 2],  // small propagation bump
    [230, 26],            // second spike (system fires)
    [250, 168],
    [270, baseline],
    [340, baseline],      // plateau / action taken
  ];

  const pathD = pts
    .map(([x, y], i) => (i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`))
    .join(" ");

  // Smooth bezier version for more organic look
  const smoothD = (() => {
    const tension = 0.35;
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [px, py] = pts[i - 1];
      const [cx2, cy2] = pts[i];
      const cpx1 = px + (cx2 - px) * tension;
      const cpy1 = py;
      const cpx2 = cx2 - (cx2 - px) * tension;
      const cpy2 = cy2;
      d += ` C ${cpx1.toFixed(1)} ${cpy1.toFixed(1)}, ${cpx2.toFixed(1)} ${cpy2.toFixed(1)}, ${cx2} ${cy2}`;
    }
    return d;
  })();

  // Stage annotation positions (x, label)
  const annotations: { x: number; label: string; active: boolean }[] = [
    { x: 30,  label: "Encounter",   active: false },
    { x: 90,  label: "Question",    active: false },
    { x: 122, label: "Clarity",     active: true  },
    { x: 170, label: "Reassurance", active: true  },
    { x: 240, label: "System fires ⚡", active: true },
    { x: 305, label: "Action",      active: true  },
  ];

  return (
    <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
      {/* Inner ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#2EA6D4]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 rounded-full bg-[#2EA6D4]/20 border border-[#2EA6D4]/40 flex items-center justify-center">
            <span className="text-[#2EA6D4] text-[9px] font-bold">V</span>
          </div>
          <span className="text-xs font-semibold text-[#e8f4f8]/70 uppercase tracking-widest">
            Action Potential — Signal Trace
          </span>
        </div>

        {/* SVG signal trace */}
        <div className="relative mb-5">
          <svg
            viewBox={`0 0 ${w} ${h}`}
            className="w-full"
            aria-label="Neuron action potential signal trace diagram"
            role="img"
          >
            <defs>
              <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#79C5C7" stopOpacity="0.4" />
                <stop offset="35%"  stopColor="#79C5C7" stopOpacity="0.5" />
                <stop offset="55%"  stopColor="#2EA6D4" stopOpacity="0.9" />
                <stop offset="70%"  stopColor="#1B75BB" stopOpacity="1"   />
                <stop offset="100%" stopColor="#00A79D" stopOpacity="0.9" />
              </linearGradient>

              {/* Animated path dash */}
              <style>{`
                @keyframes traceDraw {
                  from { stroke-dashoffset: 900; }
                  to   { stroke-dashoffset: 0; }
                }
                .trace-line {
                  stroke-dasharray: 900;
                  stroke-dashoffset: ${isInView ? 0 : 900};
                  animation: ${isInView ? "traceDraw 1.6s ease-out forwards" : "none"};
                }
              `}</style>
            </defs>

            {/* Grid lines */}
            {[60, 100, 145, 168].map((y) => (
              <line
                key={y}
                x1="0" y1={y} x2={w} y2={y}
                stroke="#79C5C7"
                strokeWidth="0.5"
                strokeOpacity="0.07"
                strokeDasharray="3 4"
              />
            ))}
            <line x1="0" y1={baseline} x2={w} y2={baseline}
              stroke="#79C5C7" strokeWidth="0.7" strokeOpacity="0.12" />

            {/* Y-axis label */}
            <text x="4" y="18" fill="#79C5C7" fontSize="7" opacity="0.5" fontFamily="monospace">
              +mV
            </text>
            <text x="4" y={baseline + 16} fill="#79C5C7" fontSize="7" opacity="0.4" fontFamily="monospace">
              0
            </text>
            <text x="4" y={h - 6} fill="#79C5C7" fontSize="7" opacity="0.35" fontFamily="monospace">
              −mV
            </text>

            {/* Threshold marker */}
            <line x1="75" y1={baseline - 4} x2="160" y2={baseline - 4}
              stroke="#FF8B66" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="3 3" />
            <text x="162" y={baseline - 2} fill="#FF8B66" fontSize="6.5" opacity="0.55" fontFamily="monospace">
              threshold
            </text>

            {/* Glow under spike areas */}
            <ellipse cx="108" cy="90" rx="28" ry="55" fill="#2EA6D4" fillOpacity="0.05" />
            <ellipse cx="238" cy="90" rx="28" ry="55" fill="#1B75BB" fillOpacity="0.06" />

            {/* Main signal trace */}
            <path
              d={smoothD}
              fill="none"
              stroke="url(#sigGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="trace-line"
            />

            {/* Annotation ticks & labels */}
            {annotations.map((ann, i) => (
              <g key={i}>
                <line
                  x1={ann.x} y1={baseline + 2}
                  x2={ann.x} y2={baseline + 10}
                  stroke={ann.active ? "#2EA6D4" : "#79C5C7"}
                  strokeWidth="1"
                  strokeOpacity={ann.active ? 0.6 : 0.25}
                />
                <text
                  x={ann.x}
                  y={baseline + 22}
                  textAnchor="middle"
                  fill={ann.active ? "#e8f4f8" : "#e8f4f8"}
                  fontSize="6.5"
                  fontFamily="system-ui, sans-serif"
                  opacity={ann.active ? 0.85 : 0.38}
                >
                  {ann.label}
                </text>
              </g>
            ))}

            {/* Peak annotation */}
            <text x="100" y="20" textAnchor="middle" fill="#2EA6D4" fontSize="6.5" opacity="0.6" fontFamily="monospace">
              depolarise
            </text>
            <text x="233" y="18" textAnchor="middle" fill="#1B75BB" fontSize="6.5" opacity="0.7" fontFamily="monospace">
              action!
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] text-[#e8f4f8]/55">
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-px bg-[#79C5C7]/50 inline-block" />
            Resting state
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-px bg-[#2EA6D4] inline-block" />
            System engaged
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-px bg-[#FF8B66]/60 inline-block" />
            Decision threshold
          </span>
        </div>

        {/* Animated tagline */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity }}
          className="mt-5 pt-4 border-t border-[#79C5C7]/8 text-center"
        >
          <span className="text-[10px] font-mono text-[#2EA6D4]/60 tracking-wider">
            signal propagating — threshold crossed — action taken
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function WhyName() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00A79D]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-sm mb-6">
              <Brain className="w-4 h-4" />
              Why &quot;Action Potential&quot;?
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              The name comes from{" "}
              <span className="gradient-text">neuroscience.</span>
            </h2>

            <div className="space-y-5 text-[#e8f4f8]/80 leading-relaxed">
              <p>
                An <span className="text-[#79C5C7] font-medium">action potential</span> is the
                electrical impulse that allows neurons to communicate — transmitting signals
                through the brain and triggering behavior.
              </p>
              <p>
                Without these signals, nothing moves. No thought becomes behavior. No intention
                becomes action.
              </p>
              <p className="text-[#e8f4f8]/80">
                <span className="text-white font-semibold">Businesses work the same way.</span> A
                prospect encounters your brand. They ask a question. They seek clarity. They look
                for reassurance.
              </p>
              <p className="text-lg font-semibold text-white">
                In that moment, how your system responds determines everything.{" "}
                <span className="gradient-text">Do they move forward — or move on?</span>
              </p>
            </div>

            {/* Stages as a compact visual list */}
            <div className="mt-8 space-y-1.5">
              {SIGNAL_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm ${
                    step.active
                      ? "bg-[#2EA6D4]/8 border border-[#2EA6D4]/18 text-[#e8f4f8]/90"
                      : "text-[#e8f4f8]/45"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 font-mono text-xs ${
                      step.active ? "text-[#2EA6D4]" : "text-[#e8f4f8]/25"
                    }`}
                  >
                    {step.active && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2EA6D4] node-pulse mr-1.5 align-middle" />
                    )}
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.label}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-[#79C5C7]/5 border border-[#79C5C7]/15">
              <p className="text-sm text-[#79C5C7] font-mono tracking-wide">
                From potential... to action.
              </p>
            </div>
          </motion.div>

          {/* Right: SVG signal trace diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SignalDiagram isInView={isInView} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
