import { DECREMENT, INCREMENT } from "./actionTypes";

export const reducer = (state, action) => {
    // console.log(state);
     console.log(action,action.type);
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - action.payload,
      }
    }
    default: {
      return {
        state,
      };
    }
  }
};
