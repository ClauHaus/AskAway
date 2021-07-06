import React from "react";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import applause from "./sounds/applause.mp3";
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

const Ending = () => {
  const newActualScore = JSON.parse(localStorage.getItem("newActualScore"));
  const newFullData = JSON.parse(localStorage.getItem("newFullData"));
  const newFullScore = JSON.parse(localStorage.getItem("newFullScore"));

  if (newFullData.topHighScore >= newFullScore.topHighScore) {
    localStorage.setItem(
      "newFullScore",
      JSON.stringify({
        topName: newFullData.topName,
        topCountry: newFullData.topCountry,
        topAge: newFullData.topAge,
        topHighScore: newFullData.topHighScore,
        topDay: newFullData.topDay,
      })
    );
  }
  if (newFullData.topHighScore < newFullScore.topHighScore) {
    localStorage.setItem(
      "newFullScore",
      JSON.stringify({
        topName: newFullScore.topName,
        topCountry: newFullScore.topCountry,
        topAge: newFullScore.topAge,
        topHighScore: newFullScore.topHighScore,
        topDay: newFullScore.topDay,
      })
    );
  }

  const {
    difficulty,
    highScore,
    ending,
    nextPageHighScore,
    restartGame,
    time,
    sound,
    setSound,
  } = useGlobalContext();

  const [playPop] = useSound(pop, { volume: 0.5 });
  const [playApplause] = useSound(applause, { volume: 0.5 });
  const makeSound = () => {
    setSound(!sound);
    playPop();
    localStorage.setItem("newSound", JSON.stringify(!sound));
  };

  return (
    <>
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
        <section className="ending">
          <section style={{ marginTop: "-15px" }}>
            {difficulty === "normal" && (
              <p>
                You completed AskAway on "Normal Mode". Very good work, you are
                a definetly someone who has shown perseverance during the whole
                game, now we invite you to try and play in "Hard Mode" and see
                how well you do under new challenges.
              </p>
            )}
            {difficulty === "hard" && (
              <p>
                You completed AskAway on "Hard Mode". Excellent performance, we
                can see that you really know a lot about so many diverse
                subjects and you are so fast bringing the information from your
                brain to your fingers!
              </p>
            )}
            {difficulty === "hell" && (
              <p>
                You finished AskAway on "Hell Mode"... Wait what?! You have
                overcome the game on the highest difficulty level without even
                hesitating, you have faced all the challenges without backing
                down. With all our heart we want to tell you that you are just
                great!
              </p>
            )}
          </section>
          <section style={{ marginTop: "-20px" }}>
            {newActualScore <= 200 && (
              <p>
                You scored {newActualScore} points. It's a good score, but we're
                sure you can improve it, cheer up!
              </p>
            )}
            {newActualScore >= 201 && newActualScore <= 225 && (
              <p>
                You scored {newActualScore} points. Very good score, you got a
                lot of correct answers, but we must also focus on the incorrect
                ones, we are sure that next time it will be even better, cheer
                up!
              </p>
            )}
            {newActualScore >= 226 && newActualScore <= 250 && (
              <p>
                You scored {newActualScore} points. Great score, you have
                improved a lot over the incorrect answers, you should keep
                calculating the time for be able to continue reducing those
                errors, you are in very good shape, excellent played!
              </p>
            )}
            {newActualScore >= 251 && newActualScore <= 275 && (
              <p>
                You scored {newActualScore} points. Fantastic score, you have
                had very few incorrect answers and all this handling very well
                the times of each level, really surprising. How have you come to
                know so much about so many things? You'll have to tell us.
                Wonderful played.
              </p>
            )}
            {newActualScore >= 276 && newActualScore <= 289 && (
              <p>
                You scored {newActualScore} points. Excellent, awesome, great
                score, we are running out of adjectives to express it, you
                almost had no incorrect answers, masterfully handling the times
                of each level and demonstrating your knowledge in absolutely
                every question we have put in front of you. Almost perfectly
                played, do you dare to try to overcome your own score?
              </p>
            )}
            {newActualScore >= 290 && (
              <p>
                You scored {newActualScore} points. Outstanding, perfect, come
                on! you just got a TREMENDOUS score. You finished the game
                obtaining a score that leaves us speechless, you just know
                everything! We are grateful from the bottom of our hearts that
                you have played with so much emotion, you are awesome and you
                better know it!
              </p>
            )}
          </section>
          <button
            className="btn btn-title"
            onClick={() =>
              sound
                ? (nextPageHighScore(ending, highScore), playApplause())
                : nextPageHighScore(ending, highScore)
            }
          >
            High Score?
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

export default Ending;
