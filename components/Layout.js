import Header from './Header/Header';
import Footer from './Footer/Footer';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '2px solid #DDD'
};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
