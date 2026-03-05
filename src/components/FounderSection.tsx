'use client';

import { GraduationCap, Briefcase, Award, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CREDENTIALS = [
  { icon: GraduationCap, text: "Master's — Experimental Psychology" },
  { icon: GraduationCap, text: "Master's — User Experience Design" },
  { icon: Award, text: 'Neuropsych Testing — Cleveland Clinic' },
  { icon: Briefcase, text: 'Digital Health Leadership' },
  { icon: Zap, text: 'Growth Experience at Noom' },
];

export default function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-white relative overflow-hidden">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-ap-teal-light/10 via-ap-blue/10 to-ap-blue-deep/10 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-ap-teal to-ap-blue mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">CS</span>
                    </div>
                    <h3 className="text-xl font-bold text-ap-dark">Cary Sears</h3>
                    <p className="text-ap-dark/50 text-sm">Founder & CEO</p>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-ap-dark flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-ap-teal-light mono-tag text-[9px]">Est.</div>
                    <div className="text-white font-bold text-sm">AP.AI</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <span className="mono-tag text-ap-teal mb-4 block">The Founder</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ap-dark mb-6 leading-tight">
              Where Behavioral Science
              <br />
              <span className="gradient-text">Meets Growth Engineering</span>
            </h2>

            <div className="space-y-5 text-ap-dark/65 leading-relaxed mb-8">
              <p>
                Cary Sears is a user experience designer and applied behavioral
                scientist with a rare combination of clinical and growth expertise.
              </p>
              <p>
                He founded ActionPotential.AI to bring together the disciplines
                he spent his career mastering: how people think and make decisions,
                how systems can be designed to guide them, and how technology can
                scale those systems without losing the human touch.
              </p>
              <p className="text-ap-dark/80 font-medium">
                His passion is building systems where high-tech and high-touch
                reinforce each other — not compete.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.text}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-ap-warm-gray/70 hover:bg-ap-teal-light/[0.06] transition-colors"
                >
                  <cred.icon className="text-ap-teal shrink-0" size={16} strokeWidth={1.8} />
                  <span className="text-sm font-medium text-ap-dark/70">{cred.text}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl border border-ap-teal/10 bg-gradient-to-r from-ap-teal/[0.03] to-transparent">
              <p className="text-sm text-ap-dark/60 italic leading-relaxed">
                &ldquo;Most marketing agencies optimize for clicks. We optimize for
                human behavior. When you understand the psychology behind
                decisions, you can design systems that guide people naturally
                from interest to action — without manipulation, without
                pressure. Just genuine value at every touchpoint.&rdquo;
              </p>
              <p className="text-ap-teal font-medium text-sm mt-3">— Cary Sears</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
