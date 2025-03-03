'use client';

import dynamic from 'next/dynamic';

// Dynamically import the ChatBot component with no SSR
// This prevents hydration errors since the component uses browser-only features
const ChatBot = dynamic(() => import('./ChatBot'), { ssr: false });

const ClientChatBot = () => {
  return <ChatBot />;
};

export default ClientChatBot;
