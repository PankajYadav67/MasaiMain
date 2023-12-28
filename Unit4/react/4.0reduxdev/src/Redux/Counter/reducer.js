import {  INCREMENT, DECREMENT, RESET } from "./action";

const initialState = {
  count: 10
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        count: state.count - action.payload,
      };
    case RESET:
      return {
        ...state
      };
    default : 
    return {
      ...state
    }
  }
};
