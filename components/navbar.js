import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: '1.5rem',
    background: '#f9f9f9',
    color: 'black',
    flexGrow: '1',
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    fontSize: '1.2rem',
    fontWeight: 600,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      fontSize: '1rem',
    },
  },
  menuButton: {
    margin: theme.spacing(1),
  },
  buttongrp: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  }
}));

const navbar = () => {
    const classes = useStyles();

  return (
    <nav>
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>Hello Techies! Welcome to the techipedia</div>
          <div className={classes.buttongrp}>
            <ButtonGroup
              orientation="horizontal"
              color="secondary"
              aria-label="horizontal contained primary button group"
              variant="text"
            >
              <Button href="/">Home</Button>
              <Button href="/about">About</Button>
              <Button href="/contact">Contact</Button>
            </ButtonGroup>
          </div>
          <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
    </nav>
  );
}
export default navbar;