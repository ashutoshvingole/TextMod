import './App.css';
//import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor ='grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
    <NavBar title = "TextMod" mode = {mode} toggleMode={toggleMode} />
    <div className="container my-5">
    <TextForm heading = "Enter The Text To Analyze"  /> 
    { /* <About /> */}
    </div> 
    </>
  );
}

export default App;
