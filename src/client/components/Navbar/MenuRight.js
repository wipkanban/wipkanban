//@flow
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  navRight: {
    position: "absolute",
    right: 5
  }
};

type Props = {
  classes: Object,
  children?: React.Node
};

const MenuRight = ({ classes, children }: Props) => {
  return <div className={classes.navRight}>{children}</div>;
};

export default withStyles(styles)(MenuRight);
