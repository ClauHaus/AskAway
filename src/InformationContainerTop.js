import React from "react";
import useSound from "use-sound";
import click1 from "./sounds/click1.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faLaptop,
  faFolderOpen,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useGlobalContext } from "./context";

const InformationContainerTop = () => {
  const { openAbout, openGameFolder, openDataFolder, sound, language } =
    useGlobalContext();

  const [play1] = useSound(click1, { volume: 0.5 });
  const soundAction = (action) => {
    play1();
    action();
  };

  return (
    <>
      <section>
        <div className="container-desktop"></div>
        <button
          className="container-desktop-icon"
          onClick={sound ? () => soundAction(openAbout) : openAbout}
        >
          <FontAwesomeIcon icon={faLaptop} style={{ fontSize: "2rem" }} />
          {language === "english" ? "My PC" : "Mi PC"}
        </button>
        <button
          className="container-desktop-icon"
          onClick={sound ? () => soundAction(openGameFolder) : openGameFolder}
        >
          <FontAwesomeIcon icon={faFolderOpen} style={{ fontSize: "2rem" }} />
          AskAway
        </button>
        <button
          className="container-desktop-icon"
          onClick={sound ? () => soundAction(openDataFolder) : openDataFolder}
        >
          <FontAwesomeIcon icon={faFileCode} style={{ fontSize: "2rem" }} />
          Data
        </button>
        <button className="container-desktop-icon">
          <a
            href="https://github.com/ClauHaus/AskAway"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "2rem" }} />
            Github
          </a>
        </button>

        <button className="container-desktop-icon">
          <a
            href="https://www.linkedin.com/in/claudio-aime-2a91a034/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "2rem" }} />
            LinkedIn
          </a>
        </button>

        <button className="container-desktop-icon">
          <a
            href="https://twitter.com/ClauHaus_"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "2rem" }} />
            Twitter
          </a>
        </button>
        <button className="container-desktop-icon">
          <a
            href="mailto:claudio.aime32@gmail.com?subject=Regarding%20Askaway"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faMailBulk} style={{ fontSize: "2rem" }} />
            Mail
          </a>
        </button>
      </section>
    </>
  );
};

export default InformationContainerTop;
