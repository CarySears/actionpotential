'use client';

import {
  Clock,
  UserX,
  Brain,
  Globe,
  HeartHandshake,
  TrendingDown,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const PAIN_POINTS = [
  {
    icon: Clock,
    title: 'Slow Response Times',
    desc: 'No system for responding fast enough to new inquiries. Speed-to-lead is the #1 predictor of conversion.',
  },
  {
    icon: UserX,
    title: 'Leads Going Cold',
    desc: 'No intelligent follow-up when prospects go quiet. Most leads need 5-12 touches before converting.',
  },
  {
    icon: Brain,
    title: 'No Behavioral Design',
    desc: 'No behavioral design that moves people from interest to action — just hope and manual outreach.',
  },
  {
    icon: Globe,
    title: 'Missing Channels',
    desc: 'No omnichannel presence to meet customers where they are — search, social, AI, messaging.',
  },
  {
    icon: HeartHandshake,
    title: 'No Trust Building',
    desc: 'No consistent engagement that builds trust over time. Relationships require systematic nurturing.',
  },
  {
    icon: TrendingDown,
    title: 'Wasted Ad Spend',
    desc: 'Money poured into traffic that never converts because the system behind it is broken.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="section-padding bg-ap-warm-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ap-teal-light/30 to-transparent" />

      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="mono-tag text-ap-teal mb-4 block">The Problem</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ap-dark mb-6 leading-tight">
            Traffic Alone Doesn&apos;t
            <br />
            <span className="gradient-text">Grow a Business</span>
          </h2>
          <p className="text-lg text-ap-dark/60 max-w-2xl mx-auto leading-relaxed">
            Most companies invest in generating leads — then watch them go cold.
            The root cause is almost always the same set of systemic failures.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAIN_POINTS.map((point) => (
            <StaggerItem key={point.title}>
              <div className="glass-card p-6 h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ap-teal-light/20 to-ap-blue/20 flex items-center justify-center mb-4">
                  <point.icon className="text-ap-teal" size={20} strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-ap-dark mb-2">{point.title}</h3>
                <p className="text-sm text-ap-dark/55 leading-relaxed">{point.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-16 text-center" delay={0.3}>
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-ap-teal/5 to-ap-blue/5 border border-ap-teal/10">
            <div className="w-2 h-2 rounded-full bg-ap-teal animate-pulse" />
            <p className="text-ap-dark/70 text-sm font-medium">
              Most agencies hand you leads.{' '}
              <span className="text-ap-dark font-semibold">
                We build the system that turns them into customers — automatically.
              </span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
