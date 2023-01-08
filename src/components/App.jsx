import React, { useState } from "react";
import ToDoList from "./ToDoList";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function handleClick(text) {
    setItems((prevValue) => {
      return [...prevValue, text];
    });
  }

  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={handleClick} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoList
              key={index}
              id={index}
              itemName={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
