import { CounterLec } from "./CounterLec";
import { useState } from "react";


const Apps = () => {
    const [showCounter,setShowCounter] =useState(true);
    return (
        <div>
            <button onClick={()=> setShowCounter(!showCounter)}>
                {showCounter ? "Toggle" : "Show"}
            </button>
            {showCounter&&<CounterLec/>}

        </div>
    )
}
export default Apps;