import { useContext } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import { Logout } from "./Logout";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

export const Div = styled.div`
height:50px;
background:lightred;
color: white`;




export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully

  // if(token){
  //   <h1></h1>
  // }
  // else{
  //   <h1>Logged Out SuccessFully</h1>
  // }
 
  return (
    <>
    <Div>
      <nav>
      <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {token === "" ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link onClick={<Logout/>} to="/logout">
            Logout
          </Link>
        )}
        <Link to="/books">Books</Link>
   
      </nav>
      </Div>
    </>
  );
};
