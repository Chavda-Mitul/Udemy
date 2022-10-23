import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function notesArray(notes){
  return (
    <Note
    key = {notes.key}
    title = {notes.title}
    content = {notes.content}
    />
  )
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(notesArray)}
      <Footer />
    </div>
  );
}

export default App;
