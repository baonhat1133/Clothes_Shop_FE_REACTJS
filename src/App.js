import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/component/HomePage";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Cart from "./pages/Cart/component/Cart";
import AdminDashboard from "./pages/AdminDashboard/component/AdminDashboard";
import Dashboard from "./pages/AdminDashboard/component/Dashboard";
import Customers from "./pages/AdminDashboard/component/Customers";
import Orders from "./pages/AdminDashboard/component/Orders";
import Product from "./pages/AdminDashboard/component/Product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Routes>
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="Product" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
