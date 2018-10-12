import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const GroupAddIconButton = () => {
  return (
    <Tooltip title="Add user">
        <IconButton color="inherit" aria-label="Add user">
          <GroupAddIcon />
        </IconButton>
      </Tooltip>
  );
};

export default GroupAddIconButton;
