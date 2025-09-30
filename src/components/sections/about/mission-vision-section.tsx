export function MissionVisionSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="glass-card animated-outline p-8 rounded-2xl">
            <h3 className="font-headline text-2xl font-bold mb-4">Mission</h3>
            <p className="text-foreground/80">To make AI Agents and workflow automation accessible — fast, affordable, and built for real businesses.</p>
          </div>
          <div className="glass-card animated-outline p-8 rounded-2xl">
            <h3 className="font-headline text-2xl font-bold mb-4">Vision</h3>
            <p className="text-foreground/80">A future where work runs on smart workflows and people do more meaningful work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}