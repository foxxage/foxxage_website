"use client";

import { useState, useEffect } from 'react';
import { Bot, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const prompts = [
  "Give me a task...",
  "What should I automate?",
  "Ready for instructions.",
  "How can I help?",
  "Waiting for a new job..."
];

export function AgentPromptAnimation() {
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);
  const [displayedText, setDisplayedText] = useState('');
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    const typingSpeed = 100;
    const delayBetweenPrompts = 2000;

    const type = (index: number) => {
      if (index < currentPrompt.length) {
        setDisplayedText(currentPrompt.substring(0, index + 1));
        typingTimeout = setTimeout(() => type(index + 1), typingSpeed);
      } else {
        // Wait then change prompt
        typingTimeout = setTimeout(() => {
          setPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
        }, delayBetweenPrompts);
      }
    };

    setDisplayedText('');
    typingTimeout = setTimeout(() => type(0), 500);

    return () => clearTimeout(typingTimeout);
  }, [currentPrompt]);
  
  useEffect(() => {
      setCurrentPrompt(prompts[promptIndex]);
  }, [promptIndex])


  return (
    <div className="glass-card animated-outline p-6 rounded-2xl flex items-center gap-4">
      <div className="relative">
        <div className="bg-primary/10 p-4 rounded-full">
          <Bot className="h-10 w-10 text-primary" />
        </div>
        <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-primary/80" />
      </div>
      <div className="flex-1 font-code text-lg text-foreground/80">
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
}
