import { React, useState, useEffect}  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

import '../styles/components/Main.scss'; // Optional: Create a corresponding CSS file for styles
import '../styles/global.scss';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
//import data from "../Data.json";

function CategoriesList({ buttonClass, title, paragraph, route }) {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  


  // Fetch categories from the backend API
  axios.get('http://localhost:5000/api/categories')
  .then(response => {
    setCategories(response.data);
  })
  .catch(error => {
    console.error("There was an error fetching the categories!", error);
  });

  

  return (
    <div className="categories-list">
      <h2>{title}</h2>
      <div className='categories-container'>
        {categories.map((category) => (
            <div key={category.id} className='category' style={{backgroundColor: category.color}}>
              <Link to={`/learning-mode/${category.id}`} className={buttonClass}>
              {category.name}
              </Link>
              
            
            </div>
        )) }
        

      </div>
      
    </div>
  );
}

export default CategoriesList;

