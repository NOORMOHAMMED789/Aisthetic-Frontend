import React, { useState, useEffect } from "react";
import "./DisplaySub.css";
import DisplaySub2 from "../DisplaySubComp2/DisplaySub2";
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

  const [enter, setEnter] = useState(true);
  const [enter1, setEnter1] = useState(false);
  const [enter3, setEnter3] = useState(true);
  const [focus, setFocus] = useState(false);
  const [itemsArray, setItemsArray] = useState([]);

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
      setEnter(false);
      console.log("Enter Clicked");
      console.log(subItem, subPeople);
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Day: subItem, Persons: subPeople }),
    };
    fetch("http://localhost:3001/api/v1/user", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status === "Success");
        alert("Data saved");
      });
  };

  const enterHandler1 = (e) => {
    const { subItem1, subPeople1 } = subdata1;
    if (e.key === "Enter") {
      setEnter1(true);
      setEnter3(false);

      console.log("Enter Clicked");
      console.log(subItem1, subPeople1);
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Day: subItem1, Persons: subPeople1 }),
    };
    fetch("http://localhost:3001/api/v1/user", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.status === "Success");
        alert("Data saved");
      });
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
    <>
      <div className="subdisplay_items">
        <div className="subdisplay_items__list">
          <h1 className="subdisplay_main_category">
            {props.subItem}, {props.subPeople} &nbsp; <span>Edit</span> &nbsp;{" "}
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
          <form className="menupage_list" onKeyDown={enterHandler}>
            <input
              type="text"
              placeholder="Sub Category name"
              className="search_list__items"
              onChange={subChangeHandler}
              autoFocus
            />
            <input
              type="text"
              placeholder="Number of People"
              className="search_list__items"
              onChange={subPeopleChangeHandler}
            />
          </form>
        )}
        {enter3 && (
          <form className="subpage_list" onKeyDown={enterHandler1}>
            <input
              type="text"
              placeholder="Sub Category name"
              className="search_list__items"
              onChange={sub1ChangeHandler}
            />
            <input
              type="text"
              placeholder="Number of People"
              className="search_list__items"
              onChange={subPeople1ChangeHandler}
            />
          </form>
        )}
        {enter1 && (
          <DisplaySub2
            subItem1={subdata1.subItem1}
            subPeople1={subdata1.subPeople1}
          />
        )}
      </div>
    </>
  );
};

export default Display;
