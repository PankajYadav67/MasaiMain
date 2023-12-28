import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./Redux/Counter/reducer";
import { todosReducer } from "./Redux/Todos/reducer";

let rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
