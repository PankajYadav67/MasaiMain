import { Link, useNavigate } from "react-router-dom";


export const Navbar = () =>{
    const navigate = useNavigate();

    return(
        <div style={{
            marginBottom:"10px",
            padding:"40px",
            fontSize:"30px",
            background:"black",
            color:"white",
            fontWeight:600,
            display:"flex",
            gap:"40px"

        }}>
            <div>
                <Link to="home">Home</Link>
    
            </div>

            <div>
                <button  onClick={() => navigate("login")}>Login</button>
            </div>
            
           <div>
             <Link to="about">About</Link>
            </div>
           
           
        </div>
    )
}