import React , { Component, useState } from 'react'
import { Link } from 'react-router-dom';

import './button.css';

import MainTable from './components/MainTable'
import MainName from './components/MainName'
import MainPhone from './components/MainPhone'

function HomePage() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5vw', fontWeight: 'bold', color: 'red' }}>
            Moksha
          </div>
          <MainTable />
          <MainName />
          <MainPhone />

          <div style={{height: '5vh'}}></div>
          <Link to="/Menu">
            <button className="red-button">
              Next
            </button>
          </Link>
          
          <div style={{ fontSize: '1vw', color: 'grey', width: '50%' }}>
            To process your dine-in order efficently, we collect your
            name and phone number. This information will be used
            solely for the purpose of fullfilling your order and will not
            be shared with any third parties. We value your privacy
            and are committed to protecting your personal
            information. Thank you for your understanding and
            cooperation.
          </div>
        </header>
      </div>
    );
  }

  export default HomePage;