import Header from "./components/Header";
import Itemcard from "./components/ItemCard";

export default function App() {
  return (
    <div>
      <Header />
      <Itemcard name="Rodento" price="10,000" number="5" />
    </div>
  );
}
