import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'green'
};

class MyApp extends App {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

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
