import React from "react";
import "../style/ToDoList.css";

function ToDoList({ data }) {
  return (
    <div className="listContainer" key={data.id}>
      <label className="container">
        {data.task}
        <input type="checkbox" name="checkToDo" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default ToDoList;
