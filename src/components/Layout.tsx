import { FunctionComponent } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head';

// eslint-disable-next-line @typescript-eslint/ban-types
type LayoutProps = {};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <>
    <div className="divide-y divide-gray-200">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div className="bg-gray-900 relative p-2 px-4">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  </>
);
