// @flow
import * as React from "react";
import { withStyles, StyleRulesCallback, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/Https";
import EmailIcon from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import classNames from "classnames";
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
  errorClass: {
    color: theme.palette.error.main
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

interface IStateSignupProps {
  classes: any;
  onCreateAccount: Function;
  success: boolean;
  showPreloader: boolean;
  message: string | null;
}

interface IStateSignup {
  email: string | null;
  password: string;
  confirmPassword: string;
  confirmPasswordError: boolean;
  requiredFields: boolean;
}

class Signup extends React.Component<IStateSignupProps, IStateSignup> {
  state: IStateSignup = {
    email: null,
    password: "",
    confirmPassword: "",
    confirmPasswordError: false,
    requiredFields: false
  };

  constructor(props: any) {
    super(props);

    this._onCreateAccount = this._onCreateAccount.bind(this);
  }

  _onCreateAccount() {
    let { password, confirmPassword } = this.state;

    if (password.length == 0 || confirmPassword.length == 0) {
      this.setState({ requiredFields: true });

      return;
    } else if (password != confirmPassword) {
      this.setState({ confirmPasswordError: true });

      return;
    }

    this.setState({ confirmPasswordError: false, requiredFields: false });
    let { onCreateAccount } = this.props;

    onCreateAccount(this.state.email, this.state.password);
  }

  render() {
    let { success, classes, message, showPreloader } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success
    });

    if (success) {
      return <Redirect to="/account-created" />;
    }

    return (
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
                  <Typography component="p" gutterBottom>
                    Create your account and starts to improvement your results.
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
                      onChange={e => {
                        this.setState({ email: e.target.value });
                      }}
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
                      error={
                        this.state.confirmPasswordError ||
                        this.state.requiredFields
                      }
                      onChange={e => {
                        this.setState({ password: e.target.value });
                      }}
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
                    <TextField
                      disabled={showPreloader}
                      error={
                        this.state.confirmPasswordError ||
                        this.state.requiredFields
                      }
                      helperText={
                        this.state.confirmPasswordError
                          ? "The password and confirm password fiedls are differents"
                          : ""
                      }
                      onChange={e => {
                        this.setState({ confirmPassword: e.target.value });
                      }}
                      type="password"
                      className={classes.text}
                      label="Confirm password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                    {message && (
                      <Typography
                        className={classes.errorClass}
                        variant="h6"
                        gutterBottom
                      >
                        {message}
                      </Typography>
                    )}
                    <div
                      style={{
                        textAlign: "right"
                      }}
                    >
                      <br />
                      <div className={classes.wrapper}>
                        <Button
                          onClick={this._onCreateAccount}
                          size="large"
                          variant="raised"
                          color="primary"
                          className={buttonClassname}
                          disabled={showPreloader}
                        >
                          Sign Up
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
                      <Typography
                        component="p"
                        color="primary"
                        gutterBottom
                        align="right"
                      >
                        Already have an account ?{" "}
                        <Link to="/login" className={classes.link}>
                          <b>Sign in!</b>
                        </Link>
                      </Typography>
                    </div>
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

export default withStyles(styles)(Signup);
