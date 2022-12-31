import React, { useState } from "react";
import "./Menu.css";
import Display from "../DisplayComp/Display";

const Menu = () => {
  const [data, setData] = useState({
    item: "",
    people: "",
  });
  const [enter, setEnter] = useState(false);
  const [enterform, setEnterForm] = useState(true);

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
      setEnterForm(false);
      console.log("Enter Clicked");
      console.log(item, people);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Day: item, Persons: people }),
      };
      fetch("http://localhost:3001/api/v1/user", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.status === "Success");
          alert("Data saved");
        });
    }
  };

  return (
    <div>
      <div className="header">
        <h1 className="header__title">Menu</h1>
        <div className="menupage">
          {enterform && (
            <form className="menupage-list" onKeyDown={clickHandler}>
              <input
                type="text"
                className="menupage_list__items"
                placeholder="Main Category name"
                value={data.item}
                onChange={itemChangeHandler}
                required
                autoFocus
              />
              <input
                type="number"
                className="menupage_list__items"
                placeholder="Number of People"
                value={data.people}
                required
                onChange={peopleChangeHandler}
              />
            </form>
          )}
        </div>
      </div>
      {enter && <Display item={data.item} people={data.people} />}
    </div>
  );
};

export default Menu;
