import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Head from 'next/head';
import { GlobalStyle, LayoutContainer } from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Simon Young</title>
      </Head>
      <GlobalStyle />
      <LayoutContainer className="div">
        <Header />
        {children}
        <Footer />
      </LayoutContainer>
    </React.Fragment>
  );
};

export default Layout;
