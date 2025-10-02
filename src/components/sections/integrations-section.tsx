
import { Mail, Instagram, MessageCircle, Bot, Sheet, Calculator, Calendar, Linkedin, MapPin } from 'lucide-react';
import type { SVGProps } from 'react';

const Telegram = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.58c-.28 1.13-1.04 1.4-1.74.88l-4.98-3.65l-2.33 2.22c-.24.24-.45.46-.8.46z" /></svg>;
const Discord = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M20.3,3.3c-1.2-0.8-2.6-1.4-4-1.8c-0.2,0.5-0.4,1-0.6,1.5c-1.8-0.4-3.6-0.4-5.4,0C10.1,3,9.8,2.5,9.6,2c-1.5,0.4-2.9,1-4.1,1.8C2.8,7.9,1.6,13.2,3.3,18c1.8,2.9,4.8,4.8,8.2,5.5c1.4,0.3,2.8,0.3,4.2,0c3.4-0.7,6.4-2.6,8.2-5.5C25.6,13.2,24.5,7.9,20.3,3.3z M9.6,15.9c-0.9,0-1.7-0.8-1.7-1.8c0-1,0.8-1.8,1.7-1.8c0.9,0,1.7,0.8,1.7,1.8C11.3,15.1,10.5,15.9,9.6,15.9z M15.7,15.9c-0.9,0-1.7-0.8-1.7-1.8c0-1,0.8-1.8,1.7-1.8c0.9,0,1.7,0.8,1.7,1.8C17.4,15.1,16.6,15.9,15.7,15.9z"/></svg>;
const XIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  );
const GoogleMyBusiness = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M21.94 7.64h-9.35l-2.43 4.33l-2.9-2.9v-1.43h6.29V5.21H7.86l-2.65 2.65L3.4 6.04l2.64-2.65h11.1L21.94 7.64M18.5 8.9v8.34h-1.25V8.9Zm-2.5 0v8.34h-1.25V8.9Zm-2.5 0v5.84h-1.25V8.9Zm-2.5 0v5h-1.25V8.9Z"/></svg>;

const logos = [
    { icon: Instagram, name: 'Instagram' },
    { icon: MessageCircle, name: 'WhatsApp' },
    { icon: Telegram, name: 'Telegram' },
    { icon: Sheet, name: 'Google Sheet' },
    { icon: Mail, name: 'Gmail' },
    { icon: Bot, name: 'ChatGPT' },
    { icon: Calendar, name: 'Google Calendar' },
    { icon: Discord, name: 'Discord' },
    { icon: Calculator, name: 'Calculator' },
    { icon: Linkedin, name: 'LinkedIn' },
    { icon: XIcon, name: 'X.com' },
    { icon: MapPin, name: 'Google Maps'},
    { icon: GoogleMyBusiness, name: 'Google My Business'},
];

export function IntegrationsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-foreground/80 mb-8">
          Seamlessly Integrated
        </h2>
        <div
          className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        >
          <div className="flex min-w-full shrink-0 items-center justify-around animate-scroll">
            {logos.concat(logos).map((logo, index) => (
              <logo.icon key={index} className="mx-8 h-10 w-10 text-foreground/70" aria-label={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
