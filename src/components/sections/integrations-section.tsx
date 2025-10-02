
import { Mail, Instagram, MessageCircle, Bot, Sheet } from 'lucide-react';
import type { SVGProps } from 'react';

const Telegram = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.58c-.28 1.13-1.04 1.4-1.74.88l-4.98-3.65l-2.33 2.22c-.24.24-.45.46-.8.46z" /></svg>;


const logos = [
    { icon: Instagram, name: 'Instagram' },
    { icon: MessageCircle, name: 'WhatsApp' },
    { icon: Telegram, name: 'Telegram' },
    { icon: Sheet, name: 'Google Sheet' },
    { icon: Mail, name: 'Gmail' },
    { icon: Bot, name: 'ChatGPT' },
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
