import axios from "axios";

function Submit({ selectedFile }) {
  function handleSubmit() {
    if (selectedFile === undefined) return;
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    axios.post("/", fd).then((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Submit;
