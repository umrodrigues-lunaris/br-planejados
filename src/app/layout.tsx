import Script from 'next/script';
import { Syne, Manrope } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
});

export const metadata = {
  title: 'BR Planejados — Móveis sob medida de alto padrão',
  description:
    'Marcenaria de alto padrão: móveis planejados sob medida com design arquitetônico, acabamento impecável e materiais premium.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${manrope.variable}`}>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EESB3Q218S"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EESB3Q218S', { page_path: window.location.pathname });
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
