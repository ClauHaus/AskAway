import React from "react";
import titleImg from "./images/title.png";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import click1 from "./sounds/click1.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
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
import HowTo from "./HowTo";
import Options from "./Options";
import { useGlobalContext } from "./context";

const Title = () => {
  const {
    time,
    restartGame,
    options,
    modal,
    nextPageForm,
    title,
    form,
    openModal,
    openOptions,
    sound,
    setSound,
  } = useGlobalContext();

  const year = new Date().getFullYear();
  const [playPop] = useSound(pop, { volume: 0.5 });
  const [play1] = useSound(click1, { volume: 0.5 });

  const makeSound = () => {
    setSound(!sound);
    playPop();
    localStorage.setItem("newSound", JSON.stringify(!sound));
  };

  const soundAction = (action) => {
    play1();
    action();
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
              <div>C:\Askaway</div>
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
        <div className="container-title">
          <div className="btn-container" style={{ marginTop: "0px" }}>
            <button
              className="btn-change "
              onClick={sound ? () => soundAction(openOptions) : openOptions}
            >
              <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
            </button>
            <button
              className="btn-change "
              onClick={() => makeSound()}
              style={{ margin: "10px 25px 0px auto", fontSize: "1.3rem" }}
            >
              {sound ? (
                <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
              )}
            </button>
          </div>
          <h3 className="title title-back">ask away</h3>
          <h5 className="title">How much do you know about stuff?</h5>
          <div className="title-image-container">
            <img
              className="title-image"
              src={titleImg}
              alt="logo of Ask Away"
            />
          </div>
          <div className="btn-container">
            <button
              className="btn-title"
              onClick={() => nextPageForm(title, form)}
            >
              Start!
            </button>
            <button
              className="btn-title"
              onClick={sound ? () => soundAction(openModal) : openModal}
            >
              How to play?
            </button>
          </div>
          <p className="title">Coded by ClauHaus - {year}</p>
          {options && <Options />}
          {modal && <HowTo />}
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

export default Title;
