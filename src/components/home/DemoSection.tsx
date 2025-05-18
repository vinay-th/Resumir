import { LucideFileOutput } from 'lucide-react';
import React from 'react';

const DemoSection = () => {
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, ...)`,
            }}
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <LucideFileOutput className="w-6 h-6 text-tealy" />
          </div>
          <div className="text-center mb-16">
            <h3 className="font-bold text-3xl max-w-3xl mx-auto sm:px-6 text-gray-900 dark:text-white">
              Watch chaos get a clarity check — powered by{' '}
              <span className="bg-linear-to-r from-teal-400 to-tealy bg-clip-text text-transparent">
                Resumir.{' '}
              </span>
            </h3>
          </div>
          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* Summary */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
