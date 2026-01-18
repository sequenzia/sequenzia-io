import type { Metadata } from 'next';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/config';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SideBar from '@/components/layout/SideBar';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sequenzia.io'),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: 'website',
    images: ['/social_img.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/social_img.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="bg-base-100 drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-100">
              <Header />
              <div className="md:flex md:justify-center">
                <main className="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]">
                  {children}
                </main>
              </div>
              <Footer />
            </div>
            <SideBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
