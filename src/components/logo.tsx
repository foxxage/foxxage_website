import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M16.8 6.20001C16.8 5.60001 16.5 4.90001 16 4.60001L13.2 2.90001C12.4 2.40001 11.1 2.40001 10.3 2.90001L7.5 4.60001C7 4.90001 6.7 5.60001 6.7 6.20001V9.50001L16.8 15.6V6.20001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.7 13.1L3.9 14.8C3.1 15.3 2.5 16.3 2.5 17.2V17.2C2.5 18.1 3.1 19 3.9 19.5L5.3 20.4C6.1 20.9 7.4 20.9 8.2 20.4L9.6 19.5C10.4 19 11 18.1 11 17.2V17.2C11 16.3 10.4 15.3 9.6 14.8L6.8 13.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.8 13.1L19.6 14.8C20.4 15.3 21 16.3 21 17.2V17.2C21 18.1 20.4 19 19.6 19.5L18.2 20.4C17.4 20.9 16.1 20.9 15.3 20.4L13.9 19.5C13.1 19 12.5 18.1 12.5 17.2V17.2C12.5 16.3 13.1 15.3 13.9 14.8L16.7 13.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.7 9.5L12 12.7L16.8 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="font-headline text-2xl font-bold text-foreground">Foxxage</span>
    </div>
  );
}
