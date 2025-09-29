
import { ShieldCheck, Zap, User, BrainCircuit } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";

const reasons = [
  {
    icon: BrainCircuit,
    title: "Clever by Design",
    description: "Automation that saves hours & cuts costs — so you see impact from day one.",
  },
  {
    icon: Zap,
    title: "Fast & Affordable",
    description: "Go live in days, not months — with pricing that fits your budget and scales as you grow.",
  },
  {
    icon: ShieldCheck,
    title: "No Tech Headaches",
    description: "We handle the complexity, integrations, and setup — you focus on growth.",
  },
  {
    icon: User,
    title: "Human + AI",
    description: "You get the perfect blend of human expertise + AI power, so your workflows work flawlessly.",
  },
];

interface ReasonCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
}

function ReasonCard({ icon: Icon, title, description }: ReasonCardProps) {
  return (
    <div className="glass-card animated-outline p-6 rounded-2xl flex flex-col items-start h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
      <div className="bg-primary/10 p-3 rounded-lg mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-headline text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 flex-grow">{description}</p>
    </div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="py-8 md:py-12" id="why-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">The Foxxage advantage.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
