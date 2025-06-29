'use client';

import React from 'react';
import UploadFormElements from './UploadFormElements';
import { z } from 'zod';

const schema = z.object({
  file: z
    .instanceof(File, {
      message: 'File is required',
    })
    .refine((file) => file.type.startsWith('application/pdf'), {
      message: 'Only PDF files are allowed',
    })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: 'File size must be less than 20MB',
    }),
});

const UploadForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    if (!file) {
      console.error('No file selected');
      return;
    }

    const result = schema.safeParse({ file });

    if (!result.success) {
      console.error('Validation failed:', result.error.errors);
      return;
    }

    console.log('Form submitted');
  };
  return (
    <div className="w-full flex flex-col">
      <UploadFormElements onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
