import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  intro: true,
  title: false,
  modal: false,
  options: false,
  form: false,
  formContinue: false,
  loadingPage: false,
  loadingRestart: false,
  question: false,
  knowOne: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextPage = (erase, add) => {
    erase(false);
    add(true);
  };

  const nextPageIntro = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_INTRO", payload: { erase, add } });
  };

  const nextPageForm = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_FORM", payload: { erase, add } });
  };

  const nextPageOne = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_ONE", payload: { erase, add } });
  };

  const nextPageTwo = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_TWO", payload: { erase, add } });
  };

  const nextPageRestart = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_RESTART", payload: { erase, add } });
  };

  const nextPageThree = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_THREE", payload: { erase, add } });
  };

  const nextPageFour = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_FOUR", payload: { erase, add } });
  };

  const nextPageFive = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_FIVE", payload: { erase, add } });
  };

  const nextPageBack = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_BACK", payload: { erase, add } });
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

  const clock = useCallback(() => {
    const today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    minutes = checkTime(minutes);
    const actualTime = `${hour} : ${minutes}`;
    return actualTime;
  }, []);
  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  const [time, setActualTime] = useState(clock);

  useEffect(() => {
    setTimeout(() => {
      setActualTime(clock);
    }, 60000);
  }, [time, clock]);

  const restartGame = () => {
    window.location.reload();
  };

  const [level, setLevel] = useState(0);

  return (
    <AppContext.Provider
      value={{
        time,
        ...state,
        level,
        setLevel,
        restartGame,
        nextPage,
        openOptions,
        closeOptions,
        openModal,
        closeModal,
        nextPageIntro,
        nextPageForm,
        nextPageOne,
        nextPageTwo,
        nextPageRestart,
        nextPageThree,
        nextPageFour,
        nextPageFive,
        nextPageBack,
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
