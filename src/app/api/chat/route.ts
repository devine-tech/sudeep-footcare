import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI client
// The API key is stored in an environment variable for security
const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || 'AIzaSyCM82aLfv7n-d0fK_wY5w9G1Cbckp3lmkU'
);

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Extract the latest user message
    const latestUserMessage = messages.filter(msg => msg.role === 'user').pop()?.content || '';
    
    // Add context about diabetic foot care
    const prompt = `
You are a helpful assistant specializing in diabetic foot care. Provide concise, accurate information about foot care for diabetic patients. Keep responses brief and focused on medical facts. If you're unsure about something, acknowledge it and suggest consulting a healthcare professional. Always prioritize patient safety in your advice.

User query: ${latestUserMessage}
`;

    // Call the Gemini API
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Return the response in the format expected by the client
    return NextResponse.json({
      message: {
        role: 'assistant',
        content: text
      }
    });
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: 'There was an error processing your request' },
      { status: 500 }
    );
  }
}
