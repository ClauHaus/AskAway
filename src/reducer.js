const reducer = (state, action) => {
  if (action.type === "OPEN_OPTIONS") {
    return { ...state, options: true };
  }
  if (action.type === "CLOSE_OPTIONS") {
    return { ...state, options: false };
  }
  if (action.type === "OPEN_MODAL") {
    return { ...state, modal: true };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, modal: false };
  }
  if (action.type === "NEXT_PAGE_FORM") {
    //ASI FUNCIONA, el objetivo es automatizar el paso de datos para solo utilizar una funcion
    // const { erase, add } = action.payload;

    // console.log(action.payload);
    // console.log(state);
    // console.log(action.payload);
    return { ...state, title: false, form: true };
  }
  if (action.type === "NEXT_PAGE_INTRO") {
    return { ...state, intro: false, title: true };
  }
  if (action.type === "NEXT_PAGE_ONE") {
    return { ...state, form: false, formContinue: true };
  }
  if (action.type === "NEXT_PAGE_TWO") {
    return { ...state, formContinue: false, loadingPage: true };
  }
  if (action.type === "NEXT_PAGE_THREE") {
    return { ...state, loadingPage: false, questionsOne: true };
  }
  if (action.type === "NEXT_PAGE_FOUR") {
    return { ...state, questionsOne: false, knowOne: true };
  }
  if (action.type === "NEXT_PAGE_FIVE") {
    return { ...state, knowOne: false, loadingPage: true };
  }

  throw new Error("There is no matching action type");
};

export default reducer;
