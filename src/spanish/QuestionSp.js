import React, { useState, useEffect } from "react";
import titleImg from "./../images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faMailBulk,
  faGripLinesVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faWindows,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useGlobalContext } from "./../context";
import bigDataSp from "./questionsSp";
import AnswersSp from "./AnswersSp";
import GameOverSp from "./resultsSp/GameOverSp";
import ZeroPointsSp from "./resultsSp/ZeroPointsSp";
import TimeOverSp from "./resultsSp/TimeOverSp";

const QuestionSp = () => {
  const {
    time,
    restartGame,
    question,
    knowOne,
    nextPageFour,
    nextPageEnding,
    level,
    timerDifficulty,
    scoreDifficulty,
    difficulty,
  } = useGlobalContext();
  const newName = JSON.parse(localStorage.getItem("newName"));
  const newTopScore = JSON.parse(localStorage.getItem("newTopScore"));
  const newActualScore = JSON.parse(localStorage.getItem("newActualScore"));
  const newFullData = JSON.parse(localStorage.getItem("newFullData"));
  const [count, setCount] = useState(false);
  const [score, setScore] = useState(scoreDifficulty);
  const [timer, setTimer] = useState(timerDifficulty);
  const [topScore, setTopScore] = useState(
    newTopScore ? newTopScore : scoreDifficulty
  );
  const [actualScore, setActualScore] = useState(
    level >= 2 ? newActualScore : scoreDifficulty
  );
  const [container, setContainer] = useState("container-question");

  useEffect(() => {
    localStorage.setItem(
      "newFullData",
      JSON.stringify({ ...newFullData, topHighScore: newActualScore })
    );
    // eslint-disable-next-line
  }, [newActualScore]);

  // Esta funcion es para que haga un sort de los elementos del array
  const shuffle = () => {
    // en el caso de ser necesario, convertir a async
    const result = bigDataSp[level].sort(() => Math.random() - 0.5); //ACA PONES LOS DISTINTOS ARRAY!
    return result;
  };

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0); // posibilidad para cambiar este 0 por un numero random y que de esa manera nos de un valor diferente-UPDATE IMPORTANTE, no es necesario realizar esa modificacion porque con el metodo sort tenemos el mismo resultado

  const highScore = (points) => {
    if (score >= 1 && score <= actualScore) {
      setScore(points);
      setActualScore(points);
    }

    if (score >= 1 && score >= actualScore && score >= topScore) {
      setScore(points);
      setActualScore(points);
      setTopScore(points);
    }
    if (score >= 1 && score <= actualScore && level >= 2) {
      setActualScore(actualScore - score + points);
    }
    if (actualScore >= topScore) {
      //El problema era que aca estaba como actualScore >= topScore, ese = modificaba el setTopScore, cuando solo debe cambiar si el actualScore es mayor. La idea es que cuando se llega a un topscore solo se modifique hacia arriba,nunca hacia abajo
      setTopScore(actualScore - score + points);
    }
    if (actualScore <= topScore) {
      setTopScore(newTopScore);
    }
  };

  useEffect(() => {
    localStorage.setItem("newTopScore", JSON.stringify(topScore));
    localStorage.setItem("newActualScore", JSON.stringify(actualScore));
  }, [topScore, actualScore]);

  useEffect(() => {
    setData(shuffle);
    setTimeout(() => {
      setCount(true);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  // Es el trigger del contador y ademas el que muestra el modal en caso de TimeOut
  useEffect(() => {
    let interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (index >= 10) {
        setTimer(timer);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <section
        className="container-back"
        style={{
          width: "95%",
          left: "2%",
        }}
      >
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>
                C:\Askaway\{newName}\Nivel {level}
              </div>
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
        <div className={container}>
          <ul className="top-information bottom">
            <li>Pregunta:{index < 10 ? index + 1 : index}/10</li>
            <li>HiScore:{topScore}</li>
            <li>Puntaje:{actualScore}</li>
          </ul>

          {/* 1er escenario - exitoso*/}
          {index >= 10 && score >= 30 ? (
            <>
              {localStorage.setItem("newTimer", JSON.stringify(timer))}
              <h1 className="title title-back question">
                {newName}, eres genial!
              </h1>
              <section
                className="container-back"
                style={{
                  width: "97%",
                  left: "2.5%",
                  top: "23%",
                }}
              >
                <header className="window-info">
                  <div className="window-upper">
                    <section className="upper-left">
                      <img
                        className="window-image"
                        src={titleImg}
                        alt="logo of Ask Away"
                      />
                      <div>C:\Askaway\Resultados</div>
                    </section>
                    <section className="upper-icons">
                      <div className="icons-data">
                        <FontAwesomeIcon
                          icon={faWindowMinimize}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="icons-data">
                        <FontAwesomeIcon
                          icon={faWindowMaximize}
                        ></FontAwesomeIcon>
                      </div>
                      <div className="icons-data">
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                      </div>
                    </section>
                  </div>
                </header>
                <div className="container-results">
                  <p>Excelente trabajo! Has pasado el nivel {level} de 5.</p>
                  <p>Veamos algunas estadísticas antes de continuar, sí?</p>
                  <ul>
                    <li>
                      Tu puntaje actual es de {actualScore} puntos. Hiciste{" "}
                      {score} puntos en el nivel {level}.{" "}
                      {score < 35 &&
                        "Wow lo has conseguido por un pelo, mejoremos en el próximo nivel!"}
                      {score >= 40 &&
                        score < 50 &&
                        "Genial, continuemos con este desempeño! "}
                      {score >= 50 &&
                        score < 55 &&
                        "Hey! Este juego está hecho para ti, felicitaciones!"}
                      {score >= 55 &&
                        score < 70 &&
                        "Impresionante resultado, sabes muchísimo sobre casi todo!!!"}
                    </li>
                    <li>
                      Has completado este nivel en{" "}
                      {60 - JSON.parse(localStorage.getItem("newTimer"))}{" "}
                      segundos,{" "}
                      {JSON.parse(localStorage.getItem("newTimer")) < 50
                        ? "eres una persona que piensa muy rápido o que adivina muy bien, lo averiguaremos en el próximo nivel."
                        : "eso estuvo cerca, debes mover tus dedos tan rápido como tu mente."}
                    </li>
                  </ul>
                  {level < 5 ? (
                    <button
                      className="btn btn-title center-item"
                      onClick={() => nextPageFour(question, knowOne)}
                    >
                      Continuar
                    </button>
                  ) : (
                    <button
                      className="btn btn-title center-item"
                      onClick={() => nextPageEnding(question, knowOne)}
                    >
                      Finalizar
                    </button>
                  )}
                </div>
              </section>
            </>
          ) : (
            ""
          )}
          {index >= 10 && score < 30 ? (
            <GameOverSp
              newName={newName}
              score={score}
              restartGame={restartGame}
            />
          ) : (
            ""
          )}
          {score < 1 ? <ZeroPointsSp restartGame={restartGame} /> : ""}
          {timer < 1 ? (
            <TimeOverSp
              restartGame={restartGame}
              shuffle={shuffle}
              setData={setData}
              setCount={setCount}
            />
          ) : (
            ""
          )}

          {/* Con el metodo de slice lo que hacemos es darle un punto de partida al array "0" y le indicamos que llegue hasta el elemento "10" (en este caso es el 9 IMPORTANTE es 0-index) y es a ese resultado que se mapea // tambien se puede armar como una const por fuera */}
          {data.slice(0, 10).map((item, questionIndex) => {
            // Es importante que al "abrir" el array a cada elemento ademas le demos una "posicion", en este caso "questionIndex"

            // Aca le vamos a dar dependiendo de dicha posicion a cada elemento una clase, dependiendo si esta activo o no, en el caso de que el questionIndex sea el mismo que el index ( que esta declarado con un state-value arriba), ese se va a "ver" y el resto quedara invisible hasta que se cambie el index.
            let position = "nextSlide";
            if (questionIndex === index) {
              position = "activeslide";
            }

            return (
              <AnswersSp
                key={item.id}
                {...item}
                position={position}
                data={data}
                score={score}
                actualScore={actualScore}
                highScore={highScore}
                count={count}
                timer={timer}
                index={index}
                container={container}
                difficulty={difficulty}
                setIndex={setIndex}
                setScore={setScore}
                setContainer={setContainer}
                setTimer={setTimer}
              />
            );
          })}
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

export default QuestionSp;
