import React, { useState, useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  title: true,
  modal: false,
  options: false,
  form: false,
  formContinue: false,
  loadingPage: false,
  questionsOne: false,
};

console.log("checking");

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextPage = (erase, add) => {
    erase(false);
    add(true);
  };

  const nextPageTest = (erase, add) => {
    dispatch({ type: "NEXT_PAGE", payload: { erase, add } });
  };

  const nextPageOne = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_ONE", payload: { erase, add } });
  };

  const nextPageTwo = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_TWO", payload: { erase, add } });
  };

  const nextPageThree = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_THREE", payload: { erase, add } });
  };

  const openOptions = () => {
    dispatch({ type: "OPEN_OPTIONS" });
  };

  const closeOptions = () => {
    dispatch({ type: "CLOSE_OPTIONS" });
  };

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        nextPage,
        openOptions,
        closeOptions,
        openModal,
        closeModal,
        nextPageTest,
        nextPageOne,
        nextPageTwo,
        nextPageThree,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
