import React from "react";



const TodoItem = (props) => {
    // console.log(props) ;
    //const { title } = item;
    const {title,id,handleId} = props;


    return (
        <>
         <h1>{title}</h1>
         <button onClick={()=> handleId(id) } >Delete</button>
        
        </>
    )
}

export default TodoItem ;