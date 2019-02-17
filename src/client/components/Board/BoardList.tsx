// @flow
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeveloperBoardIcon from "@material-ui/icons/DeveloperBoard";
import MiniBoard from "./MiniBoard";
import Tooltip from "@material-ui/core/Tooltip";
import AddBoard from "./AddBoardContainer";

interface IBoardListProps {
  boards: Array<Object>;
}

const BoardList: React.StatelessComponent<any> = ({
  boards
}: IBoardListProps) => {
  let boardsRendered = boards.map((board: any) => (
    <Grid key={board._id} item lg={6}>
      <MiniBoard key={board._id} {...board} />
    </Grid>
  ));

  return (
    <div>
      <div>
        <Typography color="secondary" variant="h6" gutterBottom>
          <DeveloperBoardIcon /> My boards
          <Tooltip title="Add team">
            <AddBoard />
          </Tooltip>
        </Typography>
      </div>
      <Grid container justify="flex-start" wrap="wrap" spacing={8}>
        {boardsRendered}
      </Grid>
    </div>
  );
};

export default BoardList;
