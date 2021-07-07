import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "./../../context";
import titleImg from "./../../images/title.png";
import WindowInfo from "../../WindowInfo";

const TimeOverSp = ({ restartGame }) => {
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
              <div>Se acabó el tiempo</div>
            </section>
            <WindowInfo />
          </div>
          <div className="gameOver">
            <FontAwesomeIcon
              style={{ fontSize: "2.5rem" }}
              icon={faExclamationTriangle}
            ></FontAwesomeIcon>
            C:\Askaway\SeAcabóElTiempo
          </div>
          <div className="btn-container" style={{ margin: "10px" }}>
            <button className="btn-gameOver" onClick={restartGame}>
              Reiniciar Askaway
            </button>
            <button
              className="btn-gameOver"
              onClick={() => nextPageRestart(question, loadingRestart)}
            >
              Reiniciar level
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default TimeOverSp;
