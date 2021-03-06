import React from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faGripLinesVertical,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  pop,
  clauhaus,
  //COMPONENTS
  About,
  GameFolder,
  DataFolder,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./index";

const Credits = () => {
  const { restartGame, time, sound, setSound, about, gameFolder, dataFolder } =
    useGlobalContext();

  const [playPop] = useSound(pop, { volume: 0.5 });
  const makeSound = () => {
    setSound(!sound);
    playPop();
    localStorage.setItem("newSound", JSON.stringify(!sound));
  };

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
              <div>C:\Askaway\Credits</div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <section className="credits" style={{ minHeight: "60vh" }}>
          <p
            className="credits-text-up"
            style={{ textAlign: "center", color: "var(--dark-high)" }}
          >
            Director, Producer, Designer, Programmer, Tester, Editor and
            Developer
          </p>
          <p
            className="credits-text-up"
            style={{
              marginTop: "-20px",
              textAlign: "center",
            }}
          >
            Claudio Aime
          </p>
          <div className="credits-container-image">
            <img src={clauhaus} alt="ClauHaus" className="clauhaus" />
          </div>
          <p
            className="credits-text-up"
            style={{
              marginTop: "-35px",
              textAlign: "center",
              color: "var(--dark-high)",
            }}
          >
            Thank you very much for playing! If you want to contact me, you can
            use the links below, any feedback is more than welcome.
          </p>
        </section>
        {infoWidth >= 1024 && about && <About />}
        {infoWidth >= 1024 && gameFolder && <GameFolder />}
        {infoWidth >= 1024 && dataFolder && <DataFolder />}
      </section>
      {infoWidth >= 1024 ? (
        <InformationContainerBottom />
      ) : (
        <>
          <section>
            <footer className="container-bottom-credits">
              <div>
                <button className="btn-restart" onClick={restartGame}>
                  <FontAwesomeIcon icon={faMicrosoft} />
                  ReStart
                </button>
              </div>
              <FontAwesomeIcon
                icon={faGripLinesVertical}
                className="container-bottom-icons-span"
              />
              <a
                href="https://github.com/ClauHaus/AskAway"
                target="_blank"
                rel="noreferrer"
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
                />
              </a>
              <a
                href="mailto:claudio.aime32@gmail.com?subject=Regarding%20Askaway"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="container-bottom-icons"
                />
              </a>
              <FontAwesomeIcon
                icon={faGripLinesVertical}
                className="container-bottom-icons-span"
              />
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
                  <FontAwesomeIcon icon={faVolumeUp} />
                ) : (
                  <FontAwesomeIcon icon={faVolumeMute} />
                )}
              </button>
              <div className="container-bottom-clock">{time}</div>
            </footer>
          </section>
        </>
      )}
    </>
  );
};

export default Credits;
