import React from "react";
import "../style/Search.css";

function Search({search, setSearch}) {
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <section>
      <input
        className="Search"
        placeholder="Introduce one task..."
        value={search}
        onChange={onSearchChange}
      />
      <p>{search}</p>
    </section>
  );
}

export { Search };
