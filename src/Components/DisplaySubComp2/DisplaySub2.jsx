import React, { useState, useEffect } from "react";
import "./DisplaySub2.css";
import axios from "axios";

const DisplaySub2 = (props) => {
  const [focus, setFocus] = useState(false);
  const [itemsArray, setItemsArray] = useState([]);

  //!Below array is to display the items of the array(Sambar,coffee,tea,.....)
  const [getId, setGetId] = useState([]);

  //!Below Method will help to get the data of items come from backend API.
  useEffect(() => {
    axios
      .get("http:///localhost:3001/api/v1/items")
      .then((response) => {
        console.log(response.data.products);
        setItemsArray(response.data.products);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <div className="subdisplay_items2">
        <div className="subdisplay_items__list2">
          <h1 className="subdisplay_main_category2">
            {props.subItem1}, {props.subPeople1} &nbsp; <span>Edit</span> &nbsp;{" "}
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
                  onKeyDown={() => console.log("arrow clicked")}
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

        <form className="menupage_list">
          <input
            type="text"
            placeholder="Sub Category name"
            className="search_list__items"
            autoFocus
          />
          <input
            type="text"
            placeholder="Number of People"
            className="search_list__items"
          />
        </form>
      </div>
      <form className="subpage">
        <input
          type="text"
          placeholder="Sub Category name"
          className="search_list__items1"
          autoFocus
        />
        <input
          type="text"
          placeholder="Number of People"
          className="search_list__items1"
        />
      </form>
    </>
  );
};

export default DisplaySub2;
