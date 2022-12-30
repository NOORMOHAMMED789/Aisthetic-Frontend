import React from "react";

const DisplaySub2 = (props) => {
  return (
    <div className="subdisplay_items">
      <div className="subdisplay_items__list">
        <h1 className="subdisplay_main_category">
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
  );
};

export default DisplaySub2;
