import { Hero } from './components/Hero';
import { AudienceSection } from './components/AudienceSection';
import { ProgramSection } from './components/ProgramSection';
import { WhySpecialSection } from './components/WhySpecialSection';
import { RequirementsSection } from './components/RequirementsSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1e] text-[#f8fafc]">
      <Hero />
      <AudienceSection />
      <ProgramSection />
      <WhySpecialSection />
      <RequirementsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
