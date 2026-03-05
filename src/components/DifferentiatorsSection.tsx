'use client';

import {
  Heart,
  Brain,
  Layers,
  Unlock,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const DIFFERENTIATORS = [
  {
    icon: Heart,
    title: 'Human-Centered AI',
    desc: 'AI should strengthen human relationships — not replace them. Our systems communicate in your brand\'s voice, reflect your expertise, and feel genuine. Not robotic. Not scripted. Genuinely helpful.',
    color: '#79C5C7',
    tag: 'Philosophy',
  },
  {
    icon: Brain,
    title: 'Behavioral Science at the Core',
    desc: 'Our founder holds master\'s degrees in Experimental Psychology and UX Design. Understanding how humans make decisions isn\'t a marketing buzzword — it\'s the foundation of every system we build.',
    color: '#2EA6D4',
    tag: 'Foundation',
  },
  {
    icon: Layers,
    title: 'Full-Funnel Ownership',
    desc: 'We don\'t hand you leads and disappear. We own the entire journey from stranger to advocate — and we build the systems to automate it all.',
    color: '#00A79D',
    tag: 'Commitment',
  },
  {
    icon: Unlock,
    title: 'No Long-Term Contracts',
    desc: 'We don\'t lock clients in. We earn continued trust through results. If we\'re not delivering, you should have the freedom to walk away. We\'re confident you won\'t want to.',
    color: '#1B75BB',
    tag: 'Confidence',
  },
];

export default function DifferentiatorsSection() {
  return (
    <section id="differentiators" className="section-padding bg-ap-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-ap-teal/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-ap-blue/5 blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="mono-tag text-ap-teal-light/80 mb-4 block">Why Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            What Makes Us
            <br />
            <span className="gradient-text">Different</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            We sit at the intersection of four disciplines most agencies treat
            as separate — and that&apos;s exactly what makes our systems work.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          {DIFFERENTIATORS.map((diff) => (
            <StaggerItem key={diff.title}>
              <div className="dark-glass-card p-7 h-full group">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${diff.color}15` }}
                  >
                    <diff.icon
                      style={{ color: diff.color }}
                      size={22}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <span
                      className="mono-tag text-[10px] mb-1 block"
                      style={{ color: diff.color }}
                    >
                      {diff.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Brand Principles */}
        <AnimatedSection delay={0.3} className="mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Science-Driven', 'Human-First', 'Full-Funnel', 'Results-Proven'].map(
              (principle, i) => (
                <div
                  key={principle}
                  className="py-4 px-3 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <div className="mono-tag text-ap-teal-light/50 text-[10px] mb-1">
                    Principle 0{i + 1}
                  </div>
                  <div className="text-white/80 font-medium text-sm">
                    {principle}
                  </div>
                </div>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
