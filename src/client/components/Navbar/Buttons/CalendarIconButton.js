import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import CalendarIcon from '@material-ui/icons/DateRange';

const CalendarIconButton = () => {
  return (
    <Tooltip title="Calendar">
        <IconButton color="inherit" aria-label="Calendar">
          <CalendarIcon />
        </IconButton>
      </Tooltip>
  );
};

export default CalendarIconButton;
