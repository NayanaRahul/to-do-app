import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "../style/Home.css";
import AddToDo from "./AddToDo";
import Footer from "./Footer";
import ToDoList from "./ToDoList";

function Home() {
  const [taskList, setTaskList] = useState([]);
  const countRef = useRef(0);
  const toDoListWrapperRef = useRef();

  const getList = () => {
    return axios
      .get("http://localhost:3001/gettasks")
      .then((response) => {
        setTaskList(response.data.availableTasks);
        countRef.current++;
        return true;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("In useEffect");
    getList();
  }, []);

  return (
    <div className="homeContainer">
      {/* HEADER */}
      <div className="heading txt_center">
        <h1>THINGS TO DO</h1>
      </div>
      <div className="homeWrapper">
        {/* ADD TO DOs */}
        <AddToDo setTaskList={setTaskList} taskList={taskList} />
        {/* TO DOs LIST */}
        <div>Number of changes: {countRef.current}</div>
        <div className="toDoListWrapper" ref={toDoListWrapperRef}>
          {taskList &&
            taskList.map((obj) => {
              return <ToDoList data={obj} />;
            })}
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
