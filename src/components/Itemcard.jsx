import { useState } from "react";

export default function ItemCard() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Number: {count}</h1>
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
      <br />
      <br />
    </div>
  );
}
