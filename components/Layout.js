import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
