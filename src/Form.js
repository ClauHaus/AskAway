import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

import {
  //HOOKS
  useSound,
  //FILES
  titleImg,
  click1,
  //COMPONENTS
  About,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
} from "./index";

export const Form = () => {
  const { nextPageOne, form, formContinue, sound, about } = useGlobalContext();
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

  const [play1] = useSound(click1, { volume: 0.5 });

  const infoWidth = window.innerWidth;

  return (
    <>
      {infoWidth >= 1024 && <InformationContainerTop />}
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
            <WindowInfo />
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
        {infoWidth >= 1024 && about && <About />}
      </section>
      <InformationContainerBottom />
    </>
  );
};
