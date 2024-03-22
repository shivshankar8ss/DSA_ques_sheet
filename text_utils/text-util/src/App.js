import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React,{useState} from 'react';


function App() {

const[ mode , setMode]= useState('light'); 

const toggleMode = () =>{
  if(mode==='light'){
    setMode('dark');
  }
  else{
    setMode('light');
  }
}

  return (
    <>
    <Navbar title = "TextUtils" aboutUs = "AboutUs" mode={mode}  toggleMode={toggleMode}/>

<Textform heading = "Enter the text to analyze"/> 
    

    {/* <About/> */}
    
    </>
  );
}

export default App;
