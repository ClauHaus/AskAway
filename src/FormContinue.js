import React, { useState, useEffect } from "react";
import HowTo from "./HowTo";
import { useGlobalContext } from "./context";

console.log("hello wolrd");

const FormContinue = () => {
  const { modal, openModal, nextPageTwo, formContinue, loadingPage } =
    useGlobalContext();
  const newName = JSON.parse(localStorage.getItem("newName"));
  const newAge = JSON.parse(localStorage.getItem("newAge"));
  const newCountry = JSON.parse(localStorage.getItem("newCountry"));
  // const result = JSON.parse(localStorage.getItem("newTest"));
  // console.log(result);
  return (
    <section className="container-back">
      <div className="container">
        <article className="form-text">
          <p>
            Welcome <b>{newName} </b>to Ask Away! We will put your {newAge}{" "}
            years of hard obtained knowledge to the most defying challenges.
          </p>
          <p>
            If you have any doubts about the rules or instructions of this game,
            we highly recommend you to check on the "How To play" section.
          </p>
          <button className="btn btn-title center-item" onClick={openModal}>
            How to play
          </button>
          <p>
            Now everything is set to wonder us with your mental speed and sharp
            mind and see how well you represent {newCountry}. Let's begin!
          </p>
        </article>

        <button
          className="btn btn-title center-item"
          onClick={() => nextPageTwo(formContinue, loadingPage)}
        >
          Continue
        </button>
        {modal && <HowTo />}
      </div>
    </section>
  );
};

export default FormContinue;
