import { useState } from "react";

export default function ItemCard({ id,name, price,onDelete }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Price: {price}</h2>
      <h1>Count:{count}</h1>

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
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
