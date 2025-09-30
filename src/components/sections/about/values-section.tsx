
import { Lightbulb, Rocket, CircleDollarSign, ShieldCheck } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";

const values = [
  {
    icon: Lightbulb,
    title: "Clever Solutions",
    description: "Built to solve real problems, not create new ones.",
  },
  {
    icon: Rocket,
    title: "Speed",
    description: "Launch in days, not months.",
  },
  {
    icon: CircleDollarSign,
    title: "Affordability",
    description: "Pay for what you need and scale up.",
  },
  {
    icon: ShieldCheck,
    title: "Data Safety",
    description: "Your information stays secure, always.",
  },
];

interface ValueCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
}

function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="group glass-card animated-outline p-6 rounded-2xl text-center flex flex-col items-center h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
      <div className="bg-primary/10 p-3 rounded-lg mb-4">
        <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
      </div>
      <h3 className="font-headline text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}

export function ValuesSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Values
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}
