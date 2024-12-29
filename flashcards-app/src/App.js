
import Footer from './components/Footer';
import Learn from './pages/Learn';
import Progress from './pages/Progress';
import About from './pages/About';
import Add from './pages/Add';

import SideMainContainer from './components/SideMainContainer';

import React from 'react';

import './App.scss';
import '../src/styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
          <SideMainContainer />
          
          
          <Footer />
      </div>
    </BrowserRouter>
    
        
      
    
  );
}

export default App;


/* ----------------------------------------------------------------------------------------------------------------------------------------
import React from 'react';

import './ComponentName.css'; // Optional: Create a corresponding CSS file for styles

function ComponentName({ children, title, ...props }) {
  return (
    <div className="component-name" {...props}>
      {title && <h1 className="component-name__title">{title}</h1>}
      <div className="component-name__content">
        {children}
      </div>
    </div>
  );
}

export default ComponentName;

*/