import React from "react";
import "../style/Home.css";
import AddToDo from "./AddToDo";
import Footer from "./Footer";
import ToDoList from "./ToDoList";

function Home() {
  return (
    <div className="homeContainer">
      {/* HEADER */}
      <div className="heading txt_center">
        <h1>THINGS TO DO</h1>
      </div>
      <div className="homeWrapper">
        {/* ADD TO DOs */}
        <AddToDo />
        {/* LIST TO DOs */}
        <ToDoList />
        <ToDoList />
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
