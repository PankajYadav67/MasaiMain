import { combineReducers, legacy_createStore as createStore } from "redux";
import { TodoReducer } from "./Todo/reducer";

export const rootReducer = combineReducers({ todos: TodoReducer });

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
