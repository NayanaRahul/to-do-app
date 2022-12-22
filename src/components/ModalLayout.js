import React, { useContext } from "react";
import { MyContext } from "./Home";

function ModalLayout(props) {
  const { value4 } = useContext(MyContext);
  const [showUpdateTaskModal, setShowUpdateTaskModal] = value4;
  return (
    <div
      className={"layoutWrapper " + (showUpdateTaskModal ? "block" : "hidden")}
    >
      {props.children}
    </div>
  );
}

export default ModalLayout;
