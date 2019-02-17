import * as React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';

const AddCardButton = () => {
  return (
    <Tooltip title="Add card">
        <IconButton color="inherit" aria-label="Add card">
          <AddIcon />
        </IconButton>
      </Tooltip>
  );
};

export default AddCardButton;
