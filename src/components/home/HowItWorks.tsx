import {
  LucideBrainCircuit,
  LucideFileOutput,
  MoveRight,
  UploadIcon,
} from 'lucide-react';
import React from 'react';

type Step = {
  label: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    label: 'Upload your PDF',
    description: 'Easily upload your PDF documents to our platform.',
    icon: <UploadIcon size={64} strokeWidth={1.5} />,
  },
  {
    label: 'AI Analysis',
    description: 'Our AI algorithms analyze the content of your PDFs.',
    icon: <LucideBrainCircuit size={64} strokeWidth={1.5} />,
  },
  {
    label: 'Get Summarized Insights',
    description: 'Receive concise summaries and insights from your documents.',
    icon: <LucideFileOutput size={64} strokeWidth={1.5} />,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-visible">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="relative left-[calc(50%-3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: `polygon(11% 63%, 31% 30%, 36% 55%, 12% 93%, 88% 43%, 93% 64%, 91% 79%, 94% 27%, 68% 94%);`,
            }}
          />
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <h3 className="font-bold text-3xl max-w-3xl mx-auto sm:px-6 text-tealy dark:text-white">
            How it works
          </h3>
          <p className="text-lg max-w-xl mx-auto text-gray-500">
            Resumir uses advanced AI algorithms to analyze and summarize your
            PDFs, providing you with concise insights in seconds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <div className="" key={idx}>
              <div className="mt-16 p-6 flex flex-col items-center rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-tealy transition-colors group w-full gap-2">
                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from-tealy/10 to-transparent group-hover:from-tealy/20 transition-colors ">
                    <div className="text-tealy">{step.icon}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-1 justify-between">
                  <h4 className="font-bold text-lg">{step.label}</h4>
                  <p className="text-gray-500">{step.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <MoveRight
                      size={32}
                      className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-tealy/20 group-hover:text-tealy transition-colors"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
