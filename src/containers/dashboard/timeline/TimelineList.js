import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineListItem from "./TimelineListItem";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  noItem: {
    marginTop: "30px",
  },
}));

const TimelineList = React.memo(({ data, position, editItem, deleteItem }) => {
  const classes = useStyles();
  return data?.length > 0 ? (
    <Timeline position={position}>
      {data.map((value, idx) => (
        <TimelineListItem
          key={idx}
          item={value}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      ))}
    </Timeline>
  ) : (
    <Grid container justifyContent="center" className={classes.noItem}>
      Timeline Items not found
    </Grid>
  );
});

TimelineList.propTypes = {
  data: PropTypes.array,
  position: PropTypes.string,
  editItem: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default TimelineList;
