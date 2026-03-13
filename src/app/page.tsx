import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import WhyName from "@/components/WhyName";
import BehavioralEngine from "@/components/BehavioralEngine";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import Process from "@/components/Process";
import WhoWeServe from "@/components/WhoWeServe";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BrandGeometry from "@/components/BrandGeometry";

export default function Home() {
  return (
    <main
      className="relative isolate min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]"
      aria-label="Behavioral AI marketing and automation solutions for service businesses"
    >
      <BrandGeometry />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrustBar />
        <Problem />
        <WhyName />
        <BehavioralEngine />
        <Services />
        <Differentiators />
        <Process />
        <WhoWeServe />
        <Founder />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
