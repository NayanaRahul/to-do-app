import React from "react";
import { EditSVG } from "../svg";

function EditTask({ handleEditTask }) {
  return (
    <div className={"editTask"} onClick={handleEditTask}>
      <EditSVG />
    </div>
  );
}

export default EditTask;
