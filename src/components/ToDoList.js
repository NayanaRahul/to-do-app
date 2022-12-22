import React from "react";
import "../style/ToDoList.scss";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

function ToDoList({ data, handleEditTask, handleDeleteTask }) {
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
      <EditTask
        handleEditTask={() => {
          handleEditTask(data);
        }}
      />
      {/* DELETE TASK */}

      <DeleteTask
        handleDeleteTask={() => {
          handleDeleteTask(data.id);
        }}
      />
    </div>
  );
}

export default ToDoList;
