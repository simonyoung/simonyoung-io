import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';

const theme = {
  primary: 'green'
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
