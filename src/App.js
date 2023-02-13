import React from 'react';
import Header from './components/Header';
import './scss/app.scss';
import Home from './pages/Home';
import NotFoundBlock from './components/notFoundBlock';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
export const SearchContext = React.createContext('');

import { decrement, increment } from './redux/slices/filterSlice'

function App() {
  const [searchValue, setSearchValue] = React.useState('')

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div className="wrapper">
       <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <SearchContext.Provider value={{ searchValue, setSearchValue }} >
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFoundBlock />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
