import "./App.css";
import Intro from "./Intro";
import Title from "./Title";
import { Form } from "./Form";
import FormContinue from "./FormContinue";
import LoadingPage from "./LoadingPage";
import LoadingRestart from "./LoadingRestart";
import Question from "./Question";
import KnowOne from "./KnowOne";
import Ending from "./Ending";
import IntroSp from "./spanish/IntroSp";
import TitleSp from "./spanish/TitleSp";
import { FormSp } from "./spanish/FormSp";
import FormContinueSp from "./spanish/FormContinueSp";
import LoadingPageSp from "./spanish/LoadingPageSp";
import LoadingRestartSp from "./spanish/LoadingRestartSp";
import QuestionSp from "./spanish/QuestionSp";
import KnowOneSp from "./spanish/KnowOneSp";
import EndingSp from "./spanish/EndingSp";

// import { library } from "@fortawesome/fontawesome-svg-core";
import { useGlobalContext } from "./context";

function App() {
  const {
    intro,
    title,
    form,
    formContinue,
    loadingPage,
    loadingRestart,
    question,
    knowOne,
    language,
    ending,
  } = useGlobalContext();
  if (language === "spanish") {
    return (
      <>
        {intro && <IntroSp />}
        {title && <TitleSp />}
        {form && <FormSp />}
        {formContinue && <FormContinueSp />}
        {loadingPage && <LoadingPageSp />}
        {loadingRestart && <LoadingRestartSp />}
        {question && <QuestionSp />}
        {knowOne && <KnowOneSp />}
        {ending && <EndingSp />}
      </>
    );
  }

  return (
    <>
      {intro && <Intro />}
      {title && <Title />}
      {form && <Form />}
      {formContinue && <FormContinue />}
      {loadingPage && <LoadingPage />}
      {loadingRestart && <LoadingRestart />}
      {question && <Question />}
      {knowOne && <KnowOne />}
      {ending && <Ending />}
    </>
  );
}

export default App;
