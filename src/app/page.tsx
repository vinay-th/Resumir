import HeroSection from '@/components/home/HeroSection';
import DemoSection from '@/components/home/DemoSection';
import PricingSection from '@/components/home/PricingSection';
import BgGradient from '@/components/common/BgGradient';
import HowItWorks from '@/components/home/HowItWorks';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
      </div>
      <DemoSection />
      <HowItWorks />
      <PricingSection />
      <CTASection />
    </div>
  );
}
