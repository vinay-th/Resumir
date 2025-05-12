import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex flex-col z-0 items-center justify-center w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex">
          <div className="relative p-[1px] rounded-full overflow-hidden bg-linear-to-r from-teal-100 via-tealy to-teal-900 animate-gradient-x group text-white">
            <Badge
              variant={'secondary'}
              className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
            >
              <Sparkles
                className="mr-2 animate-pulse text-tealy"
                style={{
                  height: '1.5rem',
                  width: '1.5rem',
                }}
              />
              <p className="text-base text-tealy">Powered by AI</p>
            </Badge>
          </div>
        </div>
        <h1 className="font-bold py-6 text-center text-gray-800">
          <span className="relative inline-block">
            Read Less, Know More <br />
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-teal-200/50 -rotate-2 rounded-lg transform -skew-y-1 -z-1"></span>
              Resumir
            </span>{' '}
            Your PDFs.
          </span>
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl px-4 lg:px-0 lg:max-w-4xl text-center text-gray-500">
          Resumir distills long PDFs into clear, concise summaries in seconds.
          <br />
          No filler, just the insights you need — fast and No Fluff.
        </h2>
        <div className="">
          <Button
            variant="link"
            size="lg"
            className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-12 lg:px-10 py-5 sm:py-6 lg:py-7 bg-linear-to-r from-slate-900 to-tealy hover:to-slate-900 hover:from-tealy hover:font-bold hover:no-underline transition-colors shadow-lg duration-200"
          >
            <Link href="/#pricing" className="flex items-center">
              <span className="p-2">Let&apos;s Resumir</span>
              <ArrowRight className="animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
