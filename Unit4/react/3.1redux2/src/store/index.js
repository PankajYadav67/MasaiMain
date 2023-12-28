import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

export const initialState = {
  count: 0,
};

export const store = createStore( initialState,reducer);
