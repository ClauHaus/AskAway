import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./../context";
import {
  //DATA ARRAYS
  tipsSp,
  //FILES
  titleImg,
  //COMPONENTS
  About,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./../index";

const LoadingRestartSp = () => {
  const { nextPageBack, loadingRestart, question, level, setLevel, about } =
    useGlobalContext();
  const newName = JSON.parse(localStorage.getItem("newName"));

  const shuffle = () => {
    const result = tipsSp.sort(() => Math.random() - 0.5);
    return result;
  };

  const [data, setData] = useState([]);
  const index = 0;

  useEffect(() => {
    setData(shuffle);
    // eslint-disable-next-line
  }, []);

  const continueGame = () => {
    nextPageBack(loadingRestart, question);
    setLevel(level);
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
          <h4 className="title title-back">Inténtalo una vez más</h4>
          <button
            className="btn btn-title center-item"
            style={{
              position: "absolute",
              top: "85%",
              left: "30%",
              width: "40%",
            }}
            onClick={() => continueGame()}
          >
            Regresa al nivel {level}
          </button>
        </div>
      </section>
      <section className="container-back-replay">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C:\Askaway\{newName}\Hechos</div>
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
        </div>
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default LoadingRestartSp;
