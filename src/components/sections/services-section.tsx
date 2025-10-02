
"use client";

import { BotMessageSquare, Link as LinkIcon, BarChartBig } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC, SVGProps } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

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
    details: [
      "24/7 Lead Capture & Qualification",
      "Instant Customer Support on WhatsApp, Web, etc.",
      "Automated Appointment Booking",
      "Personalized Product Recommendations"
    ],
    id: "agents",
  },
  {
    icon: WorkflowIcon,
    title: "Workflow Automation",
    description: "We connect your apps and eliminate repetitive tasks, so you save hours every week and focus on growing your business.",
    details: [
        "Automated Data Entry & Syncing",
        "Streamlined Onboarding Processes",
        "Automated Reporting & Notifications",
        "Sales & Marketing Funnel Automation"
    ],
    id: "automation",
  },
  {
    icon: LinkIcon,
    title: "Seamless Integrations",
    description: "WhatsApp, CRM, Google Sheets, Slack, HubSpot, Email — we make them work together in one smooth, connected system.",
    details: [
        "Connect your CRM (HubSpot, Salesforce, etc.)",
        "Integrate with Google Workspace (Sheets, Docs, Gmail)",
        "Link Communication Tools (Slack, WhatsApp, Telegram)",
        "Custom API integrations for any of your tools"
    ],
    id: "integrations",
  },
  {
    icon: BarChartBig,
    title: "Smart Insights",
    description: "Get clear, automated reports and insights so you know exactly what’s working and where to focus next.",
    details: [
        "Automated Sales & Performance Dashboards",
        "Real-time Customer Feedback Analysis",
        "Lead Source & Conversion Tracking",
        "Cost & ROI Monitoring on Autopilot"
    ],
    id: "insights",
  },
];

interface ServiceCardProps {
  icon: FC<LucideProps> | FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  details: string[];
  id: string;
}

function ServiceCard({ icon: Icon, title, description, details, id }: ServiceCardProps) {
  return (
    <div className="group/service-card relative glass-card animated-outline p-6 rounded-2xl flex flex-col items-start h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
      <div className="relative z-10 transition-all duration-300">
        <div className="bg-primary/10 p-3 rounded-lg mb-4">
          <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover/service-card:scale-110 group-hover/service-card:-rotate-6" />
        </div>
        <h3 className="font-headline text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70 flex-grow">{description}</p>
      </div>
      
      <div className="absolute inset-0 top-auto z-0 p-6 pt-0 transition-all duration-300 ease-in-out opacity-0 group-hover/service-card:opacity-100 transform translate-y-4 group-hover/service-card:translate-y-0 h-full flex flex-col justify-end">
          <div className="transition-all duration-300 h-full overflow-hidden flex flex-col justify-end">
            <div className="bg-gradient-to-t from-background via-background/80 to-transparent absolute inset-x-0 bottom-0 h-full group-hover/service-card:h-full transition-all duration-300"></div>
             <div className="relative z-10">
                <ul className="space-y-2 text-foreground/80 list-disc pl-5">
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
                </ul>
             </div>
          </div>
      </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
