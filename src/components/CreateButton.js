import React from "react";
import "../style/CreateButton.css";

function CreateButton() {
  const onClickButton = () => {
    console.log("clic");
  };
  return (
    <button className="CreateButton" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateButton };
