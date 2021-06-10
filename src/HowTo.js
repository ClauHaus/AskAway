import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import howToData from "./howToData";
import { useGlobalContext } from "./context";

const eraseMe = () => {
  console.log("hello world");
};

const HowTo = () => {
  const { closeModal } = useGlobalContext();
  const [data, setData] = useState(howToData);
  const [index, setIndex] = useState(0);
  return (
    <div className="modal-container">
      <div className="modal-overlay show-modal">
        {data.map((item, itemIndex) => {
          const { id, text, title, icon } = item;
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
          // if (
          //   itemIndex === index - 1 ||
          //   (index === 0 && itemIndex === data.length - 1)
          // ) {
          //   position = "lastSlide";
          // }
          return (
            <article key={itemIndex} className={position}>
              <button className="btn close-modal-btn" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h3 className="title-howto">
                <b>{title}</b>
              </h3>
              <div className="icon-howto">{icon}</div>
              <p className="modal-text">{text}</p>
              <div className="btn-container-howto">
                <button
                  className="btn-prev"
                  onClick={() => setIndex(index - 1)}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className="btn-next"
                  onClick={() => setIndex(index + 1)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default HowTo;
