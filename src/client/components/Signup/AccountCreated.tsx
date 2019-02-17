import React from "react";
import {
  withStyles,
  Theme,
  StyleRulesCallback
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import green from "@material-ui/core/colors/green";

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100vh",
    display: "flex",
    alignItems: "center"
  },
  backgroundPrimary: {
    backgroundColor: theme.palette.primary.main
  },
  text: {
    width: "100%"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  textSuccessfull: {
    color: green[500]
  }
});

interface IAccountCreatedProps {
  classes: any;
}

const AccountCreated: React.StatelessComponent<any> = ({
  classes
}: IAccountCreatedProps) => {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.demo}>
        <Grid
          container
          className={classes.demo}
          direction="row"
          justify="flex-start"
        >
          <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
            <Paper
              elevation={0}
              className={[classes.paper, classes.backgroundPrimary].join(" ")}
              style={{
                paddingTop: 10,
                paddingBottom: 10
              }}
            >
              <div>
                <br />
                <Typography
                  style={{
                    color: "white"
                  }}
                  variant="h4"
                  gutterBottom
                >
                  Welcome to the best open source plataform for lean management
                </Typography>
                <Typography
                  style={{
                    color: "white"
                  }}
                  variant="h5"
                  gutterBottom
                >
                  Align strategy and execution with <b>OKRs</b> and{" "}
                  <b>Kanban</b> for you, your team and your company.
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
            <Paper
              elevation={0}
              className={classes.paper}
              style={{
                paddingTop: 10,
                paddingBottom: 10
              }}
            >
              <div style={{ margin: "0 auto" }}>
                <Typography
                  className={classes.textSuccessfull}
                  align="center"
                  variant="h4"
                  gutterBottom
                >
                  Your account has been successfully created
                </Typography>
                <br />
                <Typography align="center">
                  Click at link in the bellow to do login
                </Typography>
                <br />
                <Typography variant="h5" align="center" gutterBottom>
                  <Link className={classes.link} to="/login">
                    Login
                  </Link>
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AccountCreated);
