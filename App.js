import './App.css';
import TextForm from './components/TextForm';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';

function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type

      }
    )
    setTimeout(()=>{
setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      showAlert("You Changed the mode",'success')
      document.title='TextUtils-Dark Mode'
      // setInterval(()=>{
      //   document.title='TextUtils is amazing'
      // },1000)
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("You Changed the mode",'success')
      document.title='TextUtils-Light Mode'
      // setInterval(()=>{
      //   document.title='TextUtils is amazing'
      // },1000)
    }
  }

  return (
    <Router>
      <div className="App">
       <Navbar mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/> 


{/* //ye useState wala alert pass kra hai humne isme as a prop */}

<Routes> {/* This should be inside the Router component */}
          <Route path="/about" element={<AboutUs />} /> {/* Use the "element" prop */}
          <Route path="/" element={<TextForm mainHead="Enter Your Data" mode={mode} showAlert={showAlert} />} />
        </Routes>

 
   
     
   </div>
   </Router>
  );
}

export default App;
