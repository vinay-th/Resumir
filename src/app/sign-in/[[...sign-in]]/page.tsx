'use client';

import BgGradient from '@/components/common/BgGradient';
import { SignIn } from '@clerk/nextjs';

export default function Home() {
  return (
    <section className="flex justify-center items-center lg:min-h-[4vh]">
      <div className="relative isolate w-full">
        <BgGradient className="from-rose-300 via-rose-200 to-orange-300" />
        <div className="flex flex-col">
          <div className="py-12 lg:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <SignIn />
          </div>
        </div>
      </div>
    </section>
  );

  return <div>Welcome!</div>;
}
