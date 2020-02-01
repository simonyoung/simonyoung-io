import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: #f2f2f2;
`;

const Layout = ({ children }) => (
  <Container>
    <Head>
      <title>Sample Header CHANGE ME</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
