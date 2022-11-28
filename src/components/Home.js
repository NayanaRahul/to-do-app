import React, { useEffect, useState } from "react";
import "../style/Home.scss";
import AddToDo from "./AddToDo";
import Footer from "./Footer";
import ToDoList from "./ToDoList";
import { getList } from "../api";
const MyContext = React.createContext();

function Home() {
  const [taskList, setTaskList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("--- In useEffect ---");
    getList()
      .then((response) => {
        setFlag(true);
        setTaskList(response.availableTasks);
        console.log("first");
        let filteredArray = [...taskList];
        filteredArray = filteredArray.filter((obj) => {
          let item = obj.task.toLowerCase();
          return item.includes(searchText.toLowerCase());
        });
        setFilteredTaskList([...filteredArray]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, flag]);

  return (
    <div className="homeContainer">
      {/* HEADER */}
      <div className="heading txt_center">
        <h1>THINGS TO DO</h1>
      </div>
      <MyContext.Provider
        value={{
          value1: [taskList, setTaskList],
          value2: [filteredTaskList, setFilteredTaskList],
          value3: [searchText, setSearchText],
        }}
      >
        <div className="homeWrapper">
          {/* ADD TO DOs */}
          <AddToDo />
          {/* TO DOs LIST */}
          <div className="toDoListWrapper">
            {filteredTaskList &&
              filteredTaskList.map((obj) => {
                return <ToDoList data={obj} />;
              })}
          </div>
        </div>
        {/* FOOTER */}
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default Home;
export { MyContext };
