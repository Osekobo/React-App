import { useState } from "react";

export default function ItemForm() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  return (
    <div>
      <h1>Item Form</h1>
      <form>
        <label>Name </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <br />
        <br />
        <label>Price </label>
        <input
          type="number"
          placeholder="Price"
          value={num}
          onChange={(event)=>setNum(event.target.value)}
        ></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
      <h1>Your name is {name}</h1>
      <h1>Your number is {num}</h1>
    </div>
  );
}
