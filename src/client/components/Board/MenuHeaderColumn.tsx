import * as React from "react";
import { withStyles, StyleRulesCallback } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CallSplitIcon from "@material-ui/icons/CallSplit";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const ITEM_HEIGHT = 48;

const styles: StyleRulesCallback = () => ({
  menuItem: {
    paddingTop: 2,
    paddingBottom: 2
  }
});

type State = {
  anchorEl?: any | null;
};

type Props = {
  classes: any;
};

class MenuHeaderColumn extends React.Component<Props, State> {
  state: State = {
    anchorEl: null
  };

  handleClick = (event: React.SyntheticEvent) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <IconButton
          style={{
            color: "#ffffff"
          }}
          aria-label="More"
          aria-owns={anchorEl ? "long-menu" : ""}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
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
            <ListItemText inset primary="Horizontal Split" />
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(MenuHeaderColumn);
