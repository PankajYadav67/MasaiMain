import { GET_TODO_LOADING, GET_TODO_ERROR, GET_TODO_SUCCESS } from "./action";

export const initialState = {
  loading: false,
  error: false,
  todos: [],
};

export const TodoReducer = (
  state = initialState,
  { action, type, payload }
) => {
  switch (type) {
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        todos: [],
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        error: false,
        todos: action.payload,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        error: true,
        todos: [],
      };

    default:
      return state;
  }
};
