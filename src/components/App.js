import React from "react";
import { messages, contacts } from "../data";
import Contact from "./Contact";
import Messages from "./Messages";


console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <Contact />
      
        <Messages />
      
    </div>
  );
}

export default App;
