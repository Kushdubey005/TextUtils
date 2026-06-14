
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import React from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#051047';
      showAlert(":Dark Mode Is Enabled","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(":Light Mode Is Enabled","success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

   
return (
  <>
   <Router>
    <Navbar Title="TextUtils" mode={mode} toggleMode={toggleMode} />
    
    <Alert alert={alert}/>
       <div className="container">
        
      
        <Routes>
          
          <Route
              exact path="/"
              element={
                 <TextForm
                    heading="Write text below down here ..." mode={mode} showAlert={showAlert}/>
                    }
           />

          <Route
            exact path="/about"
            element={<About style={{ width: "18rem" }} />}
           />
          </Routes>

      
    </div>
   </Router>  

        

    </>
  );
}

export default App;
