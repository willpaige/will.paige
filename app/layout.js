import Script from 'next/script';
import Providers from '../src/components/providers/providers';
import '../src/components/app/app.scss';

export const metadata = {
  title: {
    default: 'Will Paige | Senior Software Engineer',
    template: 'Will Paige | Senior Software Engineer - %s',
  },
  description: 'Will Paige is a Uk based senior software engineer, currently working for NatWest Rooster Money',
  metadataBase: new URL('https://will.paige.me.uk'),
  openGraph: {
    title: 'Will Paige | Senior Software Engineer',
    description: 'Will Paige is a Uk based senior software engineer, currently working for NatWest Rooster Money',
    url: 'https://will.paige.me.uk',
    siteName: 'Will Paige',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@_willPaige',
  },
  icons: {
    icon: '/images/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preload" href="/fonts/Roboto_Mono/robotomono-bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Mono/robotomono-medium.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Roboto_Mono/robotomono-regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Source_Sans_Pro/SourceSansPro-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Source_Sans_Pro/SourceSansPro-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      </head>
      <body>
        {process.env.NEXT_PUBLIC_GTAG_KEY && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_KEY}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-config"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){ window.dataLayer.push(arguments); }
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GTAG_KEY}', { send_page_view: true });`,
              }}
            />
          </>
        )}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
