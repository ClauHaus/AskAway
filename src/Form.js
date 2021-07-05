import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import pop from "./sounds/pop.mp3";
import click1 from "./sounds/click1.mp3";
import titleImg from "./images/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faWindowMinimize,
  faMailBulk,
  faGripLinesVertical,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import {
  faWindows,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useGlobalContext } from "./context";

export const Form = () => {
  const {
    nextPageOne,
    form,
    formContinue,
    time,
    restartGame,
    sound,
    setSound,
  } = useGlobalContext();
  const [person, setPerson] = useState({ firstName: "", age: "", country: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
    // if (person.firstName && person.age && person.country) {
    //   const newPerson = { ...person, id: new Date().getTime().toString() }; //Revisar estas dos donde van?
    //   setPeople([...people, newPerson]); //
    // }
  };
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const days = new Date().getDate();
  const months = new Date().getMonth();
  const years = new Date().getFullYear();
  const fullDate = `at ${hours}:${minutes} on ${days}/${months}/${years}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.age && person.country) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", age: "", country: "" });
      nextPageOne(form, formContinue);
    }
  };
  useEffect(() => {
    localStorage.setItem("newName", JSON.stringify(person.firstName));
    localStorage.setItem("newAge", JSON.stringify(person.age));
    localStorage.setItem("newCountry", JSON.stringify(person.country));
    // localStorage.setItem("newTest", JSON.stringify(people));
    // Idealmente seria pasar los tres elementos al Array que ya esta creado y retirar la informacion direcamtente del LOCALHOST --> INVESTIGAR!
    localStorage.setItem(
      "newFullData",
      JSON.stringify({
        topName: person.firstName,
        topCountry: person.country,
        topAge: person.age,
        topDay: fullDate,
      })
      //Asi se pasan los 3, no a un array sino a un objeto
    );
    // eslint-disable-next-line
  }, [person]);

  const [playPop] = useSound(pop, { volume: 0.5 });
  const [play1] = useSound(click1, { volume: 0.5 });
  const makeSound = () => {
    setSound(!sound);
    playPop();
    localStorage.setItem("newSound", JSON.stringify(!sound));
  };

  return (
    <>
      <section className="container-back">
        <header className="window-info">
          <div className="window-upper">
            <section className="upper-left">
              <img
                className="window-image"
                src={titleImg}
                alt="logo of Ask Away"
              />
              <div>C:\Askaway\Form</div>
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
        <article className="container">
          <h4 className="form-title">
            Please provide us some info about yourself
          </h4>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                className="form-input"
                required
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your name"
                value={person.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                className="form-input"
                required
                type="number"
                id="age"
                name="age"
                max="99"
                placeholder="Enter your age"
                value={person.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <input
                className="form-input"
                required
                type="text"
                id="country"
                name="country"
                placeholder="Where are you from?"
                value={person.country}
                onChange={handleChange}
              />
            </div>
            <div className="btn-container">
              <button
                type="submit"
                className="form-btn"
                // onClick={handleSubmit}
                onClick={() => (sound ? (handleSubmit, play1()) : handleSubmit)}
              >
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
      <section>
        <footer className="container-bottom">
          <div>
            <button className="btn-restart" onClick={restartGame}>
              <FontAwesomeIcon icon={faWindows}></FontAwesomeIcon>
              ReStart
            </button>
          </div>
          <FontAwesomeIcon
            icon={faGripLinesVertical}
            className="container-bottom-icons-span"
          ></FontAwesomeIcon>
          <a
            href="https://github.com/ClauHaus/AskAway"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="container-bottom-icons"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/claudio-aime-2a91a034/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="container-bottom-icons"
            />
          </a>
          <a
            href="https://twitter.com/ClauHaus_"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="container-bottom-icons"
              style={{ color: "black" }}
            />
          </a>
          <a
            href="mailto:claudio.aime32@gmail.com?subject=Regarding%20Askaway"
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >
            <FontAwesomeIcon
              icon={faMailBulk}
              className="container-bottom-icons"
            />
          </a>
          <FontAwesomeIcon
            icon={faGripLinesVertical}
            className="container-bottom-icons-span"
          ></FontAwesomeIcon>
          <div className="container-bottom-image">
            <img
              className="container-bottom-icons-image"
              src={titleImg}
              alt="logo of Ask Away"
            />
          </div>
          <button
            className="container-bottom-sound"
            onClick={() => makeSound()}
          >
            {sound ? (
              <FontAwesomeIcon icon={faVolumeUp}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>
            )}
          </button>
          <div className="container-bottom-clock">{time}</div>
        </footer>
      </section>
    </>
  );
};
