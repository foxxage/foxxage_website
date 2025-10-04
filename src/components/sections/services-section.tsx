
"use client";

import { useState, useRef, useEffect } from "react";
import { BotMessageSquare, Link as LinkIcon, BarChartBig, ChevronDown } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC, SVGProps } from "react";
import { cn } from "@/lib/utils";

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
      "24/7 Lead Capture",
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
    description: "We make your tools — WhatsApp, CRM, Google Sheets, Slack, HubSpot, Email — work together in one smooth, connected system.",
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
  isOpen: boolean;
  onClick: () => void;
}

function ServiceCard({ icon: Icon, title, description, details, isOpen, onClick }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group/service-card glass-card animated-outline p-8 rounded-2xl flex flex-col items-start h-full transition-all duration-300 ease-in-out cursor-pointer",
        isOpen ? "shadow-2xl shadow-primary/10 -translate-y-2" : "hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
      )}
      onClick={onClick}
    >
      <div className="w-full flex justify-between items-start mb-4">
        <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover/service-card:scale-110 group-hover/service-card:-rotate-6" />
        <ChevronDown 
          className={cn(
            "h-6 w-6 text-foreground/50 transition-transform duration-300",
            isOpen && "rotate-180 text-primary"
          )} 
        />
      </div>

      <h3 className="font-headline text-xl font-semibold mb-2">{title}</h3>
      
      <div className={cn("grid transition-[grid-template-rows] duration-500 ease-in-out", isOpen ? "grid-rows-[0fr]" : "grid-rows-[1fr]")}>
         <div className="overflow-hidden">
            <p className="text-foreground/70 mb-4">{description}</p>
         </div>
      </div>

      <div className={cn("grid transition-[grid-template-rows] duration-500 ease-in-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <ul className="space-y-2 text-foreground/80 list-disc pl-5 pt-2">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export function ServicesSection() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (id: string) => {
    setOpenCardId(prevId => (prevId === id ? null : id));
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setOpenCardId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="py-8 md:py-12" id="services" ref={servicesRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-foreground/70">What we do to help you grow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              isOpen={openCardId === service.id}
              onClick={() => handleCardClick(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
