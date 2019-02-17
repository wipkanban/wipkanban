import * as React from "react";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "react-router-dom";

const styles: StyleRulesCallback = () => ({
  card: {
    display: "flex"
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    padding: 0
  },
  child: {
    flex: "1 0 30%",
    margin: "2px",
    height: "85px"
  },
  cardHeader: {
    padding: 5
  }
});

interface IMediaControlCardProps {
  classes: any;
  _id: number;
  name: string;
  createdBy: string;
  createdAt: string;
  leadTime: number;
  cycleTime: number;
  throuput: number;
}

function MediaControlCard(props: IMediaControlCardProps) {
  const { classes, _id, name } = props;

  return (
    <Card>
      <div className={classes.cardHeader}>
        <Typography variant="h6">{name}</Typography>
      </div>
      <CardActions
        style={{
          display: "block",
          textAlign: "right"
        }}
      >
        <Link to={`/board/${_id}`} color="primary">
          Go to Board
        </Link>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(MediaControlCard);
