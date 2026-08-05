import { useState } from "react";
import ItemCard from "./components/ItemCard";
// import ItemForm from "./components/ItemForm";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", price: 40000 },
    { id: 2, name: "Television", price: 50000 },
    { id: 3, name: "Phone", price: 70000 },
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: items.length + 1,
      name: name,
      price: price,
    };
    setItems([...items, newItem]);
    setName("");
    setPrice("");
    // console.log("Name", name);
    // console.log("Price", price);
  }
  function handleDelete(id) {
    const updateItems = items.filter((item) => item.id !== id);
    setItems(updateItems);
  }
  return (
    <div>
      <ItemCard />
      {/* <ItemForm /> */}
      <h1>Home Page</h1>
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
