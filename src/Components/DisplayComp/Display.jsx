import React, { useState, useEffect } from "react";
import DisplaySub from "../DisplaySubComp/DisplaySub";
import DisplaySub3 from "../DisplaySubComp3/DisplaySub3";
import "./Display.css";
import axios from "axios";

const Display = (props) => {
  const [subdata, setSubData] = useState({
    subItem: "",
    subPeople: "",
  });
  const [subdata1, setSubData1] = useState({
    subItem1: "",
    subPeople1: "",
  });

  const [itemsArray, setItemsArray] = useState([]);

  const [enable, setEnable] = useState(false);
  const [enter, setEnter] = useState(true);
  const [display3, setDisplay3] = useState(false);
  const [shutmain, setShutMain] = useState(true);
  const [focus, setFocus] = useState(false);

  const [getId, setGetId] = useState([]);

  const subChangeHandler = (e) => {
    setSubData({ ...subdata, subItem: e.target.value });
  };

  const subPeopleChangeHandler = (e) => {
    setSubData({ ...subdata, subPeople: e.target.value });
  };
  const sub1ChangeHandler = (e) => {
    setSubData1({ ...subdata1, subItem1: e.target.value });
  };

  const subPeople1ChangeHandler = (e) => {
    setSubData1({ ...subdata1, subPeople1: e.target.value });
  };

  const enterHandler = (e) => {
    const { subItem, subPeople } = subdata;
    if (e.key === "Enter") {
      setEnable(true);
      setEnter(false);
      console.log("Enter Clicked");
      console.log(subItem, subPeople);
    }
  };

  const enterHandler1 = (e) => {
    const { subItem1, subPeople1 } = subdata1;
    if (e.key === "Enter") {
      setDisplay3(true);
      setShutMain(false);
      console.log("Enter Clicked");
      console.log(subItem1, subPeople1);
    }
  };

  useEffect(() => {
    axios
      .get("http:///localhost:3001/api/v1/items")
      .then((response) => {
        console.log(response.data.products);
        setItemsArray(response.data.products);
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="display_items">
      <div className="display_items__list">
        <h1 className="display_main_category">
          {props.item}, {props.people} &nbsp; <span>Edit</span> &nbsp;{" "}
          <span>Delete</span> &nbsp; <span>MoveUp</span> &nbsp;{" "}
          <span>MoveDown</span>
        </h1>
      </div>

      <div className="list">{getId}</div>
      <div className="search_list">
        <input
          className="dropdown-btn search_list__items"
          placeholder="Search to add Items"
          onFocus={() => setFocus(!focus)}
        />
        {focus &&
          itemsArray.map((item, index) => {
            return (
              <div
                className="item_lists"
                key={index}
                onClick={() => {
                  console.log(item.item);
                  setGetId([...getId, item.item]);
                }}
              >
                {item.item}
              </div>
            );
          })}
      </div>
      {enter && (
        <form className="subcategory_list" onKeyDown={enterHandler}>
          <input
            type="text"
            placeholder="Sub Category name"
            className="search_list__items"
            onChange={subChangeHandler}
            autoFocus
          />
          <input
            type="number"
            placeholder="Number of People"
            className="search_list__items"
            onChange={subPeopleChangeHandler}
          />
        </form>
      )}
      {enable && (
        <DisplaySub subItem={subdata.subItem} subPeople={subdata.subPeople} />
      )}
      {shutmain && (
        <form className="subcategory_list" onKeyDown={enterHandler1}>
          <input
            type="text"
            placeholder="Main Category name"
            className="search_list__items"
            onChange={sub1ChangeHandler}
          />
          <input
            type="number"
            placeholder="Number of People"
            className="search_list__items"
            onChange={subPeople1ChangeHandler}
          />
        </form>
      )}
      {display3 && (
        <DisplaySub3
          subItem1={subdata1.subItem1}
          subPeople1={subdata1.subPeople1}
        />
      )}
    </div>
  );
};

export default Display;
