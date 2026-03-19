"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";
import TaglineAnimation from "./TaglineAnimation";

const featureGrid = [
  {
    title: "Faster",
    desc: "Response time at the moment intent is highest — before leads go cold",
  },
  {
    title: "More",
    desc: "Qualified conversations turning into booked appointments and clients",
  },
  {
    title: "Higher",
    desc: "Long-term client value through reactivation, reviews, and referrals",
  },
];

const testimonials = [
  { name: "Mauro Clerici", title: "Vesping Around" },
  { name: "Daniel G. Wong, M.D.", title: "Child Psychiatrist" },
  { name: "Jai McPheron", title: "Integrated Mindfulness Institute" },
];

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 720px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isMobile) return;
    const updateIndex = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const trackLeft = track.getBoundingClientRect().left;
      let bestIndex = 0;
      let bestDistance = Infinity;
      cards.forEach((card, i) => {
        const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      });
      setCurrentIndex(bestIndex);
    };
    let timer = 0;
    const onScroll = () => {
      clearTimeout(timer);
      timer = window.setTimeout(updateIndex, 80);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    updateIndex();
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, [isMobile]);

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    setCurrentIndex(clamped);
    if (trackRef.current && isMobile) {
      const cards = Array.from(trackRef.current.children) as HTMLElement[];
      const target = cards[clamped];
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    }
  };
  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 z-0 opacity-55">
        <NeuralNetwork />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(13,17,23,0)_0%,rgba(13,17,23,0.56)_60%,rgba(13,17,23,0.82)_100%)]" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{ background: "linear-gradient(to top, var(--color-bg), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
        {/* Pre-header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="w-8 h-px bg-[#e8f4f8]/30" />
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#e8f4f8]/70">
            Behavioral AI Systems for Service Businesses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.07]"
        >
          <span className="text-white">Your business has more potential than it&apos;s </span>
          <span className="italic text-[#e8f4f8]/80">converting.</span>
        </motion.h1>

        {/* Sub-headline with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-start gap-3 max-w-xl mx-auto mb-6 text-left"
        >
          <span className="w-px h-14 bg-[#e8f4f8]/30 flex-shrink-0 mt-1" />
          <div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
              <TaglineAnimation idPrefix="hero" className="!text-lg sm:!text-xl" />
              <span className="text-[#e8f4f8]/75">For every lead, every time.</span>
            </div>
          </div>
        </motion.div>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-[#e8f4f8]/82 max-w-3xl mx-auto mb-9 leading-relaxed"
        >
          Most service businesses lose revenue in the gap between interest and response. We close
          that gap — with systems that capture, nurture, and convert demand without burning out
          your team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white glow-button"
          >
            Book a free AI Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#e8f4f8]/80 hover:text-[#79C5C7] transition-colors"
          >
            See how it works →
          </a>
        </motion.div>

        {/* Feature grid (desktop) / Reviews carousel (mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Desktop: Feature grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#e8f4f8]/12 rounded-2xl overflow-hidden">
            {featureGrid.map((item, i) => (
              <div
                key={i}
                className={`p-6 sm:p-8 text-left ${
                  i < 2 ? "sm:border-r border-[#e8f4f8]/12" : ""
                } ${i < 2 ? "border-b sm:border-b-0" : ""} sm:border-b-0`}
              >
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#e8f4f8]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: Reviews carousel */}
          <div className="sm:hidden">
            <div
              ref={trackRef}
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="glass-card p-8 rounded-2xl border border-[#e8f4f8]/12 flex flex-col items-center justify-center text-center flex-shrink-0 w-[calc(100%-1rem)] min-w-[calc(100%-1rem)] snap-start"
                >
                  <h3 className="text-lg font-bold text-white mb-1">{t.name}</h3>
                  <p className="text-sm text-[#e8f4f8]/70 mb-6">{t.title}</p>
                  <p className="text-sm text-[#e8f4f8]/50 italic">[ Video embed ]</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                type="button"
                onClick={() => scrollToIndex(currentIndex - 1)}
                disabled={currentIndex <= 0}
                className="p-2 rounded-full border border-[#e8f4f8]/20 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#e8f4f8]/5 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-[#e8f4f8]" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === currentIndex}
                    onClick={() => scrollToIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-[#79C5C7]" : "bg-[#e8f4f8]/30"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollToIndex(currentIndex + 1)}
                disabled={currentIndex >= testimonials.length - 1}
                className="p-2 rounded-full border border-[#e8f4f8]/20 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#e8f4f8]/5 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#e8f4f8]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
