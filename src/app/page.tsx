import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import WhyName from "@/components/WhyName";
import BehavioralEngine from "@/components/BehavioralEngine";
import DatabaseReactivation from "@/components/DatabaseReactivation";
import ReviewsVisibility from "@/components/ReviewsVisibility";
import VoiceAIDemo from "@/components/VoiceAIDemo";
import Process from "@/components/Process";
import RealResults from "@/components/RealResults";
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
        <WhyName />
        <BehavioralEngine />
        <DatabaseReactivation />
        <ReviewsVisibility />
        <VoiceAIDemo />
        <Process />
        <RealResults />
        <Founder />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
