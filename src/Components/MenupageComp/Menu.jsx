import React, { useState } from "react";
import "./Menu.css";
import Display from "../DisplayComp/Display";

const Menu = () => {
  //!This state is responsible for the data management at level-1
  const [data, setData] = useState({
    item: "",
    people: "",
  });
  const [enter, setEnter] = useState(false);
  const [enterform, setEnterForm] = useState(true);

  //!This function is responsible for the change in the item property
  const itemChangeHandler = (e) => {
    setData({ ...data, item: e.target.value });
  };

  //!This function is responsible for the change in the people property
  const peopleChangeHandler = (e) => {
    setData({ ...data, people: e.target.value });
  };

  //*!Click on the enter button, this function will tigger
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
      //!Here, we are sending the data, to the server then to MongoDB altas.
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
