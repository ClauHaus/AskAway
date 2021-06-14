import React from "react";
import titleImg from "./images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HowTo from "./HowTo";
import Options from "./Options";
import { useGlobalContext } from "./context";

const Title = () => {
  const { options, modal, nextPageTest, title, form, openModal, openOptions } =
    useGlobalContext();
  return (
    <>
      <section className="container-back">
        <div className="container">
          <button className="btn-change " onClick={openOptions}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
          <h3 className="title title-back">ask away</h3>
          {/* <div className="title-underline"></div> */}
          <h5 className="title">How much do you know about stuff?</h5>
          <div className="title-image-container">
            <img
              className="title-image"
              src={titleImg}
              alt="logo of Ask Away"
            />
          </div>
          <div className="btn-container">
            <button
              className="btn-title"
              onClick={() => nextPageTest(title, form)}
            >
              Start game
            </button>
            <button className="btn-title" onClick={openModal}>
              How to play
            </button>
          </div>
          <p className="title">
            Coded by{" "}
            <a href="https://bit.ly/383XPVf">
              <b style={{ color: "var(--primary-100" }}>' ClauHaus '</b>
            </a>
          </p>

          {options && <Options />}
          {modal && <HowTo />}
        </div>
      </section>
    </>
  );
};

export default Title;
