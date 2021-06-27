import React, { useState, useEffect } from "react";
import titleImg from "./../images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "../context";

const OptionsSp = () => {
  const { difficulty, setDifficulty, language, setLanguage, closeOptions } =
    useGlobalContext();
  const [pressNormal, setPressNormal] = useState("");
  const [pressHard, setPressHard] = useState("");
  const [pressHell, setPressHell] = useState("");
  const [english, setEnglish] = useState("");
  const [spanish, setSpanish] = useState("");

  useEffect(() => {
    if (difficulty === "normal") {
      setPressNormal("btn-options-selected");
      setPressHard("");
      setPressHell("");
    }
    if (difficulty === "hard") {
      setPressNormal("");
      setPressHard("btn-options-selected");
      setPressHell("");
    }
    if (difficulty === "hell") {
      setPressNormal("");
      setPressHard("");
      setPressHell("btn-options-selected");
    }
  }, [difficulty]);

  useEffect(() => {
    if (language === "english") {
      setEnglish("btn-options-selected");
      setSpanish("");
    } else {
      setEnglish("");
      setSpanish("btn-options-selected");
    }
  }, [language]);

  useEffect(() => {
    localStorage.setItem("newDifficulty", JSON.stringify(difficulty));
    localStorage.setItem("newLanguage", JSON.stringify(language));
  }, [difficulty, language]);

  return (
    <section className="container-back-options">
      <header className="window-info">
        <div className="window-upper">
          <section className="upper-left">
            <img
              className="window-image"
              src={titleImg}
              alt="logo of Ask Away"
            />
            <div>C:\Escritorio\Askaway\Opciones</div>
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
      <section className="options">
        <button className="close-modal-btn" onClick={closeOptions}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h4 className="title-options title-options-back">Opciones</h4>
        <h5 className="title-options-sub">Idiomas</h5>
        <div className="btn-container-options">
          <button
            className={`btn-options ${english}`}
            value="english"
            onClick={(e) => setLanguage(e.target.value)}
          >
            Inglés
          </button>
          <button
            className={`btn-options ${spanish}`}
            value="spanish"
            onClick={(e) => setLanguage(e.target.value)}
          >
            Español
          </button>
        </div>
        <h5 className="title-options-sub">Dificultad</h5>
        <div className="btn-container-options">
          <button
            className={`btn-options ${pressNormal}`}
            value="normal"
            onClick={(e) => setDifficulty(e.target.value)}
          >
            Modo Normal
          </button>
          <button
            className={`btn-options ${pressHard}`}
            value="hard"
            onClick={(e) => setDifficulty(e.target.value)}
          >
            Modo Difícil
          </button>
          <button
            className={`btn-options ${pressHell}`}
            value="hell"
            onClick={(e) => setDifficulty(e.target.value)}
          >
            Modo Infierno
          </button>
        </div>
        <h5 className="title-options-sub">Tema</h5>
        <ul className="options-items">
          <input type="checkbox" defaultChecked />
          <li className="options-settings">Claro</li>
          <input type="checkbox" />
          <li className="options-settings">Oscuro</li>
        </ul>
      </section>
    </section>
  );
};

export default OptionsSp;
