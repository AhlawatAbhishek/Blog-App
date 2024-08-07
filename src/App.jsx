import logo from "./logo.svg";
import "./App.css";
import { useContext, useState } from "react";
import MessageContext from "./context/MessageContext";
function App() {
  const [message, setMessage] = useState("Hello, World!");
  return (
    <div>
      <MessageContext.Provider value={[message, setMessage]}>
        <ComponentA />
      </MessageContext.Provider>
    </div>
  );
}

function ComponentA() {
  return <ComponentB />;
}

function ComponentB() {
  const [message, setMessage] = useContext(MessageContext);
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Hello, React!")}>
        Change Message
      </button>
    </div>
  );
}

export default App;
