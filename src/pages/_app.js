import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import Layout from 'components/Layout';
import 'styles/fonts.scss';

const theme = {
  colors: {
    primary: '#0070f3',
    background: '#ffffff',
  },
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
