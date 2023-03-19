import React from "react";
import "../style/Search.css";

function Search() {
  const [search, setSearch] = React.useState("");
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
