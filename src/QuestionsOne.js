import React, { useState, useEffect } from "react";
import titleImg from "./images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faMailBulk,
  faGripLinesVertical,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faWindows,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useGlobalContext } from "./context";
import dataOne from "./questions";

const QuestionsOne = () => {
  const [timer, setTimer] = useState(60); //60
  const [count, setCount] = useState(false);
  const [score, setScore] = useState(10);
  const [changeA, setChangeA] = useState("answers");
  const [changeB, setChangeB] = useState("answers");
  const [changeC, setChangeC] = useState("answers");
  const [changeD, setChangeD] = useState("answers");
  const [container, setContainer] = useState("container-question");
  const { time, restartGame, questionsOne, knowOne, nextPageFour } =
    useGlobalContext();
  const [cursor, setCursor] = useState("pointer");
  const [events, setEvents] = useState("auto");
  const newName = JSON.parse(localStorage.getItem("newName"));

  // Esta funcion es para que haga un sort de los elementos del array
  const shuffle = () => {
    const result = dataOne.sort(() => Math.random() - 0.5); //ACA PONES LOS DISTINTOS ARRAY!
    return result;
  };
  const [data, setData] = useState([]);

  const [index, setIndex] = useState(0); // posibilidad para cambiar este 0 por un numero random y que de esa manera nos de un valor diferente-UPDATE IMPORTANTE, no es necesario realizar esa modificacion porque con el metodo sort tenemos el mismo resultado

  const highScore = (points) => {
    if (score >= 1) {
      setScore(points);
    }
  };

  useEffect(() => {
    if (score < 1) {
      setTimer("TIME OUT");
      setCursor("not-allowed");
      setEvents("none");
    }
    localStorage.setItem("newScore", JSON.stringify(score));
  }, [score]);

  // Aparecen en diferentes tiempos el reloj y el resto de los elementos
  useEffect(() => {
    setData(shuffle);
    setTimeout(() => {
      setCount(true);
    }, 2000);
  }, []);

  // Es el trigger del contador y ademas el que muestra el modal en caso de TimeOut
  useEffect(() => {
    let interval = setInterval(() => {
      // ingresar ifs y mas funcionalidad aca
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (index >= 10) {
        setTimer(timer);
      }
      // ingresar ifs y mas funcionalidad aca
    }, 1000);
    return () => clearInterval(interval);
  });

  //Se hacen los cambios de color en botones y fondo con un delay para pasar a la siguiente pregunta
  const changeTimeout = () => {
    let timeout = setTimeout(() => {
      setIndex(index + 1);
      setChangeA("answers");
      setChangeB("answers");
      setChangeC("answers");
      setChangeD("answers");
      setContainer("container-question");
    }, 1500);
    return () => clearTimeout(timeout);
  };

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
              <div>C:\Desktop\Askaway\{newName}\Level1</div>
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
            <li>Question: {index < 10 ? index + 1 : index}/10</li>
            <li>HiScore: {score}</li>
          </ul>

          {/* COMIENZO DE LOS POSIBLES RESULTADOS*/}

          {/* 1er escenario - exitoso*/}
          {index >= 10 && score >= 30 ? (
            <>
              {localStorage.setItem("newTimer", JSON.stringify(timer))}
              <h1 className="title title-back question">
                {newName}, you are great!
              </h1>
              <section
                className="container-back"
                style={{
                  width: "95%",
                  left: "2%",
                  top: "15%",
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
                      <div>C:\Desktop\Askaway\{newName}\Results</div>
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
                  <p>Awesome job! You cleared the first out of five levels.</p>
                  <p>Let's see some stats before moving on, shall we?</p>
                  <ul>
                    <li>
                      You scored {score} points.{" "}
                      {score < 35 &&
                        "Wow you barely made it, let's improve ourselves in the next level!"}
                      {score >= 40 &&
                        score < 50 &&
                        "Great, let's continue with this performance."}
                      {score >= 50 &&
                        score < 60 &&
                        "Hey! You are actually good at this, congratz!"}
                      {score >= 60 &&
                        score < 70 &&
                        "Outstanding score, you know a looot about stuff!"}
                    </li>
                    <li>
                      You cleared this level in{" "}
                      {60 - JSON.parse(localStorage.getItem("newTimer"))}{" "}
                      seconds,{" "}
                      {JSON.parse(localStorage.getItem("newTimer")) > 50
                        ? "that was close, you need to move those fingers as fast as your mind."
                        : "you are a fast thinker or a pretty good guesser, let's find out in the next level."}
                    </li>
                  </ul>
                  <button
                    className="btn btn-title center-item"
                    onClick={() => nextPageFour(questionsOne, knowOne)}
                  >
                    Continue
                  </button>
                </div>
              </section>
            </>
          ) : (
            ""
          )}
          {/* 2do escenario - no exitoso*/}
          {index >= 10 && score < 30 ? (
            <>
              <h1 className="title title-back question">Game Over.</h1>
              <section
                className="container-back"
                style={{
                  width: "95%",
                  left: "0%",
                  top: "15%",
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
                      <div>C:\Desktop\Askaway\{newName}\Results</div>
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
                  <p>You only scored {score} points...</p>
                  <p>
                    Oh no {newName}, you got the 10 correct answers but not
                    enough points to move on.
                  </p>
                  <section></section>
                  <button className="btn btn-title center-item">
                    Continue
                  </button>
                  <section
                    className="container-back"
                    style={{
                      width: "95%",
                      left: "7%",
                      top: "40%",
                      minHeight: "45%",
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
                          <div>Game Over</div>
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
                      <div className="gameOver">
                        <FontAwesomeIcon
                          style={{ fontSize: "2.5rem" }}
                          icon={faExclamationTriangle}
                        ></FontAwesomeIcon>
                        C:\Desktop\Askaway...
                      </div>
                      <div className="btn-container" style={{ margin: "10px" }}>
                        <button className="btn-gameOver" onClick={restartGame}>
                          Restart Askaway
                        </button>
                        <button className="btn-gameOver">Restart level</button>
                      </div>
                    </header>
                  </section>
                </div>
              </section>
            </>
          ) : (
            ""
          )}
          {/* 3er escenario - no exitoso - Game Over*/}
          {score < 1 ? (
            <>
              <section
                className="container-back"
                style={{
                  width: "95%",
                  left: "0%",
                  top: "20%",
                  minHeight: "25%",
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
                      <div>Game Over</div>
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
                  <div className="gameOver">
                    <FontAwesomeIcon
                      style={{ fontSize: "2.5rem" }}
                      icon={faExclamationTriangle}
                    ></FontAwesomeIcon>
                    C:\Desktop\Askaway\Game Over
                  </div>
                  <div className="btn-container" style={{ margin: "10px" }}>
                    <button className="btn-gameOver" onClick={restartGame}>
                      Restart Askaway
                    </button>
                    <button className="btn-gameOver">Restart level</button>
                  </div>
                </header>
              </section>
            </>
          ) : (
            ""
          )}
          {/* 4to escenario - no exitoso - Time Over*/}
          {timer < 1 ? (
            <>
              <section
                className="container-back"
                style={{
                  width: "95%",
                  left: "0%",
                  top: "20%",
                  minHeight: "25%",
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
                      <div>Time Over</div>
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
                  <div className="gameOver">
                    <FontAwesomeIcon
                      style={{ fontSize: "2.5rem" }}
                      icon={faExclamationTriangle}
                    ></FontAwesomeIcon>
                    C:\Desktop\Askaway\Time Over
                  </div>
                  <div className="btn-container" style={{ margin: "10px" }}>
                    <button className="btn-gameOver" onClick={restartGame}>
                      Restart Askaway
                    </button>
                    <button className="btn-gameOver">Restart level</button>
                  </div>
                </header>
              </section>
            </>
          ) : (
            ""
          )}

          {/* FIN DE LOS POSIBLES RESULTADOS*/}

          {/* Con el metodo de slice lo que hacemos es darle un punto de partida al array "0" y le indicamos que llegue hasta el elemento "10" (en este caso es el 9 IMPORTANTE es 0-index) y es a ese resultado que se mapea // tambien se puede armar como una const por fuera */}
          {data.slice(0, 10).map((item, questionIndex) => {
            const { id, question, answers } = item;

            // Es importante que al "abrir" el array a cada elemento ademas le demos una "posicion", en este caso "questionIndex"

            // Aca le vamos a dar dependiendo de dicha posicion a cada elemento una clase, dependiendo si esta activo o no, en el caso de que el questionIndex sea el mismo que el index ( que esta declarado con un state-value arriba), ese se va a "ver" y el resto quedara invisible hasta que se cambie el index.
            let position = "nextSlide";
            if (questionIndex === index) {
              position = "activeslide";
            }

            return (
              <article key={id} className={position}>
                <div className="title title-back question">{question}</div>
                <div className="container-timer">
                  <div className="score">Score: {score}/30</div>
                  <div className="timer">{count ? timer : "Ready?"}</div>
                </div>
                <ul>
                  <li>
                    <button
                      className={changeA}
                      style={{ cursor: cursor, pointerEvents: events }}
                      onClick={() =>
                        answers[0][1]
                          ? (setChangeA("answers-right"),
                            highScore(score + 5),
                            setContainer("container-right"),
                            changeTimeout(),
                            // Si el index aun no llego al limite que se le pone al Array, lo que se hace es modificar el orden de las respuestas del siguiente sub-array , de esta forma solo se activa dicho metodo una vez y solo al clickear la respuesta correcta
                            index < 9
                              ? data[`${index + 1}`].answers.sort(
                                  () => Math.random() - 1
                                )
                              : null)
                          : (setChangeA("answers-wrong"),
                            highScore(score - 2),
                            setContainer("container-wrong"))
                      }
                    >
                      {answers[0][0]}
                    </button>
                  </li>
                  <li>
                    <button
                      className={changeB}
                      style={{ cursor: cursor, pointerEvents: events }}
                      onClick={() =>
                        answers[1][1]
                          ? (setChangeB("answers-right"),
                            highScore(score + 5),
                            setContainer("container-right"),
                            changeTimeout(),
                            index < 9
                              ? data[`${index + 1}`].answers.sort(
                                  () => Math.random() - 1
                                )
                              : null)
                          : (setChangeB("answers-wrong"),
                            highScore(score - 2),
                            setContainer("container-wrong"))
                      }
                    >
                      {answers[1][0]}
                    </button>
                  </li>
                  <li>
                    <button
                      className={changeC}
                      style={{ cursor: cursor, pointerEvents: events }}
                      onClick={() =>
                        answers[2][1]
                          ? (setChangeC("answers-right"),
                            highScore(score + 5),
                            setContainer("container-right"),
                            changeTimeout(),
                            index < 9
                              ? data[`${index + 1}`].answers.sort(
                                  () => Math.random() - 1
                                )
                              : null)
                          : (setChangeC("answers-wrong"),
                            highScore(score - 2),
                            setContainer("container-wrong"))
                      }
                    >
                      {answers[2][0]}
                    </button>
                  </li>
                  <li>
                    <button
                      className={changeD}
                      style={{ cursor: cursor, pointerEvents: events }}
                      onClick={() =>
                        answers[3][1]
                          ? (setChangeD("answers-right"),
                            highScore(score + 5),
                            setContainer("container-right"),
                            changeTimeout(),
                            index < 9
                              ? data[`${index + 1}`].answers.sort(
                                  () => Math.random() - 1
                                )
                              : null)
                          : (setChangeD("answers-wrong"),
                            highScore(score - 2),
                            setContainer("container-wrong"))
                      }
                    >
                      {answers[3][0]}
                    </button>
                  </li>
                </ul>
              </article>
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

export default QuestionsOne;
