import React from 'react';

import '../styles/components/Sidebar.scss'; // Optional: Create a corresponding CSS file for styles
import '../styles/global.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';

function Update({ buttonClass, title, paragraph, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="update">
      <div>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
      <button
        className={`button-learn ${buttonClass}`}
        onClick={handleClick}
      >
        <span className="material-symbols-rounded">play_arrow</span>
      </button>
    </div>
  );
}


export default Update;


