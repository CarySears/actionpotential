'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function WhySection() {
  return (
    <section className="section-padding relative overflow-hidden bg-ap-dark text-white">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#79C5C7" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <span className="mono-tag text-ap-teal-light/80 mb-4 block">The Name</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why <span className="gradient-text">&ldquo;Action Potential&rdquo;</span>?
            </h2>
            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>
                The name comes from neuroscience. An <strong className="text-white">action potential</strong> is
                the electrical impulse that allows neurons to communicate — transmitting
                signals through the brain and triggering behavior.
              </p>
              <p>
                Without these signals, nothing moves. No thought becomes behavior.
                No intention becomes action.
              </p>
              <p>
                Businesses work the same way. A prospect encounters your brand. They ask
                a question. They seek clarity. They look for reassurance.{' '}
                <strong className="text-ap-teal-light">
                  In that moment, how your system responds determines everything.
                </strong>
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              {/* Action potential visualization */}
              <svg viewBox="0 0 400 300" className="w-full" aria-label="Action potential visualization showing signal transmission between neurons">
                <defs>
                  <linearGradient id="axon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#79C5C7" />
                    <stop offset="50%" stopColor="#2EA6D4" />
                    <stop offset="100%" stopColor="#1B75BB" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Neuron body left */}
                <circle cx="60" cy="150" r="30" fill="none" stroke="#79C5C7" strokeWidth="1.5" opacity="0.5" />
                <circle cx="60" cy="150" r="18" fill="#79C5C7" opacity="0.15" />
                <circle cx="60" cy="150" r="5" fill="#79C5C7" opacity="0.6" />

                {/* Dendrites left */}
                {[120, 150, 180, 210, 240].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 60 + Math.cos(rad) * 50;
                  const y2 = 150 + Math.sin(rad) * 50;
                  return (
                    <line key={`d-${i}`} x1="60" y1="150" x2={x2} y2={y2} stroke="#79C5C7" strokeWidth="0.8" opacity="0.3" />
                  );
                })}

                {/* Axon */}
                <motion.line
                  x1="90" y1="150" x2="310" y2="150"
                  stroke="url(#axon-grad)"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  opacity="0.5"
                  animate={{ strokeDashoffset: [-20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Action potential pulse traveling along axon */}
                <motion.circle
                  cx="90"
                  cy="150"
                  r="6"
                  fill="#2EA6D4"
                  filter="url(#glow)"
                  animate={{
                    cx: [90, 310],
                    opacity: [0.9, 0.9, 0],
                    r: [6, 6, 3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                />

                {/* Myelin sheaths */}
                {[130, 170, 210, 250].map((x, i) => (
                  <rect key={`m-${i}`} x={x - 10} y="143" width="20" height="14" rx="7" fill="none" stroke="#2EA6D4" strokeWidth="1" opacity="0.25" />
                ))}

                {/* Neuron body right */}
                <circle cx="340" cy="150" r="30" fill="none" stroke="#1B75BB" strokeWidth="1.5" opacity="0.5" />
                <circle cx="340" cy="150" r="18" fill="#1B75BB" opacity="0.15" />
                <circle cx="340" cy="150" r="5" fill="#1B75BB" opacity="0.6" />

                {/* Dendrites right */}
                {[300, 330, 0, 30, 60].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 340 + Math.cos(rad) * 50;
                  const y2 = 150 + Math.sin(rad) * 50;
                  return (
                    <line key={`dr-${i}`} x1="340" y1="150" x2={x2} y2={y2} stroke="#1B75BB" strokeWidth="0.8" opacity="0.3" />
                  );
                })}

                {/* Synapse spark */}
                <motion.circle
                  cx="310"
                  cy="150"
                  r="3"
                  fill="#79C5C7"
                  animate={{
                    opacity: [0, 0, 0.8, 0],
                    scale: [0.5, 0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.8,
                  }}
                />

                {/* Labels */}
                <text x="60" y="200" textAnchor="middle" fill="#79C5C7" fontSize="10" opacity="0.7" fontFamily="var(--font-mono)">STIMULUS</text>
                <text x="200" y="130" textAnchor="middle" fill="#2EA6D4" fontSize="10" opacity="0.7" fontFamily="var(--font-mono)">ACTION POTENTIAL</text>
                <text x="340" y="200" textAnchor="middle" fill="#1B75BB" fontSize="10" opacity="0.7" fontFamily="var(--font-mono)">RESPONSE</text>
              </svg>

              <div className="mt-6 text-center">
                <p className="text-sm text-white/40 font-mono">
                  stimulus → signal → response → behavior
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
