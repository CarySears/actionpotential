'use client';

import { motion } from 'framer-motion';
import {
  Eye,
  MessageSquare,
  Target,
  Repeat,
  Star,
  Heart,
  ArrowRight,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const STAGES = [
  {
    icon: Eye,
    title: 'Attract',
    desc: 'Get found by the right people across search, social, and AI',
    color: '#79C5C7',
  },
  {
    icon: MessageSquare,
    title: 'Engage',
    desc: 'Start real-time conversations across every channel',
    color: '#5BB8CC',
  },
  {
    icon: Target,
    title: 'Convert',
    desc: 'Turn interest into booked appointments and sales',
    color: '#2EA6D4',
  },
  {
    icon: Repeat,
    title: 'Retain',
    desc: 'Build ongoing relationships that increase lifetime value',
    color: '#1B9BC8',
  },
  {
    icon: Star,
    title: 'Amplify',
    desc: 'Generate reviews and referrals from happy customers',
    color: '#1B85BB',
  },
  {
    icon: Heart,
    title: 'Reactivate',
    desc: 'Re-engage dormant leads and past customers',
    color: '#1B75BB',
  },
];

const GROWTH_DRIVERS = [
  { title: 'Lead Generation', desc: 'Attract more of the right traffic' },
  { title: 'Lead Conversion', desc: 'Turn visitors into conversations and booked appointments' },
  { title: 'Lifetime Value', desc: 'Increase retention and repeat purchases' },
  { title: 'Referrals & Reviews', desc: 'Transform customers into advocates' },
  { title: 'Reactivation', desc: 'Re-engage past leads and dormant customers' },
];

export default function BehavioralEngine() {
  return (
    <section id="engine" className="section-padding bg-white relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="mono-tag text-ap-teal mb-4 block">The System</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ap-dark mb-6 leading-tight">
            Your Full-Funnel
            <br />
            <span className="gradient-text">Behavioral Engine</span>
          </h2>
          <p className="text-lg text-ap-dark/60 max-w-2xl mx-auto leading-relaxed">
            Every client receives a system designed to move people through a
            continuous decision journey — from first impression to loyal advocate.
          </p>
        </AnimatedSection>

        {/* Six Stages Flow */}
        <StaggerContainer className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {STAGES.map((stage, i) => (
              <StaggerItem key={stage.title}>
                <div className="relative group">
                  <div className="glass-card p-5 text-center h-full">
                    <div
                      className="w-12 h-12 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${stage.color}15` }}
                    >
                      <stage.icon style={{ color: stage.color }} size={22} strokeWidth={1.8} />
                    </div>
                    <div
                      className="mono-tag mb-1 text-[10px]"
                      style={{ color: stage.color }}
                    >
                      Stage {i + 1}
                    </div>
                    <h3 className="font-semibold text-ap-dark text-sm">{stage.title}</h3>
                    <p className="text-xs text-ap-dark/50 mt-1.5 leading-relaxed">{stage.desc}</p>
                  </div>
                  {i < STAGES.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight size={14} className="text-ap-teal-light/40" />
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>

          {/* Connecting flow line (desktop only) */}
          <div className="hidden lg:block relative mt-2">
            <div className="h-0.5 mx-8 rounded-full bg-gradient-to-r from-ap-teal-light/20 via-ap-blue/20 to-ap-blue-deep/20" />
            <motion.div
              className="absolute top-0 h-0.5 w-12 rounded-full bg-gradient-to-r from-ap-teal to-ap-blue"
              animate={{ left: ['3%', '90%', '3%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </StaggerContainer>

        {/* Five Growth Drivers */}
        <AnimatedSection>
          <div className="rounded-2xl bg-gradient-to-br from-ap-dark to-ap-dark/95 p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Five Growth Drivers
            </h3>
            <p className="text-white/50 text-sm mb-8">
              Everything we build serves these core business outcomes.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {GROWTH_DRIVERS.map((driver, i) => (
                <div
                  key={driver.title}
                  className="dark-glass-card p-4 group cursor-default"
                >
                  <div className="text-ap-teal-light mono-tag text-[10px] mb-2">
                    0{i + 1}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">
                    {driver.title}
                  </h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {driver.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
