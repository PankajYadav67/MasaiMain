import React from "react";
import { useState } from "react";
//TODO List



const ToDo = () => {
    const [task,setTask] = useState("")
    const [ToDo,setTodo] = useState([])
    const handleChange = (e) => {

        setTask(e.target.value);
    }
    const handleClick = () => {
        setTodo([...ToDo,task])
    }
    //console.log(ToDo,"ToDo");
    return (
        <>
        <h1>ToDo List</h1>
        <input type="text" value={task} placeholder="Enter TODO Name" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
        {ToDo.map((item)=>{
            return <h1>{item}</h1>
        })}
        </>
    );
};

export default ToDo 