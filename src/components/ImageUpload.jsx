import { useState } from "react";

function ImageUpload({ selectedFile, setSelectedFile }) {
  function handleFileSelect(event) {
    setSelectedFile = event.target.files[0];
  }

  return (
    <>
      <div>
        <input type="file" name="image" onChange={handleFileSelect} />
      </div>
    </>
  );
}

export default ImageUpload;
