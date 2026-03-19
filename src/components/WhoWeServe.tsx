"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mauro Clerici",
    company: "Vesping Around",
  },
  {
    name: "Daniel G. Wong, M.D.",
    company: "Child Psychiatrist",
  },
  {
    name: "Jai McPheron",
    company: "Integrated Mindfulness Institute",
  },
];

export default function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    setActiveIndex(clamped);
    if (scrollRef.current) {
      const child = scrollRef.current.children[clamped] as HTMLElement;
      if (child) {
        scrollRef.current.scrollTo({
          left: child.offsetLeft - scrollRef.current.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <section ref={ref} id="who-we-serve" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#79C5C7]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs text-[#e8f4f8]/50 tracking-widest uppercase mb-6"
        >
          Real Results
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Hear it from the businesses{" "}
            <span className="gradient-text">running the system.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/78 leading-relaxed">
            Client feedback highlights faster response, stronger conversion consistency,
            and revenue from leads they thought were gone.
          </p>
        </motion.div>

        {/* Desktop: grid of 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden"
            >
              <div className="aspect-[3/4] bg-[#e8f4f8]/4 flex items-center justify-center">
                <span className="text-sm text-[#e8f4f8]/30 italic">[ Video embed ]</span>
              </div>
              <div className="p-5 text-center">
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-xs text-[#e8f4f8]/60 mt-1">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(e) => {
              const container = e.currentTarget;
              const scrollLeft = container.scrollLeft;
              const childWidth = (container.firstElementChild as HTMLElement)?.offsetWidth || 1;
              const gap = 16;
              const newIndex = Math.round(scrollLeft / (childWidth + gap));
              if (newIndex !== activeIndex) setActiveIndex(newIndex);
            }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden snap-center flex-shrink-0"
                style={{ width: "80vw", maxWidth: 300 }}
              >
                <div className="aspect-[3/4] bg-[#e8f4f8]/4 flex items-center justify-center">
                  <span className="text-sm text-[#e8f4f8]/30 italic">[ Video embed ]</span>
                </div>
                <div className="p-5 text-center">
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-[#e8f4f8]/60 mt-1">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-[#e8f4f8]/60 hover:text-white transition-colors disabled:opacity-30"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex
                      ? "bg-[#79C5C7] w-5"
                      : "bg-[#e8f4f8]/20 hover:bg-[#e8f4f8]/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollTo(activeIndex + 1)}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-[#e8f4f8]/60 hover:text-white transition-colors disabled:opacity-30"
              disabled={activeIndex === testimonials.length - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
