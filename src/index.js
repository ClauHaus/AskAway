import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
//IMPORT HOOKS
import useSound from "use-sound";
//IMPORT DATA ARRAYS
import howToDataSp from "./spanish/howToDataSp";
import howToData from "./howToData";
import tips from "./tips";
import tipsSp from "./spanish/tipsSp";
import bigData from "./questions";
import bigDataSp from "./spanish/questionsSp";
import factsSp from "./spanish/factsSp";
import facts from "./facts";
//IMPORT FILES
import titleImg from "./images/title.png";
import claudio from "./images/claudio.JPG";
import clauhaus from "./images/clauhaus.gif";
import notFound from "./images/notFound.jpg";
import startup from "./sounds/startup.mp3";
import pop from "./sounds/pop.mp3";
import click1 from "./sounds/click1.mp3";
import clickOptions from "./sounds/clickOptions.mp3";
import levelClear from "./sounds/levelClear.mp3";
import finalLevelFanfare from "./sounds/finalLevelFanfare.mp3";
import errorSound from "./sounds/errorSound.mp3";
import rightSound from "./sounds/rightSound.mp3";
import applause from "./sounds/applause.mp3";
import creditsSound from "./sounds/creditsSound.mp3";
//IMPORT COMPONENTS
import DataFolder from "./DataFolder";
import GameFolder from "./GameFolder";
import About from "./About";
import HowToSp from "./spanish/HowToSp";
import HowTo from "./HowTo";
import OptionsSp from "./spanish/OptionsSp";
import Options from "./Options";
import AnswersSp from "./spanish/AnswersSp";
import Answers from "./Answers";
import GameOverSp from "./spanish/resultsSp/GameOverSp";
import GameOver from "./results/GameOver";
import ZeroPointsSp from "./spanish/resultsSp/ZeroPointsSp";
import ZeroPoints from "./results/ZeroPoints";
import TimeOverSp from "./spanish/resultsSp/TimeOverSp";
import TimeOver from "./results/TimeOver";
import WindowInfo from "./WindowInfo";
import InformationContainerBottom from "./InformationContainerBottom";
import InformationContainerTop from "./InformationContainerTop";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export {
  //EXPORT HOOKS
  useSound,
  //EXPORT DATA ARRAYS
  howToDataSp,
  howToData,
  tips,
  tipsSp,
  bigData,
  bigDataSp,
  factsSp,
  facts,
  //EXPORT FILES
  titleImg,
  claudio,
  clauhaus,
  notFound,
  startup,
  pop,
  click1,
  clickOptions,
  levelClear,
  finalLevelFanfare,
  errorSound,
  rightSound,
  applause,
  creditsSound,
  //EXPORT COMPONENTS
  About,
  DataFolder,
  GameFolder,
  InformationContainerTop,
  InformationContainerBottom,
  WindowInfo,
  HowToSp,
  HowTo,
  OptionsSp,
  Options,
  AnswersSp,
  Answers,
  GameOverSp,
  GameOver,
  ZeroPointsSp,
  ZeroPoints,
  TimeOverSp,
  TimeOver,
};
