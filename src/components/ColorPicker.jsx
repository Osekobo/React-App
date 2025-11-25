import { useState } from "react";

function Color() {

  const [count, setCount] = useState('Red');
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
      <button onClick={() => { setCount(count - 1) }}>Decrease</button>
    </>
  )
};
export default Color;