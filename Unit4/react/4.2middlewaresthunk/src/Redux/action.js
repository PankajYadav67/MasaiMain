export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const Increment = (payload) => ({
  type: INCREMENT,
  payload,
});
export const Decrement = (payload) => ({
  type: DECREMENT,
  payload,
});
