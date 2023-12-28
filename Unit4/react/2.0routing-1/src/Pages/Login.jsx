import {  Route , Routes, useNavigate} from "react-router-dom";
import { SignOut } from "../Componets/SignOut";
import {SignIn} from "../Componets/SignIn";
import {Google} from "../Componets/Google";



export const Login = () =>{
    const navigate = useNavigate();

    return(
      
        <h1>
            
            <div>This is An Login-Page</div>
        

         <button onClick={()=>navigate("sign-in")}>Sign-In</button>
         <button onClick={()=>navigate("sign-out")}>Sign-Out</button>
         <button onClick={()=>navigate("google")}>Sign With Google </button>
       

         <div>
            
            <Routes>
                <Route path="sign-in" element={<SignIn/>}></Route>
                <Route path="sign-out" element={<SignOut/>}/>
                <Route path="google" element={<Google/>}></Route>
            </Routes>
            

        
         </div>
         

        </h1>

    
       
    )
}