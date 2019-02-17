import * as React from "react";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MessageIcon from "@material-ui/icons/Message";
import CheckBox from "@material-ui/icons/CheckBox";
import Attachment from "@material-ui/icons/Attachment";

const styles: StyleRulesCallback = () => ({
  card: {
    margin: 5,
    cursor: "pointer",
    width: 258
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    width: 25,
    height: 25,
    float: "right",
    marginRight: 2
  },
  avatarDateRange: {
    width: 25,
    height: 25
  },
  CardContent: {
    padding: 2
  },
  chip: {
    margin: 0,
    backgroundColor: red[500],
    height: 20
  },
  chipDateRange: {
    margin: 2,
    height: 25
  }
});

type Props = {
  classes: any;
  title: string;
};

function CardBoard(props: Props) {
  const { classes, title } = props;
  return (
    <div className={classes.card}>
      <Card>
        <CardMedia
          className={classes.media}
          image="/images/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.CardContent}>
          <Chip className={classes.chip} />
          <Typography component="p">{title}</Typography>
          <Chip
            avatar={
              <Avatar className={classes.avatarDateRange}>
                {" "}
                <DateRangeIcon />{" "}
              </Avatar>
            }
            label="25/06/2017"
            className={classes.chipDateRange}
          />
          <Chip
            avatar={
              <Avatar className={classes.avatarDateRange}>
                {" "}
                <MessageIcon />{" "}
              </Avatar>
            }
            label="4"
            className={classes.chipDateRange}
          />
          <Chip
            avatar={
              <Avatar className={classes.avatarDateRange}>
                {" "}
                <CheckBox />{" "}
              </Avatar>
            }
            label="5/8"
            className={classes.chipDateRange}
          />
          <Chip
            avatar={
              <Avatar className={classes.avatarDateRange}>
                {" "}
                <Attachment />{" "}
              </Avatar>
            }
            label="5"
            className={classes.chipDateRange}
          />
          <Avatar
            className={classes.avatar}
            aria-label="Robisson Oliveira"
            src="/uploads/7b435896-aeca-4660-aaa3-b734e3e9200a.jpg"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(CardBoard);
