import React from "react";
import "../style/ToDoList.scss";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

function ToDoList({ data }) {
  return (
    <div className="listContainer" key={data.id}>
      <div>
        <label className="container">
          {data.task}
          <input type="checkbox" name="checkToDo" />
          <span className="checkmark"></span>
        </label>
      </div>
      {/* EDIT TASK */}
      <EditTask />
      {/* DELETE TASK */}
      <DeleteTask />
    </div>
  );
}

export default ToDoList;
