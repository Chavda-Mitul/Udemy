import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiObject){
  return (
    <Entry
    key = {emojiObject.id}
    emoji = {emojiObject.emoji}
    name = {emojiObject.name}
    description = {emojiObject.meaning}
    />
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
         {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
