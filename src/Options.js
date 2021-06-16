import React from "react";
import titleImg from "./images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "./context";

const Options = () => {
  const { closeOptions } = useGlobalContext();
  return (
    <section className="container-back-options">
      <header className="window-info">
        <div className="window-upper">
          <section className="upper-left">
            <img
              className="window-image"
              src={titleImg}
              alt="logo of Ask Away"
            />
            <div>C:\Desktop\Askaway\Settings</div>
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
      <section className="options">
        <button className="close-modal-btn" onClick={closeOptions}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h4 className="title-options title-options-back">Settings</h4>
        <h4 className="title-options-sub">Languages</h4>
        <ul className="options-items">
          <input type="checkbox" defaultChecked />
          <li className="options-settings">English</li>
          <input type="checkbox" />
          <li className="options-settings">Spanish</li>
        </ul>
        <h4 className="title-options-sub">Themes</h4>
        <ul className="options-items">
          <input type="checkbox" defaultChecked />
          <li className="options-settings">Light</li>
          <input type="checkbox" />
          <li className="options-settings">Dark</li>
        </ul>
      </section>
    </section>
  );
};

export default Options;
