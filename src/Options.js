import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "./context";

const Options = () => {
  const { closeOptions } = useGlobalContext();
  return (
    <div className="modal-container">
      <div className="modal-overlay show-modal">
        <section className="options">
          <button className="close-modal-btn" onClick={closeOptions}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h3 className="title-options title-options-back">Settings</h3>
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
      </div>
    </div>
  );
};

export default Options;
