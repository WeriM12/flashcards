import React from 'react';

import '../styles/components/Main.scss'; // Optional: Create a corresponding CSS file for styles
import '../styles/global.scss';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import data from "../Data.json";

function LearningMode({ category, route }) {
  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(route);
    };

  return (
    <div className="categories-list">
      <h2>You are in the learning mode now</h2>
      {data.categories.flashcards.map((category) => (
            <div key={category.id} className='flashcard' style={{backgroundColor: category.color}}>
                <h3>{category.question}</h3>
                <p>{category.answer}</p>
            
            </div>
        )) }
      
      
    </div>
  );
}

export default LearningMode;