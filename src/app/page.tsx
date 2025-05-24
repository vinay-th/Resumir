import FeatureSection from '@/components/home/FeatureSection';
import HeroSection from '@/components/home/HeroSection';
import DemoSection from '@/components/home/DemoSection';
import PricingSection from '@/components/home/PricingSection';
import BgGradient from '@/components/common/BgGradient';
import HowItWorks from '@/components/home/HowItWorks';

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
      <FeatureSection />
      {/* <CTASection /> */}
    </div>
  );
}
