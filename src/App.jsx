import { useState } from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";

import Title from "./components/Title";

function App() {
  const [state, setState] = useState("Input");

  return (
    <>
      <Title />
      {state === "Input" ? <FormContainer /> : "hello"}
    </>
  );
}

export default App;
