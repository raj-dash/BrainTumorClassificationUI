import { useState } from "react";

function FormContainer() {
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData();
    fd.append("image", selectedFile);

    try {
      const endpoint = "http://127.0.0.1:8000/uploadfile/";
      const response = await fetch(endpoint, {
        method: "POST",
        body: fd,
      })
        .then((response) => response.json())
        .then((data) => getTumor(data["prediction"]));

      // if (response.ok) {
      //   console.log("file uploaded successfully");
      //   console.log(response);
      // } else {
      //   console.error("failed to upload file");
      // }
    } catch (error) {
      console.error(error);
    }
  }

  function getTumor(prediction) {
    let tumor = "";
    switch (prediction) {
      case "glioma_tumor":
        tumor = "Glioma Tumor";
        break;
      case "meningioma_tumor":
        tumor = "Meningioma Tumor";
      case "no_tumor":
        tumor = "No Tumor";
      case "pituitary_tumor":
        tumor = "Pituitary Tumor";
    }
    setText(tumor);
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form action="POST" onSubmit={handleSubmit}>
            <div>
              <label className="label">Please enter your image</label>
            </div>
            <div>
              <input type="file" name="image" onChange={handleFileSelect} />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
            <div>
              <h2>{text}</h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContainer;
