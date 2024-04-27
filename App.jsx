import React, { useState } from "react";

function App() {
const[fName, setFName]= useState("");
const[lName, setLName]= useState("");

function updateFName(event) {
  const firstName= event.target.value
  setFName(firstName);
}

function updateLName(event) {
  const lastName= event.target.value
  setLName(lastName);
}
  return(
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <input onChange={updateFName} 
      type="text" 
      placeholder="What's your name?" 
      value={fName}
      />
      <br />
      <input onChange={updateLName} 
      type="text" 
      placeholder="What's your name?" 
      value={lName}
      />
      <br />
      <button onClick>Submit</button>
    </div>
  );
}

export default App;