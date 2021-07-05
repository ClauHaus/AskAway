import React from "react";
import useSound from "use-sound";
import pop from "./../sounds/pop.mp3";
import applause from "./../sounds/applause.mp3";
import titleImg from "./../images/title.png";
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
import { useGlobalContext } from "../context";

const EndingSp = () => {
  const newActualScore = JSON.parse(localStorage.getItem("newActualScore"));
  const newFullData = JSON.parse(localStorage.getItem("newFullData"));
  const newFullScore = JSON.parse(localStorage.getItem("newFullScore"));

  if (newFullData.topHighScore >= newFullScore.topHighScore) {
    localStorage.setItem(
      "newFullScore",
      JSON.stringify({
        topName: newFullData.topName,
        topCountry: newFullData.topCountry,
        topAge: newFullData.topAge,
        topHighScore: newFullData.topHighScore,
        topDay: newFullData.topDay,
      })
    );
  }
  if (newFullData.topHighScore < newFullScore.topHighScore) {
    localStorage.setItem(
      "newFullScore",
      JSON.stringify({
        topName: newFullScore.topName,
        topCountry: newFullScore.topCountry,
        topAge: newFullScore.topAge,
        topHighScore: newFullScore.topHighScore,
        topDay: newFullScore.topDay,
      })
    );
  }

  const {
    difficulty,
    highScore,
    ending,
    nextPageHighScore,
    restartGame,
    time,
    sound,
    setSound,
  } = useGlobalContext();

  const [playPop] = useSound(pop, { volume: 0.5 });
  const [playApplause] = useSound(applause, { volume: 0.5 });
  const makeSound = () => {
    setSound(!sound);
    playPop();
    localStorage.setItem("newSound", JSON.stringify(!sound));
  };

  return (
    <>
      <section className="container-back-options">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C:\Askaway\ResultadosFinales</div>
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
        <section className="ending">
          <section style={{ marginTop: "-15px" }}>
            {difficulty === "normal" && (
              <p>
                Finalizaste AskAway en "Modo Normal". Muy buen trabajo, has
                demostrado una constancia durante todo el juego, ahora te
                invitamos a que pruebes de jugar en "Modo Difícil" y veas que
                tan bien te va bajo nuevos desafíos.
              </p>
            )}
            {difficulty === "hard" && (
              <p>
                Finalizaste AskAway en "Modo Difícil". Excelente performance, se
                puede apreciar que realmente sabes muchisimo sobre diversos
                temas y eres muy veloz llevando la informacion de tu cerebro a
                tus dedos!
              </p>
            )}
            {difficulty === "hell" && (
              <p>
                Finalizaste AskAway en "Modo Infierno"...Qué?! Eres muy pero muy
                inteligente! Superaste el juego en la dificultad mas alta sin
                siquiera titubear, te has enfrentando a todos los desafíos sin
                retroceder. De todo corazón queremos decirte que eres
                simplemente genial!
              </p>
            )}
          </section>
          <section style={{ marginTop: "-20px" }}>
            {newActualScore <= 200 && (
              <p>
                Conseguiste {newActualScore} puntos. Es un buen puntaje, pero
                estamos seguros que puedes mejorarlo, anímo!
              </p>
            )}
            {newActualScore >= 201 && newActualScore <= 225 && (
              <p>
                Conseguiste {newActualScore} puntos. Muy buen puntaje,
                conseguiste muchas respuestas correctas, pero debemos enfocarnos
                también en las incorrectas, estamos seguros que la próxima vez
                será aún mejor, mucho anímo!
              </p>
            )}
            {newActualScore >= 226 && newActualScore <= 250 && (
              <p>
                Conseguiste {newActualScore} puntos. Estupendo puntaje, has
                mejorado mucho con respecto a las respuestas incorrectas, debes
                seguir calculando los tiempos para poder continuar disminuyendo
                esos errores, estas en muy buen camino, excelente jugada has
                tenido!
              </p>
            )}
            {newActualScore >= 251 && newActualScore <= 275 && (
              <p>
                Conseguiste {newActualScore} puntos. Fantástico puntaje, has
                tenido muy pocas respuestas incorrectas y todo esto manejando
                muy bien los tiempos de cada nível, realmente sorprendente. Como
                has llegado a saber tanto sobre tantas cosas? Tendrás que
                contarnoslo eh. Maravillosa jugada has tenido.
              </p>
            )}
            {newActualScore >= 276 && newActualScore <= 289 && (
              <p>
                Conseguiste {newActualScore} puntos. Excelente, magnífico
                puntaje, nos vamos quedando sin adjetivos para calificar lo que
                acabamos de ver, has manejado magistralmente los tiempos y
                demostrado tus conocimientos en cada pregunta que hemos puesto
                delante de ti. Casi perfecta jugada, te animás a intentar
                superar tu propio puntaje?
              </p>
            )}
            {newActualScore >= 290 && (
              <p>
                Conseguiste {newActualScore} puntos. Sensacional, perfecto,
                vamos! Conseguiste un puntaje TREMENDO. Has logrado llegar al
                fínal del juego alcanzando un nível de puntaje que nos deja sin
                palabra!Arte, Ciencias, Cine, simplemente genial, te agradecemos
                de todo corázon que hayas jugado con tanta emoción y de nuevo,
                eres increíble!
              </p>
            )}
          </section>
          <button
            className="btn btn-title"
            onClick={() =>
              sound
                ? (nextPageHighScore(ending, highScore), playApplause())
                : nextPageHighScore(ending, highScore)
            }
          >
            High Score?
          </button>
        </section>
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

export default EndingSp;
