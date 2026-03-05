'use client';

import { motion } from 'framer-motion';
import { Compass, Rocket, BarChart3, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const PHASE_1_ITEMS = [
  'Deep-dive strategy session',
  'Customer journey mapping',
  'AI audit & tech stack review',
  'Behavioral engine architecture',
  'Channel prioritization',
  'KPI framework',
];

const PHASE_2_ITEMS = [
  'AI agent deployment',
  'Automation sequence launch',
  'Ad campaign activation',
  'Conversational marketing setup',
  'Reputation management',
  'Continuous optimization',
];

export default function ApproachSection() {
  return (
    <section id="approach" className="section-padding bg-white relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="mono-tag text-ap-teal mb-4 block">Our Approach</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ap-dark mb-6 leading-tight">
            Two Phases.
            <br />
            <span className="gradient-text">Continuous Results.</span>
          </h2>
          <p className="text-lg text-ap-dark/60 max-w-2xl mx-auto leading-relaxed">
            A structured process designed to produce results fast — with a
            solid strategic foundation underneath. The longer it runs, the smarter it gets.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* Phase 1 */}
          <AnimatedSection direction="left">
            <div className="h-full rounded-2xl border border-ap-teal-light/15 bg-gradient-to-b from-ap-teal-light/[0.03] to-transparent p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ap-teal-light to-ap-teal" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-ap-teal-light/10 flex items-center justify-center">
                  <Compass className="text-ap-teal" size={20} />
                </div>
                <div>
                  <span className="mono-tag text-ap-teal text-[10px] block">Phase 1</span>
                  <h3 className="font-bold text-ap-dark">Foundation</h3>
                </div>
                <span className="ml-auto mono-tag text-ap-dark/30 text-[10px]">Week 1–2</span>
              </div>
              <p className="text-sm text-ap-dark/55 mb-6 leading-relaxed">
                We map your customer journey, audit your current systems, and design
                a behavioral engine tailored to your business and market.
              </p>
              <ul className="space-y-2.5">
                {PHASE_1_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ap-dark/65">
                    <div className="w-1.5 h-1.5 rounded-full bg-ap-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Arrow between phases */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full bg-white shadow-lg border border-ap-teal-light/20 flex items-center justify-center"
            >
              <ArrowRight className="text-ap-teal" size={18} />
            </motion.div>
          </div>

          {/* Phase 2 */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="h-full rounded-2xl border border-ap-blue/15 bg-gradient-to-b from-ap-blue/[0.03] to-transparent p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ap-blue to-ap-blue-deep" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-ap-blue/10 flex items-center justify-center">
                  <Rocket className="text-ap-blue" size={20} />
                </div>
                <div>
                  <span className="mono-tag text-ap-blue text-[10px] block">Phase 2</span>
                  <h3 className="font-bold text-ap-dark">Activation & Growth</h3>
                </div>
                <span className="ml-auto mono-tag text-ap-dark/30 text-[10px]">Ongoing</span>
              </div>
              <p className="text-sm text-ap-dark/55 mb-6 leading-relaxed">
                We deploy the system and begin driving results — then continuously
                measure, learn, and optimize. It gets smarter over time.
              </p>
              <ul className="space-y-2.5">
                {PHASE_2_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ap-dark/65">
                    <div className="w-1.5 h-1.5 rounded-full bg-ap-blue shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Continuous improvement bar */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 rounded-xl bg-ap-dark p-6 flex flex-col sm:flex-row items-center gap-4">
            <BarChart3 className="text-ap-teal-light shrink-0" size={24} />
            <p className="text-white/70 text-sm text-center sm:text-left">
              After launch, the system runs continuously — and{' '}
              <span className="text-white font-medium">improves continuously</span> through
              measurement and optimization. The longer it runs, the smarter it gets.
            </p>
            <div className="hidden sm:block ml-auto shrink-0">
              <motion.div
                className="flex items-center gap-1"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-ap-teal-light"
                    style={{ height: `${12 + i * 4}px` }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
