import { useState } from "react";
import ImageUpload from "./ImageUpload";
import Label from "./Label";
import Submit from "./Submit";

function FormContainer() {
  const [selectedFile, setSelectedFile] = useState();
  return (
    <>
      <div className="container">
        <div className="form-container">
          <form action="">
            <Label />
            <ImageUpload
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />
            <Submit selectedFile={selectedFile} />
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContainer;
