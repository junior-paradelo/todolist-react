import React from "react";
import "../style/Item.css";

function Item(props) {
  return (
    <li className="Item">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        {props.completed ? "✅" : "☑️"}
      </span>
      <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        ❌
      </span>
    </li>
  );
}

export { Item };
