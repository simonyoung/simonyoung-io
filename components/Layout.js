import Header from './Header/Header';
import Footer from './Footer/Footer';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

export default withLayout;
