import React from "react";
import { useGlobalContext } from "./context";
import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  creditsSound,
  //COMPONENTS
  About,
  GameFolder,
  DataFolder,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./index";

const HighScore = () => {
  const newActualScore = JSON.parse(localStorage.getItem("newActualScore"));
  const newName = JSON.parse(localStorage.getItem("newName"));
  const newCountry = JSON.parse(localStorage.getItem("newCountry"));
  const newFullData = JSON.parse(localStorage.getItem("newFullData"));
  const newFullScore = JSON.parse(localStorage.getItem("newFullScore"));
  const {
    credits,
    highScore,
    nextPageCredits,
    sound,
    about,
    gameFolder,
    dataFolder,
  } = useGlobalContext();

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
              <div>C:\Askaway\FinalResults</div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <section className="ending" style={{ justifyContent: "center" }}>
          {newActualScore >= newFullScore.topHighScore ? (
            <div className="new-final-score">
              <h4>New High Score!</h4>
              <h4>{newActualScore} points</h4>
              <h5>Scored {newFullData.topDay}</h5>
              <h5>
                {newName} from {newCountry}
              </h5>
            </div>
          ) : (
            <div className="new-final-score">
              <h4>Previous High Score</h4>
              <h4>
                {newFullData.topHighScore > newFullScore.topHighScore
                  ? newFullData.topHighScore
                  : newFullScore.topHighScore}{" "}
                Points
              </h4>
              <h5>Scored {newFullScore.topDay}</h5>
              <h5>
                {newFullScore.topName} from {newFullScore.topCountry}
              </h5>
              <h5>Next time it will be yours!</h5>
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
        {infoWidth >= 1024 && about && <About />}
        {infoWidth >= 1024 && gameFolder && <GameFolder />}
        {infoWidth >= 1024 && dataFolder && <DataFolder />}
      </section>
      <InformationContainerBottom />
    </>
  );
};

export default HighScore;
