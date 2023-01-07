import React, { useState } from "react";

function ToDoList(prop) {
  const [isComplete, setIsComplete] = useState(false);

  function handleClick(event) {
    isComplete ? setIsComplete(false) : setIsComplete(true);
  }

  return (
    <li
      style={{ textDecoration: isComplete ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {prop.itemName}
    </li>
  );
}

export default ToDoList;
