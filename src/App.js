
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
   Route,
   Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
   const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#0e1012";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "ScriptScrutinizer" menuFirst = "About Us" mode={mode} toggleMode={toggleMode} />
    <div className="container">
      <Routes>
        <Route exact path="/"
         element = {<Textform heading1 = "Email ID" heading2 = "Enter your Statement" mode={mode}/>}>
        </Route>
        <Route exact path="/about"
          element = {<About/>}>
        </Route>
        </Routes>
    </div>
    </Router>
    </>
  ); 
}

export default App;
