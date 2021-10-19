import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TimelineList from "./timeline/TimelineList";
import ConfirmDialog from "core/components/dialogs/confirm-dialog/ConfirmDialog";
import TimelineForm from "containers/dashboard/timeline/TimelineForm";
import {
  dialogConfirmShow,
  deleteTimelineItem,
  setAlert,
  addTimelineItem,
  editTimelineItem,
  fetchEditItem,
  pullTimelineItems,
  clearFormValues
} from "store/actions";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5),
  },
  letterSpacing: {
    letterSpacing: "-1px",
  },
  buttons: {
    fontSize: "5px !important",
    margin: "5px auto",
  },
}));

const Dashboard = ({
  dialogConfirmShow,
  deleteTimelineItem,
  timeline,
  setAlert,
  addTimelineItem,
  editTimelineItem,
  fetchEditItem,
  pullTimelineItems,
  clearFormValues,
  auth
}) => {
  const classes = useStyles();

  const [formOpen, setFormOpen] = useState(false);
  const [formType, setFormType] = useState(null);

  useEffect(() => {
      pullTimelineItems(auth.user.uid);
  }, [pullTimelineItems, auth.user.uid]);

  const handleEditItem = (id) => {
    fetchEditItem(id).then(() =>{
      setFormType("edit");
      setFormOpen(true);
    });
  };

  const handleDeleteItem = (id) => {
    dialogConfirmShow({
      title: "Delete History Confirmation",
      text: "Selected item will be deleted. Do you want to continue?",
      id: id,
    });
  };

  const handleApproveDelete = (id) => {
    deleteTimelineItem(id, auth.user.uid);
  };

  const handleCancelDelete = () => {
    console.log("cancelled");
  };

  const handleFormSubmit = (form, formType) => {
    if (formType === "add") {
      addTimelineItem(form, auth.user.uid).then(() => handleFormCancel());
    } else if (form.id) {
      editTimelineItem(form, auth.user.uid).then(() => handleFormCancel());
    } else {
      setAlert({
        show: true,
        severity: "warning",
        message: "Form data couldn't fetch.",
      });
    }
  };

  const handleFormOpen = () => {
    clearFormValues();
    setFormType("add");
    setFormOpen(true);
  };

  const handleFormCancel = () => {
    setFormOpen(false);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container justifyContent="center">
          <Button variant="contained" color="success" onClick={handleFormOpen}>
            <AddIcon /> Add New Measurement
          </Button>
        </Grid>

        <TimelineList
          data={timeline.data}
          position="alternate"
          editItem={handleEditItem}
          deleteItem={handleDeleteItem}
        />
        <ConfirmDialog
          approve={handleApproveDelete}
          cancel={handleCancelDelete}
        />
        <TimelineForm
          item={timeline.form}
          open={formOpen}
          formType={formType}
          onCancel={handleFormCancel}
          onSubmit={handleFormSubmit}
        />
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    timeline: state.timelineStore,
    auth: state.authStore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dialogConfirmShow: (payload) => dispatch(dialogConfirmShow(payload)),
    deleteTimelineItem: (id, uid) => dispatch(deleteTimelineItem(id, uid)),
    setAlert: (alertObject) => dispatch(setAlert(alertObject)),
    addTimelineItem: (id, uid) => dispatch(addTimelineItem(id, uid)),
    editTimelineItem: (id, uid) => dispatch(editTimelineItem(id, uid)),
    fetchEditItem: (id) => dispatch(fetchEditItem(id)),
    pullTimelineItems: (uid) => dispatch(pullTimelineItems(uid)),
    clearFormValues: () => dispatch(clearFormValues()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
