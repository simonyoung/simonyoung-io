import React from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
  ThemeProvider as MaterialThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

const theme = {
  primary: '#f2f2f2',
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  ...createMuiTheme()
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
      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps}></Component>
          </Layout>
        </MaterialThemeProvider>
      </StyledThemeProvider>
    );
  }
}

export default MyApp;
