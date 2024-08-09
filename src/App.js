import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Layout from './Layout/Layout';
import QrCodeGenerator from './Components/Features/Qr-Code-generator/QrCodeGenerator';
import { useState } from 'react';
import Shareable from './Components/Features/Share-able/Shareable';

function App() {
  const [options,setOptions]=useState(0);
  return (
    <div className="App">      
         <Routes>
          <Route path='/' element={<Layout options={options}/>}>
              <Route path='/' element={<Home setOptions={setOptions} />}/>
              <Route path='/qr-generator' element={<QrCodeGenerator/>}/>
              <Route path='/share-able' element={<Shareable/>}/>
          </Route>
         </Routes>
    </div>
  );
}

export default App;
