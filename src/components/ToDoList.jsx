import React from "react";

function ToDoList(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.itemName}
    </li>
  );
}

export default ToDoList;
