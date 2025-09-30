"use client";

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { name: 'Automations Built', value: 20, suffix: '+' },
  { name: 'Hours Saved Monthly', value: 1200, suffix: '+' },
  { name: 'Integrations Supported', value: 500, suffix: '+' },
  { name: 'Support', value: 24, suffix: '/7' },
]

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  isInView: boolean;
}

function AnimatedNumber({ value, suffix = '', isInView }: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;
      
      const duration = 2000;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCurrentValue(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formattedValue = Math.ceil(currentValue).toLocaleString();

  return (
    <span className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
      {formattedValue}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-8 md:py-12" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-foreground/70">{stat.name}</dt>
                  <dd>
                     <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={inView} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
