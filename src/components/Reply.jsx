function Reply({ selectedFile, tumor, setRender }) {
  function handleSubmit(event) {
    event.preventDefault();
    setRender("Input");
  }
  return (
    <>
      <div className="container">
        <div className="form-container">
          <form action="" onSubmit={handleSubmit}>
            <div className="reply-container">
              <img src={URL.createObjectURL(selectedFile)} alt="" />
              <label className="label" htmlFor="tumor">
                {tumor}
              </label>
              <div>
                <button>Go back</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reply;
