import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

const WindowInfo = () => {
  return (
    <section className="upper-icons">
      <div className="icons-data">
        <FontAwesomeIcon icon={faWindowMinimize}></FontAwesomeIcon>
      </div>
      <div className="icons-data">
        <FontAwesomeIcon icon={faWindowMaximize}></FontAwesomeIcon>
      </div>
      <div className="icons-data">
        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
      </div>
    </section>
  );
};

export default WindowInfo;
