import React from "react";
import { useGlobalContext } from "./../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {
  //FILES
  titleImg,
  //COMPONENTS
  WindowInfo,
} from "./../index";

const TimeOver = ({ restartGame }) => {
  const { question, loadingRestart, nextPageRestart } = useGlobalContext();

  return (
    <>
      <section className="container-back-time">
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
            <WindowInfo />
          </div>
          <div className="gameOver">
            <FontAwesomeIcon
              style={{ fontSize: "2.5rem" }}
              icon={faExclamationTriangle}
            ></FontAwesomeIcon>
            C:\Askaway\Time Over
          </div>
          <div className="btn-container" style={{ margin: "10px" }}>
            <button className="btn-gameOver" onClick={restartGame}>
              Restart Askaway
            </button>
            <button
              className="btn-gameOver"
              onClick={() => nextPageRestart(question, loadingRestart)}
            >
              Restart level
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default TimeOver;
