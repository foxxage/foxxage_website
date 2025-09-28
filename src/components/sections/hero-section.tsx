import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 text-center" id="home">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Work Less. Grow More.
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl">
            At Foxxage, we build AI Agents and Workflow Automations for startups and SMEs — so you can focus on growth, not busywork.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <Link href="#contact">Book a Free Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
