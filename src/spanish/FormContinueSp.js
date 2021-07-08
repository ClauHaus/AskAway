import React from "react";
import { useGlobalContext } from "../context";

import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  click1,
  //COMPONENTS
  HowToSp,
  About,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./../index";

const FormContinueSp = () => {
  const {
    modal,
    openModal,
    nextPageTwo,
    formContinue,
    loadingPage,
    level,
    setLevel,
    sound,
    about,
  } = useGlobalContext();
  const newName = JSON.parse(localStorage.getItem("newName"));
  const newAge = JSON.parse(localStorage.getItem("newAge"));
  const newCountry = JSON.parse(localStorage.getItem("newCountry"));

  const startGame = () => {
    nextPageTwo(formContinue, loadingPage);
    setLevel(level + 1);
  };

  const [play1] = useSound(click1, { volume: 0.5 });
  const soundAction = (action) => {
    play1();
    action();
  };

  const infoWidth = window.innerWidth;

  return (
    <>
      {infoWidth >= 1024 && <InformationContainerTop />}
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
            <WindowInfo />
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
            <button
              className="btn btn-title center-item"
              onClick={sound ? () => soundAction(openModal) : openModal}
            >
              Como jugar
            </button>
            <p className="formContinue-text">
              Todo esta preprarado para que nos maravilles con tu velocidad
              mental y conocimientos, veamos que tan bien representas{" "}
              {newCountry}. Comencemos!
            </p>
          </article>

          <button
            className="btn btn-title center-item"
            style={{ marginTop: "30px" }}
            onClick={() => (sound ? (startGame(), play1()) : startGame())}
          >
            Continuar
          </button>
          {modal && <HowToSp />}
          {infoWidth >= 1024 && about && <About />}
        </div>
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default FormContinueSp;
