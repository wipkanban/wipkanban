// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import indigo from '@material-ui/core/colors/indigo';
import NavigateNext from '@material-ui/icons/NavigateNext';
import DashboardIcon from '@material-ui/icons/InsertChart';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Historycon from '@material-ui/icons/History';
import FilterListIcon from '@material-ui/icons/FilterList';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import CalendarIcon from '@material-ui/icons/DateRange';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  appBarSecondary: {
    backgroundColor: indigo[400],
    marginBottom: 5
  },
  toolbarSecondary: {
    minHeight: 40
  }
};

type Props = {
    classes: Object
}

function SubNavbar(props:Props) {
  const {classes} = props;
  return (
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
  );
}

export default withStyles(styles)(SubNavbar);
