import Header from 'components/Header';
import Footer from 'components/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="divide-y divide-gray-200">
        <Head>
          <title>Simon Young</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>

        <div className="bg-orange-100 relative pt-4 pb-4 px-4 sm:px-6 lg:pt-4 lg:pb-4 lg:px-8">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
