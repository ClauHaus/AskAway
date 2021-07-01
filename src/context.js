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
  ending: false,
  highScore: false,
  credits: false,
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

  const nextPageEnding = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_ENDING", payload: { erase, add } });
  };

  const nextPageHighScore = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_HIGHSCORE", payload: { erase, add } });
  };

  const nextPageCredits = (erase, add) => {
    dispatch({ type: "NEXT_PAGE_CREDITS", payload: { erase, add } });
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

  const newLanguage = JSON.parse(localStorage.getItem("newLanguage"));
  const newDifficulty = JSON.parse(localStorage.getItem("newDifficulty"));
  const newTheme = JSON.parse(localStorage.getItem("newTheme"));

  const [level, setLevel] = useState(0);
  const [difficulty, setDifficulty] = useState(
    newDifficulty ? newDifficulty : "normal"
  );
  const [language, setLanguage] = useState(
    newLanguage ? newLanguage : "english"
  );

  const [theme, setTheme] = useState(newTheme ? newTheme : "dark");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const timerDifficulty = () => {
    let result = 60;
    if (difficulty === "normal") {
      result = 60; //60
    }
    if (difficulty === "hard") {
      result = 55;
    }
    if (difficulty === "hell") {
      result = 45;
    }
    return result;
  };

  const scoreDifficulty = () => {
    let result = 10;
    if (difficulty === "normal") {
      result = 10;
    }
    if (difficulty === "hard") {
      result = 8;
    }
    if (difficulty === "hell") {
      result = 6;
    }
    return result;
  };

  return (
    <AppContext.Provider
      value={{
        time,
        ...state,
        difficulty,
        language,
        level,
        theme,
        setLevel,
        setDifficulty,
        setLanguage,
        setTheme,
        timerDifficulty,
        scoreDifficulty,
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
        nextPageEnding,
        nextPageHighScore,
        nextPageCredits,
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
