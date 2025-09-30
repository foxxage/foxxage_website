"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Discovery",
    description: "We start by understanding your goals and current workflow.",
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
    title: "Iterate",
    description: "We refine and improve based on your feedback. 2 rounds of revisions included.",
  },
];

export function HowWeWorkSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
            How We Work
          </h2>
          <div className="relative md:pl-0">
            <div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/30 transition-all duration-1000 ease-out"
              style={{ height: inView ? "100%" : "0%" }}
              aria-hidden="true"
            ></div>
            <ul className="space-y-12">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className={cn(
                    "relative flex items-start md:items-center transition-all duration-500 ease-in-out",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <div className={cn(
                      "absolute left-4 md:left-1/2 -translate-x-1/2 mt-1 md:mt-0 w-4 h-4 bg-primary rounded-full border-4 border-background transition-transform duration-500 ease-in-out",
                      inView ? "scale-100" : "scale-0"
                    )}
                    style={{ transitionDelay: `${index * 300 + 200}ms` }}
                  ></div>
                  <div className="w-full pl-12 md:pl-0">
                    <div
                      className={`flex md:w-full ${
                        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      <div
                        className={`md:w-1/2 ${
                          index % 2 === 0
                            ? "md:pl-10 md:text-left"
                            : "md:pr-10 md:text-right"
                        }`}
                      >
                        <h4 className="font-headline text-xl font-semibold text-foreground">
                          {step.title}
                        </h4>
                        <p className="mt-2 text-foreground/80">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
