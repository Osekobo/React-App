import { useState } from "react";

export default function ItemForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Name", name);
    console.log("Price", price);
  }
  return (
    <div>
      <h1>Item Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <br />
        <br />
        <label>Price: </label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
