import axios from "axios";
import React, { useState } from "react";
import "../style/AddToDo.css";

function AddToDo() {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    axios
      .post("http://localhost:3001/addtask", { task })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="addContainer">
      <div className="addWrapper">
        <input
          type="text"
          name="to_do_text"
          placeholder="Add new task"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div>
        <button className="button" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
