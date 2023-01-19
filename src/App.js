import React from 'react';
import Header from './components/Header';
import './scss/app.scss';
import Home from './pages/Home';
import NotFoundBlock from './components/notFoundBlock';

function App() {
 

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
       {/* <Home/> */}
       <NotFoundBlock />
      </div>
    </div>
  );
}

export default App;
