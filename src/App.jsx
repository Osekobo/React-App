import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import ItemForm from "./components/ItemForm";
import Dashboard from "./components/Dashboard";

export default function () {
  return (
    <div>
      <Header />
      <Dashboard />
      <ItemCard />
      <ItemForm />
    </div>
  );
}
