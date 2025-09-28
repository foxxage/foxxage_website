"use client";

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const cards = [
  {
    title: "Clever by Design",
    description: "Smart solutions that save time & money.",
  },
  {
    title: "Built for Startups",
    description: "Fast, affordable, and scalable as you grow.",
  },
  {
    title: "No Tech Headaches",
    description: "We handle complexity so you don’t have to.",
  },
  {
    title: "Human + AI",
    description: "Automation that empowers, not replaces.",
  },
];

export function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      if (top <= 0 && top >= -scrollableHeight) {
        const currentProgress = -top / scrollableHeight;
        setProgress(Math.max(0, Math.min(1, currentProgress)));
      } else if (top > 0) {
        setProgress(0);
      } else {
        setProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const activeCardIndex = Math.floor(progress * cards.length);

  return (
    <section id="why-us" ref={containerRef} className="relative" style={{ height: `${100 + (cards.length -1) * 75}vh` }}>
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Why Choose Us?
                </h2>
                <p className="mt-4 text-lg text-foreground/70">The Foxxage advantage.</p>
            </div>
            <div className="relative h-[350px] w-full max-w-2xl">
                {cards.map((card, index) => {
                    const step = index / cards.length;
                    const cardProgress = (progress - step) * cards.length;
                    
                    const isActive = activeCardIndex === index;
                    const isPassed = progress > (index + 0.8) / cards.length;

                    const scale = 1 - (index - activeCardIndex) * 0.05;

                    return (
                        <div
                            key={card.title}
                            className={cn(
                                "glass-card animated-outline absolute inset-0 p-8 md:p-12 transition-all duration-300 ease-out rounded-3xl",
                                "flex flex-col items-center justify-center text-center"
                            )}
                            style={{
                                transform: `scale(${isActive ? 1 : scale})`,
                                zIndex: cards.length - index,
                                opacity: isPassed ? 0 : (isActive ? 1 : Math.max(0, 1 - Math.abs(cardProgress*2-1))),
                                filter: `blur(${isActive ? 0 : 4}px)`,
                            }}
                        >
                            <h3 className="font-headline text-2xl md:text-4xl font-bold">{card.title}</h3>
                            <p className="mt-4 text-md md:text-xl text-foreground/80">{card.description}</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12 flex gap-2">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all duration-300",
                    activeCardIndex === index ? 'bg-primary w-4' : 'bg-foreground/20'
                  )}
                />
              ))}
            </div>
        </div>
    </section>
  );
}
