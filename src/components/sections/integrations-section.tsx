
import { Mail, Instagram, MessageCircle, Bot, Sheet, Trello } from 'lucide-react';
import type { SVGProps } from 'react';

const Hubspot = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 256 256"><path fill="currentColor" d="M128 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0z"></path><path fill="currentColor" d="M138.8 111.3c2.9-2.9 2.9-9.8 0-12.7a8.9 8.9 0 00-12.7 0l-33.5 33.5c-3 2.9-3 9.8 0 12.7a9 9 0 0012.7 0l33.5-33.5zM128.5 70.3a57.4 57.4 0 00-47.3 26.3c-2.4 3.7-1.4 8.7 2.3 11.1l11 7c3.7 2.4 8.7 1.4 11-2.3a29.8 29.8 0 0147.2 29.9c-.8 4.1 1.7 8.2 5.6 9.7l12.4 4.7c4 .8 8.1-1.7 9.6-5.6a57.4 57.4 0 00-52.8-80.8zm-19.1 116.3a29.9 29.9 0 01-47.2-29.8c.8-4.1-1.7-8.2-5.6-9.7l-12.4-4.7c-4-.8-8.1 1.7-9.6 5.6a57.4 57.4 0 0052.8 80.8c3-1.6 4.9-4.8 4.9-8.3v-11.8c0-4.9-3.4-9-8-10.1a5 5 0 01-4.9-2z"></path></svg>;
const Slack = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 128 128"><path fill="currentColor" d="M51.6 62.9c0 4.1-3.3 7.4-7.4 7.4s-7.4-3.3-7.4-7.4 3.3-7.4 7.4-7.4h7.4v7.4z"></path><path fill="currentColor" d="M65.1 51.6c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4 7.4 3.3 7.4 7.4v7.4h-7.4z"></path><path fill="currentColor" d="M76.4 65.1c0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4-3.3 7.4-7.4 7.4h-7.4v-7.4z"></path><path fill="currentColor" d="M62.9 76.4c4.1 0 7.4 3.3 7.4 7.4s-3.3 7.4-7.4 7.4-7.4-3.3-7.4-7.4v-7.4h7.4z"></path><path fill="currentColor" d="M76.4 51.6c0-4.1 3.3-7.4 7.4-7.4h15.5c4.1 0 7.4 3.3 7.4 7.4s-3.3 7.4-7.4 7.4H83.7c-4.1 0-7.4-3.3-7.4-7.4z"></path><path fill="currentColor" d="M65.1 76.4c-4.1 0-7.4 3.3-7.4 7.4v15.5c0 4.1 3.3 7.4 7.4 7.4s7.4-3.3 7.4-7.4V83.7c0-4-3.3-7.3-7.4-7.3z"></path><path fill="currentColor" d="M51.6 76.4c0 4.1-3.3 7.4-7.4 7.4H28.7c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4h15.5c4.1 0 7.4 3.3 7.4 7.4z"></path><path fill="currentColor" d="M62.9 65.1c4.1 0 7.4-3.3 7.4-7.4V42.2c0-4.1-3.3-7.4-7.4-7.4s-7.4 3.3-7.4 7.4v15.5c0 4.1 3.3 7.4 7.4 7.4z"></path></svg>;

const GoogleDrive = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M7.71 3.5L1.5 14.24l2.85 4.93l6.21-10.75zM15.42 20.5l-2.86-4.94L6.35 20.5h9.07zM9.69 5.25L13.15 11l-4.59 7.95h9.18L22.5 11z"></path></svg>;
const Stripe = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M19.33 4.67a9.33 9.33 0 0 0-14.66 0H0v4.66h2.67a9.33 9.33 0 0 0 18.66 0H24V4.67h-4.67zm-9.33 10a4.67 4.67 0 1 1 0-9.34a4.67 4.67 0 0 1 0 9.34z"></path><path fill="currentColor" d="M0 14h24v4.67H0z"></path></svg>;

const logos = [
    { icon: MessageCircle, name: 'WhatsApp' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Bot, name: 'ChatGPT' },
    { icon: Mail, name: 'Gmail' },
    { icon: Sheet, name: 'Excel' },
    { icon: Slack, name: 'Slack' },
    { icon: Hubspot, name: 'Hubspot' },
    { icon: Trello, name: 'Trello' },
    { icon: GoogleDrive, name: 'Google Drive' },
    { icon: Stripe, name: 'Stripe' },
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
