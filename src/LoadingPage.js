import React, { useEffect } from "react";
import titleImg from "./images/title.png";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faMailBulk,
  faGripLinesVertical,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faWindows,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useGlobalContext } from "./context";

const LoadingPage = () => {
  const {
    time,
    restartGame,
    nextPageThree,
    loadingPage,
    question,
    level,
    timerDifficulty,
    theme,
    sound,
    setSound,
  } = useGlobalContext();
  const newName = JSON.parse(localStorage.getItem("newName"));
  useEffect(() => {
    let timeOut = setTimeout(() => {
      nextPageThree(loadingPage, question); //AGREGAR ACA EL setLevel de 0 a 1
    }, 1000); //PASARLO A 5000!
    return () => clearTimeout(timeOut);
    // clearTimeout(timeout); Revisar si puede haber problemas de no sacar el timeOut
  }, [nextPageThree, loadingPage, question, level]); //Revisar estas dependencies, en caso de error quitarlas y solo queda un warning

  const [playPop] = useSound(pop, { volume: 0.5 });
  const makeSound = () => {
    setSound(!sound);
    playPop();
    localStorage.setItem("newSound", JSON.stringify(!sound));
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
              <div>C:\Askaway\{newName}</div>
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
          <h3 className="title title-back">Level {level}</h3>
          {theme === "light" ? (
            <img
              className="loading"
              src="https://art.pixilart.com/010daff759faae6.png"
              alt=""
            />
          ) : (
            <img
              className="loading"
              src="https://art.pixilart.com/abe4c798bd975be.png"
              alt=""
            />
          )}
          <section className="loading-items">
            <p>&gt; Get at least 30 points</p>
            <p>&gt; Obtain 10 correct answers</p>
            <p>&gt; Achieve it under {timerDifficulty()} seconds</p>
          </section>
          {/* <h4 className="title title-back">Loading...</h4> */}
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
          <button
            className="container-bottom-sound"
            onClick={() => makeSound()}
          >
            {sound ? (
              <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
            )}
          </button>
          <div className="container-bottom-clock">{time}</div>
        </footer>
      </section>
    </>
  );
};

export default LoadingPage;
