// @flow
import * as React from "react";
import Grid from '@material-ui/core/Grid';
import BoardList from './BoardList';
import TeamList from './TeamList';

const KanbanHome = () => {
  return (
    <Grid container justify="flex-start" wrap="nowrap" spacing={0}>
      <Grid item lg={6}>
        <BoardList/>
      </Grid>
      <Grid item lg={6}>
        <TeamList/>
      </Grid>
    </Grid>
  )
};

export default KanbanHome;
