import React, { useContext } from "react";

import { DeleteSVG } from "../svg";
import { MyContext } from "./Home";

function DeleteTask({ handleDeleteTask }) {
  return (
    <div className={"deleteTask "} onClick={handleDeleteTask}>
      <DeleteSVG />
    </div>
  );
}

export default DeleteTask;
