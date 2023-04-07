import { useState } from "react";

function List({ list }) {
  console.log("Running ");
  const sort = useMemo(() => [...list].sort(), [list]);
  return <div>sort : {sort.join(", ")}</div>;
}

import { useMemo } from "react";
function App() {
  const [numbers] = useState([10, 202, 10]);
  console.log(numbers);

  const number = useMemo(
    () => numbers.reduce((acc, num) => acc + num, 0),
    [numbers]
  );

  const [names] = useState(["Surya", "Varun", "Jack"]);

  return (
    <div className="App">
      <div>names : {names.join(", ")}</div>
      <List list={names} />
    </div>
  );
}

export default App;
