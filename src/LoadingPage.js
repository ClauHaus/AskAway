import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const LoadingPage = () => {
  const { nextPageThree, loadingPage, questionsOne } = useGlobalContext();

  useEffect(() => {
    let timeOut = setTimeout(() => {
      nextPageThree(loadingPage, questionsOne);
    }, 6000); //PASARLO A 5000!
    return () => clearTimeout(timeOut);
    // clearTimeout(timeout); Revisar si puede haber problemas de no sacar el timeOut
  }, [nextPageThree, loadingPage, questionsOne]); //Revisar estas dependencies, en caso de error quitarlas y solo queda un warning

  return (
    <section className="container-back-loading">
      <div className="container-loading">
        <h3 className="title title-back">Level 1</h3>
        <div className="loading"></div>
        <section className="loading-items">
          <p>Get at least 30 points</p>
          <p>Obtain 10 correct answers</p>
          <p>Achieve it under 60 seconds</p>
        </section>
        {/* <h4 className="title title-back">Loading...</h4> */}
      </div>
    </section>
  );
};

export default LoadingPage;
