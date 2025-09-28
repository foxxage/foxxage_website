import { ContactForm } from "@/components/contact-form";
import { Mail, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: Mail, text: "hi@foxxage.com", href: "mailto:hi@foxxage.com" },
  { icon: MessageCircle, text: "+91-9031998319", href: "https://wa.me/919031998319" },
];

export function ContactSection() {
  return (
    <section className="py-8 md:py-12" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card animated-outline grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-8 md:p-12 rounded-2xl">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let’s Build Your AI Agent
            </h2>
            <p className="mt-4 text-foreground/70">Tell us about your needs, and we'll craft the perfect automation solution.</p>
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => (
                <a key={item.text} href={item.href} className="flex items-center gap-4 group">
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
