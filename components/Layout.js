import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '2px solid #DDD'
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Head>
      <title>Sample Header CHANGE ME</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
