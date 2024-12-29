import React from 'react';

import Update from './Update.js'
import Learn from '../pages/Learn';
import Progress from '../pages/Progress';
import About from '../pages/About';
import Add from '../pages/Add';
import CategoriesList from './CategoriesList.js';

import '../styles/components/Main.scss'; // Optional: Create a corresponding CSS file for styles
import '../styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/learn" element={<Learn />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<Add />} />
        <Route path="/categories-list" element={<CategoriesList />} />
      </Routes>
      
    </div>
  );
}

export default Main;