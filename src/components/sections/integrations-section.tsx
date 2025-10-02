
import { Mail, Instagram, MessageCircle, Bot, Sheet } from 'lucide-react';
import type { SVGProps } from 'react';

const Hubspot = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 256 256"><path fill="#FF7A59" d="M128 0c70.7 0 128 57.3 128 128s-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0z"></path><path fill="#fff" d="M138.8 111.3c2.9-2.9 2.9-9.8 0-12.7a8.9 8.9 0 00-12.7 0l-33.5 33.5c-3 2.9-3 9.8 0 12.7a9 9 0 0012.7 0l33.5-33.5zM128.5 70.3a57.4 57.4 0 00-47.3 26.3c-2.4 3.7-1.4 8.7 2.3 11.1l11 7c3.7 2.4 8.7 1.4 11-2.3a29.8 29.8 0 0147.2 29.9c-.8 4.1 1.7 8.2 5.6 9.7l12.4 4.7c4 .8 8.1-1.7 9.6-5.6a57.4 57.4 0 00-52.8-80.8zm-19.1 116.3a29.9 29.9 0 01-47.2-29.8c.8-4.1-1.7-8.2-5.6-9.7l-12.4-4.7c-4-.8-8.1 1.7-9.6 5.6a57.4 57.4 0 0052.8 80.8c3-1.6 4.9-4.8 4.9-8.3v-11.8c0-4.9-3.4-9-8-10.1a5 5 0 01-4.9-2z"></path></svg>;
const Notion = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 256 256"><path fill="#000" d="M178.6 42.1h-44.4v183.2c0 2-2.5 3.1-4.1 1.7l-47.3-48.2v-91.8h-26c-2.4 0-4.4-2-4.4-4.4V42.1h126.2z"></path><path fill="#000" d="M122.9 42.1H78.6v115.1l44.3 45.2V42.1z"></path><path fill="#000" d="M198.8 86.5v126.8h-20.2V86.5h20.2zM232.8 86.5v126.8h-20.2V86.5h20.2zM23.1 86.5v126.8H2.9V86.5h20.2z"></path></svg>;
const Slack = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 128 128"><path fill="#36C5F0" d="M51.6 62.9c0 4.1-3.3 7.4-7.4 7.4s-7.4-3.3-7.4-7.4 3.3-7.4 7.4-7.4h7.4v7.4z"></path><path fill="#2EB67D" d="M65.1 51.6c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4 7.4 3.3 7.4 7.4v7.4h-7.4z"></path><path fill="#ECB22E" d="M76.4 65.1c0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4-3.3 7.4-7.4 7.4h-7.4v-7.4z"></path><path fill="#E01E5A" d="M62.9 76.4c4.1 0 7.4 3.3 7.4 7.4s-3.3 7.4-7.4 7.4-7.4-3.3-7.4-7.4v-7.4h7.4z"></path><path fill="#E01E5A" d="M76.4 51.6c0-4.1 3.3-7.4 7.4-7.4h15.5c4.1 0 7.4 3.3 7.4 7.4s-3.3 7.4-7.4 7.4H83.7c-4.1 0-7.4-3.3-7.4-7.4z"></path><path fill="#36C5F0" d="M65.1 76.4c-4.1 0-7.4 3.3-7.4 7.4v15.5c0 4.1 3.3 7.4 7.4 7.4s7.4-3.3 7.4-7.4V83.7c0-4-3.3-7.3-7.4-7.3z"></path><path fill="#2EB67D" d="M51.6 76.4c0 4.1-3.3 7.4-7.4 7.4H28.7c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4h15.5c4.1 0 7.4 3.3 7.4 7.4z"></path><path fill="#ECB22E" d="M62.9 65.1c4.1 0 7.4-3.3 7.4-7.4V42.2c0-4.1-3.3-7.4-7.4-7.4s-7.4 3.3-7.4 7.4v15.5c0 4.1 3.3 7.4 7.4 7.4z"></path></svg>;
const Telegram = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m5.3 5.4c.14 0 .26.05.36.14c.1.1.15.22.15.36c0 .32-.23.48-.69.48l-1.39.01c-.46 0-.85.1-1.16.3c-.3.2-.45.5-.45.91v.17c.18-.21.4-.38.65-.5c.25-.13.5-.19.78-.19c.67 0 1.22.21 1.66.62c.44.41.66.93.66 1.55c0 .54-.15.98-.44 1.34c-.29.36-.68.61-1.16.75s-1.01.21-1.58.21c-1.1 0-1.99-.29-2.67-.87c-.68-.58-1.02-1.37-1.02-2.38c0-.68.17-1.26.5-1.74c.33-.48.78-.85 1.33-1.11c.55-.26 1.18-.4 1.88-.4c.4 0 .76.06 1.08.19c.32.12.58.29.79.5m-1.03 2.1c-.24-.21-.53-.31-.87-.31c-.42 0-.77.1-1.07.31c-.3.2-.53.49-.69.85c-.16.36-.24.78-.24 1.26c0 .64.16 1.14.48 1.5c.32.36.73.54 1.23.54c.52 0 .95-.17 1.28-.5c.33-.33.5-.76.5-1.28c0-.5-.14-.9-.41-1.21c-.27-.3-.63-.45-1.07-.45c-.2 0-.37.04-.52.11c-.15.08-.28.18-.4.32v-.41c0-.12.03-.22.09-.3c.06-.08.15-.12.26-.12l1.03-.01zM8.89 8.12h1.16l-1.4 5.3h-.03l-1.36-5.3h1.16l.8 3.12l.79-3.12z"/></svg>;

const logos = [
    { icon: MessageCircle, name: 'WhatsApp' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Bot, name: 'ChatGPT' },
    { icon: Mail, name: 'Gmail' },
    { icon: Sheet, name: 'Excel' },
    { icon: Slack, name: 'Slack' },
    { icon: Hubspot, name: 'Hubspot' },
    { icon: Notion, name: 'Notion' },
    { icon: Telegram, name: 'Telegram' },
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
