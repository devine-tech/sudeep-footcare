'use client';

// This file contains the Gemini API service
// IMPORTANT: Never expose your API key in client-side code
// We'll use a server-side API route to make the actual API calls

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  message: ChatMessage;
  isError?: boolean;
}

// Predefined prompts related to diabetic foot care
export const predefinedPrompts = [
  "What are the early signs of diabetic foot problems?",
  "How often should I check my feet if I have diabetes?",
  "What type of footwear is best for diabetic patients?",
  "How can I prevent foot ulcers?",
  "What should I do if I notice a cut on my foot?",
  "Are there specific exercises for diabetic foot care?",
  "How does diabetes affect foot health?",
  "What is neuropathy and how does it affect my feet?",
  "When should I see a doctor about my feet?",
  "How can I manage foot pain from diabetes?"
];

// Function to send a message to the Gemini API
export async function sendMessage(messages: ChatMessage[]): Promise<ChatResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return { message: data.message };
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
    return {
      message: {
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your request. Please try again later.'
      },
      isError: true
    };
  }
}
