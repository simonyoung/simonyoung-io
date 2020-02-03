import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Head>
        <title>Sample Header CHANGE ME</title>
      </Head>
      <Container maxWidth="lg">
        <Header />
        {children}
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
