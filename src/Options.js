import React, { useState, useEffect } from "react";
import titleImg from "./images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { useGlobalContext } from "./context";

const Options = () => {
  const { difficulty, setDifficulty, closeOptions } = useGlobalContext();
  const [pressNormal, setPressNormal] = useState("");
  const [pressHard, setPressHard] = useState("");
  const [pressHell, setPressHell] = useState("");

  useEffect(() => {
    if (difficulty === "normal") {
      setPressNormal("btn-options-selected");
      setPressHard("");
      setPressHell("");
    }
    if (difficulty === "hard") {
      setPressNormal("");
      setPressHard("btn-options-selected");
      setPressHell("");
    }
    if (difficulty === "hell") {
      setPressNormal("");
      setPressHard("");
      setPressHell("btn-options-selected");
    }
  }, [difficulty]);

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
        <h5 className="title-options-sub">Languages</h5>
        <select id="language" name="language">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
        </select>
        <h5 className="title-options-sub">Difficulty</h5>
        <div className="btn-container-options">
          <button
            className={`"btn-options" ${pressNormal}`}
            value="normal"
            onClick={(e) => setDifficulty(e.target.value)}
          >
            Normal Mode
          </button>
          <button
            className={`"btn-options" ${pressHard}`}
            value="hard"
            onClick={(e) => setDifficulty(e.target.value)}
          >
            Hard Mode
          </button>
          <button
            className={`"btn-options" ${pressHell}`}
            value="hell"
            onClick={(e) => setDifficulty(e.target.value)}
          >
            Hell Mode
          </button>
        </div>
        <h5 className="title-options-sub">Themes</h5>
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
