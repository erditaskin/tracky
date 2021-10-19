import * as actions from "store/types";

const FORM_INITIAL_STATE = {
  id: null,
  date: null,
  bodyWeight: null,
  happinessLevel: null,
  hipWidth: null,
  waistWidth: null,
};
const INITIAL_STATE = {
  data: [],
  form: FORM_INITIAL_STATE,
};

const timelineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_TIMELINE_ITEM:
      let newData = state.data;
      newData.push(action.payload);
      return {
        ...state,
        data: newData,
      };
    case actions.PULL_TIMELINE_ITEMS:
      return {
        ...state,
        data: action.payload,
      };
    case actions.DELETE_TIMELINE_ITEM:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case actions.CLEAR_TIMELINE_FORM_VALUES:
      return {
        ...state,
        form: FORM_INITIAL_STATE,
      };
    case actions.FETCH_EDIT_TIMELINE_ITEM:
      return {
        ...state,
        form: state.data.filter((item) => item.id === action.payload)[0],
      };
    case actions.EDIT_TIMELINE_ITEM:
      let updatedData = state.data.map((item) => {
        return item.id === action.payload.id
          ? {
              id: item.id,
              date: action.payload.date,
              bodyWeight: action.payload.bodyWeight,
              happinessLevel: action.payload.happinessLevel,
              hipWidth: action.payload.hipWidth,
              waistWidth: action.payload.waistWidth,
            }
          : item;
      });
      return {
        ...state,
        data: updatedData,
      };
    case actions.ORDER_TIMELINE_ITEMS:
      let sortedData = state.data.sort(function (a, b) {
        return new Date(b.date + "T00:00:00") - new Date(a.date + "T00:00:00");
      });
      return {
        ...state,
        data: sortedData,
      };

    default:
      return state;
  }
};

export default timelineReducer;
