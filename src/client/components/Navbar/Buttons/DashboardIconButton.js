import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/InsertChart';

const DashboardIconButton = () => {
  return (
    <Tooltip title="Dashboard">
        <IconButton color="inherit" aria-label="Dashboard">
          <DashboardIcon />
        </IconButton>
      </Tooltip>
  );
};

export default DashboardIconButton;
