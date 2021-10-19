import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AlertBlock from "core/components/alert-block/AlertBlock";

const TimelineForm = ({ open, onCancel, onSubmit, formType, item }) => {
  const initialFormValues = {
    id: item?.id || null,
    date: item?.date || "",
    bodyWeight: item?.bodyWeight || "",
    happinessLevel: item?.happinessLevel || "",
    hipWidth: item?.hipWidth || "",
    waistWidth: item?.waistWidth || "",
  };
  const [state, setState] = useState(initialFormValues);

  const handleChange = (e) => {
    const max = e.target.id === "happinessLevel" ? 10 : 200;
    if (
      (e.target.type === "number" &&
        e.target.value >= 1 &&
        e.target.value <= max) ||
      e.target.type !== "number" || e.target.value === ""
    ) {
      setState({ ...state, [e.target.id]: e.target.value });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(state, formType);
  }

  function handleCancel() {
    setState(initialFormValues);
    onCancel();
  }

  useEffect(() => {
    setState(initialFormValues);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Dialog open={open}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{formType === "add" ? "Add" : "Edit"}</DialogTitle>
        <AlertBlock />
        <DialogContent>
          <TextField
            value={state.date}
            margin="dense"
            id="date"
            name="date"
            autoComplete="off"
            label="Date"
            type="date"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e)}
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            value={state.bodyWeight}
            margin="dense"
            id="bodyWeight"
            name="bodyWeight"
            autoComplete="off"
            label="Body Weight (kg) (max:200)"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            value={state.happinessLevel}
            margin="dense"
            id="happinessLevel"
            name="happinessLevel"
            autoComplete="off"
            label="Happiness Level / 10  (max:10)"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            value={state.hipWidth}
            margin="dense"
            id="hipWidth"
            name="hipWidth"
            autoComplete="off"
            label="Hip Width (cm) (max:200)"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e)}
            required
          />
          <TextField
            value={state.waistWidth}
            margin="dense"
            id="waistWidth"
            name="waistWidth"
            autoComplete="off"
            label="Waist Width (cm) (max:200)"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange(e)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit">{formType === "add" ? "Add" : "Edit"}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TimelineForm;
