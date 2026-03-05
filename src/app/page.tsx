import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ProblemSection from '@/components/ProblemSection';
import WhySection from '@/components/WhySection';
import BehavioralEngine from '@/components/BehavioralEngine';
import ServicesSection from '@/components/ServicesSection';
import ApproachSection from '@/components/ApproachSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import IndustriesSection from '@/components/IndustriesSection';
import FounderSection from '@/components/FounderSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <WhySection />
        <BehavioralEngine />
        <ServicesSection />
        <ApproachSection />
        <DifferentiatorsSection />
        <IndustriesSection />
        <FounderSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
