import React from "react";
import titleImg from "./images/title.png";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import click1 from "./sounds/click1.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import HowTo from "./HowTo";
import Options from "./Options";
import { useGlobalContext } from "./context";
import InformationContainerTop from "./InformationContainerTop";
import InformationContainerBottom from "./InformationContainerBottom";
import WindowInfo from "./WindowInfo";

const Title = () => {
  const {
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
              <div>C:\Askaway</div>
            </section>
            <WindowInfo />
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
              onClick={() =>
                sound
                  ? (nextPageForm(title, form), play1())
                  : nextPageForm(title, form)
              }
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
      <InformationContainerBottom />
    </>
  );
};

export default Title;
