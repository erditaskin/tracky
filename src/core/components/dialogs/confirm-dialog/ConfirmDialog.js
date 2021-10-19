import React from "react";
import { connect } from "react-redux";
import { dialogConfirmHide } from "store/actions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmDialog = ({ confirm, approve, cancel, dialogConfirmHide }) => {
  const handleClose = () => {
    dialogConfirmHide();
  };

  const handleApprove = () => {
    handleClose();
    approve(confirm.id);
  };

  const handleCancel = () => {
    handleClose();
    cancel();
  };

  return (
    <Dialog
      open={confirm.show}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{confirm.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{confirm.text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleApprove}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

function mapStateToProps(state) {
  return {
    confirm: state.dialogStore.confirm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dialogConfirmHide: () => dispatch(dialogConfirmHide()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDialog);
