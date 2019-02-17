import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

const TransferWithinAStationIconButton = () => {
  return (
    <Tooltip title="View cards by user">
        <IconButton color="inherit" aria-label="View cards by user">
          <TransferWithinAStationIcon />
        </IconButton>
      </Tooltip>
  );
};

export default TransferWithinAStationIconButton;
