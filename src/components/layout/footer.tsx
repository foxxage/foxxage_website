import Link from "next/link";
import { Logo } from "@/components/logo";
import { Instagram, Linkedin } from "lucide-react";
import type { SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1200 1227"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6904H306.615L611.412 515.685L658.88 583.579L1055.08 1150.31H892.476L569.165 687.854V687.828Z"
      fill="currentColor"
    />
  </svg>
);


const socialLinks = [
  { icon: Instagram, name: "Instagram", href: "https://instagram.com/foxxage" },
  { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/company/foxxage" },
  { icon: XIcon, name: "X", href: "https://x.com/foxxage" },
];


export function Footer() {
  return (
    <footer className="bg-background border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className="text-foreground/70 text-base">Work Less. Grow More.</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors bg-secondary p-2 rounded-lg">
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-center gap-4">
          <p className="text-sm leading-5 text-foreground/60">&copy; {new Date().getFullYear()} Foxxage. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="/privacy-policy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/refund-cancellation-policy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Refund & Cancellation
            </Link>
             <Link href="/shipping-exchange-policy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Shipping & Exchange Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
