import { Navbar } from './Components/Navbar';
import { Body } from './Components/Body';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeProvider';

function App() {
  const [theme,toggleTheme]= useContext(ThemeContext);
  
  return (
    <div color={theme} className="App">
      <h1>
        abcd
      </h1>
       <div>
        {theme} : <button onClick={toggleTheme} >Toggle Theme</button>
       </div>
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
