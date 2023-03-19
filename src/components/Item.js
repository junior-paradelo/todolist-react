import React from "react";
import "../style/Item.css";

function Item(props) {
  const onComplete = () => {
    console.log("completed: " + props.text);
  };
  const onDelete = () => {
    console.log("deleted: " + props.text);
  };

  return (
    <li className="Item">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { Item };
