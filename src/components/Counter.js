import React from "react";
import "../style/Counter.css";

function Counter({total, completed}) {
  return <h2 className="Counter">You completed {completed} to {total} tasks</h2>;
}

export { Counter };
