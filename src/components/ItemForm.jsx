import { useState } from "react";

export default function ItemForm() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Television", price: 70000 },
    { id: 3, name: "Phone", price: 60000 },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newItems = { id: items.length + 1, name: name, price: price };
    setItems([...items, newItems]);
    setName("");
    setPrice("");
  }
  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }
  return (
    <div>
      <h1>Item Form</h1>
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
      <button onClick={handleSubmit}>Submit</button>
      <h1>Products Table</h1>
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
