import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import HistoryIcon from '@material-ui/icons/History';

const HistoryIconButton = () => {
  return (
    <Tooltip title="Activies history">
        <IconButton color="inherit" aria-label="Activies history">
          <HistoryIcon />
        </IconButton>
      </Tooltip>
  );
};

export default HistoryIconButton;
