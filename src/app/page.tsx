import FeatureSection from '@/components/home/FeatureSection';
import HeroSection from '@/components/home/HeroSection';
import DemoSection from '@/components/home/DemoSection';

export default function Home() {
  return (
    <div className="relative w-full items-center justify-items-center">
      <HeroSection />
      <FeatureSection />
      <DemoSection />
      {/* <PricingSection> */}
      {/* <CTASection /> */}
    </div>
  );
}
