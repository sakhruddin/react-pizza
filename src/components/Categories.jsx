import React from "react";
function Categiries() {
  const categories = ["Мясные", "Вегетерианские", "Гриль", "Острые", "Закрыте"];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const getCategories = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return <li onClick={() => getCategories(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
export default Categiries;
