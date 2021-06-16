import "./App.css";
import Intro from "./Intro";
import Title from "./Title";
import { Form } from "./Form";
import FormContinue from "./FormContinue";
import LoadingPage from "./LoadingPage";
import QuestionsOne from "./QuestionsOne";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { useGlobalContext } from "./context";

function App() {
  const { intro, title, form, formContinue, loadingPage, questionsOne } =
    useGlobalContext();
  return (
    <>
      {intro && <Intro />}
      {title && <Title />}
      {form && <Form />}
      {formContinue && <FormContinue />}
      {loadingPage && <LoadingPage />}
      {questionsOne && <QuestionsOne />}
    </>
  );
}

export default App;
