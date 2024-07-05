import { useState } from "react";

function FormContainer() {
  const [text, setText] = useState("Please enter your Image");
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
      });

      if (response.ok) {
        console.log("file uploaded successfully");
      } else {
        console.error("failed to upload file");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form action="POST" onSubmit={handleSubmit}>
            <div>
              <label className="label">{text}</label>
            </div>
            <div>
              <input type="file" name="image" onChange={handleFileSelect} />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormContainer;
