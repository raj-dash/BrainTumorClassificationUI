import { useState } from "react";
import ImageUpload from "./ImageUpload";
import Label from "./Label";

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
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContainer;
