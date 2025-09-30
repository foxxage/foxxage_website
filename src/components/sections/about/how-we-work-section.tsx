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
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
            How We Work
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/30" aria-hidden="true"></div>
            <ul className="space-y-12">
              {steps.map((step, index) => (
                <li key={step.title} className="relative flex items-center">
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="w-full">
                    <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pl-10 text-left' : 'pr-10 text-right'}`}>
                        <h4 className="font-headline text-xl font-semibold text-foreground">{step.title}</h4>
                        <p className="mt-2 text-foreground/80">{step.description}</p>
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
