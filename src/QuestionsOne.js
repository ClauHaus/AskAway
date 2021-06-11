import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import dataOne from "./questions";

const QuestionsOne = () => {
  const [timer, setTimer] = useState(10000); //60
  const [count, setCount] = useState(false);
  const [score, setScore] = useState(10);
  const [changeA, setChangeA] = useState("answers");
  const [changeB, setChangeB] = useState("answers");
  const [changeC, setChangeC] = useState("answers");
  const [changeD, setChangeD] = useState("answers");
  const [container, setContainer] = useState("container");
  const { openModal } = useGlobalContext();
  // const [answers, setAnswers] = useState(false);
  const [cursor, setCursor] = useState("pointer");
  const [events, setEvents] = useState("auto");
  const newName = JSON.parse(localStorage.getItem("newName"));
  // Esta funcion es para que haga un sort de los elementos del array
  const shuffle = () => {
    const result = dataOne.sort(() => Math.random() - 0.5);
    return result;
  };
  const [data, setData] = useState(shuffle);
  const [index, setIndex] = useState(0); // posibilidad para cambiar este 0 por un numero random y que de esa manera nos de un valor diferente

  // const random = Math.floor(Math.random() * data.length);
  // console.log(random);

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
    // setTimeout(() => {
    //   setAnswers(true);
    // }, 1000);
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
      setContainer("container");
    }, 1500);
    return () => clearTimeout(timeout);
  };

  return (
    <section className="container-back">
      <div className={container}>
        <ul className="top-information">
          <li>Level 1</li>
          <li>{newName}</li>
        </ul>
        {/* //ARMAR ACA EL MODAL QUE LEVANTE LOS PUNTOS QUE SE HICIERON HASTA EL MOMENTO + MAS EL BOTON QUE NOS PERMITA CONTINUAR y etc, hay que diseñar todo esto */}
        {index >= 10 ? <h1 className="black">ya tu chave</h1> : ""}
        {/* Con el metodo de slice lo que hacemos es darle un punto de partida al array "0" y le indicamos que llegue hasta el elemento "10" (en este caso es el 9 IMPORTANTE es 0-index) y es a ese resultado que se mapea // tambien se puede armar como una const por fuera */}
        {data.slice(0, 10).map((item, questionIndex) => {
          const { id, question, answerA, answerB, answerC, answerD } = item;
          if (index >= 10) {
            <h1 className="black">Bien papa!</h1>;
          }
          // console.log(answerA);
          // console.log(answerA[1]);
          // Es importante que al "abrir" el array a cada elemento ademas le demos una "posicion", en este caso "questionIndex"

          // Aca le vamos a dar dependiendo de dicha posicion a cada elemento una clase, dependiendo si esta activo o no, en el caso de que el questionIndex sea el mismo que el index ( que esta declarado con un state-value arriba), ese se va a "ver" y el resto quedara invisible hasta que se cambie el index.
          let position = "nextSlide";
          if (questionIndex === index) {
            position = "activeslide";
          }
          // if (
          //   questionIndex === index - 1 ||
          //   (index === 0 && questionIndex === actualQuestion.length - 1)
          // ) {
          //   position = "lastSlide";
          // }

          return (
            <article key={id} className={position}>
              <div
                className="title title-back question"
                style={{ padding: "5px" }}
              >
                {question}
              </div>
              <div className="timer">
                <div>{count ? timer : "Ready?"}</div>
                <div>Score: {score}</div>
              </div>
              <ul>
                <li>
                  <button
                    className={changeA}
                    style={{ cursor: cursor, pointerEvents: events }}
                    onClick={() =>
                      answerA[1]
                        ? (setChangeA("answers-right"),
                          highScore(score + 5),
                          setContainer("container-right"),
                          changeTimeout())
                        : (setChangeA("answers-wrong"),
                          highScore(score - 2),
                          setContainer("container-wrong"))
                    }
                  >
                    {answerA}
                  </button>
                </li>
                <li>
                  <button
                    className={changeB}
                    style={{ cursor: cursor, pointerEvents: events }}
                    onClick={() =>
                      answerB[1]
                        ? (setChangeB("answers-right"),
                          highScore(score + 5),
                          setContainer("container-right"),
                          changeTimeout())
                        : (setChangeB("answers-wrong"),
                          highScore(score - 2),
                          setContainer("container-wrong"))
                    }
                  >
                    {answerB}
                  </button>
                </li>
                <li>
                  <button
                    className={changeC}
                    style={{ cursor: cursor, pointerEvents: events }}
                    onClick={() =>
                      answerC[1]
                        ? (setChangeC("answers-right"),
                          highScore(score + 5),
                          setContainer("container-right"),
                          changeTimeout())
                        : (setChangeC("answers-wrong"),
                          highScore(score - 2),
                          setContainer("container-wrong"))
                    }
                  >
                    {answerC}
                  </button>
                </li>
                <li>
                  <button
                    className={changeD}
                    style={{ cursor: cursor, pointerEvents: events }}
                    onClick={() =>
                      answerD[1]
                        ? (setChangeD("answers-right"),
                          highScore(score + 5),
                          setContainer("container-right"),
                          changeTimeout())
                        : (setChangeD("answers-wrong"),
                          highScore(score - 2),
                          setContainer("container-wrong"))
                    }
                  >
                    {answerD}
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

//USAR useReF PARA CAMBIAR STYLES DE ELEMENTOS ejemplo
// useRef(container)  <div ref={container}></div>

export default QuestionsOne;
