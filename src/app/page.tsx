import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import BehavioralEngine from "@/components/BehavioralEngine";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BrandGeometry from "@/components/BrandGeometry";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <BrandGeometry />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustBar />
        <Problem />
        <BehavioralEngine />
        <Services />
        <Differentiators />
        <Founder />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
