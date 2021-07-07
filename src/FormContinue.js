import React from "react";
import titleImg from "./images/title.png";
import useSound from "use-sound";
import click1 from "./sounds/click1.mp3";
import HowTo from "./HowTo";
import { useGlobalContext } from "./context";
import InformationContainerTop from "./InformationContainerTop";
import WindowInfo from "./WindowInfo";
import InformationContainerBottom from "./InformationContainerBottom";

const FormContinue = () => {
  const {
    modal,
    openModal,
    nextPageTwo,
    formContinue,
    loadingPage,
    level,
    setLevel,
    sound,
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
              <div>C:\Askaway\{newName}</div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <div className="container">
          <article className="form-text">
            <p className="formContinue-text">
              Welcome <b>{newName} </b>to Ask Away! We will put your {newAge}{" "}
              years of hard obtained knowledge to the most defying challenges.
            </p>
            <p className="formContinue-text">
              If you have any doubts about the rules or instructions of this
              game, we highly recommend you to check on the "How To play"
              section.
            </p>
            <button
              className="btn btn-title center-item"
              onClick={sound ? () => soundAction(openModal) : openModal}
            >
              How to play
            </button>
            <p className="formContinue-text">
              Now everything is set to wonder us with your mental speed and
              sharp mind and see how well you represent {newCountry}. Let's
              begin!
            </p>
          </article>

          <button
            className="btn btn-title center-item"
            style={{ marginTop: "30px" }}
            onClick={() => (sound ? (startGame(), play1()) : startGame())}
          >
            Continue
          </button>
          {modal && <HowTo />}
        </div>
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default FormContinue;
