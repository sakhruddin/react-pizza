import React from 'react';
import Header from './components/Header';
import Categiries from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import { Skeleton } from './components/PizzaBlock/Skeleton';
import Sort from './components/Sort';
import './scss/app.scss';
import Home from './pages/Home';

function App() {
 

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
       <Home/>
      </div>
    </div>
  );
}

export default App;
