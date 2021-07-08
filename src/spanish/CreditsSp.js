import React from "react";
import useSound from "use-sound";
import pop from "./../sounds/pop.mp3";
import titleImg from "./../images/title.png";
import clauhaus from "./../images/clauhaus.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faGripLinesVertical,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useGlobalContext } from "./../context";
import InformationContainerTop from "../InformationContainerTop";
import InformationContainerBottom from "../InformationContainerBottom";
import WindowInfo from "../WindowInfo";
import About from "../About";

const CreditsSp = () => {
  const { restartGame, time, sound, setSound, about } = useGlobalContext();

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
          <p className="credits-text-up">
            Director, Productor, Diseñador, Programador, Tester, Editor y
            Desarrollador
          </p>
          <p className="credits-text-up" style={{ marginTop: "-20px" }}>
            Claudio Aime
          </p>
          <div className="credits-container-image">
            <img src={clauhaus} alt="ClauHaus" className="clauhaus" />
          </div>
          <p className="credits-text-up" style={{ marginTop: "-35px" }}>
            Muchísimas gracias por jugar! Para contactarte conmigo podes usar
            los links debajo, cualquier feedback será muy bienvenido.
          </p>
        </section>
        {infoWidth >= 1024 && about && <About />}
      </section>
      {infoWidth >= 1024 ? (
        <InformationContainerBottom />
      ) : (
        <>
          <section>
            <footer className="container-bottom-credits">
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
      )}
    </>
  );
};

export default CreditsSp;
