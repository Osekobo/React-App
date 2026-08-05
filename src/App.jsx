import { useState } from "react";

import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import ItemForm from "./components/ItemForm";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", price: 65000 },
    { id: 2, name: "Phone", price: 40000 },
    { id: 3, name: "Computer", price: 50000 },
    { id: 4, name: "Television", price: 20000 },
  ]);

  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  return (
    <div>
      <Header />
      <ItemForm />
      <h1>My Products Table</h1>
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
