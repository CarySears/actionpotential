"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Mauro Clerici", title: "Vesping Around" },
  { name: "Daniel G. Wong, M.D.", title: "Child Psychiatrist" },
  { name: "Jai McPheron", title: "Integrated Mindfulness Institute" },
];

export default function RealResults() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
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
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-4">
            Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Hear it from the businesses running the system.
          </h2>
          <p className="text-lg text-[#e8f4f8]/78 max-w-2xl leading-relaxed">
            Client feedback highlights faster response, stronger conversion consistency, and revenue
            from leads they thought were gone.
          </p>
        </motion.div>

        {/* Testimonial cards - grid on desktop, carousel on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div
            ref={trackRef}
            className={`flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide ${
              isMobile ? "snap-x snap-mandatory" : "sm:grid sm:grid-cols-3 sm:overflow-visible"
            }`}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`glass-card p-8 rounded-2xl border border-[#e8f4f8]/12 flex flex-col items-center justify-center text-center flex-shrink-0 ${
                  isMobile ? "w-[calc(100%-1rem)] min-w-[calc(100%-1rem)] snap-start" : "sm:flex-shrink sm:min-w-0"
                }`}
              >
                <h3 className="text-lg font-bold text-white mb-1">{t.name}</h3>
                <p className="text-sm text-[#e8f4f8]/70 mb-6">{t.title}</p>
                <p className="text-sm text-[#e8f4f8]/50 italic">[ Video embed ]</p>
              </div>
            ))}
          </div>

          {/* Carousel controls - mobile only */}
          {isMobile && (
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
                    aria-label={`Go to testimonial ${i + 1}`}
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
          )}
        </motion.div>
      </div>
    </section>
  );
}
