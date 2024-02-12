import { FROM_VAL, INP, REVERSE, SUMBIT, TO_VAL } from "../actions";

const initState = {
  inputVal: 0,
  fromVal: 0,
  toVal: 0,
  result: 0,
};

export const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case INP:
      return { ...state, inputVal: action.payload };
    case FROM_VAL:
      return { ...state, fromVal: action.payload };
    case TO_VAL:
      return { ...state, toVal: action.payload };
    case REVERSE:
      return { ...state, fromVal: state.toVal, toVal: state.fromVal };
    case SUMBIT:
      return {
        ...state,
        result:
          state.fromVal > state.toVal
            ? state.inputVal * state.toVal
            : state.inputVal / state.toVal,
      };
    default:
      return state;
  }
};
