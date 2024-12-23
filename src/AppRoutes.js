import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Learn from './pages/Learn';
import Progress from './pages/Progress';
import About from './pages/About';
import Add from './pages/Add';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/learn" element={<Learn />} />
      <Route path="/progress" element={<Progress />} />
      <Route path="/about" element={<About />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
};

export default AppRoutes;