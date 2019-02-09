//@flow
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";

type State = {
  open: boolean,
  name: String
};

type Props = {
  addBoard: Function
};

export default class FormDialog extends React.Component<Props, State> {
  state: State = {
    open: false,
    name: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.addBoard(this.state.name);
    this.setState({ open: false });
  };

  render() {
    return (
      <>
        <IconButton
          color="default"
          aria-label="Add board"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth={true}
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">Create board</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Type name of the board"
              fullWidth
              onChange={el => this.setState({ name: el.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
