import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  getTodoSuccess,
  getTodoError,
  getTodoLoading,
} from "../Redux/Todo/action";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title,
      status: false,
    };
    fetch(`http://localhost:6969/todos`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => {
      dispatch(getTodoLoading());
      fetch(`http://localhost:6969/todos`)
        .then((res) => res.json())
        .then((res) => dispatch(getTodoSuccess(res)))
        .then((err) => dispatch(getTodoError(err)));
    });

    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todos Here:"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>ADD TODO</button>
    </div>
  );
};
