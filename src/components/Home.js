import React, { useEffect, useRef, useState } from "react";
import "../style/Home.scss";
import AddToDo from "./AddToDo";
import Footer from "./Footer";
import ToDoList from "./ToDoList";
import { getList, updateTask, deleteTask, getActiveTaskCount } from "../api";

import UpdateTaskModal from "./UpdateTaskModal";
import ModalLayout from "./ModalLayout";
const MyContext = React.createContext();

function Home() {
  const [taskList, setTaskList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [DataIsLoaded, setDataIsLoaded] = useState(false);
  const [showUpdateTaskModal, setShowUpdateTaskModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({
    id: null,
    value: "",
  });
  const [editedTask, setEditedTask] = useState("");
  const updateInputRef = useRef();
  const [alertMessage, setAlertMessage] = useState({
    status: false,
    text: "",
    type: "",
  });
  const [activeTaskCount, setActiveTaskCount] = useState(0);

  /* ON DELETE BUTTON CLICK */
  const handleDeleteTask = (id) => {
    /* console.log("ID OF ITEM TO BE DELETED : ", id); */
    deleteTask(id)
      .then((response) => {
        if (response.status) {
          let filteredArray = [...taskList];
          filteredArray = filteredArray.filter((item) => {
            return item.id !== id;
          });
          setTaskList(filteredArray);
          setFilteredTaskList(filteredArray);
          getActiveTaskCount()
            .then((response) => {
              setActiveTaskCount(response.activeTaskCount);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log(response.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* ON EDIT BUTTON CLICK */
  const handleEditTask = (obj) => {
    console.log("ID OF ITEM TO BE EDITED : ", obj.id);
    setShowUpdateTaskModal(!showUpdateTaskModal);
    setTaskToEdit({ id: obj.id, value: obj.task });
    updateInputRef.current.value = obj.task;
  };

  /* WHEN EDITING TASK */
  const handleEditedTask = (event) => {
    setEditedTask(event.target.value);
  };

  /* ON UPDATE BUTTON CLICK */
  const handleUpdate = () => {
    updateTask(editedTask, taskToEdit.id)
      .then((response) => {
        if (response.status === "UPDATED") {
          setAlertMessage({
            status: true,
            text: response.message,
            type: "success_msg",
          });
          let filteredArray = [...taskList];
          filteredArray = filteredArray.map((item) => {
            item.task = item.id === taskToEdit.id ? editedTask : item.task;
            return item;
          });
          setFilteredTaskList(filteredArray);
          return true;
        } else if (response.status === "NOT_UPDATED") {
          setAlertMessage({
            status: true,
            text: response.message,
            type: "error_msg",
          });
        } else if (response.status === "DUPLICATE_TASK") {
          setAlertMessage({
            status: true,
            text: response.message,
            type: "error_msg",
          });
        } else {
          console.log(response.message);
        }
      })
      .then((response) => {
        if (response) {
          handleCloseModal();
        }
      })
      .catch((err) => {});
  };

  /* CLOSE MODAL */
  const handleCloseModal = () => {
    setShowUpdateTaskModal(false);
    setAlertMessage({ status: false, text: "", type: "" });
  };

  useEffect(() => {
    console.log("--- In useEffect ---");
    /* GET ALL TASKS */
    getList()
      .then((response) => {
        setDataIsLoaded(true);
        setTaskList(response.availableTasks);
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
  }, [DataIsLoaded]);

  useEffect(() => {
    console.log("CHANGE IN filteredTaskList");
    setTaskList(filteredTaskList);
  }, [filteredTaskList]);

  useEffect(() => {
    let filteredArray = [...taskList];
    filteredArray = filteredArray.filter((obj) => {
      let item = obj.task.toLowerCase();
      return item.includes(searchText.toLowerCase());
    });
    setFilteredTaskList([...filteredArray]);
  }, [searchText]);

  useEffect(() => {
    if (showUpdateTaskModal) {
      updateInputRef.current.focus();
    } else {
      updateInputRef.current.value = "";
    }
  }, [showUpdateTaskModal]);

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
          value4: [showUpdateTaskModal, setShowUpdateTaskModal],
          value5: [activeTaskCount, setActiveTaskCount],
        }}
      >
        <div className="homeWrapper">
          {/* ADD TO-DOs */}
          <AddToDo />

          {/* TO-DOs LIST */}
          <div className="toDoListWrapper">
            {DataIsLoaded &&
              filteredTaskList.map((obj) => {
                return (
                  <ToDoList
                    data={obj}
                    handleEditTask={handleEditTask}
                    handleDeleteTask={handleDeleteTask}
                  />
                );
              })}
          </div>
        </div>

        {/* FOOTER */}
        <Footer />

        <ModalLayout>
          <UpdateTaskModal
            updateInputRef={updateInputRef}
            handleCloseModal={handleCloseModal}
            handleUpdate={handleUpdate}
            handleEditedTask={handleEditedTask}
            alertMessage={alertMessage}
          />
        </ModalLayout>
      </MyContext.Provider>
    </div>
  );
}

export default Home;
export { MyContext };
