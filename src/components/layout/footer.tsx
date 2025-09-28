import Link from "next/link";
import { Logo } from "@/components/logo";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, name: "Instagram", href: "https://instagram.com/foxxage" },
  { icon: Linkedin, name: "LinkedIn", href: "https://linkedin.com/company/foxxage" },
  { icon: Twitter, name: "X", href: "https://x.com/foxxage" },
];


export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-foreground/70 text-base">Work Less. Grow More.</p>
             <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors bg-secondary p-2 rounded-lg">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-foreground/70 hover:text-primary">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm leading-5 text-foreground/60">&copy; {new Date().getFullYear()} Foxxage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
