import React from "react";
import "../style/Search.css";

function Search() {
  const onSearchChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <section>
      <input
        className="Search"
        placeholder="Introduce one task..."
        onChange={onSearchChange}
      />
    </section>
  );
}

export { Search };
