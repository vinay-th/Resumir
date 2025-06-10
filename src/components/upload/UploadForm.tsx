'use client';

import { FileUpload } from '@/components/ui/upload-file';
import React from 'react';

const UploadForm = () => {
  return (
    <div className=" w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-md transition-colors">
      <FileUpload />
    </div>
  );
};

export default UploadForm;
