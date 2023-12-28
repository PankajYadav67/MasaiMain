export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const Increment = (payload) => ({
  type: INCREMENT,
  payload,
});
export const Decrement = (payload) => ({
  type: DECREMENT,
  payload,
});
export const Reset = () => ({
  type: RESET,
});
