// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

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
  classes: Object
};

function Navbar(props : Props) {
  const {classes} = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          WipKanban
        </Typography>
        <IconButton color="inherit" aria-label="Menu">
          <SearchIcon/>
        </IconButton>
        <IconButton color="inherit" aria-label="Menu">
          <Avatar
            aria-label="Robisson Oliveira"
            src="/uploads/7b435896-aeca-4660-aaa3-b734e3e9200a.jpg"/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
