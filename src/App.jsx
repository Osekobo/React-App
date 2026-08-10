import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import ItemForm from "./components/ItemForm";
import Dashboard from "./components/Dashboard";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Navbar from "./ui/Navbar";
import Homepage from "./pages/HomePage";
import Footer from "./ui/Footer";

export default function () {
  return (
    <div>
      <Navbar />
      <Header />
      <Register />
      <Login />
      <Homepage/>
      <Dashboard />
      <ItemCard />
      <ItemForm />
      <Footer />
    </div>
  );
}
