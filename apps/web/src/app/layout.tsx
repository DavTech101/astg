import '@styles/globals.css';
import cn from '@utils/styleMerger';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { CLIENT_BASE_URL } from '@data/routes';
import Providers from '@shared/providers/Providers';

import {
  COMPANY_NAME,
  COMPANY_LOGO_ALT,
  COMPANY_DESCRIPTION,
  GOOGLE_VERIFICATION_ID,
} from '@data/companyData';

//##########################################################################################
// META DATA
//##########################################################################################
const font = Montserrat({
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: {
    default: COMPANY_NAME,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  metadataBase: new URL(CLIENT_BASE_URL),
  verification: {
    google: GOOGLE_VERIFICATION_ID,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: `${COMPANY_NAME}`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        alt: COMPANY_LOGO_ALT,
        url: `/images/astg-pop.png`,
        width: 1260,
        height: 800,
      },
    ],
    siteName: COMPANY_NAME,
  },
};

//##########################################################################################
// ROOT LAYOUT
//##########################################################################################
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          `relative`,
          `grid min-h-screen grid-cols-[100%] grid-rows-[auto_1fr_auto]`,
          `lg:text-lg`,
          'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]',
          'from-app-primary-lighter to-app-primary',
          font.className
        )}
      >
        <Providers>{children}</Providers>
        {/* Cookies, Analytics etc. */}
      </body>
    </html>
  );
}