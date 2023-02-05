import React from "react";
import { SearchContext } from "../App";
import Categiries from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";
import Pagination from './../components/Pagination/index';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext)
  const [currentPage, setCurrentpage] = React.useState(1)
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "Популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(
      `https://63bad84332d17a50907f241b.mockapi.io/items?page=${currentPage}&limit=4&${category}&${search}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));


  return (
    <div className="container">
      <div className="content__top">
        <Categiries
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number)=>setCurrentpage(number)} />
    </div>
  );
};

export default Home;
