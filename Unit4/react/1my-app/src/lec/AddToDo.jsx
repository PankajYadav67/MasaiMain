import { useState } from "react";


export const AddToDo = ({onAdd}) => {
    const [newTodo, setNewTodo] =useState("");

    return (
        <div>
            <input type="text" onChange={(e)=> setNewTodo(e.target.value)} value={newTodo} ></input>
            <button onClick={()=>
                { let value= newTodo.trim;
                  if(value)
                  { onAdd(value);
                    setNewTodo("");
                  }
                }
             }>ADD</button>
        </div>
    )

}



