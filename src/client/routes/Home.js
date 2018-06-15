// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavbarHome from './NavbarHome'

const theme = createMuiTheme();

const styles : Object = {
  root: {
    flexGrow: 1
  },
  gridContainer: {
    overflowX: 'auto',
    marginTop: 68
  }
};

type Props = {
  classes: Object
};

function Home(props : Props) {
  const {classes} = props;

  return (
    <MuiThemeProvider theme={theme}>
      <NavbarHome/>
      <Grid
        container
        justify="flex-start"
        wrap="nowrap"
        spacing={0}
        className={classes.gridContainer}>
        <Grid item lg={6}>My boards</Grid>
        <Grid item lg={6}>My teams</Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(Home);
