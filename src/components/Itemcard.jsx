import { useState } from "react";

export default function Itemcard() {
  const [count, setCount] = useState(0);
  // function handleAdd() {
  //   setCount(count + 1);
  // }
  // function handleMinus() {
  //   setCount(count - 1);
  // }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me +</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Click Me -</button>
    </div>
  );
}
