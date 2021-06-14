import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScroll,
  faNetworkWired,
  faExclamation,
  faClock,
  faCashRegister,
  faCheckSquare,
  faFistRaised,
} from "@fortawesome/free-solid-svg-icons";

const howToData = [
  {
    id: 0,
    title: "Introduction",
    text: "This game is going to test how much you think you know about different topics such as Sports, World History, Geography, Arts and much more, and also how fast you can be by clicking the right answer while checking for different challenges along the game.",
    icon: <FontAwesomeIcon icon={faScroll} />,
  },
  {
    id: 1,
    title: "Levels",
    text: "You will face several levels, and each time that you complete them the difficulty is going to get higher, both in the actual content of the questions and also in different challenges that you will discover.",
    icon: <FontAwesomeIcon icon={faNetworkWired} />,
  },
  {
    id: 2,
    title: "Top screen",
    text: "On the top of the screen you can check in which level you are and right below, you will find a random question. Just under you  have two very important items to which you will need to pay close atention.",
    icon: <FontAwesomeIcon icon={faExclamation} />,
  },
  {
    id: 3,
    title: "Timer",
    text: "The `Timer` will be set by default in 60 seconds, and that's going to be the amount of time to answer 10 questions in order to advance to the next level. In case the time runs out you will get a `Time Out` and the chance to replay the level or start from the beginning",
    icon: <FontAwesomeIcon icon={faClock} />,
  },
  {
    id: 4,
    title: "Points",
    text: "The second item that's right next to the `Timer` are the `Points`, which are going to be working the following way. At the very beginning you will get 10 Bonus Points and they will change depending on your performance.",
    icon: <FontAwesomeIcon icon={faCashRegister} />,
  },
  {
    id: 5,
    title: "Correct?",
    text: "For each correct answer you will get 5 more points, but if you choose an incorrect answer you get 2 points discounted from your total. If you reach 0 points you will get a `Game Over` and the chance to replay the level or start from the beginning.",
    icon: <FontAwesomeIcon icon={faCheckSquare} />,
  },
  {
    id: 6,
    title: "Play!",
    text: "You will not move on into the next question until you get the correct one. Hope everything is clear and i think that the best way to learn how to play the game is actually trying, so why you just don't give it a try and don't forget to have fun.",
    icon: <FontAwesomeIcon icon={faFistRaised} />,
  },
];

export default howToData;
