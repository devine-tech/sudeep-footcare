# Chatbot Setup Guide

This project includes an AI-powered chatbot that uses Google's Gemini API to answer questions about diabetic foot care. Here's how to set it up and customize it for your needs.

## Configuration

The chatbot is already configured with a default API key, but for security and billing reasons, you should replace it with your own API key in production.

### API Key Setup

1. The Gemini API key is currently set in:
   - `next.config.js` (for server-side access)
   - `src/app/api/chat/route.ts` (as a fallback)

2. For production, set the API key as an environment variable:
   - Create a `.env.local` file (for local development) with:
     ```
     GEMINI_API_KEY=your-api-key-here
     ```
   - In your hosting platform (Netlify, Vercel, etc.), add the environment variable `GEMINI_API_KEY`

### Customizing the Chatbot

#### Predefined Prompts

You can modify the predefined prompts by editing the `predefinedPrompts` array in `src/services/gemini.ts`. These are the suggestion buttons that appear when the chat is first opened.

#### System Message

The chatbot's personality and knowledge domain is defined by the prompt template in `src/app/api/chat/route.ts`. You can modify this to change how the chatbot responds.

#### Appearance

The chatbot's appearance is controlled by the CSS in `src/components/common/ChatBot.module.css`. You can customize colors, sizes, and animations here.

## Security Considerations

- The API key is stored server-side and not exposed to clients
- All API calls are made through a Next.js API route, not directly from the client
- Response length is controlled to manage costs

## Usage Limits

The Google Gemini API has usage limits and costs associated with it:
- Gemini 1.5 Flash is more cost-effective than larger models
- We're using a concise prompt template to keep costs down
- Consider implementing rate limiting for production use

## Troubleshooting

If the chatbot isn't working:

1. Check browser console for errors
2. Verify your API key is valid and has sufficient quota
3. Check network requests to `/api/chat` for error responses
4. Ensure the Google Generative AI package is installed (`npm install @google/generative-ai`)

## Future Enhancements

Consider these potential improvements:
- Add conversation history storage
- Implement user authentication for personalized responses
- Add image upload capability for foot condition analysis
- Create a feedback mechanism to improve responses over time
