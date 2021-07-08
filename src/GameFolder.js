import React from "react";
import useSound from "use-sound";
import click1 from "./sounds/click1.mp3";
import titleImg from "./images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import WindowInfo from "./WindowInfo";
import { useGlobalContext } from "./context";

const GameFolder = () => {
  const { closeGameFolder, sound, language } = useGlobalContext();

  const [play] = useSound(click1, { volume: 0.5 });
  const soundAction = (action) => {
    play();
    action();
  };

  return (
    <>
      <section className="container-back-game-folder">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C:\Error</div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <section className="options">
          <button
            className="close-modal-btn"
            onClick={
              sound ? () => soundAction(closeGameFolder) : closeGameFolder
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {language === "english" ? (
            <>
              <h4 className="title-options title-options-back">AskAway</h4>
              <div className="container-back-game">
                <p>The game is already open and running...</p>
              </div>
            </>
          ) : (
            <>
              <h4 className="title-options title-options-back">AskAway</h4>
              <div className="container-back-game">
                <p>El juego ya esta abierto y funcionando...</p>
              </div>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default GameFolder;
