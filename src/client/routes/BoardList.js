// @flow
import * as React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import MiniBoard from './MiniBoard';

const BoardList = () => {
  return (
    <div>
      <div>
        <Typography color="secondary" variant="title" gutterBottom>
          <DeveloperBoardIcon/>{' '}
          My boards
        </Typography>
      </div>
      <Grid container justify="flex-start" wrap="nowrap" spacing={0}>
        <Grid item lg={6}>
          <MiniBoard/>
        </Grid>
      </Grid>
    </div>
  )
};

export default BoardList;
