import { useContext, useEffect } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useLocation, useNavigate } from "react-router-dom";

export const LogIn  = () => {
    const { token,login} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation() ;

    console.log(location);

    const from = location.state.from.pathname || "";


    
    useEffect(()=>{
        if(token){
            navigate(from, {replace : true});
            
        }
    },[token])

    return(
        <div>
         <button onClick={login}>Log-In</button>
        </div>
    )
}