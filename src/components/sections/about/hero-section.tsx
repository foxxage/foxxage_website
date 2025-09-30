import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NodeAnimation } from '@/components/node-animation';

export function AboutHeroSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <NodeAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Outsmart Work. The Foxxage Way.
          </h1>
          <p className="mt-6 text-lg font-medium text-foreground/80 sm:text-xl">
            Your 24/7 Digital Teammate.
          </p>
          <p className="mt-4 text-base leading-7 text-foreground/70 sm:text-lg">
            At Foxxage, we build AI Agents and smart automations that remove busywork, cut costs, and help teams focus on what matters. Fast. Affordable. Human-backed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button size="lg" asChild className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow w-full sm:w-auto">
              <Link href="/#contact">Build My AI Agent</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/#services">See Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
