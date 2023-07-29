import './App.css';
import { Link } from 'react-router-dom';
import Menu from './Menu'
import All from './All'
import Vegan from './Vegan'
import Vegetarian from './Vegetarian'
import NonVegetarian from './NonVegetarian'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/Homepage' element={<HomePage />}/>
          <Route path='/Menu' element={<Menu />}/>
          <Route path='/All' element={<All />}/>
          <Route path='/Vegan' element={<Vegan />}/>
          <Route path='/Vegetarian' element={<Vegetarian />}/>
          <Route path='/NonVegetarian' element={<NonVegetarian />}/>
        </Routes>
     
  </Router>
  );
}

export default App;
