// @flow
import * as React from "react";
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import GroupIcon from '@material-ui/icons/Group';

const TeamList = () => {
  return (
    <div>
      <div>
        <Typography color="secondary" variant="title" gutterBottom>
          <GroupIcon/>{' '}
          My teams
        </Typography>
      </div>
      <center>
        <Typography component="p" gutterBottom>
          Create your first team
        </Typography>
        <Tooltip title="Add team">
          <IconButton color="default" aria-label="Add team">
            <AddIcon/>
          </IconButton>
        </Tooltip>
      </center>
    </div>
  )
};

export default TeamList;
