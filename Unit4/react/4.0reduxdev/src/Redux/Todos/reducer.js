import { ADDTODO, DELETETODO } from "./action.js";

export const initialState = { todos : [] };

export const todosReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADDTODO:
      return {
        todos : [
          ...state.todos,
          payload
        ],
      };
    case DELETETODO:
      return {
        todos : [
          ...state.todos
        ]
      };

    default:
      return {
        ...initialState,
      };
  }
};
