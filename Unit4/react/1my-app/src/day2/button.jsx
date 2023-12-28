

// const Button = () => {
//     let name = "santhi";
//     const handleName = ()=> {
//         name = "masai"
//         console.log(name,"clicked");
//     }
//     console.log(name);


//     return ( 
//         <>

//          <h1>{name}</h1>
//         <button onClick={()=>handleName()}>Change!!!</button>
//         </>
//     )

// }
// export default Button ;


import { useState } from "react";


const Button = () => {
    let [name,setName] = useState("santhi");
    console.log("first");

    const handleName = ()=> {
        setName = "masai"
        console.log("third");
    }
    console.log("second");

    return ( 
        <>

         <h1>{name}</h1>
        <button onClick={handleName}>Change!!!</button>
        </>
    )

}
export default Button ;
