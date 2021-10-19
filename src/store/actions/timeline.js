import * as actions from "store/types";
import TimelineService from "services/timeline";

export const deleteTimelineItem = (id, uid) => async (dispatch) => {
  dispatch({ type: actions.LOADING_STARTED });
  await TimelineService.deleteTimelineItem(id, uid)
    .then(() => {
      dispatch({
        type: actions.DELETE_TIMELINE_ITEM,
        payload: id,
      });
      dispatch({
        type: actions.ALERT_CLEAR,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.ALERT_SET,
        payload: {
          show: true,
          severity: "error",
          message: "Timeline Delete Service: " + error.message,
        },
      });
    });
  dispatch({ type: actions.LOADING_FINISHED });
};

export const addTimelineItem = (form, uid) => async (dispatch) => {
  dispatch({ type: actions.LOADING_STARTED });
  await TimelineService.addTimelineItem(form, uid)
    .then((snapshot) => {
      dispatch({
        type: actions.ADD_TIMELINE_ITEM,
        payload: {
          ...form,
          id: snapshot.key,
        },
      });
    })
    .then(() => {
      dispatch({
        type: actions.ORDER_TIMELINE_ITEMS,
      });
      dispatch({
        type: actions.ALERT_CLEAR,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.ALERT_SET,
        payload: {
          show: true,
          severity: "error",
          message: "Timeline Add Service: " + error.message,
        },
      });
    });
  dispatch({ type: actions.LOADING_FINISHED });
};

export const editTimelineItem = (form, uid) => async (dispatch) => {
  dispatch({ type: actions.LOADING_STARTED });
  await TimelineService.editTimelineItem(form, uid)
    .then(() => {
      dispatch({
        type: actions.EDIT_TIMELINE_ITEM,
        payload: form,
      });
    })
    .then(() => {
      dispatch({
        type: actions.ORDER_TIMELINE_ITEMS,
      });
      dispatch({
        type: actions.ALERT_CLEAR,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.ALERT_SET,
        payload: {
          show: true,
          severity: "error",
          message: "Timeline Add Service: " + error.message,
        },
      });
    });
  dispatch({ type: actions.LOADING_FINISHED });
};

export const fetchEditItem = (id) => async (dispatch) => {
  dispatch({
    type: actions.FETCH_EDIT_TIMELINE_ITEM,
    payload: id,
  });
};

export const pullTimelineItems = (uid) => async (dispatch) => {
  dispatch({ type: actions.LOADING_STARTED });
  await TimelineService.pullTimelineItems(uid)
    .then((snapshot) => {
      let timelineItems = [];
      snapshot.forEach((item) => {
        timelineItems.push({
          id: item.key,
          date: item.val().date,
          bodyWeight: item.val().bodyWeight,
          happinessLevel: item.val().happinessLevel,
          hipWidth: item.val().hipWidth,
          waistWidth: item.val().waistWidth,
        });
      });

      dispatch({
        type: actions.PULL_TIMELINE_ITEMS,
        payload: timelineItems
      });
    })
    .then(() => {
      dispatch({
        type: actions.ORDER_TIMELINE_ITEMS,
      });
      dispatch({
        type: actions.ALERT_CLEAR,
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.ALERT_SET,
        payload: {
          show: true,
          severity: "error",
          message: "Timeline Pull Service: " + error.message,
        },
      });
    });
  dispatch({ type: actions.LOADING_FINISHED });
};

export const clearFormValues = () => async (dispatch) => {
  dispatch({
    type: actions.CLEAR_TIMELINE_FORM_VALUES,
  });
};
