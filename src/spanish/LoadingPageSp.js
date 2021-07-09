import React, { useEffect } from "react";
import { useGlobalContext } from "./../context";
import {
  //FILES
  titleImg,
  //COMPONENTS
  About,
  GameFolder,
  DataFolder,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./../index";

const LoadingPage = () => {
  const {
    nextPageThree,
    loadingPage,
    question,
    level,
    timerDifficulty,
    theme,
    about,
    gameFolder,
    dataFolder,
  } = useGlobalContext();
  const newName = JSON.parse(localStorage.getItem("newName"));
  useEffect(() => {
    let timeOut = setTimeout(() => {
      nextPageThree(loadingPage, question); //AGREGAR ACA EL setLevel de 0 a 1
    }, 5000); //PASARLO A 6000!
    return () => clearTimeout(timeOut);
    // clearTimeout(timeout); Revisar si puede haber problemas de no sacar el timeOut
  }, [nextPageThree, loadingPage, question, level]); //Revisar estas dependencies, en caso de error quitarlas y solo queda un warning

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
          <h3 className="title title-back">Nivel {level}</h3>
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
            <p>&gt; Adquiere al menos 30 puntos</p>
            <p>&gt; Consigue 10 respuestas correctas</p>
            <p>&gt; Obtenlo en menos de {timerDifficulty()} segundos</p>
          </section>
          {infoWidth >= 1024 && about && <About />}
          {infoWidth >= 1024 && gameFolder && <GameFolder />}
          {infoWidth >= 1024 && dataFolder && <DataFolder />}
        </div>
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default LoadingPage;
