import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({children}) =>{
    const {token} = useContext(AuthContext);
    const location = useLocation();

    if(token) return children;
    return  <Navigate to="/login" state={{from :location}} replace/>
    


}