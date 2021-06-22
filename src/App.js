import "./App.css";
import Intro from "./Intro";
import Title from "./Title";
import { Form } from "./Form";
import FormContinue from "./FormContinue";
import LoadingPage from "./LoadingPage";
import LoadingRestart from "./LoadingRestart";
import Question from "./Question";
import KnowOne from "./KnowOne";
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
  } = useGlobalContext();
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
    </>
  );
}

export default App;
