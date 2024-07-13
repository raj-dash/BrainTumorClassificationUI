function Reply({
  selectedFile,
  setSelectedFile,
  tumor,
  setRender,
  probability,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    setSelectedFile(null);
    setRender("Input");
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form action="" onSubmit={handleSubmit} className="form">
            <div className="reply-container">
              <img src={URL.createObjectURL(selectedFile)} alt="MRI" />
              <label className="label tumor-label" htmlFor="tumor">
                {tumor}
              </label>
              <label
                className="label probability-label"
                htmlFor="probability"
              >{`Probability: ${probability}%`}</label>
              <div>
                <button className="button-81" role="button" type="submit">
                  Go Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reply;
