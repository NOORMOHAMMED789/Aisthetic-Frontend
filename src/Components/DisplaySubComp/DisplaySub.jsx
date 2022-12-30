import React, { useState } from "react";
import DisplaySub2 from "../DisplaySubComp2/DisplaySub2";
import "./DisplaySub.css";

const Display = (props) => {
  const [subdata, setSubData] = useState({
    subItem: "",
    subPeople: "",
  });

  const [enable, setEnable] = useState(false);
  const [enter, setEnter] = useState(true);

  const subChangeHandler = (e) => {
    setSubData({ ...subdata, subItem: e.target.value });
  };

  const subPeopleChangeHandler = (e) => {
    setSubData({ ...subdata, subPeople: e.target.value });
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
  return (
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

      {enter && (
        <form className="subcategory_list" onKeyDown={enterHandler}>
          <input
            type="text"
            placeholder="Sub Category name"
            className="search_list__items"
            onChange={subChangeHandler}
          />
          <input
            type="text"
            placeholder="Number of People"
            className="search_list__items"
            onChange={subPeopleChangeHandler}
          />
        </form>
      )}
      {enable && (
        <DisplaySub2 subItem={subdata.subItem} subPeople={subdata.subPeople} />
      )}

      {enter && (
        <form className="subcategory2" onKeyDown={enterHandler}>
          <input
            type="text"
            placeholder="Sub Category name"
            className="search_list__items"
            onChange={subChangeHandler}
          />
          <input
            type="text"
            placeholder="Number of People"
            className="search_list__items"
            onChange={subPeopleChangeHandler}
          />
        </form>
      )}
    </div>
  );
};

export default Display;
