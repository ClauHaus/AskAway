import React from "react";
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

const InformationContainerTop = () => {
  return (
    <>
      <section>
        <div className="container-desktop"></div>
        <button className="container-desktop-icon">
          <FontAwesomeIcon
            icon={faLaptop}
            style={{ fontSize: "2rem" }}
          ></FontAwesomeIcon>
          My PC
        </button>
        <button className="container-desktop-icon">
          <FontAwesomeIcon
            icon={faFolderOpen}
            style={{ fontSize: "2rem" }}
          ></FontAwesomeIcon>
          AskAway
        </button>
        <button className="container-desktop-icon">
          <FontAwesomeIcon
            icon={faFileCode}
            style={{ fontSize: "2rem" }}
          ></FontAwesomeIcon>
          External
        </button>
        <button className="container-desktop-icon">
          <a
            href="https://github.com/ClauHaus/AskAway"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "2rem" }}
            ></FontAwesomeIcon>
            Github
          </a>
        </button>

        <button className="container-desktop-icon">
          <a
            href="https://www.linkedin.com/in/claudio-aime-2a91a034/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ fontSize: "2rem" }}
            ></FontAwesomeIcon>
            LinkedIn
          </a>
        </button>

        <button className="container-desktop-icon">
          <a
            href="https://twitter.com/ClauHaus_"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ fontSize: "2rem" }}
            ></FontAwesomeIcon>
            Twitter
          </a>
        </button>
        <button className="container-desktop-icon">
          <a
            href="mailto:claudio.aime32@gmail.com?subject=Regarding%20Askaway"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faMailBulk}
              style={{ fontSize: "2rem" }}
            ></FontAwesomeIcon>
            Mail
          </a>
        </button>
      </section>
    </>
  );
};

export default InformationContainerTop;
