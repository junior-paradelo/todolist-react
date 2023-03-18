import React from "react";
import "../style/List.css";

function List(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { List };
