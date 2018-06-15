// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Avatar from '@material-ui/core/Avatar';
import DashboardIcon from '@material-ui/icons/InsertChart';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Historycon from '@material-ui/icons/History';
import FilterListIcon from '@material-ui/icons/FilterList';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import CalendarIcon from '@material-ui/icons/DateRange';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import AddIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  gridContainer: {
    padding: 2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navRight: {
    position: 'absolute',
    right: 5
  },
  navLeft: {
    marginLeft: 20
  }
};

type Props = {
  classes: Object
};

function Navbar(props : Props) {
  const {classes} = props;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="title" color="inherit">
          WIPLean
        </Typography>
        <div className={classes.navLeft}>
          <Button
            color="inherit"
            size="small"
            style={{
            position: 'relative',
            paddingTop: 15
          }}>
            <DeveloperBoardIcon/>
            <small
              style={{
              position: 'absolute',
              top: 0,
              left: 12,
              fontSize: 8
            }}>{'Guarida/Tecnologia da informação'}</small>
            Minhas atividades
            <ArrowDropDownIcon/>
          </Button>
        </div>
        <div className={classes.navRight}>
          <Tooltip title="Add card">
            <IconButton color="inherit" aria-label="Add card">
              <AddIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Dashboard">
            <IconButton color="inherit" aria-label="Dashboard">
              <DashboardIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="View cards by user">
            <IconButton color="inherit" aria-label="View cards by user">
              <TransferWithinAStationIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Calendar">
            <IconButton color="inherit" aria-label="Calendar">
              <CalendarIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter cards">
            <IconButton color="inherit" aria-label="Filter cards">
              <FilterListIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Add user">
            <IconButton color="inherit" aria-label="Add user">
              <GroupAddIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Activies history">
            <IconButton color="inherit" aria-label="Activies history">
              <Historycon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Board settings">
            <IconButton color="inherit" aria-label="Board settings">
              <SettingsIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Maximize board">
            <IconButton color="inherit" aria-label="Maximize board">
              <ZoomOutMapIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Search cards">
            <IconButton color="inherit" aria-label="Search cards">
              <SearchIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="My account settings">
            <IconButton color="inherit" aria-label="My account settings">
              <Avatar
                aria-label="Robisson Oliveira"
                src="/uploads/7b435896-aeca-4660-aaa3-b734e3e9200a.jpg"/>
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
