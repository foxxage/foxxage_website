export function HowWeWorkSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card animated-outline max-w-4xl mx-auto p-8 md:p-12 rounded-2xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-8">
            How We Work
          </h2>
          <ul className="space-y-4 text-foreground/80">
            <li className="flex items-start">
              <span className="text-primary font-bold text-xl mr-4">→</span>
              <div>
                <h4 className="font-semibold">Discovery</h4>
                <p>We start by understanding your goals and current workflow.</p>
              </div>
            </li>
            <li className="flex items-start">
               <span className="text-primary font-bold text-xl mr-4">→</span>
              <div>
                <h4 className="font-semibold">Prototype</h4>
                <p>We design and build a draft of your automation solution.</p>
              </div>
            </li>
             <li className="flex items-start">
               <span className="text-primary font-bold text-xl mr-4">→</span>
              <div>
                <h4 className="font-semibold">Launch</h4>
                <p>We deploy the solution and ensure it integrates smoothly.</p>
              </div>
            </li>
             <li className="flex items-start">
               <span className="text-primary font-bold text-xl mr-4">→</span>
              <div>
                <h4 className="font-semibold">Iterate</h4>
                <p>We refine and improve based on your feedback. 2 rounds of revisions included.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}