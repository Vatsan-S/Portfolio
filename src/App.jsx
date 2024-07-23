import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import DevProject from '../Pages/DevProject';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/1' element={<DevProject/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;