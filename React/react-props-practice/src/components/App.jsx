// eslint-disable-next-line
import React from "react";
import Card from "./Card";
import contact from "../contacts";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contact.map((m)=> 
      <Card 
      name={m.name}
      imgURL={m.imgURL}
      phone={m.phone}
      email={m.email}
      />
      )}
    </div>
  );
}

export default App;
