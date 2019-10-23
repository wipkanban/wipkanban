import * as React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles: any = () => {
  return {
    navRight: {
      position: "absolute",
      right: 5
    }
  };
};

interface IMenuRightProps {
  classes: any;
  children?: any;
}

const MenuRight: React.StatelessComponent<any> = ({
  classes,
  children
}: IMenuRightProps) => {
  return <div className={classes.navRight}>{children}</div>;
};

export default withStyles(styles)(MenuRight);
