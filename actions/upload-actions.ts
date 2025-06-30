'use server';
import { getDbConnection } from '@/db/db';
import main from '@/lib/gemini';
import { fetchAndExtractPdfText } from '@/lib/langchain';
import { auth } from '@clerk/nextjs/server';

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

async function savePDFSummary(
  userId: string,
  originalFileUrl: string,
  summaryText: string,
  status: string,
  title: string,
  fileName: string
) {
  try {
    const sql = await getDbConnection();
    await sql`INSERT INTO pdf_summaries (
  id,
  user_id,
  original_file_url,
  summary_text,
  status,
  title,
  file_name,
  created_at,
  updated_at
)
VALUES (
  uuid_generate_v4(),                          
  ${userId},                                   
  ${originalFileUrl},                          
  ${summaryText},                              
  ${status},                                   
  ${title},                                    
  ${fileName},                                 
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
);
`;
  } catch (error) {
    console.error('Error saving PDF summary:', error);
    return {
      success: false,
      message: 'Failed to save PDF summary',
    };
  }
}

export async function storeSummaryAction() {
  // user is logged in and has an user_id

  // save PDF

  // savePDFSummary()

  let savedSummary;

  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: 'User not authenticated',
      };
    }

    savedSummary = await savePDFSummary(userId);
  } catch (error) {
    console.error('Error storing summary:', error);
    return {
      success: false,
      message: 'Failed to store summary',
    };
  }
}
