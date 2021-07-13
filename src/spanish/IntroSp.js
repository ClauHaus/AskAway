import React, { useState } from "react";
import { useGlobalContext } from "../context";
import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  startup,
  //COMPONENTS
  About,
  DataFolder,
  GameFolder,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./../index";

const IntroSp = () => {
  const { intro, title, nextPageIntro, about, gameFolder, dataFolder } =
    useGlobalContext();

  const [start, setStart] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [play] = useSound(startup, { volume: 0.5 });

  const startGame = () => {
    play();
    setStart(true);
    setOpacity(0);
    let timeOut = setTimeout(() => {
      nextPageIntro(intro, title);
    }, 5500); //PASARLO A 5500!
    return () => clearTimeout(timeOut);
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
              <div>C:\Escritorio</div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <div className="container-intro">
          <button
            onClick={() => startGame()}
            style={{
              color: "#fff",
              background: "#000",
              marginTop: "5px",
              opacity: `${opacity}`,
            }}
          >
            &gt;Run
          </button>
          {start && (
            <ul>
              <li className="noShow">
                ClauHaus App [Version 12.0.18032.1144] © ClauHaus Corporation.
                All rights reserved.
              </li>
              <li className="noShow1">C:\Escritorio\Verificando...</li>
              <li className="noShow1">C:\Escritorio\Abriendo\Askaway</li>
              <li className="noShow2">&gt;Generando preguntas</li>
              <li className="noShow2">&gt;Randomizando respuestas</li>
              <li className="noShow3">
                &gt;Instalando variables de dificultad
              </li>
              <li className="noShow3">
                &gt;Desarrollando Modo Infi%1Psfö7$*luI
              </li>
              <li className="noShow4">.</li>
              <li className="noShow4">..</li>
              <li className="noShow4">...</li>
              <li className="noShow5">C:\Escritorio\Askaway\Ejecutar</li>
              <li className="noShow5">&gt;Ejecutar</li>
            </ul>
          )}
          {infoWidth >= 1024 && about && <About />}
          {infoWidth >= 1024 && gameFolder && <GameFolder />}
          {infoWidth >= 1024 && dataFolder && <DataFolder />}
        </div>
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default IntroSp;
