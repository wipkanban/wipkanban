import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const styles = () => ({
  actions: {
    display: 'flex',
    flexDirection:'row-reverse'
  }
});

class RecipeReviewCard extends React.Component {
  state = {
    expanded: false
  };

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Card>
          <CardHeader title="Minhas atividades" subheader="Created by you at today 12:00pm"/>
          <CardContent>

          </CardContent>
          <CardActions className={classes.actions}>
            <IconButton aria-label="Share">
              <ArrowForwardIcon/>
            </IconButton>
            <Typography component="p">
              Go to board
            </Typography>
          </CardActions>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
