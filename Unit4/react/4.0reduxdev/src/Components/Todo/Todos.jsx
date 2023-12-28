import { useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItems";

export const Todo = () => {
    const {todos} =useSelector((state) => state.todos)
  return (
    
    <div>
      Todos
      <TodoInput />
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
