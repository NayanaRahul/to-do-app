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
      <EditTask taskId={data.id} />
      {/* DELETE TASK */}
      <DeleteTask taskId={data.id} />
    </div>
  );
}

export default ToDoList;
