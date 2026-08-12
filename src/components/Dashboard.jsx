import { useEffect, useState } from "react";
// import  {Item} from "../types/item"

export default function Dashboard() {
  const [items, setItems] = useState([]);
  function handleDelete(id) {
    console.log("Delete item:",id)
  }
  useEffect(() => {
    async function getItems() {
      const response = await fetch("http://127.0.0.1:8000/items");
      const data = await response.json();
      setItems(data);
    }
    getItems();
  }, []); // dependency array
  // useEffect(()=>{getItems(){}getitems()})
  return (
    <div>
      <h1>Item Table</h1>
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
