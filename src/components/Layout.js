import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="divide-y divide-gray-200">
        <Head>
          <title>Simon Young</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <h1 className="text-lg text-center m-4">TailwindUI/Next.js</h1>
          <p className="bg-red-100">
            This is a test of the tailwind next integration.
          </p>
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
