import React from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  click1,
  claudio,
  //COMPONENTS
  WindowInfo,
} from "./index";

const About = () => {
  const { closeAbout, sound, language } = useGlobalContext();

  const [play] = useSound(click1, { volume: 0.5 });
  const soundAction = (action) => {
    play();
    action();
  };

  return (
    <>
      <section className="container-back-about">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              {language === "english" ? <div>C:\MyPC</div> : <div>C:\MiPC</div>}
            </section>
            <WindowInfo />
          </div>
        </header>
        <section className="options">
          <button
            className="close-modal-btn"
            onClick={sound ? () => soundAction(closeAbout) : closeAbout}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {language === "english" ? (
            <>
              {" "}
              <h4 className="title-options title-options-back">About Me</h4>
              <div className="container-about">
                <img src={claudio} alt="" className="claudio" />
                <p>
                  Hi! I'm Claudio Aime (ClauHaus), Full Stack Development
                  Student. This is my first React "Project/Web/App/Thing", hope
                  you like it. I started coding in 2020 and I'm really into
                  learning new stuff, cats, Foosball and The Beatles 💖.
                </p>
              </div>
            </>
          ) : (
            <>
              <h4 className="title-options title-options-back">Acerca de mí</h4>
              <div className="container-about">
                <img src={claudio} alt="" className="claudio" />
                <p>
                  Hola! Soy Claudio Aime (ClauHaus), estudiante Full Stack
                  Development. Este es mi primer "Proyecto/Web/App/Cosa" que
                  realizo en React, espero te guste. Comencé a programar en el
                  2020 y me gusta mucho aprender cosas nuevas, los gatos, el
                  metegol y The Beatles 💖.
                </p>
              </div>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default About;
