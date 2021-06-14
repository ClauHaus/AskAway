import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

export const Form = () => {
  const { nextPageOne, form, formContinue } = useGlobalContext();
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
  }, [person]);
  return (
    <section className="container-back">
      <article className="form">
        <h4 className="title">Please provide us some info about yourself:</h4>
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
            <button type="submit" className="form-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};
