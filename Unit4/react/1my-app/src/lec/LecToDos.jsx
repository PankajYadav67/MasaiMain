import { useState } from "react";
import { AddToDo } from "./AddToDo";



export const LecToDos = () => {
    const [todos,setTodos] =useState([]);


    const onAdd =(newTodo)=> {
      setTodos([...todos,
         {
            id :todos.length+1,
            value:newTodo,
            completed:false,

         },
     ]);
    }
    return (
        <div>
            <AddToDo onAdd={onAdd}/>
            { todos.map((todo)=>(  <AddToDo key={todo.id} todo={todo}/> ))}
        </div>
    )
}




