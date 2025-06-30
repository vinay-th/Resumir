'use server';
import main from '@/lib/gemini';
import { fetchAndExtractPdfText } from '@/lib/langchain';

export async function generatePdfSummary(
  uploadResponse: [
    {
      serverData: {
        userID: string;
        file: {
          ufsUrl: string;
          name: string;
        };
      };
    }
  ]
) {
  if (!uploadResponse) {
    return {
      success: false,
      message: 'File processing failed',
      data: null,
    };
  }

  const {
    serverData: {
      userID,
      file: { ufsUrl: pdfUrl, name: pdfName },
    },
  } = uploadResponse[0];

  if (!pdfUrl || !pdfName) {
    return {
      success: false,
      message: 'Invalid file data',
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);

    try {
      const summary = await main(pdfText);

      return {
        success: true,
        message: 'PDF summary generated successfully',
        data: {
          userID,
          pdfName,
          pdfText,
          summary: summary.data,
        },
      };
    } catch (error) {
      console.error('Error generating PDF summary:', error);
      return {
        success: false,
        error: 'Failed to generate PDF summary',
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Invalid file data ' + error,
      data: null,
    };
  }
}
