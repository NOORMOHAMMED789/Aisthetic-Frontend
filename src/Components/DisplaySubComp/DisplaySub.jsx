import React, { useState } from "react";
import "./DisplaySub.css";

const Display = (props) => {
  const [subdata, setSubData] = useState({
    subItem: "",
    subPeople: "",
  });
  const [subdata1, setSubData1] = useState({
    subItem1: "",
    subPeople1: "",
  });

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
    const { subItem1, subPeople1 } = subdata1;
    if (e.key === "Enter") {
      console.log("Enter Clicked");
      console.log(subItem1, subPeople1);
    }
  };
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
        <div className="search_list">
          <input
            type="text"
            placeholder="Search items to add"
            className="search_list__items"
          />
        </div>

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

        <form className="subpage_list">
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
      </div>
    </>
  );
};

export default Display;
