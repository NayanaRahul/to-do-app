import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import "../style/AddToDo.scss";
import { MyContext } from "./Home";

function AddToDo() {
  const [task, setTask] = useState("");
  const { value1, value2 } = useContext(MyContext);
  const [taskList, setTaskList] = value1;
  const [filteredTaskList, setFilteredTaskList] = value2;

  const inputRef = useRef(null);
  const handleAddTask = () => {
    axios
      .post("http://localhost:3001/addtask", { task })
      .then((response) => {
        /* console.log("Task ID : ", response.data.taskId);
        console.log("Status : ", response.data.message); */
        if (response.data.status) {
          setFilteredTaskList([
            {
              id: response.data.taskId,
              task: task,
              status: "ACTIVE",
            },
            ...taskList,
          ]);
        }
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
          autoComplete="off"
        />
      </div>
      <div>
        <button className="button_primary" onClick={handleAddTask}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
