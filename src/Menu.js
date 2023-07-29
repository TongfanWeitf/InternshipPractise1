import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
      <header className="Menu-header">
        <div style={{ fontSize: '40px', fontWeight:'bold', color: 'black' }}>
          Welcome to Moksha
        </div>
        <Link to="/All">
          <button className="menuButton">All</button>
        </Link>
        <Link to="/Vegan">
          <button className="menuButton">Vegan</button>
        </Link>
        <Link to="/Vegetarian">
          <button className="menuButton">Vegetarian</button>
        </Link>  
        <Link to="/NonVegetarian">
          <button className="menuButton">NonVegetarian</button>
        </Link>
        <div>
        <Link to="/HomePage">
          <button className="red-button">Back</button>
        </Link>
        </div>
      </header>
    </div>
  );
}

export default Menu;
