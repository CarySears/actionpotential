"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const NODE_LABELS = ["Attract", "Engage", "Nurture", "Convert", "Retain", "Amplify"] as const;
const NODE_COLORS = ["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB", "#2EA6D4", "#79C5C7"] as const;

function EngineLoopDiagram() {
  const cx = 155, cy = 155, r = 112, nr = 28;

  const positions = NODE_LABELS.map((_, i) => {
    const angle = -Math.PI / 2 + (i * Math.PI * 2) / 6;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  });

  // Build arc-path direction arrows between adjacent nodes
  const arrowPaths = positions.map((pos, i) => {
    const next = positions[(i + 1) % 6];
    // Midpoint of the chord, then push it outward from center
    const mx = (pos.x + next.x) / 2;
    const my = (pos.y + next.y) / 2;
    const dx = mx - cx;
    const dy = my - cy;
    const len = Math.hypot(dx, dy) || 1;
    // control point slightly beyond ring radius
    const cpx = cx + (dx / len) * (r + 18);
    const cpy = cy + (dy / len) * (r + 18);
    // Shorten start/end so arrows begin/end near node edges
    const shrink = nr + 4;
    const d0x = dx / len;
    const d0y = dy / len;
    const sx = pos.x + d0x * shrink * 0.6;
    const sy = pos.y + d0y * shrink * 0.6;
    const ex = next.x - d0x * shrink * 0.6;
    const ey = next.y - d0y * shrink * 0.6;
    return `M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  });

  return (
    <svg
      viewBox="0 0 310 310"
      className="w-full max-w-[290px] mx-auto select-none"
      aria-label="Behavioral Engine 6-stage growth loop diagram"
      role="img"
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2EA6D4" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2EA6D4" stopOpacity="0" />
        </radialGradient>
        <marker id="arr" markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto">
          <polygon points="0 0, 5 2, 0 4" fill="#2EA6D4" fillOpacity="0.45" />
        </marker>
      </defs>

      {/* Center ambient glow */}
      <circle cx={cx} cy={cy} r="80" fill="url(#heroGlow)" />

      {/* Dashed ring track */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="#79C5C7"
        strokeWidth="1"
        strokeOpacity="0.18"
        strokeDasharray="4 5"
      />

      {/* Direction arrows between nodes */}
      {arrowPaths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={NODE_COLORS[i]}
          strokeWidth="1.1"
          strokeOpacity="0.28"
          markerEnd="url(#arr)"
        />
      ))}

      {/* Center label */}
      <text x={cx} y={cy - 11} textAnchor="middle" fill="#e8f4f8" fontSize="12" fontWeight="700">
        Behavioral
      </text>
      <text x={cx} y={cy + 4} textAnchor="middle" fill="#e8f4f8" fontSize="12" fontWeight="700">
        Engine™
      </text>
      <text x={cx} y={cy + 20} textAnchor="middle" fill="#79C5C7" fontSize="8.5" opacity="0.7">
        6-stage growth loop
      </text>

      {/* Stage nodes */}
      {NODE_LABELS.map((label, i) => {
        const { x, y } = positions[i];
        const color = NODE_COLORS[i];
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={nr + 6} fill={color} fillOpacity="0.05" />
            <circle
              cx={x} cy={y} r={nr}
              fill={color}
              fillOpacity="0.12"
              stroke={color}
              strokeWidth="1.5"
              strokeOpacity="0.65"
            />
            <text
              x={x} y={y - 5}
              textAnchor="middle"
              fill={color}
              fontSize="8"
              fontWeight="700"
              opacity="0.85"
            >
              {`0${i + 1}`}
            </text>
            <text
              x={x} y={y + 7}
              textAnchor="middle"
              fill="#f0f9fb"
              fontSize="9.5"
              fontWeight="600"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

const stats = [
  { value: "24/7", label: "AI-powered coverage" },
  { value: "6", label: "Behavioral Engine stages" },
  { value: "1", label: "Unified full-funnel partner" },
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/5 w-[520px] h-[520px] rounded-full bg-[#2EA6D4]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-[#1B75BB]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Contained hero card ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl border border-[#79C5C7]/12 bg-[#111a24]/60 backdrop-blur-sm overflow-hidden"
        >
          {/* Dot-grid texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(121,197,199,0.3) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.04,
            }}
          />

          {/* Corner accent gradient */}
          <div
            className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(46,166,212,0.12), transparent 68%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, rgba(0,167,157,0.07), transparent 70%)",
            }}
          />

          <div className="relative z-10 p-8 sm:p-12 lg:p-14">
            {/* Two-column: content + diagram */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

              {/* ── Left: text content ── */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#79C5C7]/20 text-sm text-[#79C5C7] mb-7"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Behavioral AI Marketing &amp; Automation</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A79D] node-pulse inline-block" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-[1.07]"
                >
                  <span className="text-white">Turn more leads into</span>
                  <br />
                  <span className="gradient-text text-shadow-glow">booked customers.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.25 }}
                  className="text-base sm:text-lg text-[#e8f4f8]/78 mb-8 leading-relaxed"
                >
                  Most agencies stop at lead volume. We build and run the full
                  conversion system — faster response, smarter follow-up, and
                  better close rates across your entire journey.
                </motion.p>

                {/* Trust pills */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-2 mb-9"
                >
                  <a
                    href="/results/index.html"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#79C5C7]/22 bg-[#79C5C7]/8 px-3.5 py-1.5 text-sm text-[#e8f4f8]/85 hover:bg-[#79C5C7]/14 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#79C5C7]" />
                    Client testimonials
                  </a>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#79C5C7]/18 bg-[#79C5C7]/6 px-3.5 py-1.5 text-sm text-[#e8f4f8]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A79D]" />
                    No long-term contracts
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#79C5C7]/18 bg-[#79C5C7]/6 px-3.5 py-1.5 text-sm text-[#e8f4f8]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2EA6D4]" />
                    Human-led, AI-enabled
                  </span>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
                >
                  <a
                    href="#cta"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-white glow-button"
                  >
                    Book Free AI Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-medium text-[#79C5C7] border border-[#79C5C7]/25 hover:border-[#79C5C7]/50 hover:bg-[#79C5C7]/5 transition-all"
                  >
                    See How It Works
                  </a>
                </motion.div>
              </div>

              {/* ── Right: circular engine-loop diagram ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="flex items-center justify-center py-4 lg:py-0"
              >
                <EngineLoopDiagram />
              </motion.div>
            </div>

            {/* ── Stats strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-[#79C5C7]/10 mt-12 pt-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black gradient-text stat-number">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#e8f4f8]/60 mt-1.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
