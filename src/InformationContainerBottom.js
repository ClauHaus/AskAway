import React from "react";
import titleImg from "./images/title.png";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faGripLinesVertical,
  faVolumeUp,
  faVolumeMute,
  faMoon,
  faSun,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWindows,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const InformationContainerBottom = () => {
  const {
    time,
    restartGame,
    sound,
    setSound,
    language,
    theme,
    setTheme,
    setLanguage,
  } = useGlobalContext();

  const makeSound = () => {
    setSound(!sound);
    playPop();
    localStorage.setItem("newSound", JSON.stringify(!sound));
  };
  const setGameTheme = (item) => {
    setTheme(item);
    playPop();
    localStorage.setItem("newTheme", JSON.stringify(item));
  };
  const setGameLanguage = (item) => {
    setLanguage(item);
    playPop();
    localStorage.setItem("newLanguage", JSON.stringify(item));
  };
  const [playPop] = useSound(pop, { volume: 0.5 });

  const gameTheme = (item) => {
    setTheme(item);
    localStorage.setItem("newTheme", JSON.stringify(item));
  };
  const gameLanguage = (item) => {
    setLanguage(item);
    localStorage.setItem("newLanguage", JSON.stringify(item));
  };

  const infoWidth = window.innerWidth;

  return (
    <>
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
          {infoWidth >= 1024 ? (
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
          ) : (
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
          )}

          {infoWidth >= 1024 && theme === "dark" && (
            <button
              onClick={() =>
                sound ? setGameTheme("light") : gameTheme("light")
              }
              className="container-bottom-theme"
            >
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            </button>
          )}
          {infoWidth >= 1024 && theme === "light" && (
            <button
              onClick={() => (sound ? setGameTheme("dark") : gameTheme("dark"))}
              className="container-bottom-theme"
            >
              <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            </button>
          )}

          {infoWidth >= 1024 && language === "spanish" && (
            <button
              onClick={() =>
                sound ? setGameLanguage("english") : gameLanguage("english")
              }
              className="container-bottom-theme"
            >
              <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
            </button>
          )}
          {infoWidth >= 1024 && language === "english" && (
            <button
              onClick={() =>
                sound ? setGameLanguage("spanish") : gameLanguage("spanish")
              }
              className="container-bottom-theme"
            >
              <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
            </button>
          )}

          {infoWidth >= 1024 && (
            <div className="language-icon">
              {language === "english" ? "ENG" : "ESP"}
            </div>
          )}
          <div className="container-bottom-clock">{time}</div>
        </footer>
      </section>
    </>
  );
};

export default InformationContainerBottom;
