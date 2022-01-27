import React, { useState } from "react";
// import App from "App";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    setNote({ ...note, [event.target.name]: event.target.value });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
