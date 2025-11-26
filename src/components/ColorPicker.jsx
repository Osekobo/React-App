import { useState } from "react";

function Color() {

  const [count, setCount] = useState('Red');
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
      <button onClick={() => { setCount(count - 1) }}>Decrease</button>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">Red</option>
        <option value="2">Blue</option>
        <option value="3">Green</option>
        <option value="3">Yellow</option>
      </select>
      <h1>Your favourite color is:</h1>
    </>
  )
};
export default Color;