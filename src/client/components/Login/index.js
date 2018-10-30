// @flow
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
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
import { Redirect, Link } from "react-router-dom";
import classNames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100vh",
    display: "flex",
    alignItems: "center"
  },
  backgroundGreen: {
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
  learnMore: {
    color: "white",
    borderColor: "white"
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    right: 133.69 / 2 - 33 / 2,
    marginTop: -12,
    marginLeft: -12
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
});

type Props = {
  classes: Object,
  state: Object,
  onLogin: Function,
  success: boolean,
  showPreloader: boolean
};

type State = {
  email: string,
  password: string,
  requiredFields: boolean
};

class Login extends React.Component<Props, State> {
  state: State = {
    email: "",
    password: "",
    requiredFields: false
  };

  _onLogin() {
    let { onLogin } = this.props;

    if (
      this.state.email.value.length == 0 ||
      this.state.password.value.length == 0
    ) {
      this.setState({ requiredFields: true });

      return;
    }

    onLogin(this.state.email, this.state.password);
  }

  render() {
    let {
      classes,
      state: { showPreloader, success }
    } = this.props;

    const buttonClassname = classNames({
      [classes.buttonSuccess]: success
    });

    if (typeof window !== "undefined" && window.localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }

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
                className={[classes.paper, classes.backgroundGreen].join(" ")}
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
                    Welcome to the best open source plataform for lean
                    management
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
                    variant="h4"
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
                      disabled={showPreloader}
                      error={this.state.requiredFields}
                      inputRef={el => this.setState({ email: el })}
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
                      disabled={showPreloader}
                      error={this.state.requiredFields}
                      inputRef={el => this.setState({ password: el })}
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
                      <div className={classes.wrapper}>
                        <Button
                          onClick={this._onLogin.bind(this)}
                          size="large"
                          variant="contained"
                          color="primary"
                          className={buttonClassname}
                          disabled={showPreloader}
                        >
                          Sign In
                          <Check />
                        </Button>
                        {showPreloader && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                        <br />
                      </div>
                      <br />
                      <Typography variant="body1" gutterBottom align="right">
                        Do not have an account yet ?{" "}
                        <Link to="/create-account" className={classes.link}>
                          <b>Sign up!</b>
                        </Link>
                      </Typography>
                    </div>
                  </div>
                  <br />
                  <div>
                    <Typography variant="body1" gutterBottom>
                      Sign in with:
                    </Typography>
                    <br />
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
    );
  }
}

export default withStyles(styles)(Login);
