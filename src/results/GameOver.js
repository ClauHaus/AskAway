import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "./../context";
import titleImg from "./../images/title.png";
import WindowInfo from "../WindowInfo";

const GameOver = ({ newName, score, restartGame }) => {
  const { question, loadingRestart, nextPageRestart } = useGlobalContext();

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
              <div>C:\Askaway\{newName}\Results</div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <div className="container-results">
          <p>You only scored {score} points...</p>
          <p>
            Oh no {newName}, you got 10 correct answers but not enough points to
            move on.
          </p>
          <section className="container-back-over">
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
                <WindowInfo />
              </div>
              <div className="gameOver">
                <FontAwesomeIcon
                  style={{ fontSize: "2.5rem" }}
                  icon={faExclamationTriangle}
                ></FontAwesomeIcon>
                C:\Askaway...
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
        </div>
      </section>
    </>
  );
};

export default GameOver;
