// @flow
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles: Object = {
  root: {
    flexGrow: 1
  },
  gridContainer: {
    marginTop: 68
  }
};

type Props = {
  classes: Object,
  children: React.Node
};

const GridContainer = ({ classes, children }: Props) => {
  return (
    <Grid container spacing={0} className={classes.gridContainer}>
      {children}
    </Grid>
  );
};

export default withStyles(styles)(GridContainer);
