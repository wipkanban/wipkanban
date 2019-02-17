import * as React from "react";
import Typography from "@material-ui/core/Typography";
import {
  withStyles,
  StyleRulesCallback,
  Theme
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import GridContainer from "../GridContainer";
import Button from "@material-ui/core/Button";
import grey from "@material-ui/core/colors/grey";

const styles: StyleRulesCallback = (theme: Theme) => ({
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
  },
  photo: {
    backgroundColor: grey[300],
    width: 150,
    height: 200,
    margin: [`${theme.spacing.unit * 2}px`, "auto"].join(" ")
  }
});

interface IWelcomePageProps {
  classes: any;
  onLogout: any;
  onUpdateAccountUser: Function;
  user: any;
}

const WelcomePage: React.StatelessComponent<any> = ({
  classes,
  onLogout,
  onUpdateAccountUser,
  user
}: IWelcomePageProps) => {
  user.firstAccess = false;

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
              <Grid item lg={6}>
                <Grid item>
                  <TextField
                    onChange={({ target }) => (user.name = target.value)}
                    defaultValue={user.name}
                    required
                    label="First name"
                    fullWidth
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={({ target }) => (user.lastname = target.value)}
                    defaultValue={user.lastname}
                    required
                    label="Last name"
                    fullWidth
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={({ target }) => (user.email = target.value)}
                    defaultValue={user.email}
                    required
                    label="Email"
                    fullWidth
                    autoComplete="billing address-level2"
                  />
                </Grid>
              </Grid>
              <Grid item lg={6}>
                <div className={classes.photo} id="divGreyPhoto">
                  <img id="imagePreview" width="100%" />
                </div>
                <input
                  type="file"
                  id="contained-button-file"
                  onChange={({ target }: any) => {
                    user.image = target.files[0];

                    let reader = new FileReader();

                    reader.onload = function(e: any) {
                      // get loaded data and render thumbnail.
                      const image: HTMLElement = document.getElementById(
                        "imagePreview"
                      ) as HTMLElement;

                      if (!!image) {
                        (image as HTMLImageElement).src = e.target.result;
                      }
                    };

                    // read the image file as a data URL.
                    reader.readAsDataURL(target.files[0]);
                  }}
                  accept="image/*"
                  style={{ display: "none" }}
                />
                <div style={{ textAlign: "center" }}>
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                      Choose image
                    </Button>
                  </label>
                </div>
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
