import React from 'react';
import Categiries from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState([])
  React.useEffect(() => {
    fetch('https://63bad84332d17a50907f241b.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categiries />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
