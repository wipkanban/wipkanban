import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import brown from '@material-ui/core/colors/brown';
import LongMenu from './LongMenu';

const styles = () => ({
  root: {
    width: '100%',
    height: 40,
    backgroundColor: brown[300]
  },
  listItem:{
    paddingTop:0,
    paddingBottom:0
  },
  listItemText:{
    color:'#ffffff',
  }
});

function SwitchListSecondary(props) {

  const {classes} = props;

  return (
    <div className={classes.root}>
      <List>
        <ListItem className={classes.listItem}>
          <ListItemText className={classes.listItemText}
          primary={<Typography component="p" style={{ color: '#FFFFFF' }}>A fazer</Typography>}/>
          <ListItemSecondaryAction>
            <LongMenu/>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );

}

SwitchListSecondary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwitchListSecondary);
