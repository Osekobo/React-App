import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import ItemForm from "./components/ItemForm";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";
import Dashboard from "./components/Dashboard";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Navbar from "./ui/Navbar";
import Homepage from "./pages/HomePage";
import Footer from "./ui/Footer";
import Layout from "./ui/Layout";
import Product from "./pages/ProductPage";
import ProtectedRoute from "./ui/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<ProtectedRoute user={user} />}> */}
        {/* Pages with Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* </Route> */}

        {/* Anything else */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// <Navbar />
// <Header />
// <Register />
// <Login />
// <Homepage />
// <Dashboard />
// <ItemCard />
// <ItemForm />
// <Footer />
