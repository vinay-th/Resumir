'use client';

import React from 'react';
import UploadFormElements from './UploadFormElements';
import { toast } from 'sonner';
import { z } from 'zod';
import { useUploadThing } from '@/lib/uploadthing';
import { generatePdfSummary } from '../../../actions/upload-actions';
import main from '@/lib/gemini';

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
  const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      toast.success('Upload completed successfully');
    },
    onUploadError: () => {
      toast.error('Error occurred while uploading');
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Schema validation
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

    // UploadThing upload
    toast.info('Starting upload...');

    const resp = await startUpload([file]);

    if (!resp) {
      console.error('Upload failed');
      return;
    }

    // PDF Loader integration
    const pdfResult = await generatePdfSummary(resp);

    const { data = null, message = '' } = pdfResult || {};

    if (data) {
      console.log('PDF Summary:', data.summary);
    } else {
      toast.error(message);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <UploadFormElements onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
