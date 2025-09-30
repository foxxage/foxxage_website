
import { BotMessageSquare, Link as LinkIcon, BarChartBig } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC, SVGProps } from "react";

const WorkflowIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </svg>
);

const services = [
  {
    icon: BotMessageSquare,
    title: "Custom AI Agents",
    description: "From answering customer questions to capturing leads, our AI Agents never sleep — helping you stay connected to customers around the clock.",
  },
  {
    icon: WorkflowIcon,
    title: "Workflow Automation",
    description: "We connect your apps and eliminate repetitive tasks, so you save hours every week and focus on growing your business.",
  },
  {
    icon: LinkIcon,
    title: "Seamless Integrations",
    description: "WhatsApp, CRM, Google Sheets, Slack, HubSpot, Email — we make them work together in one smooth, connected system.",
  },
  {
    icon: BarChartBig,
    title: "Smart Insights",
    description: "Get clear, automated reports and insights so you know exactly what’s working and where to focus next.",
  },
];

interface ServiceCardProps {
  icon: FC<LucideProps> | FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group glass-card animated-outline p-6 rounded-2xl flex flex-col items-start h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
      <div className="bg-primary/10 p-3 rounded-lg mb-4">
        <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
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
