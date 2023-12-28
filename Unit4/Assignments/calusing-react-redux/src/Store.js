import { legacy_createStore } from "redux";

const reducer = (state, action) => {
  return state;
};
export const store = legacy_createStore(reducer, {
  count: 100,
});
