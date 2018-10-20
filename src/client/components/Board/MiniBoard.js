//@flow
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "react-router-dom";

const styles = () => ({
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

type Props = {
  classes: Object,
  _id: number,
  name: string,
  createdBy: string,
  createdAt: string,
  leadTime: number,
  cycleTime: number,
  throuput: number
};

function MediaControlCard(props: Props) {
  const {
    classes,
    _id,
    name,
    createdBy,
    createdAt,
    leadTime,
    cycleTime,
    throuput
  } = props;

  return (
    <Card>
      <div className={classes.cardHeader}>
        <Typography variant="title">{name}</Typography>
        <Typography variant="subheading">
          createdb by {createdBy} at {createdAt}
        </Typography>
      </div>
      <CardContent className={classes.content}>
        <div className={classes.child}>
          <Typography variant="body2" color="primary" align="center">
            Lead Time
          </Typography>
          <Typography variant="display1" align="center">
            {leadTime}
          </Typography>
          <Typography variant="body1" align="center">
            by week
          </Typography>
        </div>
        <div className={classes.child}>
          <Typography variant="body2" color="primary" align="center">
            Cycle Time
          </Typography>
          <Typography variant="display1" align="center">
            {cycleTime}
          </Typography>
          <Typography variant="body1" align="center">
            by week
          </Typography>
        </div>
        <div className={classes.child}>
          <Typography variant="body2" color="primary" align="center">
            Throghput
          </Typography>
          <Typography variant="display1" align="center">
            {throuput}
          </Typography>
          <Typography variant="body1" align="center">
            by week
          </Typography>
        </div>
      </CardContent>
      <CardActions
        style={{
          display: "block",
          textAlign: "right"
        }}
      >
        <Link to={`/board/${_id}`} size="small" color="primary">
          Go to Board
        </Link>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(MediaControlCard);
