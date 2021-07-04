import React, { useState } from "react";
import useSound from "use-sound";
import click1 from "./../sounds/click1.mp3";
import clickOptions from "./../sounds/clickOptions.mp3";
import titleImg from "./../images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronRight,
  faChevronLeft,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import howToDataSp from "./howToDataSp";
import { useGlobalContext } from "./../context";

const HowTo = () => {
  const { closeModal, sound } = useGlobalContext();
  const data = howToDataSp;
  const [index, setIndex] = useState(0);

  const [play] = useSound(click1, { volume: 0.5 });
  const [play1] = useSound(clickOptions, { volume: 0.5 });

  const soundAction = (action) => {
    play();
    action();
  };

  return (
    <section className="container-back-howTo">
      <header className="window-info">
        <div className="window-upper">
          <section className="upper-left">
            <img
              className="window-image"
              src={titleImg}
              alt="logo of Ask Away"
            />
            <div>C:\Askaway\ComoJugar</div>
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

      {data.map((item, itemIndex) => {
        const { text, title } = item;
        let position = "nextSlide";
        if (itemIndex === index) {
          position = "activeSlide";
        }
        if (index >= data.length) {
          setIndex(0);
        }
        if (index < 0) {
          setIndex(data.length - 1);
        }
        return (
          <article key={itemIndex} className={position}>
            <section className="howto">
              <button
                className="btn close-modal-btn"
                onClick={sound ? () => soundAction(closeModal) : closeModal}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h5 className="title-howto title-howto-back">{title}</h5>
              {/* <div className="icon-howto">{icon}</div> */}
              <p className="modal-text">{text}</p>
              <div className="btn-container-howto">
                <button
                  className="btn-prev"
                  onClick={() =>
                    sound ? (play1(), setIndex(index - 1)) : setIndex(index - 1)
                  }
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className="btn-next"
                  onClick={() =>
                    sound ? (play1(), setIndex(index + 1)) : setIndex(index + 1)
                  }
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </section>
          </article>
        );
      })}
    </section>
  );
};

export default HowTo;
