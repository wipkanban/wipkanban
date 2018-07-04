//@flow
import * as React from "react";
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import DashboardIcon from '@material-ui/icons/InsertChart';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Historycon from '@material-ui/icons/History';
import FilterListIcon from '@material-ui/icons/FilterList';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import CalendarIcon from '@material-ui/icons/DateRange';
import AddIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';

const styles = {
  navRight: {
    position: "absolute",
    right: 5
  }
};

type Props = {
  classes: Object
};

const MenuRight = ({ classes }: Props) => {
  return (
    <div className={classes.navRight}>
      <Tooltip title="Add card">
        <IconButton color="inherit" aria-label="Add card">
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Dashboard">
        <IconButton color="inherit" aria-label="Dashboard">
          <DashboardIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="View cards by user">
        <IconButton color="inherit" aria-label="View cards by user">
          <TransferWithinAStationIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Calendar">
        <IconButton color="inherit" aria-label="Calendar">
          <CalendarIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Filter cards">
        <IconButton color="inherit" aria-label="Filter cards">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add user">
        <IconButton color="inherit" aria-label="Add user">
          <GroupAddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Activies history">
        <IconButton color="inherit" aria-label="Activies history">
          <Historycon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Board settings">
        <IconButton color="inherit" aria-label="Board settings">
          <SettingsIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Maximize board">
        <IconButton color="inherit" aria-label="Maximize board">
          <ZoomOutMapIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Search cards">
        <IconButton color="inherit" aria-label="Search cards">
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="My account settings">
        <IconButton color="inherit" aria-label="My account settings">
          <Avatar
            aria-label="Robisson Oliveira"
            src="/uploads/7b435896-aeca-4660-aaa3-b734e3e9200a.jpg"
          />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default withStyles(styles)(MenuRight);
