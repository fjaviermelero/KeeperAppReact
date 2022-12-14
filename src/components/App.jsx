import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(noteTitle, noteContent) {
    setNotes([ ...notes, {title: noteTitle, content: noteContent}    ]);
  }

  function deleteNote(indexToDelete){

    const newNotes = notes.filter(

      (note, index) => {
        console.log(index !== indexToDelete)
        return index !== indexToDelete;
      }
    );

    setNotes(newNotes);

  }

  return (
    <div>
      <Header />

      <CreateArea 

        addNote = {addNote}

      />

    {notes.map(

        (note, index) => {
          return <Note key={index} index = {index} title={note.title} content={note.content} deleteNote = {deleteNote} />
        }

      )}

      <Footer />
    </div>
  );
}

export default App;
