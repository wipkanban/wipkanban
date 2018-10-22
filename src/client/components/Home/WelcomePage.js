// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import GridContainer from "../GridContainer";
import Button from "@material-ui/core/Button";

const styles: Object = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(800 + theme.spacing.unit * 2 * 2)]: {
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  h1: {
    width: "100%"
  },
  paper: {
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginLeft: theme.spacing.unit
  }
});

type Props = {
  classes: Object,
  onLogout: Function,
  onUpdateAccountUser: Function,
  user: Object
};

const WelcomePage = ({
  classes,
  onLogout,
  onUpdateAccountUser,
  user
}: Props) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <GridContainer>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.h1}
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to WipLean
            </Typography>
            <Typography variant="subtitle1" align="center">
              Before you start using WipLean, please complete your data below.
            </Typography>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={({ target }) => (user.firstName = target.value)}
                  required
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={({ target }) => (user.lastName = target.value)}
                  required
                  label="Last name"
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={({ target }) => (user.email = target.value)}
                  defaultValue={user.email}
                  required
                  label="Email"
                  fullWidth
                  autoComplete="billing address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="billing postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="billing country"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use this address for payment details"
                />
              </Grid>
              <Grid item className={classes.buttons}>
                <Button onClick={onLogout}>Logout</Button>
                <Button
                  onClick={() => onUpdateAccountUser(user)}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Update and next
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </GridContainer>
    </React.Fragment>
  );
};

export default withStyles(styles)(WelcomePage);
