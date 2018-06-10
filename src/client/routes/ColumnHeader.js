// @flow
import * as React from "react";
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import brown from '@material-ui/core/colors/brown';
import MenuHeaderColumn from './MenuHeaderColumn';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = () => ({
  root: {
    width: '100%',
    height: 35,
    backgroundColor: brown[300]
  },
  list: {
    paddingTop:5
  },
  listItem: {
    padding:0
  },
  listItemText: {
    margin:0,
    padding:0
  },
  listItemIconLeft: {
    marginRight:5,
    padding:0,
    color:'white',
    cursor:'pointer'
  }
});

type Props = {
  title:string,
  classes: Object
};

function ColumnHeader(props:Props) {

  const {title,classes} = props;

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <ListItemIcon className={classes.listItemIconLeft}>
            <RemoveIcon/>
          </ListItemIcon>
          <ListItemText
            className={classes.listItemText}
            primary={< Typography component = "p" style = {{ color: '#FFFFFF' }} > {title} </Typography>}/>
          <ListItemSecondaryAction>
            <MenuHeaderColumn/>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );

}

export default withStyles(styles)(ColumnHeader);
