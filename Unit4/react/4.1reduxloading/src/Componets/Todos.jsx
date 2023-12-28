import { useDispatch, useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItems";
import { useEffect } from "react";
import {
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../Redux/Todo/action";

export const Todos = () => {
  const { loading, error, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoLoading());
    fetch(`http://localhost:6969/todos`)
      .then((res) => res.json())
      .then((res) => dispatch(getTodoSuccess(res))) //update your redux store with latest data from server as soon as the components mounts onto UI
      .catch(() => dispatch(getTodoError()));
  }, [dispatch]);

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error. Something Went wrong...</h1>
  ) : (
    <div>
      Todos
      <TodoInput />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
