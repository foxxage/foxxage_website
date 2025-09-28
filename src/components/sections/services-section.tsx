import { BotMessageSquare, Zap, Link as LinkIcon, BarChartBig } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";

const services = [
  {
    icon: BotMessageSquare,
    title: "Custom AI Agents",
    description: "Your 24/7 business sidekick — from handling leads to answering customer queries.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "We connect your apps and automate the boring stuff, saving you hours every week.",
  },
  {
    icon: LinkIcon,
    title: "Seamless Integrations",
    description: "CRM, WhatsApp, Email, APIs — we make your tools talk to each other.",
  },
  {
    icon: BarChartBig,
    title: "Smart Insights",
    description: "Automation is only as good as the data. We deliver insights that drive growth.",
  },
];

interface ServiceCardProps {
  icon: FC<LucideProps>;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="glass-card animated-outline p-6 rounded-2xl flex flex-col items-start h-full transition-all duration-300 ease-in-out">
      <div className="bg-primary/10 p-3 rounded-lg mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="font-headline text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 flex-grow">{description}</p>
    </div>
  );
}


export function ServicesSection() {
  return (
    <section className="py-8 md:py-12" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-foreground/70">What we do to help you grow.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
