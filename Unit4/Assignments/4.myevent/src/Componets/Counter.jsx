import { useState } from "react"


export const Counter = () =>{
    const [count,setCount] = useState("0");
    let x = 0;

    
    
    console.log("new X:",x);
    return(
        <div>
            <h1>Counter :{count}</h1>
            
            <button onClick={()=>{
                setCount(count + 1);
                x =x+1;
                console.log("new X:",x);
                }}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
        </div>
    )
}