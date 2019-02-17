import * as React from "react";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import ListItemText from "@material-ui/core/ListItemText";

const ITEM_HEIGHT = 48;

const styles: StyleRulesCallback = () => {
  return {
    menuItem: {
      paddingTop: 2,
      paddingBottom: 2
    }
  };
};

interface IUserAccountSettingsState {
  anchorEl?: any;
}

interface IUserAccountSettingsProps {
  classes: any;
  onLogout: Function;
  user: any;
}

class UserAccountSettings extends React.Component<
  IUserAccountSettingsProps,
  IUserAccountSettingsState
> {
  state: IUserAccountSettingsState = {
    anchorEl: null
  };

  handleClick = (event: any) => {
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
