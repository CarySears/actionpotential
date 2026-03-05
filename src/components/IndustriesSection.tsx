'use client';

import {
  Stethoscope,
  BookOpen,
  Scale,
  Home,
  UtensilsCrossed,
  Wrench,
  TrendingUp,
  Calendar,
  DollarSign,
  Star,
  Users,
  Clock,
} from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const INDUSTRIES = [
  { icon: Stethoscope, name: 'Healthcare & Wellness' },
  { icon: BookOpen, name: 'Coaching & Consulting' },
  { icon: Scale, name: 'Legal & Professional Services' },
  { icon: Home, name: 'Real Estate' },
  { icon: UtensilsCrossed, name: 'Hospitality' },
  { icon: Wrench, name: 'Home Services' },
];

const OUTCOMES = [
  { icon: TrendingUp, text: 'More leads — without more ad spend' },
  { icon: Calendar, text: 'More booked appointments — with less manual follow-up' },
  { icon: DollarSign, text: 'More sales and higher close rates' },
  { icon: Star, text: 'More reviews and stronger online reputation' },
  { icon: Users, text: 'Higher customer retention and lifetime value' },
  { icon: Clock, text: 'Less stress — more time to focus on the work you love' },
];

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-ap-warm-white relative overflow-hidden">
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-16">
          <span className="mono-tag text-ap-teal mb-4 block">Who We Serve</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ap-dark mb-6 leading-tight">
            Built for Businesses
            <br />
            <span className="gradient-text">Ready to Grow</span>
          </h2>
          <p className="text-lg text-ap-dark/60 max-w-2xl mx-auto leading-relaxed">
            We work with small and midsize service businesses, professional
            practices, and local businesses that are ready to grow — but don&apos;t
            have time to build marketing systems from scratch.
          </p>
        </AnimatedSection>

        {/* Industries Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {INDUSTRIES.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="glass-card p-5 flex items-center gap-3.5 group cursor-default">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-ap-teal-light/15 to-ap-blue/15 flex items-center justify-center group-hover:from-ap-teal-light/25 group-hover:to-ap-blue/25 transition-colors">
                  <industry.icon className="text-ap-teal" size={18} strokeWidth={1.8} />
                </div>
                <span className="font-medium text-ap-dark/80 text-sm">
                  {industry.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Outcomes */}
        <AnimatedSection>
          <div className="rounded-2xl bg-gradient-to-br from-white to-ap-warm-gray border border-ap-teal-light/10 p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-ap-dark mb-2 text-center">
              What Our Clients Experience
            </h3>
            <p className="text-ap-dark/50 text-sm mb-8 text-center">
              Real outcomes from businesses using the Behavioral Engine.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {OUTCOMES.map((outcome) => (
                <div
                  key={outcome.text}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-ap-teal-light/[0.04] transition-colors"
                >
                  <outcome.icon className="text-ap-teal shrink-0 mt-0.5" size={18} strokeWidth={1.8} />
                  <span className="text-sm text-ap-dark/70 leading-relaxed">{outcome.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
