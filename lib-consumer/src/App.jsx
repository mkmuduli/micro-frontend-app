import { useState } from "react";
import { Button } from "lib-comp/Button";
import { Card } from "lib-comp/Card";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Card title={"My Card"} description={"desc"} />
      </div>
    </>
  );
}

export default App;
