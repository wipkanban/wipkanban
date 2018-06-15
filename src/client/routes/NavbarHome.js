// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';

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
  },
  navRight: {
    position: 'absolute',
    right: 5
  },
  navLeft: {
    marginLeft: 20
  }
};

type Props = {
  classes: Object
};

function Navbar(props : Props) {
  const {classes} = props;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="title" color="inherit">
          WIPLean
        </Typography>
        <div className={classes.navRight}>
          <Tooltip title="Add card">
            <IconButton color="inherit" aria-label="Add card">
              <AddIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="My account settings">
            <IconButton color="inherit" aria-label="My account settings">
              <Avatar
                aria-label="Robisson Oliveira"
                src="/uploads/7b435896-aeca-4660-aaa3-b734e3e9200a.jpg"/>
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
