export const ADDTODO = "ADDTODO";
export const DELETETODO = "DELETETODO";

export const addTodo = (payload) => ( {
  type: ADDTODO,
  payload
});

export const deleteTodo = (payload) => ({type: ADDTODO, payload});
