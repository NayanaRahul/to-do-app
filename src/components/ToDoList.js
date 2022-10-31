import React from "react";
import "../style/ToDoList.css";

function ToDoList() {
  return (
    <div className="listContainer">
      <label className="container">
        To do Text here
        <input type="checkbox" name="checkToDo" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default ToDoList;
