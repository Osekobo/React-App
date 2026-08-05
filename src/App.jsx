import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Television", price: 80000 },
    { id: 3, name: "Computer", price: 90000 },
  ]);
  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }
  return (
    <div>
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
