import Header from './Header/Header';
import Footer from './Footer/Footer';
import Head from 'next/head';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Container = styled.div`
  width: 960px;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  background: #f2f2f2;
`;

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      <Head>
        <title>Sample Header CHANGE ME</title>
      </Head>
      <Header />
      <Divider />
      {children}
      <Footer />
    </Grid>
  );
};

export default Layout;
