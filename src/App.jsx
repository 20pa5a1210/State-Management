import { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);
  return <div className="App"> names : {names.join(", ")}</div>;
}

export default App;
