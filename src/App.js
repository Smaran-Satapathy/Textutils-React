import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import { BrowserRouter as Main, Route,Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 3500);

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
    }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled","success")
  }
  }
  return (
   <>
   {/* <Main> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes> */}
          {/* <Route path="/about" element={<About />}> </Route> */}
          {/* <Route path="/" element={}></Route> */}
          <TextForm showAlert={showAlert} heading="Enter the text below to analyis:" mode={mode}/>
        {/* </Routes> */}
</div>
        {/* </Main> */}
{/* <About/> */}
   </>
  );
}

export default App;
