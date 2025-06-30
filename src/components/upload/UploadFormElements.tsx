'use client';

import { FileUpload } from '@/components/ui/upload-file';
import React, { forwardRef } from 'react';
import { FiUpload } from 'react-icons/fi';
import { Button } from '../ui/button';
import { Loader } from 'lucide-react';

interface UploadFormElementsProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const UploadFormElements = forwardRef<
  HTMLFormElement,
  { isLoading: boolean } & UploadFormElementsProps
>(({ onSubmit, isLoading }, formRef) => {
  return (
    <form className="" onSubmit={onSubmit} ref={formRef}>
      <div className=" w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-md transition-colors">
        <FileUpload />
      </div>
      <Button className="w-sm my-8" type="submit" disabled={isLoading}>
        {isLoading ? (
          <Loader className="animate-spin" />
        ) : (
          <>
            Upload PDF <FiUpload />
          </>
        )}
      </Button>
    </form>
  );
});

UploadFormElements.displayName = 'UploadFormElements';

export default UploadFormElements;
