import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container mt-5">
        <h1>{count}</h1>
        <button className="mx-2" onClick={() => { setCount(count + 1) }}>Increase</button>
        <button className="mx-2" onClick={() => { setCount(count - 1) }}>Decrease</button>
      </div>
    </>
  )
};

export default Counter;