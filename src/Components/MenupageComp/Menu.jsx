import React, { useState } from "react";
import "./Menu.css";
import Display from "../DisplayComp/Display";

const Menu = () => {
  const [data, setData] = useState({
    item: "",
    people: "",
  });
  const [enter, setEnter] = useState(false);

  const itemChangeHandler = (e) => {
    setData({ ...data, item: e.target.value });
  };

  const peopleChangeHandler = (e) => {
    setData({ ...data, people: e.target.value });
  };

  const clickHandler = (e) => {
    const { item, people } = data;
    if (e.key === "Enter") {
      setEnter(true);
      console.log("Enter Clicked");
      console.log(item, people);
    }
  };
  return (
    <div>
      <div className="header">
        <h1 className="header__title">Menu</h1>
        <div className="menupage">
          <form className="menupage-list" onKeyDown={clickHandler}>
            <input
              type="text"
              className="menupage_list__items"
              placeholder="Main Category name"
              onChange={itemChangeHandler}
            />
            <input
              type="number"
              className="menupage_list__items"
              placeholder="Number of People"
              onChange={peopleChangeHandler}
            />
          </form>
        </div>
      </div>
      {enter && <Display item={data.item} people={data.people} />}
    </div>
  );
};

export default Menu;
