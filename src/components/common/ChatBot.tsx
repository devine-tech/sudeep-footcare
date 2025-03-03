'use client';

import { useState, useEffect, useRef } from 'react';
import { sendMessage, ChatMessage, predefinedPrompts } from '@/services/gemini';
import styles from './ChatBot.module.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your diabetic foot care assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showPrompts, setShowPrompts] = useState(true);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message to chat
    const userMessage: ChatMessage = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowPrompts(false);

    // Send to API
    const newMessages = [...messages, userMessage].slice(-10); // Keep last 10 messages for context
    const response = await sendMessage(newMessages);

    // Add response to chat
    setMessages(prev => [...prev, response.message]);
    setIsLoading(false);
  };

  // Handle clicking a predefined prompt
  const handlePromptClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Chat toggle button */}
      <button 
        className={styles.chatToggle} 
        onClick={toggleChat}
        aria-label="Toggle chat assistant"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
            <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3 style={{ color: "white" }}>Diabetic Foot Care Assistant</h3>
            <button 
              className={styles.closeButton} 
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className={styles.chatMessages}>
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className={styles.loadingIndicator}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {showPrompts && messages.length === 1 && (
            <div className={styles.promptsContainer}>
              <p className={styles.promptsHeading}>You can ask about:</p>
              <div className={styles.promptsList}>
                {predefinedPrompts.slice(0, 5).map((prompt, index) => (
                  <button 
                    key={index} 
                    className={styles.promptButton}
                    onClick={() => handlePromptClick(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
              placeholder="Type your question here..."
              className={styles.chatInput}
              disabled={isLoading}
            />
            <button 
              className={styles.sendButton} 
              onClick={() => handleSendMessage(input)}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles.sendIcon}>
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
