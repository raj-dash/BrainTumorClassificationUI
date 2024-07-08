import { useState } from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";

import Title from "./components/Title";
import Reply from "./components/Reply";

function App() {
  const [render, setRender] = useState("Input");
  const [selectedFile, setSelectedFile] = useState(null);
  const [tumor, setTumor] = useState("");

  return (
    <>
      <Title />
      {render === "Input" ? (
        <FormContainer
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setRender={setRender}
          setTumor={setTumor}
        />
      ) : (
        <Reply
          selectedFile={selectedFile}
          tumor={tumor}
          setRender={setRender}
        />
      )}
    </>
  );
}

export default App;
