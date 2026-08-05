import { useState } from "react";
import ItemCard from "./components/ItemCard";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", price: 40000 },
    { id: 2, name: "Television", price: 50000 },
    { id: 3, name: "Phone", price: 70000 },
  ]);
  function handleDelete(id) {
    const updateItems = items.filter((item) => item.id !== id);
    setItems(updateItems);
  }
  return (
    <div>
      <ItemCard />
      <h1>Home Page</h1>
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
