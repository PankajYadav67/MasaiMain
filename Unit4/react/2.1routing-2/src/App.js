import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Make sure to import Routes from 'react-router-dom'


//css
import './App.css';

//Components
import { LogIn } from './Page/Login';
import { Protected } from './Page/Protected';
import { Home } from './Page/Home';
import { RequiredAuth } from './Components/RequiredAuth';



function App() {

  
  return (
    <div className="App">

     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="login" element={<LogIn/>}/>
       <Route path="protected" element={
         <RequiredAuth>
            <Protected/>
         </RequiredAuth>
       }/>
       
     </Routes>
   
    </div>
  );
}

export default App;
