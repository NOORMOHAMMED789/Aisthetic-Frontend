import React from "react";
import "./DisplaySub2.css";

const DisplaySub2 = (props) => {
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
        <div className="search_list">
          <input
            type="text"
            placeholder="Search items to add"
            className="search_list__items"
          />
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
