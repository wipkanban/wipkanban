import * as React from "./react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

const UserAccountSettings = () => {
  return (
    <Tooltip title="My account settings">
      <IconButton color="inherit" aria-label="My account settings">
        <Avatar
          aria-label="Robisson Oliveira"
          src="/uploads/7b435896-aeca-4660-aaa3-b734e3e9200a.jpg"
        />
      </IconButton>
    </Tooltip>
  );
};

export default UserAccountSettings;
