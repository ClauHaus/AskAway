import React from "react";
import useSound from "use-sound";
import applause from "./sounds/applause.mp3";
import titleImg from "./images/title.png";
import { useGlobalContext } from "./context";
import InformationContainerTop from "./InformationContainerTop";
import WindowInfo from "./WindowInfo";
import InformationContainerBottom from "./InformationContainerBottom";

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

  const { difficulty, highScore, ending, nextPageHighScore, sound } =
    useGlobalContext();

  const [playApplause] = useSound(applause, { volume: 0.5 });

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
      <InformationContainerBottom />
    </>
  );
};

export default Ending;
