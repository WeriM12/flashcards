import React from 'react';

import '../styles/components/Main.scss'; // Optional: Create a corresponding CSS file for styles
import '../styles/global.scss';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import data from "../Data.json";

function CategoriesList({ buttonClass, title, paragraph, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="categories-list">
      <h2>Saved categories</h2>
      <div className='categories-container'>
        {data.categories.map((category) => (
            <div key={category.id} className='category' style={{backgroundColor: category.color}}>
              <h3>{category.name}</h3>
              <button route="/learning-mode" onClick={handleClick}>Start <span style={{fontWeight: 900, fontSize: 30}} class="material-symbols-rounded">arrow_forward</span></button>
            
            </div>
        )) }
        

      </div>
      
    </div>
  );
}

export default CategoriesList;

