import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import ItemForm from "./components/ItemForm";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";
import Dashboard from "./components/Dashboard";
import Login from "./public/LoginPage";
import Register from "./public/RegisterPage";
import Navbar from "./ui/Navbar";
import Homepage from "./pages/HomePage";
import Footer from "./ui/Footer";
import Layout from "./ui/Layout";
import Product from "./pages/ProductPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import Help from "./pages/HelpPage";
import Apply from "./components/Apply";
import Application from "./components/Application";
import Profile from "./components/Profile";
import AdminDashboard from "./admin/AdminDashboard";
import Applications from "./admin/Applications";
import Students from "./admin/Students";
import Reports from "./admin/Reports";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />

        {/* <Route element={<ProtectedRoute role="user" />}> */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/application" element={<Application />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* </Route> */}

        {/* <Route element={<ProtectedRoute role="admin" />}> */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/applications" element={<Application />} />
        <Route path="/admin/students" element={<Students />} />
        <Route path="/admin/reports" element={<Reports />} />
        {/* </Route> */}

        {/* Anything else */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
