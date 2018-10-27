// @flow
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import MiniBoard from "./MiniBoard";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

type Props = {
  boards: Array<Object>
};

const BoardList = ({ boards }: Props) => {
  let boardsRendered = boards.map(board => (
    <MiniBoard key={board._id} {...board} />
  ));

  return (
    <div>
      <div>
        <Typography color="secondary" variant="h6" gutterBottom>
          <DeveloperBoardIcon /> My boards
          <Tooltip title="Add team">
            <IconButton color="default" aria-label="Add board">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Typography>
      </div>
      <Grid container justify="flex-start" wrap="wrap" spacing={0}>
        <Grid item lg={6}>
          {boardsRendered}
        </Grid>
      </Grid>
    </div>
  );
};

export default BoardList;
