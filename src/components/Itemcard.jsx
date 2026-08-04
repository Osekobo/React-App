import { useState } from "react";
export default function ItemCard() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  );
}
