import { useState } from "react";

export default function ItemForm() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Television", price: 70000 },
  ]);
  const [price, setPrice] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { id: items.length + 1, name: name, price: price };
    setItems([...items, newItem]);
    setName("");
    setPrice("");
    // console.log(name);
    // console.log(price);
  }
  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
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
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Price: </label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
