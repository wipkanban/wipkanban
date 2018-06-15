// @flow
import * as React from 'React';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  flag: {
    width: 30,
    height: 56,
    margin: '0 auto',
    paddingTop: 10,
    position: 'relative',
    background: 'hotpink',
    color: 'white',
    fontSize: 20,
    letterSpacing: '0.2em',
    textAlign: 'center',
    textTransform: 'uppercase',
    '&:after': {
      content: '  ',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: 0,
      height: 0,
      borderBottom: '13px solid white',
      borderLeft: '15px solid transparent',
      borderRight: '15px solid transparent'
    }
  }
}

type Props = {
  classes:Object
}

const Flag = ({classes:{flag}}:Props) => {
  return (
    <div className={flag}></div>
  )
}

export default withStyles(styles)(Flag);
