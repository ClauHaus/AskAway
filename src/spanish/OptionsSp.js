import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import click1 from "./../sounds/click1.mp3";
import pop from "./../sounds/pop.mp3";
import titleImg from "./../images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context";
import WindowInfo from "../WindowInfo";

const OptionsSp = () => {
  const {
    difficulty,
    setDifficulty,
    language,
    setLanguage,
    theme,
    setTheme,
    closeOptions,
    sound,
  } = useGlobalContext();
  const [pressNormal, setPressNormal] = useState("");
  const [pressHard, setPressHard] = useState("");
  const [pressHell, setPressHell] = useState("");
  const [english, setEnglish] = useState("");
  const [spanish, setSpanish] = useState("");
  const [dark, setDark] = useState("");
  const [light, setLight] = useState("");

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

  useEffect(() => {
    if (language === "english") {
      setEnglish("btn-options-selected");
      setSpanish("");
    } else {
      setEnglish("");
      setSpanish("btn-options-selected");
    }
  }, [language]);

  useEffect(() => {
    if (theme === "dark") {
      setDark("btn-options-selected");
      setLight("");
    } else {
      setDark("");
      setLight("btn-options-selected");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("newDifficulty", JSON.stringify(difficulty));
    localStorage.setItem("newLanguage", JSON.stringify(language));
    localStorage.setItem("newTheme", JSON.stringify(theme));
  }, [difficulty, language, theme]);

  const [play] = useSound(click1, { volume: 0.5 });
  const [play1] = useSound(pop, { volume: 0.5 });

  const soundAction = (action) => {
    play();
    action();
  };

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
            <div>C:\Askaway\Opciones</div>
          </section>
          <WindowInfo />
        </div>
      </header>
      <section className="options">
        <button
          className="close-modal-btn"
          onClick={sound ? () => soundAction(closeOptions) : closeOptions}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h4 className="title-options title-options-back">Opciones</h4>
        <h5 className="title-options-sub">Idiomas</h5>
        <div className="btn-container-options">
          <button
            className={`btn-options ${english}`}
            value="english"
            onClick={(e) =>
              sound
                ? (setLanguage(e.target.value), play1())
                : setLanguage(e.target.value)
            }
          >
            Inglés
          </button>
          <button
            className={`btn-options ${spanish}`}
            value="spanish"
            onClick={(e) =>
              sound
                ? (setLanguage(e.target.value), play1())
                : setLanguage(e.target.value)
            }
          >
            Español
          </button>
        </div>
        <h5 className="title-options-sub">Dificultad</h5>
        <div className="btn-container-options">
          <button
            className={`btn-options ${pressNormal}`}
            value="normal"
            onClick={(e) =>
              sound
                ? (play1(), setDifficulty(e.target.value))
                : setDifficulty(e.target.value)
            }
          >
            Modo Normal
          </button>
          <button
            className={`btn-options ${pressHard}`}
            value="hard"
            onClick={(e) =>
              sound
                ? (play1(), setDifficulty(e.target.value))
                : setDifficulty(e.target.value)
            }
          >
            Modo Difícil
          </button>
          <button
            className={`btn-options ${pressHell}`}
            value="hell"
            onClick={(e) =>
              sound
                ? (play1(), setDifficulty(e.target.value))
                : setDifficulty(e.target.value)
            }
          >
            Modo Infierno
          </button>
        </div>
        <h5 className="title-options-sub">Temas</h5>
        <div className="btn-container-options">
          <button
            className={`btn-options ${dark}`}
            value="dark"
            onClick={(e) =>
              sound
                ? (play1(), setTheme(e.target.value))
                : setTheme(e.target.value)
            }
          >
            Oscuro
          </button>
          <button
            className={`btn-options ${light}`}
            value="light"
            onClick={(e) =>
              sound
                ? (play1(), setTheme(e.target.value))
                : setTheme(e.target.value)
            }
          >
            Claro
          </button>
        </div>
      </section>
    </section>
  );
};

export default OptionsSp;
