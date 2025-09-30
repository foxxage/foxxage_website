
"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Discovery",
    description: "We start by understanding your goals, needs, and current workflow.",
  },
  {
    title: "Prototype",
    description: "We design and build a draft of your automation solution.",
  },
  {
    title: "Launch",
    description: "We deploy the solution and ensure it integrates smoothly.",
  },
  {
    title: "Refine",
    description: "We refine the system based on your feedback, making it smarter and better over time.",
  },
  {
    title: "Maintain & Support",
    description: "We keep your workflows running smoothly and provide help whenever you need it."
  }
];

export function HowWeWorkSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        
        // Start animation when the top of the section is visible
        // and end when the bottom of the section has been scrolled past
        const progress = Math.max(0, Math.min(1, (screenHeight - top) / (height + screenHeight * 0.5)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-16">
            How We Work
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-primary/30 top-0 bottom-0" aria-hidden="true">
               <div
                className="w-full bg-primary transition-all duration-100 ease-linear"
                style={{ height: `${scrollProgress * 100}%` }}
              ></div>
            </div>
            <ul className="space-y-16">
              {steps.map((step, index) => {
                const stepProgress = Math.max(0, Math.min(1, (scrollProgress - index * (1 / (steps.length -1) * 0.8) ) / 0.2));

                return (
                  <li
                    key={step.title}
                    className="relative flex items-center"
                    style={{
                      opacity: stepProgress,
                      transform: `translateY(${(1 - stepProgress) * 1}rem)`,
                      transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                    }}
                  >
                    <div
                      className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full transition-transform duration-300"
                      style={{ transform: `scale(${stepProgress})` }}
                    ></div>
                    <div className={cn(
                      "w-full pl-12 md:pl-0",
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    )}>
                       <div
                        className={cn(
                          "md:w-1/2",
                          index % 2 === 0 ? "md:pl-10" : "md:ml-auto md:pr-10"
                        )}
                      >
                        <h4 className="font-headline text-xl font-semibold text-foreground">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-foreground/80">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
