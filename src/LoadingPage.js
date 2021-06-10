import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const LoadingPage = () => {
  const { nextPageThree, loadingPage, questionsOne } = useGlobalContext();

  useEffect(() => {
    let timeOut = setTimeout(() => {
      nextPageThree(loadingPage, questionsOne);
    }, 1000); //PASARLO A 5000!
    return () => clearTimeout(timeOut);
    // clearTimeout(timeout); Revisar si puede haber problemas de no sacar el timeOut
  }, [nextPageThree, loadingPage, questionsOne]); //Revisar estas dependencies, en caso de error quitarlas y solo queda un warning

  return (
    <section className="container-back-loading">
      <div className="container-loading">
        <div className="title title-back">Level 1</div>
        <div className="loading"></div>
        <h1 className="title title-back">Loading...</h1>
      </div>
    </section>
  );
};

export default LoadingPage;
