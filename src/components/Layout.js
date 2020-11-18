import Header from 'components/Header';
import Footer from 'components/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <div className="divide-y divide-gray-200 border-gray-400 border-t-8">
        <Head>
          <title>Simon Young</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>

        <div className="bg-white relative p-2 sm:px-6 lg:pt-4 lg:pb-4 lg:px-8">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
