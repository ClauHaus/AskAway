import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import levelClear from "./sounds/levelClear.mp3";
import finalLevelFanfare from "./sounds/finalLevelFanfare.mp3";
import titleImg from "./images/title.png";
import { useGlobalContext } from "./context";
import InformationContainerTop from "./InformationContainerTop";
import bigData from "./questions";
import Answers from "./Answers";
import GameOver from "./results/GameOver";
import ZeroPoints from "./results/ZeroPoints";
import TimeOver from "./results/TimeOver";
import WindowInfo from "./WindowInfo";
import InformationContainerBottom from "./InformationContainerBottom";

const Question = () => {
  const {
    restartGame,
    question,
    knowOne,
    nextPageFour,
    nextPageEnding,
    level,
    timerDifficulty,
    scoreDifficulty,
    difficulty,
    sound,
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
    const result = bigData[level].sort(() => Math.random() - 0.5); //ACA PONES LOS DISTINTOS ARRAY!
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

  const [playFanfare] = useSound(levelClear, { volume: 0.5 });
  const [playFinalFanfare] = useSound(finalLevelFanfare, { volume: 0.5 });

  const infoWidth = window.innerWidth;

  return (
    <>
      {infoWidth >= 1024 && <InformationContainerTop />}
      <section className="container-back-question">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>
                C:\Askaway\{newName}\Level {level}
              </div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <div className={container}>
          <ul className="top-information bottom">
            <li>Question:{index < 10 ? index + 1 : index}/10</li>
            <li>HiScore:{topScore}</li>
            <li>Score:{actualScore}</li>
          </ul>

          {/* 1er escenario - exitoso*/}
          {index >= 10 && score >= 30 ? (
            <>
              {localStorage.setItem("newTimer", JSON.stringify(timer))}
              <h1 className="title title-back question">
                {newName}, you are great!
              </h1>
              <section className="container-back-results">
                <header className="window-info">
                  <div className="window-upper">
                    <section className="upper-left">
                      <img
                        className="window-image"
                        src={titleImg}
                        alt="logo of Ask Away"
                      />
                      <div>C:\Askaway\{newName}\Results</div>
                    </section>
                    <WindowInfo />
                  </div>
                </header>
                <div className="container-results">
                  <p>Awesome job! You cleared level {level} out of 5.</p>
                  <p>Let's see some stats before moving on, shall we?</p>
                  <ul>
                    <li>
                      Your actual score is {actualScore} points. And you made{" "}
                      {score} points in level {level}.{" "}
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
                      {JSON.parse(localStorage.getItem("newTimer")) < 50
                        ? "you are a fast thinker or a pretty good guesser, let's find out in the next level."
                        : "that was close, you need to move those fingers as fast as your mind."}
                    </li>
                  </ul>
                  {level < 5 ? (
                    <button
                      className="btn btn-title center-item"
                      onClick={() =>
                        sound
                          ? (nextPageFour(question, knowOne), playFanfare())
                          : nextPageFour(question, knowOne)
                      }
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      className="btn btn-title center-item"
                      // onClick={() => nextPageEnding(question, knowOne)}
                      onClick={() =>
                        sound
                          ? (nextPageEnding(question, knowOne),
                            playFinalFanfare())
                          : nextPageEnding(question, knowOne)
                      }
                    >
                      Conclude
                    </button>
                  )}
                </div>
              </section>
            </>
          ) : (
            ""
          )}
          {index >= 10 && score < 30 ? (
            <GameOver
              newName={newName}
              score={score}
              restartGame={restartGame}
            />
          ) : (
            ""
          )}
          {score < 1 ? <ZeroPoints restartGame={restartGame} /> : ""}
          {timer < 1 ? (
            <TimeOver
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
              <Answers
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
      <InformationContainerBottom />
    </>
  );
};

export default Question;
