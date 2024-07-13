import { useState } from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";

import Title from "./components/Title";
import Reply from "./components/Reply";
import BackgroundAnimation from "./components/BackgroundAnimation";

function App() {
  const [render, setRender] = useState("Input");
  const [selectedFile, setSelectedFile] = useState(null);
  const [tumor, setTumor] = useState("");
  const [probability, setProbability] = useState(null);

  return (
    <>
      <BackgroundAnimation />
      <Title />
      {render === "Input" ? (
        <FormContainer
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          setRender={setRender}
          setTumor={setTumor}
          setProbability={setProbability}
        />
      ) : (
        <Reply
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          tumor={tumor}
          setRender={setRender}
          probability={probability}
        />
      )}
    </>
  );
}

export default App;
