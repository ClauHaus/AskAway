import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import titleImg from "./images/title.png";

const GameOver = ({ newName, score, restartGame }) => {
  return (
    <>
      <h1 className="title title-back question">Game Over.</h1>
      <section
        className="container-back"
        style={{
          width: "95%",
          left: "0%",
          top: "20%",
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
              <div>C:\Desktop\Askaway\{newName}\Results</div>
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
        </header>
        <div className="container-results">
          <p>You only scored {score} points...</p>
          <p>
            Oh no {newName}, you got the 10 correct answers but not enough
            points to move on.
          </p>
          <section
            className="container-back"
            style={{
              width: "95%",
              left: "7%",
              top: "40%",
              minHeight: "45%",
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
                  <div>Game Over</div>
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
                C:\Desktop\Askaway...
              </div>
              <div className="btn-container" style={{ margin: "10px" }}>
                <button className="btn-gameOver" onClick={restartGame}>
                  Restart Askaway
                </button>
                <button className="btn-gameOver">Restart level</button>
              </div>
            </header>
          </section>
        </div>
      </section>
    </>
  );
};

export default GameOver;
