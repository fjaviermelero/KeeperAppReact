import React, {useState} from "react";

function CreateArea(props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function updateTitle(event){
    setTitle(event.target.value)
  }

  function updateContent(event){
    setContent(event.target.value)
  }

  function addNote(event){
    props.addNote(title, content);
    event.preventDefault();
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input name="title" placeholder="Title" value = {title} onChange = {updateTitle}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value = {content} onChange = {updateContent}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
