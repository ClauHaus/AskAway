import React, { useState, useEffect } from "react";

const Answers = ({
  data,
  id,
  question,
  image,
  answers,
  position,
  score,
  highScore,
  count,
  timer,
  index,
  setIndex,
  setContainer,
  setTimer,
  difficulty,
}) => {
  const [changeA, setChangeA] = useState("answers");
  const [changeB, setChangeB] = useState("answers");
  const [changeC, setChangeC] = useState("answers");
  const [changeD, setChangeD] = useState("answers");
  const [cursorA, setCursorA] = useState("pointer");
  const [cursorB, setCursorB] = useState("pointer");
  const [cursorC, setCursorC] = useState("pointer");
  const [cursorD, setCursorD] = useState("pointer");
  const [eventsA, setEventsA] = useState("auto");
  const [eventsB, setEventsB] = useState("auto");
  const [eventsC, setEventsC] = useState("auto");
  const [eventsD, setEventsD] = useState("auto");
  const [alertWrong, setAlertWrong] = useState("");
  const [alertRight, setAlertRight] = useState("");

  const pointsDifficulty = () => {
    let result = 2;
    if (difficulty === "normal") {
      result = 2;
    }
    if (difficulty === "hard") {
      result = 3;
    }
    if (difficulty === "hell") {
      result = 4;
    }
    return result;
  };

  const points = pointsDifficulty();

  //Se hacen los cambios de color en botones y fondo con un delay para pasar a la siguiente pregunta

  useEffect(() => {
    setTimeout(() => {
      setAlertWrong("");
    }, 750);
  }, [alertWrong]);

  useEffect(() => {
    setTimeout(() => {
      setAlertRight("");
    }, 750);
  }, [alertRight]);

  const multipleChanges = () => {
    setChangeA("answers");
    setChangeB("answers");
    setChangeC("answers");
    setChangeD("answers");
    setCursorA("pointer");
    setCursorB("pointer");
    setCursorC("pointer");
    setCursorD("pointer");
    setEventsA("auto");
    setEventsB("auto");
    setEventsC("auto");
    setEventsD("auto");
  };

  const changeAttributes = () => {
    setCursorA("not-allowed");
    setEventsA("none");
    setCursorB("not-allowed");
    setEventsB("none");
    setCursorC("not-allowed");
    setEventsC("none");
    setCursorD("not-allowed");
    setEventsD("none");
    setAlertRight("alert-success");
  };

  useEffect(() => {
    if (score < 1) {
      setTimer("TIME OUT");
      multipleChanges();
    }
    if (timer === 0) {
      multipleChanges();
    }
    localStorage.setItem("newScore", JSON.stringify(score));

    // eslint-disable-next-line
  }, [score, timer]);

  const changeTimeout = () => {
    let timeout = setTimeout(() => {
      setIndex(index + 1);
      multipleChanges();
      setContainer("container-question");
    }, 1500);
    return () => clearTimeout(timeout);
  };

  return (
    <article key={id} className={position}>
      <div className="title title-back question">
        {question}
        {image ? (
          <div className="question-image-container">
            <img src={image} alt="Not found" className="question-image" />
          </div>
        ) : null}
      </div>
      <div className="container-timer">
        <div className="score">Points needed: {score}/30</div>
        <div className="timer">{count ? timer : "Ready?"}</div>
      </div>
      <section className="alerts">
        <div className={`alert ${alertWrong}`}>-{points}</div>
        <div className={`alert ${alertRight}`}>+5</div>
      </section>
      <ul>
        <li>
          <button
            className={changeA}
            style={{ cursor: cursorA, pointerEvents: eventsA }}
            onClick={() =>
              answers[0][1]
                ? (setChangeA("answers-right"),
                  highScore(score + 5),
                  setContainer("container-right"),
                  setAlertRight("alert-success"),
                  changeAttributes(),
                  changeTimeout(),
                  // Si el index aun no llego al limite que se le pone al Array, lo que se hace es modificar el orden de las respuestas del siguiente sub-array , de esta forma solo se activa dicho metodo una vez y solo al clickear la respuesta correcta
                  index < 9
                    ? data[`${index + 1}`].answers.sort(() => Math.random() - 1)
                    : null)
                : (setChangeA("answers-wrong"),
                  highScore(score - points),
                  setCursorA("not-allowed"),
                  setEventsA("none"),
                  setAlertWrong("alert-danger"),
                  setContainer("container-wrong"))
            }
          >
            {answers[0][0]}
          </button>
        </li>
        <li>
          <button
            className={changeB}
            style={{ cursor: cursorB, pointerEvents: eventsB }}
            onClick={() =>
              answers[1][1]
                ? (setChangeB("answers-right"),
                  highScore(score + 5),
                  setContainer("container-right"),
                  changeAttributes(),
                  setAlertRight("alert-success"),
                  changeTimeout(),
                  index < 9
                    ? data[`${index + 1}`].answers.sort(() => Math.random() - 1)
                    : null)
                : (setChangeB("answers-wrong"),
                  highScore(score - points),
                  setCursorB("not-allowed"),
                  setEventsB("none"),
                  setAlertWrong("alert-danger"),
                  setContainer("container-wrong"))
            }
          >
            {answers[1][0]}
          </button>
        </li>
        <li>
          <button
            className={changeC}
            style={{ cursor: cursorC, pointerEvents: eventsC }}
            onClick={() =>
              answers[2][1]
                ? (setChangeC("answers-right"),
                  highScore(score + 5),
                  setContainer("container-right"),
                  changeAttributes(),
                  setAlertRight("alert-success"),
                  changeTimeout(),
                  index < 9
                    ? data[`${index + 1}`].answers.sort(() => Math.random() - 1)
                    : null)
                : (setChangeC("answers-wrong"),
                  highScore(score - points),
                  setCursorC("not-allowed"),
                  setEventsC("none"),
                  setAlertWrong("alert-danger"),
                  setContainer("container-wrong"))
            }
          >
            {answers[2][0]}
          </button>
        </li>
        <li>
          <button
            className={changeD}
            style={{ cursor: cursorD, pointerEvents: eventsD }}
            onClick={() =>
              answers[3][1]
                ? (setChangeD("answers-right"),
                  highScore(score + 5),
                  setContainer("container-right"),
                  changeAttributes(),
                  setAlertRight("alert-success"),
                  changeTimeout(),
                  index < 9
                    ? data[`${index + 1}`].answers.sort(() => Math.random() - 1)
                    : null)
                : (setChangeD("answers-wrong"),
                  highScore(score - points),
                  setCursorD("not-allowed"),
                  setEventsD("none"),
                  setAlertWrong("alert-danger"),
                  setContainer("container-wrong"))
            }
          >
            {answers[3][0]}
          </button>
        </li>
      </ul>
    </article>
  );
};

export default Answers;
