import Link from 'next/link';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const linkStyle = {
  marginRight: 15
};

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
    <div>
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        align="left"
        noWrap
      >
        Simon Young
      </Typography>

      <Toolbar component="nav" variant="dense">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </Toolbar>
    </div>
  );
};

export default Header;
