import * as actions from "store/types";

export const dialogConfirmShow = (payload) => async (dispatch) => {
  dispatch({
    type: actions.CONFIRM_SHOW,
    payload: payload,
  });
};

export const dialogConfirmHide = () => async (dispatch) => {
  dispatch({
    type: actions.CONFIRM_HIDE,
  });
};
