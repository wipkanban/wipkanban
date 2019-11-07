import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

interface IPreloaderProps {
  classes: any;
  showPreloader: Boolean;
}

const styles: any = () => ({
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

const Preloader: React.StatelessComponent<any> = ({
  classes,
  showPreloader
}: IPreloaderProps) => {
  if (!showPreloader) {
    return null;
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
