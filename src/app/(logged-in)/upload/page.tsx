'use client';

import BgGradient from '@/components/common/BgGradient';
import { Badge } from '@/components/ui/badge';
import { FileUpload } from '@/components/ui/upload-file';
import { Sparkles } from 'lucide-react';
import React from 'react';

const Page = () => {
  return (
    <section className="relative min-h-screen bg-white">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 lg:py-8 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center animate-gradient-x group">
          <div className="relative animate-gradient-x group">
            <Badge
              variant="secondary"
              className="flex items-center px-6 py-2 text-base font-medium bg-white rounded-full shadow-md transition-colors"
            >
              <Sparkles
                className="h-6 w-6 mr-2 animate-pulse text-yellow-400"
                style={{ width: 24, height: 24 }}
              />
              <span>AI Powered Content Summarization</span>
            </Badge>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Start Uploading
          </h1>
          <p className="text-lg text-gray-600">
            Upload your shyt and let AI do the rest
          </p>
          <div className=" w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-md transition-colors">
            <FileUpload />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
