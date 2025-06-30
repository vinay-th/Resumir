// src/lib/gemini.ts
import { GoogleGenAI } from '@google/genai';
import { SUMMARY_SYSTEM_PROMPT } from './utils';

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY!,
});

export default async function main(data: string) {
  // Subscription logic
  // try {
  //     const result = await ai.models.generateContent({
  //       model: 'gemini-2.5-pro',
  //       contents: SUMMARY_SYSTEM_PROMPT + 'This is the data:\n\n' + data,
  //     });
  //     console.log(result.text);
  //   } catch (error) {
  //     console.error('Error generating content with Gemini:', error);
  //     return {
  //       success: false,
  //       error: 'Failed to generate content',
  //       data: null,
  //     };
  //   }
  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: SUMMARY_SYSTEM_PROMPT + 'This is the data:\n\n' + data,
    });
    console.log(result.text);

    return {
      success: true,
      error: null,
      data: result.text,
    };
  } catch (error) {
    console.error('Error generating content with Gemini:', error);
    return {
      success: false,
      error: 'Failed to generate content',
      data: null,
    };
  }
}
