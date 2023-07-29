import React , { Component } from 'react'
import { Link } from 'react-router-dom';
import Food from './components/food'
import './Menu.css'

function Vegetarian() {
  return (
    <div className="Menu" >
      <header>
      <div style={{ fontSize: '40px', fontWeight:'bold', color: 'black' }}>
          Welcome to Moksha
      </div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link to="/All">
        <button className="menuButton">All</button>
      </Link>
      <Link to="/Vegan">
        <button className="menuButton">Vegan</button>
      </Link>
      <Link to="/Vegetarian">
        <button className="thisButton">Vegetarian</button>
      </Link>
      <Link to="/NonVegetarian">
        <button className="menuButton">NonVegetarian</button>
      </Link>
      </div>
      <div>
      <Link to="/HomePage">
        <button className="red-button">Back</button>
      </Link>
      </div>
    </div>
  );
}

export default Vegetarian;