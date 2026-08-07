import axios from "axios";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    async function getItems() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/items");
        console.log("Axios:", response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getItems();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}