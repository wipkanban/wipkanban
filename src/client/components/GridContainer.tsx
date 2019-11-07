import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles: any = () => {
  return {
    root: {
      flexGrow: 1
    },
    gridContainer: {
      marginTop: 68
    }
  };
};

interface IGridContainerProps {
  classes: any;
  children: any;
}

const GridContainer: React.StatelessComponent<any> = ({
  classes,
  children
}: IGridContainerProps) => {
  return (
    <Grid container spacing={0} className={classes.gridContainer}>
      {children}
    </Grid>
  );
};

export default withStyles(styles)(GridContainer);
