export const GET_TODO_LOADING = "GET_TODO_LOADING";
export const GET_TODO_ERROR = "GET_TODO_ERROR";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";

export const getTodoLoading = () => ({
  type: GET_TODO_LOADING,
});
export const getTodoSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});
export const getTodoError = () => ({
  type: GET_TODO_ERROR,
});
