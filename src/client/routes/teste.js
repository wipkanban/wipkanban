import * as React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './card';
import indigo from '@material-ui/core/colors/indigo';
import NavigateNext from '@material-ui/icons/NavigateNext';
import DashboardIcon from '@material-ui/icons/InsertChart';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SearchIcon from '@material-ui/icons/Search';
import Historycon from '@material-ui/icons/History';
import FilterListIcon from '@material-ui/icons/FilterList';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import CalendarIcon from '@material-ui/icons/DateRange';
import Avatar from '@material-ui/core/Avatar';
import ColumnHeader from "./ColumnHeader";

const theme = createMuiTheme();

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  gridContainer: {
    padding: 10
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  paper: {
    margin: 5
  },
  parentColumn: {
    paddingBottom: 5
  },
  column: {
    width: 270
  },
  appBarSecondary: {
    backgroundColor: indigo[400],
    marginBottom: 5
  },
  toolbarSecondary: {
    minHeight: 40
  }
};

function ButtonAppBar(props) {
  const {classes} = props;
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            WipKanban
          </Typography>
          <IconButton color="inherit" aria-label="Menu">
            <SearchIcon/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <Avatar
              className={classes.avatar}
              aria-label="Robisson Oliveira"
              src="/uploads/7b435896-aeca-4660-aaa3-b734e3e9200a.jpg"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className={classes.appBarSecondary}>
        <Toolbar className={classes.toolbarSecondary}>
          <div className={classes.flex}>
            <Button color="inherit">
              Guarida Imóveis
            </Button>
            <IconButton color="inherit" aria-label="Menu">
              <NavigateNext/>
            </IconButton>
            <Button color="inherit">
              TI
            </Button>
            <IconButton color="inherit" aria-label="Menu">
              <NavigateNext/>
            </IconButton>
            <Button color="inherit">
              Minhas atividades
            </Button>
          </div>
          <IconButton color="inherit" aria-label="Menu">
            <DashboardIcon/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <TransferWithinAStationIcon/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <CalendarIcon/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <FilterListIcon/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <GroupAddIcon/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <Historycon/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <SettingsIcon/>
          </IconButton>
          <IconButton color="inherit" aria-label="Menu">
            <ZoomOutMapIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid
        container
        justify="flex-start"
        spacing={0}
        className={classes.gridContaine}r>
        <Grid item className={classes.column}>
          <Paper className={classes.parentColumn} elevation={0}>
            <ColumnHeader/>
            <Card/>
          </Paper>
        </Grid>

      </Grid>

    </MuiThemeProvider>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const teste = withStyles(styles)(ButtonAppBar);

export default teste;
