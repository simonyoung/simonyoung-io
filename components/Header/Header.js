import Link from 'next/link';
import styled from 'styled-components';
import { makeStyles, Container, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Simon Young
        </Typography>
      </Toolbar>

      <Container maxWidth="xs">
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/feed">
            <a>Feed</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/speaking">
            <a>Speaking</a>
          </Link>
        </Toolbar>
      </Container>
    </React.Fragment>
  );
};

export default Header;
