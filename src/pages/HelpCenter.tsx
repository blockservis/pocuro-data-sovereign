
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Bot, User as UserIcon, Info } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { HelpCenterTopic } from '@/types/supabase';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const HelpCenterContent: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi there! I\'m Pocuro\'s AI assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [topics, setTopics] = useState<HelpCenterTopic[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch help center topics from Supabase
    async function fetchTopics() {
      try {
        const { data, error } = await (supabase as any)
          .from('help_center_topics')
          .select('*');
        
        if (error) {
          console.error('Error fetching help topics:', error);
          return;
        }
        
        if (data) {
          setTopics(data as HelpCenterTopic[]);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    fetchTopics();
  }, []);

  useEffect(() => {
    // Scroll to bottom of messages
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // In a real implementation, this would call your LLM API
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    
    // Simulate AI response - in production this would call your LLM API
    setTimeout(() => {
      // Find a matching topic or use default response
      const lowerInput = input.toLowerCase();
      const matchingTopic = topics.find(topic => 
        lowerInput.includes(topic.topic.toLowerCase())
      );
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: matchingTopic 
          ? matchingTopic.content
          : "I don't have specific information about that yet. Once this chatbot is connected to your LLM API with your specific context data, I'll be able to provide more helpful responses.",
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleTheme={toggleTheme} isDarkMode={theme === 'dark'} />
      
      <main className="flex-grow pt-24 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
              Pocuro Help Center
            </h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get instant answers to your questions about Pocuro. Our AI assistant is here to help.
            </p>
          </div>
          
          <Card className="p-4 mb-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
            <div className="flex items-center p-3 mb-4 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
              <Info className="h-5 w-5 mr-2 flex-shrink-0" />
              <p className="text-sm">
                This is a demo chatbot. In production, it will be connected to your LLM API with custom context about Pocuro.
              </p>
            </div>
            
            <div className="h-[400px] overflow-y-auto p-4 mb-4 border border-gray-200 dark:border-gray-700 rounded-md">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {message.isUser ? (
                        <>
                          <span className="text-xs font-medium">You</span>
                          <UserIcon className="h-3 w-3 ml-1" />
                        </>
                      ) : (
                        <>
                          <span className="text-xs font-medium">Pocuro AI</span>
                          <Bot className="h-3 w-3 ml-1" />
                        </>
                      )}
                    </div>
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start mb-4">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-tl-none">
                    <div className="flex items-center mb-1">
                      <span className="text-xs font-medium">Pocuro AI</span>
                      <Bot className="h-3 w-3 ml-1" />
                    </div>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="flex">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question here..."
                className="flex-grow mr-2"
                disabled={loading}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!input.trim() || loading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Popular Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {topics.slice(0, 6).map((topic, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto py-3 px-4 text-left"
                  onClick={() => {
                    setInput(topic.topic);
                    handleSendMessage();
                  }}
                >
                  {topic.topic}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const HelpCenter: React.FC = () => {
  return (
    <ThemeProvider>
      <HelpCenterContent />
    </ThemeProvider>
  );
};

export default HelpCenter;
