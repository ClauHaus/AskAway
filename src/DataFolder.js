import React from "react";
import { useGlobalContext } from "./context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  click1,
  //COMPONENTS
  WindowInfo,
} from "./index";

const DataFolder = () => {
  const { closeDataFolder, sound, language } = useGlobalContext();

  const [play] = useSound(click1, { volume: 0.5 });
  const soundAction = (action) => {
    play();
    action();
  };

  return (
    <>
      <section className="container-back-data">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C:\ExternalData</div>
            </section>
            <WindowInfo />
          </div>
        </header>
        <section className="options">
          <button
            className="close-modal-btn"
            onClick={
              sound ? () => soundAction(closeDataFolder) : closeDataFolder
            }
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {language === "english" ? (
            <>
              <h5 className="title-options title-options-back">
                External Data
              </h5>
              <div>
                <p>
                  While programming this web, i used the following external
                  tools:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://bit.ly/3xrWMtJ"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      useSound (React Hook) --- {""}
                    </a>
                    <a
                      href="https://bit.ly/2UA37Vc"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Josh W Comeau.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bit.ly/3dXUCdC"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      coolors.co --- {""}
                    </a>
                    <a
                      href="https://bit.ly/3AHbVJJ"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Fabrizio Bianchi.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bit.ly/3AHPOTf"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Free Copyright Sounds.
                    </a>
                  </li>
                </ul>
                I also highly recommend to check
                <a
                  href="https://mzl.la/3AJS5NJ"
                  target="_blank"
                  style={{ color: "var(--dark-low)" }}
                >
                  {" "}
                  MDN Web Docs
                </a>{" "}
                and{" "}
                <a
                  href="https://bit.ly/3hT6tKW"
                  target="_blank"
                  style={{ color: "var(--dark-low)" }}
                >
                  W3schools
                </a>{" "}
                for any kind of doubts while coding. Mostly of the resources
                that I poured into this project I learned them from these
                courses:
                <ul>
                  <li>
                    <a
                      href="https://bit.ly/2SXlSS9"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Introduction to JavaScript Programming --- {""}
                    </a>
                    <a
                      href="https://bit.ly/36piGSA"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Javier Usobiaga Ferrer.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bit.ly/3r0XKur"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      JavaScript Tutorial for Beginners --- {""}
                    </a>
                    <a
                      href="https://bit.ly/3xy33Ec"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      John Smilga.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bit.ly/3dXUCdC"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      React Tutorial and Projects Course --- {""}
                    </a>
                    <a
                      href="https://bit.ly/3xy33Ec"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      John Smilga.
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <h5 className="title-options title-options-back">Data Externa</h5>
              <div>
                <p>
                  Mientras programaba esta web utilice estas herramientas
                  externas:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://bit.ly/3xrWMtJ"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      useSound (React Hook) --- {""}
                    </a>
                    <a
                      href="https://bit.ly/2UA37Vc"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Josh W Comeau.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bit.ly/3dXUCdC"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      coolors.co --- {""}
                    </a>
                    <a
                      href="https://bit.ly/3AHbVJJ"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Fabrizio Bianchi.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bit.ly/3AHPOTf"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Sonidos Free Copyright.
                    </a>
                  </li>
                </ul>
                Recomiendo altamente chequear también
                <a
                  href="https://mzl.la/3AJS5NJ"
                  target="_blank"
                  style={{ color: "var(--dark-low)" }}
                >
                  {" "}
                  MDN Web Docs
                </a>{" "}
                y{" "}
                <a
                  href="https://bit.ly/3hT6tKW"
                  target="_blank"
                  style={{ color: "var(--dark-low)" }}
                >
                  W3schools
                </a>{" "}
                para cualquier tipo de dudas que surjan al programar. La mayoría
                de los recursos utilizados en este proyecto los aprendí de los
                siguientes cursos:
                <ul>
                  <li>
                    <a
                      href="https://bit.ly/2SXlSS9"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Introduction to JavaScript Programming --- {""}
                    </a>
                    <a
                      href="https://bit.ly/36piGSA"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      Javier Usobiaga Ferrer.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bit.ly/3r0XKur"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      JavaScript Tutorial for Beginners --- {""}
                    </a>
                    <a
                      href="https://bit.ly/3xy33Ec"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      John Smilga.
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bit.ly/3dXUCdC"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      React Tutorial and Projects Course --- {""}
                    </a>
                    <a
                      href="https://bit.ly/3xy33Ec"
                      target="_blank"
                      style={{ color: "var(--dark-low)" }}
                    >
                      John Smilga.
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default DataFolder;
