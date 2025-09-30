export function MissionVisionSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="glass-card animated-outline p-8 rounded-2xl">
            <h3 className="font-headline text-2xl font-bold mb-4">Mission</h3>
            <p className="text-foreground/80">AI shouldn’t be a luxury. Our mission is to help every business tap into the power of AI and automation — without big budgets or long timelines.</p>
          </div>
          <div className="glass-card animated-outline p-8 rounded-2xl">
            <h3 className="font-headline text-2xl font-bold mb-4">Vision</h3>
            <p className="text-foreground/80">To create a world where humans focus on creativity and strategy, while AI handles the repetitive work in the background.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
