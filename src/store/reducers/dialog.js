import * as actions from "store/types";

const INITIAL_STATE = {
  confirm: {
    show: false,
    title: null,
    text: null,
    id: null,
  },
};

const dialogStore = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   
    case actions.CONFIRM_SHOW:
      return {
        ...state,
        confirm: {
          show: true,
          title: action.payload.title,
          text: action.payload.text,
          id: action.payload.id,
        },
      };
    case actions.CONFIRM_HIDE:
      return {
        ...state,
        confirm: {
          show: false,
          title: null,
          text: null,
          id: null,
        },
      };
    default:
      return state;
  }
};

export default dialogStore;
