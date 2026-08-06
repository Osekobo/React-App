import { useState } from "react";

export default function ItemCard() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Item Card</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <br />
      <br />
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Minus
      </button>
      <br />
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
