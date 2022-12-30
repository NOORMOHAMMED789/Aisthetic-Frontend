import React from "react";

const DisplaySub3 = (props) => {
  return (
    <div className="display_items">
      <div className="display_items__list">
        <h1 className="display_main_category">
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
      <form className="subcategory_list">
        <input
          type="text"
          placeholder="Sub Category name"
          className="search_list__items"
        />
        <input
          type="number"
          placeholder="Number of People"
          className="search_list__items"
        />
      </form>
      <form className="subcategory_list">
        <input
          type="text"
          placeholder="Main Category name"
          className="search_list__items"
        />
        <input
          type="number"
          placeholder="Number of People"
          className="search_list__items"
        />
      </form>
    </div>
  );
};

export default DisplaySub3;
