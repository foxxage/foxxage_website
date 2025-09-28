import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NodeAnimation } from '@/components/node-animation';

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 text-center overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <NodeAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Work Less. Grow More.
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl">
            At Foxxage, we design AI Agents and Workflow Automations that work 24/7 — so you can work smarter, not harder.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <Link href="#contact">Build My AI Agent</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
