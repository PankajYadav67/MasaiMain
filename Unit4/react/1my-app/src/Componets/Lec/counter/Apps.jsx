import { Counter } from "./Counter";
import { useState } from "react";


const Apps = () => {
    const [showCounter,setShowCounter] =useState(true);
    return (
        <div>
            <button onClick={()=> setShowCounter(!showCounter)}>
                {showCounter ? "Toggle" : "Show"}
            </button>
            {showCounter&&<Counter/>}

        </div>
    )
}
export default Apps;