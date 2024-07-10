import { useState } from "react";

function FormContainer({ selectedFile, setSelectedFile, setRender, setTumor }) {
  const [text, setText] = useState("");

  function handleFileSelect(event) {
    setSelectedFile(event.target.files[0]);
    setText("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (selectedFile === null) {
      setText("Please select a valid file");
      return;
    }

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

      setRender("Reply");

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
    setTumor(tumor);
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form action="POST" onSubmit={handleSubmit} className="form">
            <div className="label-container">
              <label className="label">Please upload your</label>
              <label htmlFor="mri" className="label-mri">
                Brain MRI
              </label>
            </div>
            <div>
              <input type="file" name="image" onChange={handleFileSelect} />
            </div>
            <div className="submit-container">
              <button className="button-81" role="button" type="submit">
                Upload
              </button>
              <label className="label">{text}</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContainer;
