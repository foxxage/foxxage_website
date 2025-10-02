
import { Mail, Instagram, MessageCircle, Bot, Sheet } from 'lucide-react';
import type { SVGProps } from 'react';

const GoogleDrive = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M7.71 3.5L1.5 14.24l2.85 4.93l6.21-10.75zM15.42 20.5l-2.86-4.94L6.35 20.5h9.07zM9.69 5.25L13.15 11l-4.59 7.95h9.18L22.5 11z"></path></svg>;
const Gemini = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none"><path d="M5.104 2.103a.75.75 0 0 0-1.06 1.06l2.396 2.396a.25.25 0 0 1-.176.425H2.75a.75.75 0 0 0 0 1.5h3.51a.25.25 0 0 1 .176.424L4.045 10.3a.75.75 0 0 0 1.06 1.06l2.397-2.396a.25.25 0 0 1 .425.176v3.51a.75.75 0 0 0 1.5 0v-3.51a.25.25 0 0 1 .425-.176l2.396 2.396a.75.75 0 0 0 1.06-1.06L10.3 7.485a.25.25 0 0 1-.176-.424H13.6a.75.75 0 0 0 0-1.5h-3.47a.25.25 0 0 1-.176-.425l2.396-2.396a.75.75 0 0 0-1.06-1.06L8.892 4.045a.25.25 0 0 1-.425-.176V.36a.75.75 0 0 0-1.5 0v3.51a.25.25 0 0 1-.424.176L5.104 2.103z" fill="currentColor"></path><path d="M18.896 11.603a.75.75 0 0 0-1.06-1.06l-2.396 2.396a.25.25 0 0 1-.425-.176v-3.51a.75.75 0 0 0-1.5 0v3.51a.25.25 0 0 1-.425.176l-2.396-2.396a.75.75 0 0 0-1.06 1.06l2.396 2.396a.25.25 0 0 1-.176.425H9.4a.75.75 0 0 0 0 1.5h3.51a.25.25 0 0 1 .176.424l-2.396 2.397a.75.75 0 0 0 1.06 1.06l2.396-2.396a.25.25 0 0 1 .425.176v3.51a.75.75 0 0 0 1.5 0v-3.51a.25.25 0 0 1 .425-.176l2.396 2.396a.75.75 0 0 0 1.06-1.06l-2.396-2.397a.25.25 0 0 1 .176-.424h3.47a.75.75 0 0 0 0-1.5h-3.47a.25.25 0 0 1-.176-.425l2.396-2.396z" fill="currentColor"></path></svg>;
const Telegram = (props: SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24"><path fill="currentColor" d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.58c-.28 1.13-1.04 1.4-1.74.88l-4.98-3.65l-2.33 2.22c-.24.24-.45.46-.8.46z" /></svg>;


const logos = [
    { icon: Instagram, name: 'Instagram' },
    { icon: MessageCircle, name: 'WhatsApp' },
    { icon: Telegram, name: 'Telegram' },
    { icon: Sheet, name: 'Google Sheet' },
    { icon: Mail, name: 'Gmail' },
    { icon: GoogleDrive, name: 'Google Drive' },
    { icon: Bot, name: 'ChatGPT' },
    { icon: Gemini, name: 'Gemini' },
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
