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
//IMPORT FILES
import titleImg from "./images/title.png";
import startup from "./sounds/startup.mp3";
import pop from "./sounds/pop.mp3";
import click1 from "./sounds/click1.mp3";
import clickOptions from "./sounds/clickOptions.mp3";
//IMPORT COMPONENTS
import DataFolder from "./DataFolder";
import GameFolder from "./GameFolder";
import About from "./About";
import HowToSp from "./spanish/HowToSp";
import HowTo from "./HowTo";
import OptionsSp from "./spanish/OptionsSp";
import Options from "./Options";
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
  //EXPORT FILES
  titleImg,
  startup,
  pop,
  click1,
  clickOptions,
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
};
