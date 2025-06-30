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
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      toast.success('Upload completed successfully');
      formRef.current?.reset();
    },
    onUploadError: () => {
      formRef.current?.reset();
      toast.error('Error occurred while uploading');
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    // Schema validation
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    if (!file) {
      console.error('No file selected');
      setIsLoading(false);
      return;
    }

    const result = schema.safeParse({ file });

    if (!result.success) {
      formRef.current?.reset();
      setIsLoading(false);
      console.error('Validation failed:', result.error.errors);
      return;
    }

    // UploadThing upload
    toast.info('Starting upload...');

    const resp = await startUpload([file]);

    if (!resp) {
      formRef.current?.reset();
      setIsLoading(false);
      console.error('Upload failed');
      return;
    }

    // PDF Loader integration
    const pdfResult = await generatePdfSummary(resp);

    const { data = null, message = '' } = pdfResult || {};

    if (data) {
      console.log('PDF Summary:', data.summary);

      toast.success('PDF summary generated successfully');

      setIsLoading(false);

      formRef.current?.reset();
    } else {
      setIsLoading(false);
      formRef.current?.reset();
      toast.error(message);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <UploadFormElements
        isLoading={isLoading}
        onSubmit={handleSubmit}
        ref={formRef}
      />
    </div>
  );
};

export default UploadForm;
