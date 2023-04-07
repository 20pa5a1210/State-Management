import { useState } from "react";
import "./App.css";

function list() {
  const [list, setList] = useState(["jack", "Jill"]);
  const [name, setName] = useState(() => "Jack");

  function AddName() {
    setList([...list, name]);
    setName("");
  }
}

function App() {
  const [count, setCount] = useState(0);

  function addone() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addone}>count = {count}</button>
    </div>
  );
}

export default App;
