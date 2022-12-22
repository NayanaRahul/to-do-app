import React from "react";
import "../style/UpdateTaskModal.scss";
import AlertMessages from "./AlertMessages";

function UpdateTaskModal({
  updateInputRef,
  handleCloseModal,
  handleUpdate,
  handleEditedTask,
  alertMessage,
}) {
  /* const { value4 } = useContext(MyContext);
  const [showUpdateTaskModal, setShowUpdateTaskModal] = value4; */

  return (
    <div className="updateTaskModalWrapper">
      <h3>Update Task</h3>
      <div className="updateTaskModalContainer">
        <input type="text" ref={updateInputRef} onChange={handleEditedTask} />
      </div>
      <AlertMessages alertMessage={alertMessage} />
      <div className="buttonsContainer">
        <button className="button_primary" onClick={handleUpdate}>
          Update
        </button>
        <button className="button_secondary" onClick={handleCloseModal}>
          Close
        </button>
      </div>
      <hr />
    </div>
  );
}

export default UpdateTaskModal;
