import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Simon Young</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,800"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-4xl mx-auto md:pt-32">
        <Header />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
