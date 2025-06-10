import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get ready for the future of productivity
            </h2>
            <p className="mx-auto max-w-[700px] md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-500">
              Transform your lengthy documents into concise summaries with our
              AI powered tool Resumir.
            </p>
          </div>
          <div>
            <div>
              <Button
                variant={'link'}
                size={'lg'}
                className="text-white mt-6 text-base sm:text-lg lg:text-sm rounded-full px-8 sm:px-12 lg:px-20 py-5 sm:py-6 lg:py-4 bg-linear-to-r from-slate-900 to-tealy hover:to-slate-900 hover:from-tealy hover:font-bold hover:no-underline transition-colors shadow-lg duration-200"
              >
                <Link href="/#pricing">Get Started</Link>
                <ArrowRight className="ml-1 h-4 w-4 animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
