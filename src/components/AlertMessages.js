import React from "react";
import "../style/AlertMessages.scss";

function AlertMessages({ alertMessage }) {
  if (alertMessage.status) {
    return (
      <div className={`txtMessage ${alertMessage.type}`}>
        {alertMessage.text}
      </div>
    );
  } else {
    return null;
  }
}
export default AlertMessages;
