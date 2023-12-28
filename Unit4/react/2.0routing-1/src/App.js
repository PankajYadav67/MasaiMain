import { Home } from './Pages/Home';
import { About } from './Pages/About';
import './App.css';
import { Login } from './Pages/Login';
import { Navbar } from './Componets/Navbar';
import { Route,Routes } from 'react-router-dom';


function App() {
  // const navigate =useNavigate();

  // useEffect(()=>{
  //   navigate("/home");
  // },[]);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="home"  element={  <Home/>}></Route> 
        <Route path="login/*" element={ <Login/>}></Route>
        <Route path="about" element={ <About/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
