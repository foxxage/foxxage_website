
import { Zap, User, BrainCircuit } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC, SVGProps } from "react";

const TechIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
    <path d="M18 9h2a2 2 0 0 1 2 2v10l-4-4h-6a2 2 0 0 1-2-2v-2" />
  </svg>
);


const reasons = [
  {
    icon: BrainCircuit,
    title: "Built for Results",
    description: "Automation that saves hours & cuts costs — so you see impact from day one.",
  },
  {
    icon: Zap,
    title: "Fast & Affordable",
    description: "Go live in days, not months — with pricing that fits your budget and scales as you grow.",
  },
  {
    icon: TechIcon,
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
  icon: FC<LucideProps> | FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

function ReasonCard({ icon: Icon, title, description }: ReasonCardProps) {
  return (
    <div className="group glass-card animated-outline p-6 rounded-2xl flex flex-col items-center text-center h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
      <div className="bg-primary/10 p-3 rounded-lg mb-4">
        <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
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
