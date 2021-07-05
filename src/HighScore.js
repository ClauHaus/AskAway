import React from "react";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import creditsSound from "./sounds/creditsSound.mp3";
import titleImg from "./images/title.png";
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
import { useGlobalContext } from "./context";

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
    restartGame,
    time,
    sound,
    setSound,
  } = useGlobalContext();

  const [playPop] = useSound(pop, { volume: 0.5 });
  const [playCredits] = useSound(creditsSound, { volume: 0.5 });
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
              <div>C:\Askaway\FinalResults</div>
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
        <section className="ending" style={{ justifyContent: "center" }}>
          {newActualScore >= newFullScore.topHighScore ? (
            <div className="new-final-score">
              <h4>New High Score!</h4>
              <h4>{newActualScore} points</h4>
              <h5>Scored {newFullData.topDay}</h5>
              <h5>{newName}</h5>
              <h5>From</h5>
              <h5>{newCountry}</h5>
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
              {/* <h5>Player</h5> */}
              <h5>Scored {newFullScore.topDay}</h5>
              <h5>{newFullScore.topName}</h5>
              <h5>From</h5>
              <h5>{newFullScore.topCountry}</h5>
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

export default HighScore;
