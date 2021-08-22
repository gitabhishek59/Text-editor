
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#000000';
      showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  
  return (
    <>
    <Router>
   <Navbar title="TextEditor"aboutText="About us" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert} />
   <div className="container my-10">
     <Switch>
       <Route exact path="/about">
       <About />
       </Route>
       <Route exact path="/">
       <TextArea showAlert={showAlert} heading="ENTER THE TEXT TO ANALYZE BELOW :)" mode={mode} />
       </Route>
     </Switch>
  </div>
  </Router>
    </>   
  );
 
}

export default App;

