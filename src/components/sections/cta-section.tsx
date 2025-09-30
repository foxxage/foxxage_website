import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CtaSection({
  title = "Ready to Build Your Automation?",
  subtitle = "Tell us about your needs and we’ll craft the perfect solution.",
  buttonText = "Put the Fox to Work",
  buttonLink = "#contact"
}: CtaSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card animated-outline rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/70">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}