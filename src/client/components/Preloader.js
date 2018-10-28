// @flow
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

type Props = {
  classes: Object,
  showPreloader: Boolean
};

const styles = () => ({
  background: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    opacity: 0.5
  },
  wrapper: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 10000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Preloader = ({ classes, showPreloader }: Props) => {
  if (!showPreloader) {
    return "";
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.background} />
      <CircularProgress
        className={classes.progress}
        color="secondary"
        size={50}
      />
    </div>
  );
};

export default withStyles(styles)(Preloader);
