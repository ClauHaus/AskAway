import React from "react";
import useSound from "use-sound";
import creditsSound from "./../sounds/creditsSound.mp3";
import titleImg from "./../images/title.png";
import { useGlobalContext } from "./../context";
import InformationContainerTop from "../InformationContainerTop";
import WindowInfo from "../WindowInfo";
import InformationContainerBottom from "../InformationContainerBottom";

const HighScoreSp = () => {
  const newActualScore = JSON.parse(localStorage.getItem("newActualScore"));
  const newName = JSON.parse(localStorage.getItem("newName"));
  const newCountry = JSON.parse(localStorage.getItem("newCountry"));
  const newFullData = JSON.parse(localStorage.getItem("newFullData"));
  const newFullScore = JSON.parse(localStorage.getItem("newFullScore"));
  const { credits, highScore, nextPageCredits, sound } = useGlobalContext();

  const [playCredits] = useSound(creditsSound, { volume: 0.5 });

  const infoWidth = window.innerWidth;

  return (
    <>
      {infoWidth >= 1024 && <InformationContainerTop />}
      <section className="container-back-final">
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
            <WindowInfo />
          </div>
        </header>
        <section className="ending" style={{ justifyContent: "center" }}>
          {newActualScore >= newFullScore.topHighScore ? (
            <div className="new-final-score">
              <h4>Nuevo High Score!</h4>
              <h4>{newActualScore} puntos</h4>
              <h5>Logrado {newFullData.topDay}</h5>
              <h5>
                {newName} de {newCountry}
              </h5>
            </div>
          ) : (
            <div className="new-final-score">
              <h4>Previo High Score</h4>
              <h4>
                {newFullData.topHighScore > newFullScore.topHighScore
                  ? newFullData.topHighScore
                  : newFullScore.topHighScore}{" "}
                puntos
              </h4>
              <h5>Logrado {newFullScore.topDay}</h5>
              <h5>
                {newFullScore.topName} de {newFullScore.topCountry}
              </h5>
              <h5>La próxima vez será el tuyo!</h5>
            </div>
          )}
          <button
            className="btn btn-title"
            onClick={() =>
              sound
                ? (nextPageCredits(highScore, credits), playCredits())
                : nextPageCredits(highScore, credits)
            }
          >
            Roll the Credits
          </button>
        </section>
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default HighScoreSp;
