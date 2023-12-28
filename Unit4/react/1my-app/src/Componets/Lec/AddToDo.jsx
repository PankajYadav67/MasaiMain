import React, { useState } from "react";

export const AddToDo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />


      <button onClick={()=>
                { let value= newTodo.trim;
                  if(value)
                  { onAdd(value);
                    setNewTodo("");
                  }
                }
              }>add</button>
    </div>
  );
};

