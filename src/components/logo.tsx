import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0C6.7125 0 0 6.7125 0 15C0 23.2875 6.7125 30 15 30C23.2875 30 30 23.2875 30 15C30 6.7125 23.2875 0 15 0ZM21.5625 21.9375C21.1875 22.3125 20.625 22.3125 20.25 21.9375L15 16.6875L9.75 21.9375C9.375 22.3125 8.8125 22.3125 8.4375 21.9375C8.0625 21.5625 8.0625 21 8.4375 20.625L13.6875 15.375L8.4375 10.125C8.0625 9.75 8.0625 9.1875 8.4375 8.8125C8.8125 8.4375 9.375 8.4375 9.75 8.8125L15 14.0625L20.25 8.8125C20.625 8.4375 21.1875 8.4375 21.5625 8.8125C21.9375 9.1875 21.9375 9.75 21.5625 10.125L16.3125 15.375L21.5625 20.625C21.9375 21 21.9375 21.5625 21.5625 21.9375Z" fill="hsl(var(--primary))"/>
      </svg>
      <span className="font-headline text-2xl font-bold text-foreground">foxxage</span>
    </div>
  );
}
