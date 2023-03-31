
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';

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
    <Navbar title = "ScriptScrutinizer" menuFirst = "About Us" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <Textform heading1 = "Email ID" heading2 = "Enter your Statement" mode={mode}/>
    </div>
    </>
  ); 
}

export default App;
