'use client';

import { FileUpload } from '@/components/ui/upload-file';
import React from 'react';
import { FiUpload } from 'react-icons/fi';
import { Button } from '../ui/button';

interface UploadFormElementsProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UploadFormElements = ({ onSubmit }: UploadFormElementsProps) => {
  return (
    <form className="" onSubmit={onSubmit}>
      <div className=" w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-md transition-colors">
        <FileUpload />
      </div>
      <Button className="w-sm my-8" type="submit">
        Upload PDF <FiUpload />
      </Button>
    </form>
  );
};

export default UploadFormElements;
