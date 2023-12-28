import { useState } from "react";
import {Todo} from "./Todo" ;
// import styles from "./todo.module.css";
import { AddToDo } from "./AddToDo";



export const Todos = () => {
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

    const  getTodos =  async () => {
        
        try {
            let res = await fetch("http://localhost:3000/todos") ;

            let data =  res.json;
            console.log(data);                  
            setTodos(data) ;

        } catch (error) {
            console.log(error);
        }
    }

    // getTodos();
    
    return (
        <div>
            
           <AddToDo onAdd={onAdd} />
            { todos.map((todo)=>(  <Todo  key={todo.id} todo={todo}/> ))}
        </div>
    )
}




