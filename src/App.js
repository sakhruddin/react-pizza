// import logo from './logo.svg';
import Categiries from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';
import pizzas from './assets/pizzas.json'

console.log(pizzas)
function App() {
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
            {pizzas.map((obj) => (
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
