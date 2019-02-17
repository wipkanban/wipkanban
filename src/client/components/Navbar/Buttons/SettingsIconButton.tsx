import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

const SettingsIconButton = () => {
  return (
    <Tooltip title="Activies history">
        <IconButton color="inherit" aria-label="Activies history">
          <SettingsIcon />
        </IconButton>
      </Tooltip>
  );
};

export default SettingsIconButton;
