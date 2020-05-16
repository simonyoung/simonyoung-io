import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Simon Young</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
