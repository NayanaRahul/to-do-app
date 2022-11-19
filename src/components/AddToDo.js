import axios from "axios";
import React, { useRef, useState } from "react";
import "../style/AddToDo.scss";

function AddToDo({ setTaskList, taskList }) {
  const [task, setTask] = useState("");
  const inputRef = useRef(null);
  const handleAddTask = () => {
    axios
      .post("http://localhost:3001/addtask", { task })
      .then((response) => {
        console.log("Task ID : ", response.data.taskId);
        setTaskList([
          {
            id: response.data.taskdId,
            task: task,
            status: "ACTIVE",
          },
          ...taskList,
        ]);
        inputRef.current.value = "";
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
          ref={inputRef}
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
