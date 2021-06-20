import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import titleImg from "./images/title.png";

const TimeOver = ({ restartGame }) => {
  return (
    <>
      <section
        className="container-back"
        style={{
          width: "95%",
          left: "2%",
          top: "35%",
          minHeight: "25%",
          zIndex: "1",
        }}
      >
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>Time Over</div>
            </section>
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
          </div>
          <div className="gameOver">
            <FontAwesomeIcon
              style={{ fontSize: "2.5rem" }}
              icon={faExclamationTriangle}
            ></FontAwesomeIcon>
            C:\Desktop\Askaway\Time Over
          </div>
          <div className="btn-container" style={{ margin: "10px" }}>
            <button className="btn-gameOver" onClick={restartGame}>
              Restart Askaway
            </button>
            <button className="btn-gameOver">Restart level</button>
          </div>
        </header>
      </section>
    </>
  );
};

export default TimeOver;
