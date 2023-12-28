import { useState } from "react";
import {Rental} from "./Rental";
import styles from "./app.module.css";
import { Button } from "./Button";




export const Toggle = () =>{
    
    
    const[isToggleOn,setIsToggleOn] = useState(false);

    const toggleForm = () =>{
        setIsToggleOn(!isToggleOn);
    }

    
    return(

     <div className={styles.toggle}>
        
        <button onClick={toggleForm}>
            
        {isToggleOn ? "Turn This Thing Off" : "Need? A Input Form Then Click here" }
        <br />
    
        </button>
        <br />
        
        {

            isToggleOn && <Rental/>
        }
        <Button />
       
        
     

    
      
        
     </div>
    )


}