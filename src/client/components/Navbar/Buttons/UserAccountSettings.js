import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import ListItemText from "@material-ui/core/ListItemText";

const ITEM_HEIGHT = 48;

const styles: Object = {
  menuItem: {
    paddingTop: 2,
    paddingBottom: 2
  }
};

type State = {
  anchorEl?: Object
};

type Props = {
  classes: Object,
  onLogout: Function,
  user: Object
};

class UserAccountSettings extends React.Component<Props, State> {
  state: State = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, onLogout, user } = this.props;

    return (
      <span>
        <IconButton
          onClick={this.handleClick}
          color="inherit"
          aria-label="My account settings"
        >
          <Avatar
            aria-label={`${user.name} ${user.lastname}`}
            src={user.image}
          />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          <MenuItem onClick={this.handleClose} className={classes.menuItem}>
            <ListItemIcon>
              <CallSplitIcon />
            </ListItemIcon>
            <ListItemText inset primary="Vertical Split" />
          </MenuItem>
          <MenuItem onClick={this.handleClose} className={classes.menuItem}>
            <ListItemIcon>
              <CallSplitIcon />
            </ListItemIcon>
            <ListItemText inset primary="Sair" onClick={() => onLogout()} />
          </MenuItem>
        </Menu>
      </span>
    );
  }
}

export default withStyles(styles)(UserAccountSettings);
