import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoList itemName={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
