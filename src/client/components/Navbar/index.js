// @flow
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
  textWhite: {
    color: "white",
    textDecoration: "none"
  }
};

type Props = {
  classes: Object,
  children?: React.Node
};

function Navbar(props: Props) {
  const { classes, children } = props;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <a href="/" className={classes.textWhite}>
          <Typography variant="h6" color="inherit">
            WIPLean
          </Typography>
        </a>
        {children}
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
