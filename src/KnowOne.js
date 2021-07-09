import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import {
  //HOOKS
  useSound,
  //DATA ARRAY
  facts,
  //FILES
  titleImg,
  click1,
  //COMPONENTS
  About,
  GameFolder,
  DataFolder,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./index";

const KnowOne = () => {
  const {
    nextPageFive,
    loadingPage,
    knowOne,
    level,
    setLevel,
    sound,
    about,
    gameFolder,
    dataFolder,
  } = useGlobalContext();

  const shuffle = () => {
    const result = facts.sort(() => Math.random() - 0.5);
    return result;
  };

  const [data, setData] = useState([]);
  const index = 0;

  useEffect(() => {
    setData(shuffle);
    // eslint-disable-next-line
  }, []);

  const newName = JSON.parse(localStorage.getItem("newName"));

  const continueGame = () => {
    nextPageFive(knowOne, loadingPage);
    setLevel(level + 1);
  };

  const [play1] = useSound(click1, { volume: 0.5 });

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
          <h4 className="title title-back">Did you Know?</h4>
          <button
            className="btn btn-title center-item"
            style={{
              position: "absolute",
              top: "85%",
              left: "30%",
              width: "40%",
            }}
            onClick={() => (sound ? (continueGame(), play1()) : continueGame())}
          >
            Continue to level {level + 1}
          </button>
        </div>
      </section>
      <section className="container-back-know">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C:\Askaway\{newName}\Facts</div>
            </section>
            <WindowInfo />
          </div>
        </header>

        <div
          className="container-results"
          style={{ top: "20%", minHeight: "0%", textAlign: "center" }}
        >
          {data.map((item, itemIndex) => {
            const { id, text } = item;
            let position = "nextSlide";
            if (itemIndex === index) {
              position = "activeslide";
            }
            return (
              <article key={id} className={position}>
                <p>{text}</p>
              </article>
            );
          })}
          {infoWidth >= 1024 && about && <About />}
          {infoWidth >= 1024 && gameFolder && <GameFolder />}
          {infoWidth >= 1024 && dataFolder && <DataFolder />}
        </div>
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default KnowOne;
