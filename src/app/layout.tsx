import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/layouts/header';
import { Footer } from '@/components/layouts/footer';
import { SideBar } from '@/components/layouts/sidebar';
import ReactQuerySetting from '@/libraries/reactQuery/ReactQuerySetting';

import './globals.css';
import RecoilRootWrapper from '@/libraries/recoil/recoilWrapper';

export const metadata: Metadata = {
  title: '인사이더',
  description: '인사이더',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body style={{ fontFamily: 'Pretendard, sans-serif' }}>
        <main>
          <Header />
          <div className="flex h-full">
            <SideBar />
            <div className="w-full">
              <section className="flex overflow-y-auto">
                <ReactQuerySetting>
                  <RecoilRootWrapper>{children}</RecoilRootWrapper>
                </ReactQuerySetting>
              </section>
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
