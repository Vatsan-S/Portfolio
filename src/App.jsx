import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import DevProject from '../Pages/DevProject';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Taskmanagement from '../Pages/Taskmanagement';
import Artlinq from '../Pages/Artlinq';
import SereneSoil from '../Pages/SereneSoil';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/1' element={<DevProject/>}/>
        <Route path='/project/2' element={<Taskmanagement/>}/>
        <Route path='/project/3' element={<Artlinq/>}/>
        <Route path='/project/4' element={<SereneSoil/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;