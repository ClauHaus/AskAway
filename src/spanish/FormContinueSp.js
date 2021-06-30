import React from "react";
import titleImg from "./../images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faMailBulk,
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faWindows,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import HowToSp from "./HowToSp";
import { useGlobalContext } from "../context";

const FormContinueSp = () => {
  const {
    time,
    restartGame,
    modal,
    openModal,
    nextPageTwo,
    formContinue,
    loadingPage,
    level,
    setLevel,
  } = useGlobalContext();
  const newName = JSON.parse(localStorage.getItem("newName"));
  const newAge = JSON.parse(localStorage.getItem("newAge"));
  const newCountry = JSON.parse(localStorage.getItem("newCountry"));
  // const result = JSON.parse(localStorage.getItem("newTest"));
  // console.log(result);

  const startGame = () => {
    nextPageTwo(formContinue, loadingPage);
    setLevel(level + 1);
  };

  return (
    <>
      <section className="container-back">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C\Askaway\{newName}</div>
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
        <div className="container">
          <article className="form-text">
            <p className="formContinue-text">
              Bienvenido <b>{newName} </b>a Ask Away! Vamos a poner tus {newAge}{" "}
              años de conocimiento a prueba contra múltiples desafíos.
            </p>
            <p className="formContinue-text">
              Sí tienes dudas con respecto al juego te recomendamos veas nuestra
              sección de "como jugar".
            </p>
            <button className="btn btn-title center-item" onClick={openModal}>
              Como jugar
            </button>
            <p className="formContinue-text">
              Todo esta preprarado para que nos maravilles con tu velocidad
              mental y conocimientos, veamos que tan bien representas{" "}
              {newCountry}. Comenccemos!
            </p>
          </article>

          <button
            className="btn btn-title center-item"
            style={{ marginTop: "30px" }}
            onClick={() => startGame()}
          >
            Continuar
          </button>
          {modal && <HowToSp />}
        </div>
      </section>
      <section>
        <footer className="container-bottom">
          <div>
            <button className="btn-restart" onClick={restartGame}>
              <FontAwesomeIcon icon={faWindows}></FontAwesomeIcon>
              ReStart
            </button>
          </div>
          <FontAwesomeIcon
            icon={faGripLinesVertical}
            className="container-bottom-icons-span"
          ></FontAwesomeIcon>
          <a
            href="https://github.com/ClauHaus/AskAway"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="container-bottom-icons"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/claudio-aime-2a91a034/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="container-bottom-icons"
            />
          </a>
          <a
            href="https://twitter.com/ClauHaus_"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="container-bottom-icons"
              style={{ color: "black" }}
            />
          </a>
          <a
            href="mailto:claudio.aime32@gmail.com?subject=Regarding%20Askaway"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faMailBulk}
              className="container-bottom-icons"
            />
          </a>
          <FontAwesomeIcon
            icon={faGripLinesVertical}
            className="container-bottom-icons-span"
          ></FontAwesomeIcon>
          <div className="container-bottom-image">
            <img
              className="container-bottom-icons-image"
              src={titleImg}
              alt="logo of Ask Away"
            />
          </div>
          <div className="container-bottom-clock">{time}</div>
        </footer>
      </section>
    </>
  );
};

export default FormContinueSp;
