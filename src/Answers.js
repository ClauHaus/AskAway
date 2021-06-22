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
}) => {
  const [changeA, setChangeA] = useState("answers");
  const [changeB, setChangeB] = useState("answers");
  const [changeC, setChangeC] = useState("answers");
  const [changeD, setChangeD] = useState("answers");
  const [cursor, setCursor] = useState("pointer");
  const [events, setEvents] = useState("auto");
  const [alertWrong, setAlertWrong] = useState("");
  const [alertRight, setAlertRight] = useState("");
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

  useEffect(() => {
    if (score < 1) {
      setTimer("TIME OUT");
      setCursor("not-allowed");
      setEvents("none");
    }
    if (timer === 0) {
      setCursor("not-allowed");
      setEvents("none");
    }
    localStorage.setItem("newScore", JSON.stringify(score));
    // eslint-disable-next-line
  }, [score, timer]);

  const changeTimeout = () => {
    let timeout = setTimeout(() => {
      setIndex(index + 1);
      setChangeA("answers");
      setChangeB("answers");
      setChangeC("answers");
      setChangeD("answers");
      setCursor("pointer");
      setEvents("auto");
      setContainer("container-question");
    }, 1500);
    return () => clearTimeout(timeout);
  };

  return (
    <article key={id} className={position}>
      <div className="title title-back question">
        {question}
        {image ? (
          <img
            src={image}
            alt=""
            style={{
              width: "80px",
              height: "80px",
              margin: "0px auto 5px auto",
            }}
          />
        ) : null}
      </div>
      <div className="container-timer">
        <div className="score">Score: {score}/30</div>
        <div className="timer">{count ? timer : "Ready?"}</div>
      </div>
      <section className="alerts">
        <div className={`alert ${alertWrong}`}>-2</div>
        <div className={`alert ${alertRight}`}>+5</div>
      </section>
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
                  setCursor("not-allowed"),
                  setEvents("none"),
                  setAlertRight("alert-success"),
                  changeTimeout(),
                  // Si el index aun no llego al limite que se le pone al Array, lo que se hace es modificar el orden de las respuestas del siguiente sub-array , de esta forma solo se activa dicho metodo una vez y solo al clickear la respuesta correcta
                  index < 9
                    ? data[`${index + 1}`].answers.sort(() => Math.random() - 1)
                    : null)
                : (setChangeA("answers-wrong"),
                  highScore(score - 2),
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
            style={{ cursor: cursor, pointerEvents: events }}
            onClick={() =>
              answers[1][1]
                ? (setChangeB("answers-right"),
                  highScore(score + 5),
                  setContainer("container-right"),
                  setCursor("not-allowed"),
                  setEvents("none"),
                  setAlertRight("alert-success"),
                  changeTimeout(),
                  index < 9
                    ? data[`${index + 1}`].answers.sort(() => Math.random() - 1)
                    : null)
                : (setChangeB("answers-wrong"),
                  highScore(score - 2),
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
            style={{ cursor: cursor, pointerEvents: events }}
            onClick={() =>
              answers[2][1]
                ? (setChangeC("answers-right"),
                  highScore(score + 5),
                  setContainer("container-right"),
                  setCursor("not-allowed"),
                  setEvents("none"),
                  setAlertRight("alert-success"),
                  changeTimeout(),
                  index < 9
                    ? data[`${index + 1}`].answers.sort(() => Math.random() - 1)
                    : null)
                : (setChangeC("answers-wrong"),
                  highScore(score - 2),
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
            style={{ cursor: cursor, pointerEvents: events }}
            onClick={() =>
              answers[3][1]
                ? (setChangeD("answers-right"),
                  highScore(score + 5),
                  setContainer("container-right"),
                  setCursor("not-allowed"),
                  setEvents("none"),
                  setAlertRight("alert-success"),
                  changeTimeout(),
                  index < 9
                    ? data[`${index + 1}`].answers.sort(() => Math.random() - 1)
                    : null)
                : (setChangeD("answers-wrong"),
                  highScore(score - 2),
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
