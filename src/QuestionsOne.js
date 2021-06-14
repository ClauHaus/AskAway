import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import dataOne from "./questions";

const QuestionsOne = () => {
  const [timer, setTimer] = useState(1000); //60
  const [count, setCount] = useState(false);
  const [score, setScore] = useState(10);
  const [changeA, setChangeA] = useState("answers");
  const [changeB, setChangeB] = useState("answers");
  const [changeC, setChangeC] = useState("answers");
  const [changeD, setChangeD] = useState("answers");
  const [container, setContainer] = useState("container-question");
  const { openModal } = useGlobalContext();
  const [cursor, setCursor] = useState("pointer");
  const [events, setEvents] = useState("auto");
  const newName = JSON.parse(localStorage.getItem("newName"));
  // Esta funcion es para que haga un sort de los elementos del array
  const shuffle = () => {
    const result = dataOne.sort(() => Math.random() - 0.5);
    return result;
  };
  const [data, setData] = useState(shuffle);

  const [index, setIndex] = useState(0); // posibilidad para cambiar este 0 por un numero random y que de esa manera nos de un valor diferente-UPDATE IMPORTANTE, no es necesario realizar esa modificacion porque con el metodo sort tenemos el mismo resultado

  const highScore = (points) => {
    if (score >= 1) {
      setScore(points);
    }
  };

  // GAME OVER!!!
  useEffect(() => {
    if (score < 1) {
      setTimer("TIME OUT");
      setCursor("not-allowed");
      setEvents("none");
    }
  }, [score]);

  // Aparecen en diferentes tiempos el reloj y el resto de los elementos
  useEffect(() => {
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
      if (timer === 0) {
        setTimer("TIME OUT");
        setCursor("not-allowed");
        setEvents("none");
        // openModal(); //revisar y armar una funcion
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
    <section
      className="container-back"
      style={{
        width: "95%",
        left: "2%",
      }}
    >
      <div className={container}>
        <ul className=" top-information top">
          <li>Level 1</li>
          <li>Normal</li>
          <li>{newName}</li>
        </ul>
        <ul className="top-information bottom">
          <li>Question: {index}/10</li>
          <li>HiScore: {score}</li>
        </ul>
        {/* //ARMAR ACA EL MODAL QUE LEVANTE LOS PUNTOS QUE SE HICIERON HASTA EL MOMENTO + MAS EL BOTON QUE NOS PERMITA CONTINUAR y etc, hay que diseñar todo esto , lo podemos hacer como un component diferente o directamente armarlos debajo de este ternary operator*/}
        {index >= 10 ? (
          <h1 className="title title-back question">You did it!</h1>
        ) : (
          ""
        )}

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
                <div className="score">Score: {score}/25</div>
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
  );
};

export default QuestionsOne;
