import React from "react";
import { useGlobalContext } from "./../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  pop,
  click1,
  //COMPONENTS
  About,
  DataFolder,
  GameFolder,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
  HowToSp,
  OptionsSp,
} from "./../index";

const TitleSp = () => {
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
    about,
    gameFolder,
    dataFolder,
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
              <FontAwesomeIcon icon={faCog} />
            </button>
            <button
              className="btn-change "
              onClick={() => makeSound()}
              style={{ margin: "10px 25px 0px auto", fontSize: "1.3rem" }}
            >
              {sound ? (
                <FontAwesomeIcon icon={faVolumeUp} />
              ) : (
                <FontAwesomeIcon icon={faVolumeMute} />
              )}
            </button>
          </div>
          <h3 className="title title-back">ask away</h3>
          <h5 className="title">Cuánto sabes de cosas?</h5>
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
              Comenzar!
            </button>
            <button
              className="btn-title"
              onClick={sound ? () => soundAction(openModal) : openModal}
            >
              Cómo jugar?
            </button>
          </div>
          <p className="title">Desarrollado por ClauHaus - {year}</p>
          {options && <OptionsSp />}
          {modal && <HowToSp />}
          {infoWidth >= 1024 && about && <About />}
          {infoWidth >= 1024 && gameFolder && <GameFolder />}
          {infoWidth >= 1024 && dataFolder && <DataFolder />}
        </div>
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default TitleSp;
