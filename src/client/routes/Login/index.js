// @flow
import * as React from "react";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: 748,
    display: "flex",
    alignItems: "center"
  },
  backgroundGreen: {
    backgroundColor: theme.palette.primary.main
  },
  text: {
    width: "100%"
  },
  button: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  learnMore: {
    color: "white",
    borderColor: "white"
  }
});

const theme = createMuiTheme({});

type Props = {
  classes: Object,
  state: Object,
  onLogin: (email: string, password: string, event:Object) => {}
};

const InteractiveGrid = ({
  state: { success, message },
  onLogin,
  classes
}: Props) => {
  let email;
  let password;

  if (typeof window !== "undefined" && window.localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.demo}>
          <Grid
            container
            spacing={0}
            className={classes.demo}
            direction="row"
            justify="flex-start"
          >
            <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
              <Paper
                elevation={0}
                className={[classes.paper, classes.backgroundGreen].join(" ")}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <div>
                  <center>
                    <img
                      style={{ opacity: 0.9 }}
                      src="/images/wiplean.jpg"
                      width="80%"
                    />
                  </center>
                  <br />
                  <Typography
                    style={{
                      color: "white"
                    }}
                    variant="display1"
                    gutterBottom
                  >
                    Welcome to the best open source plataform for lean
                    management
                  </Typography>
                  <Typography
                    style={{
                      color: "white"
                    }}
                    variant="headline"
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
                <div style={{ width: "80%", margin: "0 auto" }}>
                  <Typography
                    variant="display1"
                    color="primary"
                    gutterBottom
                    align="center"
                  >
                    <b>WIPLean</b>
                  </Typography>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    <TextField
                      className={classes.text}
                      label="Type your email"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                    <TextField
                      type="password"
                      className={classes.text}
                      label="Password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                    <div
                      style={{
                        textAlign: "right"
                      }}
                    >
                      <br />
                      <Button
                        onClick={event =>
                          onLogin(email.value, password.value, event)
                        }
                        size="large"
                        variant="raised"
                        color="primary"
                        className={classes.button}
                      >
                        Sign in
                        <Check />
                      </Button>
                      <br />
                      <Typography
                        component="p"
                        color="primary"
                        gutterBottom
                        align="right"
                      >
                        Do not have an account yet ?{" "}
                        <a href="#" className={classes.link}>
                          <b>Sign up!</b>
                        </a>
                      </Typography>
                    </div>
                  </div>
                  <br />
                  <div>
                    Sign in with:<br />
                    <IconButton className={classes.button}>
                      <i
                        className="fa fa-facebook-square fa-2x"
                        style={{
                          color: "#4267b2"
                        }}
                      />
                    </IconButton>
                    <IconButton className={classes.button}>
                      <i
                        style={{
                          color: "#db4437"
                        }}
                        className="fa fa-google-plus fa-2x"
                      />
                    </IconButton>
                    <IconButton className={classes.button}>
                      <i className="fa fa-github-square fa-2x" />
                    </IconButton>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

export default withStyles(styles)(InteractiveGrid);
