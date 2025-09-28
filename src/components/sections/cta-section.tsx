import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-pane">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between text-center lg:text-left">
                <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
                    <span className="block">Ready to outsmart work and grow smarter?</span>
                </h2>
                <div className="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
                    <Button size="lg" asChild className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                        <Link href="#contact">Let’s Automate This!</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
