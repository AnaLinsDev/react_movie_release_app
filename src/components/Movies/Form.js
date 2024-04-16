import React, { useState } from "react";

function Form(props) {
  const [title, setTitle] = useState(props.edit ? props.edit.value.title : "");

  const [error, setError] = useState("");

  const [release, setRelease] = useState(
    props.edit
      ? props.edit.value.release
      : new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1 > 9
            ? new Date().getMonth() + 1
            : "0" + (new Date().getMonth() + 1)) +
          "-" +
          new Date().getDate()
  );

  const goBackToList = (e) => {
    props.Cancel();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || /^\s*$/.test(title)) {
      setError("Title is not Optional.")
    }
    else {
      props.onSubmit({
        id: props.edit ? props.edit.id : Math.floor(Math.random() * 10000),
        value: mountValue(),
      });
  
      setTitle("");
      setRelease("");
    }
  };

  const mountValue = (movie) => {
    return {
      title,
      release,
    };
  };

  return (
    <form onSubmit={handleSubmit} className="tvshow-form">
      <h1>
      {props.edit ? "Edit a Show" : "Add a new Show"}
      </h1>
      <input
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => {setTitle(e.target.value); setError('');}}
        name="text"
        className="tvshow-input edit"
      />

      <div>
        <label for="start" className="tvshow-input edit">
          Release Date:
        </label>

        <input
          id="release"
          type="date"
          name="date"
          value={release}
          onChange={(e) => setRelease(e.target.value)}
          className="tvshow-input edit"
        />
      </div>

      <div>
        <button onClick={handleSubmit} className="tvshow-button edit">
          {props.edit ? "Edit Show" : "Add Show"}
        </button>

        <button onClick={goBackToList} className="tvshow-button edit">
          Go back
        </button>
      </div>

      { error !== "" ? (<div className="error-message">
        {error}
      </div>) : (<div></div>)}
    </form>
  );
}

export default Form;
