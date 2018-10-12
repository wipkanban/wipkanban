// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  gridContainer: {
    padding: 2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

type Props = {
  classes: Object,
  children?:React.Node
};

function Navbar(props : Props) {
  const {classes,children} = props;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="title" color="inherit">
          WIPLean
        </Typography>
        {children}

      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
