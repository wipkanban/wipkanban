import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

const ZoomOutMapIconButton = () => {
  return (
    <Tooltip title="Maximize board">
        <IconButton color="inherit" aria-label="Maximize board">
          <ZoomOutMapIcon />
        </IconButton>
      </Tooltip>
  );
};

export default ZoomOutMapIconButton;
