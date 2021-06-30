import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "./../../context";
import titleImg from "./../../images/title.png";

const GameOverSp = ({ newName, score, restartGame }) => {
  const { question, loadingRestart, nextPageRestart } = useGlobalContext();
  return (
    <>
      <h1 className="title title-back question">Has perdido.</h1>
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
              <div>C:\Askaway\{newName}\Resultados</div>
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
          <p>Solo has conseguido {score} puntos...</p>
          <p>
            Oh no {newName}, has conseguido las 10 respuestas correctas pero no
            suficientes puntos.
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
                  <div>Has perdido</div>
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
                C:\Askaway...
              </div>
              <div className="btn-container" style={{ margin: "10px" }}>
                <button className="btn-gameOver" onClick={restartGame}>
                  Reiniciar Askaway
                </button>
                <button
                  className="btn-gameOver"
                  onClick={() => nextPageRestart(question, loadingRestart)}
                >
                  Reiniciar nivel
                </button>
              </div>
            </header>
          </section>
        </div>
      </section>
    </>
  );
};

export default GameOverSp;
