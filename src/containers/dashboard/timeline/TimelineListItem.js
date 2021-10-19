import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import EventIcon from "@mui/icons-material/Event";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const useStyles = makeStyles((theme) => ({
  buttons: {
    fontSize: "5px !important",
    margin: "5px auto",
    color: "#AAA"
  },
  dateItem: {
    fontSize: "14px !important",
    fontWeight: "bold",
    color: "#ff7d00",
  },
  measureItem: {
    fontSize: "14px !important",
    color: "#333",
  },
}));

const TimelineListItem = React.memo(({ item, editItem, deleteItem }) => {
  const classes = useStyles();
  const handleEditItem = () => {
    editItem(item.id);
  };
  const handleDeleteItem = () => {
    deleteItem(item.id);
  };
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0 !important" }}
        align="right"
        variant="body2"
      >
        <Typography className={classes.buttons}>
          <IconButton aria-label="delete" size="small" onClick={handleEditItem}>
            <EditIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={handleDeleteItem}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Typography>
        <Typography className={classes.dateItem}>{item.date}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <EventIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "14px", px: 2 }}>
        <Typography className={classes.measureItem}>
          <strong>Body Weight: </strong>
          {item.bodyWeight} KG
        </Typography>
        <Typography className={classes.measureItem}>
          <strong>Happiness Level: </strong>
          {item.happinessLevel} / 10
        </Typography>
        <Typography className={classes.measureItem}>
          <strong>Hip Width: </strong>
          {item.hipWidth} CM
        </Typography>
        <Typography className={classes.measureItem}>
          <strong>Waist Width: </strong>
          {item.waistWidth} CM
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
});

TimelineListItem.propTypes = {
  item: PropTypes.object,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func
};

export default TimelineListItem;
